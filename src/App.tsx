import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

import Landing from "./pages/landing/Landing";
import About from "./pages/about/AboutPage";
import Overview from "./pages/overview/Overview";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#292929]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="text-3xl font-bold">
                  404 - Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </main>
      <Cta />
      <Footer />
    </div>
  );
}