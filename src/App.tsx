import { lazy, Suspense, useEffect } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import PageTransition from "./components/PageTransition";
import CookieConsentBanner from "./components/CookieConsentBanner";
import AnalyticsRouteTracker from "./components/AnalyticsRouteTracker";
import { startAnalytics } from "./lib/analytics";
import { useSeo } from "./hooks/use-seo";

// Keep the homepage eager for the initial visit; load secondary routes only
// when visitors navigate to them so their dependencies stay out of the entry chunk.
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-primary-bg pt-20 flex items-center justify-center">
      <p className="text-muted text-sm" role="status">
        Loading...
      </p>
    </div>
  );
}

function NotFoundPage() {
  useSeo({
    title: 'Page Not Found | Desire E',
    description: 'The page you are looking for could not be found.',
    noindex: true,
  });

  return (
    <section className="min-h-[70vh] bg-primary-bg pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-xl px-6 text-center">
        <p className="text-primary-accent text-sm font-semibold tracking-widest mb-4">404 ERROR</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Page not found</h1>
        <p className="text-muted mb-8">
          The page may have moved, or the address may be incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-primary-accent px-6 py-3 font-semibold text-primary-bg transition-colors hover:bg-primary-accent/90"
        >
          Return to homepage
        </Link>
      </div>
    </section>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition location={location}>
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

export function AppShell() {
  useEffect(() => {
    startAnalytics();
  }, []);

  return (
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <div className="min-h-screen bg-primary-bg text-white">
            <a
              href="#main-content"
              className="sr-only z-[60] rounded-md bg-primary-accent px-4 py-3 font-semibold text-primary-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              <AppRoutes />
            </main>
            <Footer />
            <CookieConsentBanner />
            <AnalyticsRouteTracker />
          </div>
        </LazyMotion>
      </MotionConfig>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
