import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Brand from "./Brand";
import Button from "./Button";

import { fetchData } from "../services/api";
import type { ApiResponse, NavigationTypes } from "../types/types";

const cta =
  "h-[52px] items-center justify-center gap-4 rounded-lg bg-[#4284F4] px-6 font-googleSans text-base font-medium text-white transition-colors hover:bg-[#3B78E7]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [links, setLinks] = useState<NavigationTypes[]>([]);

  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

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
    <header className="relative z-50 w-full border-b border-[#DADCE0] bg-white">
      <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-4 px-5 md:h-[88px] md:px-10 xl:h-[104px] xl:px-16">

        {/* Brand */}
        <Brand />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {renderLinks()}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button caption="Find your track" />
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
          />
        </div>
      </nav>
    </header>
  );
}
