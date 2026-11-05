import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import Button from "./Button";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Overview", href: "#tracks" },
  { label: "Contact", href: "#contact" },
];

const cta =
  "h-[52px] items-center gap-4 rounded-lg bg-[#4284F4] px-6 font-googleSans text-base font-medium text-[#FFF] transition-colors hover:bg-[#3B78E7]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative w-full border-b border-b-[#DADCE0] bg-[#FFF]">
      <div className="flex h-[72px] w-full items-center justify-between gap-4 px-5 md:h-[104px] md:px-10 xl:px-16">
        <Brand />

        <nav
          id="main-nav"
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full z-50 flex-col gap-1 border-b border-b-[#DADCE0] bg-[#FFF] px-5 py-4 shadow-lg md:px-10 lg:static lg:flex lg:flex-row lg:items-center lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-5 py-3.5 font-googleSans text-base transition-colors ${
                active
                  ? "bg-[#EAF2FF] font-bold text-[#1967D2]"
                  : "text-[#5F6368] hover:bg-[#F1F3F4]"
              }`}
            >
              {label}
            </a>
          ))}
          <Button cn={`mt-2 flex justify-center sm:hidden ${cta}`} caption="Find your track" />
        </nav>

        <Button caption="Find your track" />

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#DADCE0] text-[#5F6368] lg:hidden max-sm:ml-auto"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}