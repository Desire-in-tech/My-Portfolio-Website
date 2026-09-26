import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import CookieConsentBanner from "./components/CookieConsentBanner";

// Loaded on demand so the homepage does not download blog article data.
// Eager pages are imported from their modules, not the pages barrel, because
// that barrel also re-exports these three routes.
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
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary-bg text-white">
        <Navbar />
        <AppRoutes />
        <Footer />
        <CookieConsentBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
