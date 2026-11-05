/**
 * Browser consent record for a future analytics tag.
 *
 * This module does not load Google Analytics, Google Tag Manager, gtag,
 * dataLayer, or any other third-party script. It only stores the visitor's
 * choice and notifies this page.
 *
 * Storage key: `cookie-consent`
 * JSON shape: { "version": 1, "analytics": "granted" | "denied", "updatedAt": "<ISO-8601>" }
 * A missing, unreadable, or different-version record means analytics is denied.
 *
 * GA4 reads this record from `src/lib/analytics.ts`. That module is not
 * Google Tag Manager. It sets Consent Mode defaults to denied, loads the GA4
 * gtag script only after analytics is granted, and listens for
 * `cookie-consent-change` to call gtag('consent', 'update'). Ad storage stays
 * denied. This file still does not load a script itself.
 */

export const CONSENT_STORAGE_KEY = 'cookie-consent';
export const CONSENT_VERSION = 1;
export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';
export const CONSENT_OPEN_EVENT = 'cookie-consent-open';

export type AnalyticsConsent = 'granted' | 'denied';

export interface ConsentRecord {
  version: number;
  analytics: AnalyticsConsent;
  updatedAt: string;
}

type ConsentListener = (record: ConsentRecord) => void;

const listeners = new Set<ConsentListener>();

function isCurrentRecord(value: unknown): value is ConsentRecord {
  if (!value || typeof value !== 'object') return false;
  const record = value as Partial<ConsentRecord>;
  return (
    record.version === CONSENT_VERSION &&
    (record.analytics === 'granted' || record.analytics === 'denied') &&
    typeof record.updatedAt === 'string'
  );
}

export function getConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isCurrentRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** Denied when the visitor has not saved the current consent version. */
export function getAnalyticsConsent(): AnalyticsConsent {
  return getConsent()?.analytics ?? 'denied';
}

export function setConsent(analytics: AnalyticsConsent): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Private mode or a full disk can reject the write. Subscribers still
    // hear the choice for this page view.
  }
  listeners.forEach((listener) => listener(record));
  window.dispatchEvent(new CustomEvent<ConsentRecord>(CONSENT_CHANGE_EVENT, { detail: record }));
  return record;
}

export function subscribe(listener: ConsentListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}
