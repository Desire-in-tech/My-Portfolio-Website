import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { useSeo } from '../hooks/use-seo';
import { SITE_URL } from '../lib/site';

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy | Desire E',
    description:
      'How this website handles browser consent storage, hosting, fonts, images, and the contact form. General information, not legal advice.',
    canonical: `${SITE_URL}/privacy-policy`,
    type: 'website',
  });

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <article className="py-12">
        <div className="mx-auto max-w-3xl break-words px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]} />
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mb-8 text-sm text-muted">Effective date: September 26, 2026</p>
          <div className="blog-content">
            <p>
              This page describes how the website at {SITE_URL} handles information. It is
              general information about this site. It is not legal advice. It does not say
              that any particular law applies to you, and it does not claim that the site
              meets the requirements of every jurisdiction.
            </p>

            <h2>Who operates this site</h2>
            <p>
              This site is operated by Desire E. For privacy questions, email{' '}
              <a href="mailto:desireintech@gmail.com">desireintech@gmail.com</a>.
            </p>

            <h2>What this site stores on your device</h2>
            <p>This site does not set cookies.</p>
            <p>
              The only item this site writes on your device is a consent record in the
              browser&apos;s localStorage, under the key <code>cookie-consent</code>. That
              record is not a cookie. It holds a version number (currently 1), your
              analytics choice (<code>granted</code> or <code>denied</code>), and the time
              the choice was saved (<code>updatedAt</code>). If no record for the current
              version is stored, analytics is treated as denied. Choosing Decline saves
              denied. Choosing Accept saves granted. You can change the choice from Cookie
              settings in the footer or on the <Link to="/cookies-policy">Cookies Policy</Link>{' '}
              page. Clearing this site&apos;s data in your browser removes the record.
            </p>
            <p>
              This site does not use localStorage or sessionStorage for an account, a theme
              preference, or to measure visits.
            </p>

            <h2>Hosting</h2>
            <p>
              The site is hosted by Vercel. When your browser requests a page, that host
              receives ordinary request data such as an IP address, the browser user agent,
              and the requested URL. This site&apos;s code does not add a separate analytics
              product on top of hosting. Vercel Web Analytics and Speed Insights are not
              used.
            </p>

            <h2>Fonts and images</h2>
            <p>
              Every page loads the Inter font from Google Fonts (fonts.googleapis.com and
              fonts.gstatic.com). Images, including the icon shown in the browser tab, are
              loaded from Cloudinary (res.cloudinary.com). These requests are made for every
              visitor. They do not depend on the analytics choice saved in this browser.
            </p>

            <h2>Contact form</h2>
            <p>
              The Contact page includes a form. When you submit it, the site sends the name,
              email address, and message you entered through EmailJS (api.emailjs.com) so
              Desire E can reply to your inquiry. The form is used only to respond to that
              inquiry. It is not used for marketing, profiling, advertising, analytics, or
              selling information. This website does not keep a database of those messages.
              This page does not state how long a message is kept after it is delivered.
            </p>
            <p>
              The Contact page also links to email, GitHub, and LinkedIn. Those links open
              when you use them.
            </p>

            <h2>Sharing a page</h2>
            <p>
              Blog posts include share links for X, LinkedIn, and Facebook, and a control
              that copies the article URL. Those actions run only when you click them.
              Viewing a page does not load those services&apos; scripts.
            </p>

            <h2>Analytics tools that are not on this site</h2>
            <p>
              Google Analytics 4 is not installed. Google Tag Manager is not installed.
              This site does not set Google Analytics cookies. A later update may add
              Google Analytics 4, and possibly Google Tag Manager, and would turn those
              tags on only after you have allowed analytics. Until that update is
              published, Accept and Decline only save your choice in this browser.
              Advertising cookies are not used.
            </p>

            <h2>Changes to this page</h2>
            <p>
              If this site starts handling information differently, this page will be
              updated. The effective date of this page is September 26, 2026.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
