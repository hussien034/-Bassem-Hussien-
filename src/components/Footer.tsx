import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#07070B] py-10 px-4 sm:px-8 text-slate-600 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Left: Identity & Quiet Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono text-center sm:text-left">
          <span className="font-bold text-slate-900 dark:text-white">
            {personalInfo.fullName}
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Cairo, Egypt</span>
        </div>

        {/* Center: Real Technology Note */}
        <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
          <span>Engineered for</span>
          <span className="text-indigo-600 dark:text-[#8B7FFF] font-bold">Angular & Enterprise Precision</span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Bassem"
            className="p-2 rounded-lg text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-transparent hover:border-slate-400 dark:hover:border-white/25 text-slate-800 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white transition-colors shadow-2xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
