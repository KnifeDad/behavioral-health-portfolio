/**
 * Header — Fixed top nav with scroll-aware active section highlighting.
 */
import React, { useState, useEffect } from "react";

const NAV_SECTIONS = [
  { id: "about", label: "About", href: "#about" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "services", label: "Services", href: "#services" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

/** Offset for fixed header when determining which section is active */
const SCROLL_OFFSET = 120;

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPos = window.scrollY + SCROLL_OFFSET;
      let current = "";

      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <header className="fixed w-full bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 border-b border-slate-700/50 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          Guy Ricketts
        </a>
        <nav className="flex flex-wrap justify-end gap-x-4 gap-y-1 sm:gap-x-6 text-sm sm:text-base">
          {NAV_SECTIONS.map(({ id, label, href }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={`transition-colors ${
                  isActive
                    ? "font-medium bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent"
                    : "text-slate-200 hover:text-teal-300"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
