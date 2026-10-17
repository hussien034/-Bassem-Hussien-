import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SignatureLogo } from "./SignatureLogo";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-white/[0.08] bg-neutral-50 dark:bg-[#06070B] py-10 px-4 sm:px-8 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Signature Logo Seal + Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="py-0.5">
            <SignatureLogo language={language} variant="footer" animated={true} />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="font-bold text-neutral-900 dark:text-white">
              {isAr && personalInfo.fullNameAr ? personalInfo.fullNameAr : personalInfo.fullName}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()} {t("allRights")}</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>{t("cairoEgypt")}</span>
          </div>
        </div>

        {/* Center: Engineering Focus */}
        <div className="text-xs text-neutral-500 font-mono flex items-center gap-1.5 text-center">
          <span>{isAr ? "هندسة وتطوير بدقة متناهية:" : "Engineered for"}</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            {isAr ? "أنظمة Angular المؤسسية" : "Angular Enterprise Precision"}
          </span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Bassem"
            className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono rounded-lg border border-neutral-300 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:border-neutral-400 dark:hover:border-white/25 text-neutral-800 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors shadow-2xs"
          >
            <span>{t("topButton")}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
