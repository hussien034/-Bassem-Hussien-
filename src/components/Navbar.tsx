import React, { useState, useEffect } from "react";
import { useTheme, AccentColor } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { SignatureLogo } from "./SignatureLogo";
import { Sun, Moon, Menu, X, FileText, ArrowUpRight, Languages } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme, accent, setAccent } = useTheme();
  const { language, toggleLanguage, isRTL, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAccentPicker, setShowAccentPicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navExperience"), href: "#experience" },
    { label: t("navLeadership"), href: "#leadership" },
    { label: t("navProjects"), href: "#featured" },
    { label: t("navSystems"), href: "#systems" },
    { label: t("navContact"), href: "#contact" },
  ];

  const accents: { id: AccentColor; label: string; bg: string }[] = [
    { id: "cobalt", label: "Electric Cobalt", bg: "bg-blue-600" },
    { id: "angular", label: "Angular Red", bg: "bg-red-600" },
    { id: "emerald", label: "Emerald Mint", bg: "bg-emerald-600" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#08090E]/85 backdrop-blur-xl border-b border-neutral-200/80 dark:border-white/[0.08] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Handwritten Signature Logo matching the active language! */}
        <a
          href="#"
          className="group flex items-center gap-2.5 tracking-tight text-neutral-900 dark:text-white transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          {/* Authentic Handwritten Signature Logo SVG (English or Arabic based on active language) */}
          <div className="relative py-1">
            <SignatureLogo language={language} variant="navbar" animated={true} />
          </div>
        </a>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-neutral-900 dark:hover:text-white whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Toggle + Palette Switcher + Theme Toggle + CV Action */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Language Switcher (EN / عربي) */}
          <button
            onClick={toggleLanguage}
            title={language === "en" ? "التبديل إلى العربية" : "Switch to English"}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors shadow-2xs"
          >
            <Languages className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-mono">{language === "en" ? "عربي" : "EN"}</span>
          </button>

          {/* Accent Color Palette Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowAccentPicker(!showAccentPicker)}
              title="Change Accent Color Palette"
              aria-label="Change Accent Color Palette"
              className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-0.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </button>

            {showAccentPicker && (
              <div
                className={`absolute ${
                  isRTL ? "left-0" : "right-0"
                } mt-2 p-2 rounded-xl bg-white dark:bg-[#121520] border border-neutral-200 dark:border-white/10 shadow-xl flex flex-col gap-1 z-50 min-w-[150px]`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-2 py-1">
                  {t("paletteLabel")}
                </span>
                {accents.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => {
                      setAccent(acc.id);
                      setShowAccentPicker(false);
                    }}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      accent === acc.id
                        ? "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${acc.bg}`} />
                    <span>{acc.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors shadow-2xs"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Primary Action Button: Resume / CV */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm transition-all whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t("cvButton")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0E111A] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-blue-600 text-white"
            >
              <FileText className="w-4 h-4" />
              <span>{t("cvButton")} (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
