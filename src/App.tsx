import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Cta from "./components/layout/Cta";
import Footer from "./components/layout/Footer";

import Landing from "./pages/landing/Landing";
import About from "./pages/about/AboutPage";
import Overview from "./pages/overview/Overview";
import Contact from "./pages/contact/Contact";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-[#292929]">
      <Navbar />

      <main className="mt-12">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Cta />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}