/**
 * Header — Fixed top nav with name (gradient) and anchor links to page sections.
 */
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 border-b border-slate-700/50 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand name with teal–orange gradient (matches Hero) */}
        <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
          Guy Ricketts
        </div>
        <nav className="space-x-6 text-slate-200">
          <a href="#about" className="hover:text-teal-300">
            About
          </a>
          <a href="#portfolio" className="hover:text-teal-300">
            Portfolio
          </a>
          <a href="#services" className="hover:text-teal-300">
            Services
          </a>
          <a href="#contact" className="hover:text-teal-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

