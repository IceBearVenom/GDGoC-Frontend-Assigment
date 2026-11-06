import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Brand from "../common/Brand";
import Button from "../common/Button";

import { fetchData } from "../../services/api";
import type { ApiResponse, NavigationTypes } from "../../types/types";

const cta =
  "h-[52px] items-center justify-center gap-4 rounded-lg bg-[#4284F4] px-6 font-googleSans text-base font-medium text-white transition-colors hover:bg-[#3B78E7]";

// Ignore tiny scroll movements so the navbar doesn't flicker
const SCROLL_THRESHOLD = 8;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [links, setLinks] = useState<NavigationTypes[]>([]);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(menuOpen);

  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Keep a ref in sync so the scroll handler reads the latest value
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const getNavigation = async () => {
      try {
        const response = await fetchData<ApiResponse<NavigationTypes[]>>(
          "/navigation"
        );

        setLinks(response.data);
      } catch (error) {
        console.error("Failed to fetch navigation:", error);
      }
    };

    getNavigation();
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Hide on scroll down, show on scroll up or at the top
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY <= 0) {
        // Always show at the very top
        setVisible(true);
      } else if (menuOpenRef.current) {
        // Never hide while the mobile menu is open
        setVisible(true);
      } else if (Math.abs(diff) > SCROLL_THRESHOLD) {
        setVisible(diff < 0); // scrolling up -> show, down -> hide
      } else {
        ticking = false;
        return; // small movement: keep lastScrollY as is
      }

      lastScrollY.current = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show the navbar again when navigating to a new page
  useEffect(() => {
    setVisible(true);
  }, [pathname]);

  const renderLinks = () =>
    links.map(({ label, href }) => {
      const active = pathname === href;

      return (
        <Link
          key={href}
          to={href}
          onClick={closeMenu}
          aria-current={active ? "page" : undefined}
          className={`rounded-full px-5 py-3.5 font-googleSans text-base transition-colors ${
            active
              ? "bg-[#EAF2FF] font-bold text-[#1967D2]"
              : "text-[#5F6368] hover:bg-[#F1F3F4]"
          }`}
        >
          {label}
        </Link>
      );
    });

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-[#DADCE0] bg-white transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-4 px-5 md:h-[88px] md:px-10 xl:h-[104px] xl:px-16">
        {/* Brand */}
        <div className="origin-left scale-[0.8] md:scale-100 transition-transform">
          <Brand />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {renderLinks()}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button caption="Find your track" href="/overview" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#DADCE0] text-[#5F6368] transition-colors hover:bg-[#F1F3F4] lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`absolute left-0 top-full w-full flex-col gap-1 border-b border-[#DADCE0] bg-white px-5 py-4 shadow-lg md:px-10 lg:hidden ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {renderLinks()}

        {/* Mobile CTA */}
        <div className="mt-3 sm:w-fit">
          <Button
            cn={`flex w-full sm:w-auto ${cta}`}
            caption="Find your track"
            href="/overview"
          />
        </div>
      </nav>
    </header>
  );
}