import { lazy, Suspense, useEffect } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import PageTransition from "./components/PageTransition";
import CookieConsentBanner from "./components/CookieConsentBanner";
import AnalyticsRouteTracker from "./components/AnalyticsRouteTracker";
import { startAnalytics } from "./lib/analytics";

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
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

function App() {
  useEffect(() => {
    startAnalytics();
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
