import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, FileText, ArrowUpRight, Code2 } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Featured Work", href: "#featured" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0A0A0F]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with tech badge */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-semibold tracking-tight text-slate-900 dark:text-white transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center font-mono text-xs font-bold shadow-xs shrink-0 group-hover:scale-105 transition-transform">
            BH
          </div>
          <span className="font-heading">Bassem Hussein</span>
          <span className="hidden sm:inline-block text-xs font-mono font-normal text-slate-500 dark:text-neutral-400 ml-0.5">
            / Angular & AI
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-slate-900 dark:hover:text-white whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-600 dark:after:bg-[#8B7FFF] hover:after:w-full after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="w-9 h-9 rounded-lg border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Primary Action Button: Resume / CV */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#7a6dfa] shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.35)] transition-all whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E0E16] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-[#8B7FFF] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-indigo-600 dark:bg-[#8B7FFF] text-white"
            >
              <FileText className="w-4 h-4" />
              <span>View Curriculum Vitae (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
