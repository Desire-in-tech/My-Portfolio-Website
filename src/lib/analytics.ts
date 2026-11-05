/**
 * Google Analytics 4, gated by the existing `cookie-consent` record.
 *
 * This is the GA4 gtag tag (https://www.googletagmanager.com/gtag/js). It is
 * not a Google Tag Manager container.
 *
 * The script is not requested until analytics consent is granted. Consent Mode
 * defaults are pushed first, with analytics and all ad signals denied. Accept
 * grants analytics_storage only. Ad signals stay denied because this site has
 * no advertising choice.
 *
 * `send_page_view` is false so the config call does not emit a page view.
 * Route changes send one manual page_view with an explicit page_path.
 * History-based page changes are turned off in the GA4 property. This module
 * does not intercept network calls. Manual events are deduped for the same
 * path and title within a short window so a double effect cannot emit two views.
 *
 * Query strings and hashes are omitted from page_path and page_location so a
 * crafted URL cannot place an email, token, or other personal value in the hit.
 */

import {
  CONSENT_CHANGE_EVENT,
  getAnalyticsConsent,
  type ConsentRecord,
} from './consent';

export const GA_MEASUREMENT_ID = 'G-WQB2VFRK7T';

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: Gtag;
  }
}

const GA_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

let started = false;
let defaultsSet = false;
let scriptRequested = false;
let configured = false;
let lastPageKey = '';
let lastPageAt = 0;

function ensureStub(): void {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

function consentState(analytics: 'granted' | 'denied') {
  return {
    analytics_storage: analytics,
    ad_storage: 'denied' as const,
    ad_user_data: 'denied' as const,
    ad_personalization: 'denied' as const,
  };
}

function setDefaultConsent(): void {
  if (defaultsSet) return;
  defaultsSet = true;
  ensureStub();
  window.gtag('consent', 'default', consentState('denied'));
}

function loadScript(): void {
  if (scriptRequested) return;
  if (document.querySelector(`script[src="${GA_SCRIPT_SRC}"]`)) {
    scriptRequested = true;
    return;
  }
  scriptRequested = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = GA_SCRIPT_SRC;
  document.head.appendChild(script);
}

function configure(): void {
  if (configured) return;
  configured = true;
  ensureStub();
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

function clearGaCookies(): void {
  const names = document.cookie
    .split(';')
    .map((part) => part.split('=')[0]?.trim() ?? '')
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const host = window.location.hostname;
  const expired = 'Thu, 01 Jan 1970 00:00:00 GMT';
  for (const name of names) {
    document.cookie = `${name}=; expires=${expired}; path=/`;
    document.cookie = `${name}=; expires=${expired}; path=/; domain=${host}`;
  }
}

function applyAnalyticsConsent(analytics: 'granted' | 'denied'): void {
  ensureStub();
  window.gtag('consent', 'update', consentState(analytics));
  if (analytics === 'granted') {
    loadScript();
    configure();
    return;
  }
  clearGaCookies();
}

function onConsentChange(event: Event): void {
  const record = (event as CustomEvent<ConsentRecord>).detail;
  if (!record || (record.analytics !== 'granted' && record.analytics !== 'denied')) return;
  applyAnalyticsConsent(record.analytics);
}

export function startAnalytics(): void {
  if (started) return;
  started = true;
  setDefaultConsent();
  applyAnalyticsConsent(getAnalyticsConsent());
  window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
}

/** Public path only. Search and hash are left off the hit. */
export function pageViewFields(pathname: string, title: string) {
  const page_path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return {
    page_title: title,
    page_path,
    page_location: `${window.location.origin}${page_path}`,
  };
}

export function trackPageView(pathname: string, title: string): void {
  if (getAnalyticsConsent() !== 'granted') return;
  const fields = pageViewFields(pathname, title);
  const key = `${fields.page_path}\n${fields.page_title}`;
  const now = Date.now();
  if (key === lastPageKey && now - lastPageAt < 500) return;
  lastPageKey = key;
  lastPageAt = now;
  ensureStub();
  if (!configured) {
    loadScript();
    configure();
  }
  window.gtag('event', 'page_view', {
    ...fields,
    send_to: GA_MEASUREMENT_ID,
  });
}
