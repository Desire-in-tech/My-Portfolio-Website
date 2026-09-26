import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CONSENT_OPEN_EVENT,
  getConsent,
  setConsent,
  type AnalyticsConsent,
} from '../lib/consent';

const buttonClass =
  'min-w-0 flex-1 rounded-lg border border-gray-700 bg-transparent px-2 py-2 text-sm font-medium text-white hover:border-primary-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent';

export default function CookieConsentBanner() {
  const titleId = useId();
  const [visible, setVisible] = useState(() => getConsent() === null);
  const [savedChoice, setSavedChoice] = useState<AnalyticsConsent | null>(
    () => getConsent()?.analytics ?? null
  );

  useEffect(() => {
    const open = () => {
      setSavedChoice(getConsent()?.analytics ?? null);
      setVisible(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (analytics: AnalyticsConsent) => {
    setConsent(analytics);
    setSavedChoice(analytics);
    setVisible(false);
  };

  return (
    <>
      <div aria-hidden="true" className="h-36" />
      <div className="fixed inset-x-0 bottom-0 z-40 box-border max-w-full px-3 pb-3">
        <section
          role="region"
          aria-labelledby={titleId}
          className="mx-auto w-full max-w-3xl rounded-xl border border-gray-700 bg-card px-3 py-2.5 shadow-lg shadow-black/40"
        >
          <h2 id={titleId} className="text-sm font-semibold leading-snug text-white">
            Cookies
          </h2>
          <p className="mt-0.5 text-xs leading-snug text-muted">
            Analytics stays off unless you allow it. This choice is saved only in
            this browser.
            {savedChoice === 'granted' && ' Saved choice: allow analytics.'}
            {savedChoice === 'denied' && ' Saved choice: keep analytics off.'}
          </p>
          <div className="mt-2 flex flex-row items-center gap-2">
            <button type="button" className={buttonClass} onClick={() => choose('denied')}>
              Decline
            </button>
            <button type="button" className={buttonClass} onClick={() => choose('granted')}>
              Accept
            </button>
            <Link
              to="/cookies-policy"
              className="shrink-0 text-xs text-primary-accent underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent"
            >
              Cookies Policy
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
