import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSeo } from '../hooks/use-seo';
import { openCookieSettings } from '../lib/consent';
import { SITE_URL } from '../lib/site';

export default function CookiesPolicy() {
  useSeo({
    title: 'Cookies Policy | Desire E',
    description:
      'What this website stores in your browser, how to change the analytics choice, and which font and image requests load for every visitor.',
    canonical: `${SITE_URL}/cookies-policy`,
    type: 'website',
  });

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <article className="py-12">
        <div className="mx-auto max-w-3xl break-words px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Cookies Policy' }]} />
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Cookies Policy</h1>
          <p className="mb-8 text-sm text-muted">Effective date: September 26, 2026</p>
          <div className="blog-content">
            <p>
              This page explains what {SITE_URL} stores in your browser and which outside
              services a visit contacts. It is general information, not legal advice. It
              does not say that any particular law applies, and it does not claim that the
              site meets the requirements of every jurisdiction.
            </p>

            <h2>Cookies</h2>
            <p>
              This site does not set a cookie. Visiting a page does not add a cookie for
              this site.
            </p>

            <h2>Consent record</h2>
            <p>
              The cookie banner saves one localStorage record. The key is{' '}
              <code>cookie-consent</code>. The value has three fields:
            </p>
            <ul>
              <li>
                <code>version</code>, currently 1
              </li>
              <li>
                <code>analytics</code>, either <code>granted</code> or <code>denied</code>
              </li>
              <li>
                <code>updatedAt</code>, the date and time the choice was saved
              </li>
            </ul>
            <p>
              The record stays in your browser. This site does not send it to a server. If
              the record is missing, cannot be read, or uses a different version, analytics
              is treated as denied and the banner is shown again.
            </p>

            <h2>Your choice</h2>
            <p>
              Decline and Accept are separate buttons with the same visual weight. Decline
              saves analytics as denied. Accept saves analytics as granted. If you have not
              chosen yet, analytics stays denied and the banner stays on screen. There is
              no advertising choice on this site. Advertising cookies are not used.
            </p>
            <p>
              Saving granted does not start Google Analytics or Google Tag Manager. Those
              tools are not installed. The saved choice is the record a later, consent-gated
              analytics update would read.
            </p>

            <h2>How to change your choice</h2>
            <p>
              Use Cookie settings in the footer, or the button on this page. The banner
              opens again. Your previous choice stays in place until you press Accept or
              Decline. You can also remove the record by clearing this site&apos;s data in
              your browser.
            </p>
          </div>
          <button
            type="button"
            onClick={openCookieSettings}
            className="mt-2 rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-sm font-medium text-white hover:border-primary-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent"
          >
            Change cookie settings
          </button>
          <div className="blog-content">
            <h2>Requests that do not follow this choice</h2>
            <p>
              Google Fonts loads the Inter font on every page from fonts.googleapis.com and
              fonts.gstatic.com. Cloudinary loads images from res.cloudinary.com, including
              the site icon and images on the pages you open. These requests happen whether
              analytics is granted or denied.
            </p>

            <h2>Contact form</h2>
            <p>
              If you submit the contact form, the name, email address, and message you
              entered are sent through EmailJS at api.emailjs.com so Desire E can reply to
              your inquiry. That send happens only when you submit the form, and it is used
              only to respond to the inquiry. The EmailJS browser library can store a
              rate-limit time in localStorage. This site&apos;s form does not turn that
              option on, so a submission does not write that value.
            </p>

            <h2>Analytics tools that are not on this site</h2>
            <p>
              This site does not contact Google Analytics or Google Tag Manager, and it does
              not set Google Analytics cookies. A later phase may add Google Analytics 4,
              and possibly Google Tag Manager. If that happens, those tools are planned to
              stay off unless the saved analytics choice is granted, using the{' '}
              <code>cookie-consent</code> record described above. This page will be updated
              if that phase is published. See the <Link to="/privacy-policy">Privacy Policy</Link>{' '}
              for the rest of how this site handles information.
            </p>
            <p>
              Privacy questions can be sent to{' '}
              <a href="mailto:desireintech@gmail.com">desireintech@gmail.com</a>. The site
              operator is Desire E. The effective date of this page is September 26, 2026.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
