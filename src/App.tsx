import Navbar from "./components/Navbar";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Footer from "./pages/landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#292929]">
      <Navbar />
      <main>
        <Landing />
        {/* <About /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
