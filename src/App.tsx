import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Cta from "./components/layout/Cta";
import Footer from "./components/layout/Footer";

import Landing from "./pages/landing/Landing";
import About from "./pages/about/AboutPage";
import Overview from "./pages/overview/Overview";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";

// No page uses query params yet, so remove any "?something=..." from the URL
function CleanUrl() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      navigate({ pathname, hash }, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
}

// Navbar + Footer on every page, including the 404
function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#292929]">
      <CleanUrl />
      <Navbar />

      <main className="mt-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

// Real pages get the CTA; the 404 page doesn't
function PageWithCta() {
  return (
    <>
      <Outlet />
      <Cta />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<PageWithCta />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Anything that didn't match above */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}