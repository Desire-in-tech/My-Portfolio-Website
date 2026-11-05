import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONSENT_CHANGE_EVENT, type ConsentRecord } from '../lib/consent';
import { trackPageView } from '../lib/analytics';

const POLL_MS = 50;
const EXIT_MS = 320;
const UNCHANGED_TITLE_MS = 700;
const MAX_WAIT_MS = 4000;

function routeIsLoading(): boolean {
  return document.querySelector('[role="status"]')?.textContent?.includes('Loading') ?? false;
}

/**
 * One page_view per pathname.
 *
 * PageTransition keeps the previous page mounted for 300ms (AnimatePresence
 * mode="wait"). Sending immediately would pair the new path with the previous
 * document.title. This waits out that exit, then waits while a lazy route
 * still shows "Loading...". useSeo sets the new title in an effect after the
 * next page mounts, so the title read here is the one that page just set.
 *
 * The send is scheduled on a timeout so React StrictMode's setup/cleanup/setup
 * cycle in development cancels the first attempt and only the second one runs.
 */
export default function AnalyticsRouteTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;
    let sent = false;
    let timer = 0;
    let generation = 0;

    const schedule = () => {
      const gen = ++generation;
      const started = performance.now();
      const titleAtStart = document.title;
      const attempt = () => {
        if (cancelled || gen !== generation || sent) return;
        const elapsed = performance.now() - started;
        const titleChanged = document.title !== titleAtStart;
        const waitForExit = elapsed < EXIT_MS;
        const waitForLazy = routeIsLoading();
        const waitForSeo = !titleChanged && elapsed < UNCHANGED_TITLE_MS;
        if ((waitForExit || waitForLazy || waitForSeo) && elapsed < MAX_WAIT_MS) {
          timer = window.setTimeout(attempt, POLL_MS);
          return;
        }
        sent = true;
        trackPageView(pathname, document.title);
      };
      timer = window.setTimeout(attempt, POLL_MS);
    };

    schedule();

    const onConsent = (event: Event) => {
      const record = (event as CustomEvent<ConsentRecord>).detail;
      if (record?.analytics !== 'granted') return;
      sent = false;
      schedule();
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsent);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener(CONSENT_CHANGE_EVENT, onConsent);
    };
  }, [pathname]);

  return null;
}
