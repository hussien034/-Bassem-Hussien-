import React, { useState } from "react";
import {
  X,
  Printer,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  FileCheck,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activePage, setActivePage] = useState<"both" | "1" | "2">("both");
  const [zoomScale, setZoomScale] = useState(1);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Triggers standard print-to-PDF or clean document save
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-100 dark:bg-[#0D0D14] rounded-2xl border border-slate-300 dark:border-white/15 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        {/* Modal Controls Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#151520] flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-[#8B7FFF]" />
            <h2 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              Official Resume / CV — Bassem Hussein
            </h2>
            <span className="hidden md:inline text-xs font-mono text-slate-500 dark:text-neutral-400">
              (2 Pages · Updated 2026)
            </span>
          </div>

          {/* Page switch tabs + zoom + download actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Page selection buttons */}
            <div className="hidden sm:flex items-center p-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs">
              <button
                onClick={() => setActivePage("both")}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  activePage === "both"
                    ? "bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-neutral-400 hover:text-slate-900"
                }`}
              >
                All Pages
              </button>
              <button
                onClick={() => setActivePage("1")}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  activePage === "1"
                    ? "bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-neutral-400 hover:text-slate-900"
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setActivePage("2")}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  activePage === "2"
                    ? "bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-neutral-400 hover:text-slate-900"
                }`}
              >
                Page 2
              </button>
            </div>

            {/* Print / Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#7a6dfa] text-white shadow-sm transition-all"
              title="Download or Print as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV Modal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Page Switch Bar */}
        <div className="sm:hidden px-3 py-2 bg-slate-50 dark:bg-[#101018] border-b border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-xs print:hidden">
          <button
            onClick={() => setActivePage("both")}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activePage === "both"
                ? "bg-indigo-600 dark:bg-[#8B7FFF] text-white shadow-xs"
                : "text-slate-600 dark:text-neutral-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"
            }`}
          >
            All Pages
          </button>
          <button
            onClick={() => setActivePage("1")}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activePage === "1"
                ? "bg-indigo-600 dark:bg-[#8B7FFF] text-white shadow-xs"
                : "text-slate-600 dark:text-neutral-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"
            }`}
          >
            Page 1
          </button>
          <button
            onClick={() => setActivePage("2")}
            className={`px-3 py-1 rounded-md font-medium transition-colors ${
              activePage === "2"
                ? "bg-indigo-600 dark:bg-[#8B7FFF] text-white shadow-xs"
                : "text-slate-600 dark:text-neutral-400 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"
            }`}
          >
            Page 2
          </button>
        </div>

        {/* Scrollable Document Canvas */}
        <div className="p-3 sm:p-6 lg:p-8 overflow-y-auto space-y-8 bg-slate-200/70 dark:bg-[#0A0A0F] flex flex-col items-center">
          {/* ================= PAGE 1 ================= */}
          {(activePage === "both" || activePage === "1") && (
            <div
              className="cv-page w-full max-w-[850px] bg-white text-slate-900 p-4 sm:p-10 lg:p-14 shadow-xl border border-slate-300 rounded-sm font-sans relative"
              style={{
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                lineHeight: "1.45",
              }}
            >
              {/* Top Header */}
              <div className="pb-4">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-black uppercase">
                  BASSEM HUSSEIN
                </h1>
                <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                  Frontend Software Engineer | Angular & AI-Assisted Development
                </p>
                <div className="mt-2 text-xs text-slate-700 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a href="tel:+201016226031" className="hover:text-indigo-600 font-medium">
                    +20 101 622 6031
                  </a>
                  <span>|</span>
                  <a href="mailto:bassemh594@gmail.com" className="hover:text-indigo-600 font-medium">
                    bassemh594@gmail.com
                  </a>
                  <span>|</span>
                  <span>Cairo, Egypt (open to relocate)</span>
                  <span>|</span>
                  <a
                    href="https://github.com/bassemh594"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    GitHub
                  </a>
                  <span>|</span>
                  <a
                    href="https://www.linkedin.com/in/bassem-hussien-130b24205/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Section: PROFESSIONAL SUMMARY */}
              <div className="mt-4">
                <div className="border-b-2 border-black pb-0.5 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    PROFESSIONAL SUMMARY
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                  Frontend Developer with 2+ years of experience building scalable, maintainable Angular applications for enterprise platforms. Strong in TypeScript, RxJS reactive state management, responsive UI engineering, and RESTful API integration. Focused on performance, clean architecture (SOLID/OOP), and shipping reliable features within Agile teams. Uses AI-assisted workflows to accelerate delivery without compromising code quality.
                </p>
              </div>

              {/* Section: TECHNICAL SKILLS */}
              <div className="mt-5">
                <div className="border-b-2 border-black pb-0.5 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    TECHNICAL SKILLS
                  </h2>
                </div>
                <div className="text-xs sm:text-sm space-y-1.5 text-slate-800">
                  <p>
                    <strong className="text-black">Languages & Core:</strong> TypeScript, JavaScript (ES6+), HTML5, CSS3, Sass/SCSS, SQL
                  </p>
                  <p>
                    <strong className="text-black">Frameworks & Libraries:</strong> Angular, RxJS, Angular CLI
                  </p>
                  <p>
                    <strong className="text-black">UI Ecosystems:</strong> Angular Material, NG-ZORRO, PrimeNG, Tailwind CSS, Bootstrap
                  </p>
                  <p>
                    <strong className="text-black">Architecture & Performance:</strong> SOLID, OOP, Code Splitting, SEO, Responsive Design, Data Structures & Algorithms
                  </p>
                  <p>
                    <strong className="text-black">AI & Vibe Coding Tools:</strong> Claude, Cursor, Cline, OpenCode, GitHub Copilot
                  </p>
                  <p>
                    <strong className="text-black">Tools & Platforms:</strong> Git, GitHub, GitLab, Microsoft Azure, Vite, REST APIs, CI/CD
                  </p>
                </div>
              </div>

              {/* Section: PROFESSIONAL EXPERIENCE */}
              <div className="mt-5">
                <div className="border-b-2 border-black pb-0.5 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    PROFESSIONAL EXPERIENCE
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Job 1: Intercom Enterprise */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>Frontend Developer – Intercom Enterprise</span>
                      <span className="text-xs italic font-normal text-slate-600">Sep 2025 – Present</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Develop and maintain enterprise-scale Angular applications for the <strong>Egyptian Public Prosecution</strong> within a shared Angular workspace powering multiple core business platforms.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Built reusable UI components and complex reactive forms with dynamic validation driving business-critical workflows.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Diagnosed and resolved complex frontend issues across multiple interconnected modules, reducing recurring UI defects and improving application stability.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Integrated Angular applications with Java-based RESTful APIs, ensuring secure, reliable data exchange and state synchronization.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Delivered interactive dashboard and reporting features that streamlined daily enterprise operations and supported internal workflows.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Collaborated with backend developers, QA, business analysts, and product owners across Agile sprints to ship high-quality releases.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Job 2: Etmana */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>Frontend Developer – Etmana</span>
                      <span className="text-xs italic font-normal text-slate-600">Dec 2024 – Jul 2025</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Maintained and optimized consumer-facing Angular features for a fashion e-commerce platform, strengthening checkout and account conversion flows.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Built pixel-perfect, cross-device responsive layouts ensuring a consistent experience across mobile and desktop viewports.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Improved perceived performance through lazy loading and bundle optimization, reducing page load time.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Partnered with UI/UX engineers to translate business workflows into clean, reusable component definitions.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Integrated RESTful services powering fast product listings, secure session handling, and checkout pipelines.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Job 3: Nokia */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>Frontend Developer Intern – Nokia</span>
                      <span className="text-xs italic font-normal text-slate-600">May 2023 – Dec 2023</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Contributed to development and maintenance of enterprise-grade Angular applications within a global engineering environment.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Developed responsive Angular UIs using TypeScript, HTML5, SCSS, and reusable component-based architecture.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Refactored existing components to improve maintainability, reusability, and code quality following Angular best practices.</span>
                      </li>
                      <li className="flex items-start justify-between gap-1.5">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                          <span>Participated in peer code reviews, CI practices across multi-country cross-functional teams.</span>
                        </div>
                        <a
                          href="#education"
                          onClick={onClose}
                          className="text-xs text-indigo-600 hover:underline font-semibold shrink-0"
                        >
                          View Certificate ↗
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Page Number 1 */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-center text-[11px] text-slate-400 print:hidden">
                Page 1 of 2
              </div>
            </div>
          )}

          {/* ================= PAGE 2 ================= */}
          {(activePage === "both" || activePage === "2") && (
            <div
              className="cv-page w-full max-w-[850px] bg-white text-slate-900 p-4 sm:p-10 lg:p-14 shadow-xl border border-slate-300 rounded-sm font-sans relative"
              style={{
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                lineHeight: "1.45",
              }}
            >
              {/* Section: FEATURED PROJECTS */}
              <div>
                <div className="border-b-2 border-black pb-0.5 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    FEATURED PROJECTS
                  </h2>
                </div>

                <div className="space-y-3.5">
                  {/* Project 1: GDSC Educational Platform */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>
                        GDSC Educational Platform –{" "}
                        <a
                          href="https://hussien034.github.io/GDSC-Educational-Platform/main"
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 hover:underline font-normal"
                        >
                          live preview ↗
                        </a>
                      </span>
                      <span className="text-xs italic font-normal text-slate-600">(Angular 14+ / RxJS / Reactive Forms)</span>
                    </div>
                    <ul className="mt-1 space-y-0.5 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Interactive educational platform for GDSC Cairo University members with track management, course enrollment, and local state persistence.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Built with Angular CLI, RxJS services, reactive form validation directives, and Angular Router guards for protected student modules.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 2: CV Builder */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>
                        CV Builder | Online Resume Maker –{" "}
                        <a
                          href="https://hussien034.github.io/CV-Bulider/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 hover:underline font-normal"
                        >
                          live preview ↗
                        </a>
                      </span>
                      <span className="text-xs italic font-normal text-slate-600">(JavaScript / DOM & BOM / Bootstrap)</span>
                    </div>
                    <ul className="mt-1 space-y-0.5 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Dynamic resume creator enabling users to input experience, education, and skills with real-time live preview rendering and PDF export.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 3: EG-BANK */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>
                        EG-BANK – Digital Banking & Card Portal –{" "}
                        <a
                          href="https://hussien034.github.io/EG-BANK/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 hover:underline font-normal"
                        >
                          live preview ↗
                        </a>
                      </span>
                      <span className="text-xs italic font-normal text-slate-600">(JavaScript / RegEx / LocalStorage)</span>
                    </div>
                    <ul className="mt-1 space-y-0.5 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Responsive banking cards web app featuring debit card catalogs, client-side regex validations, search filters, and persistent applications.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 4: IP Address Tracker */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>
                        IP Address Tracker –{" "}
                        <a
                          href="https://hussien034.github.io/IP_Tracking/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 hover:underline font-normal"
                        >
                          live preview ↗
                        </a>
                      </span>
                      <span className="text-xs italic font-normal text-slate-600">(REST API / Interactive Maps)</span>
                    </div>
                    <ul className="mt-1 space-y-0.5 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Real-time network telemetry application querying IP Geolocation APIs to display ISP info, coordinates, and interactive map pins.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Project 5: HealthAI Egypt */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>
                        HealthAI Egypt – AI Medical Triage Platform –{" "}
                        <a
                          href="#featured"
                          onClick={onClose}
                          className="text-indigo-600 hover:underline font-normal"
                        >
                          preview ↗
                        </a>
                      </span>
                      <span className="text-xs italic font-normal text-slate-600">(Full-Stack / Gemini AI)</span>
                    </div>
                    <ul className="mt-1 space-y-0.5 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>AI medical platform with symptom evaluation, triage severity sorting, server-side Gemini API, and Egyptian OTC references.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: LEADERSHIP & COMMUNITY */}
              <div className="mt-6">
                <div className="border-b-2 border-black pb-0.5 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    LEADERSHIP & COMMUNITY
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* GDSC */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>Campus Lead – Google Developer Student Clubs – Cairo University</span>
                      <span className="text-xs italic font-normal text-slate-600">Jan 2022 – Feb 2023</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Lead the GDSC chapter at Cairo University, fostering a collaborative learning environment and promoting modern software engineering practices.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Organized technical workshops, community events, and hands-on learning sessions covering frontend development, web technologies, and software engineering fundamentals.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Delivered technical sessions on modern frontend development, helping students strengthen their Angular, JavaScript, and web development skills.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Mentored aspiring developers, supported student-led technical initiatives, and led a multidisciplinary team in the Google Solution Challenge.</span>
                      </li>
                      <li className="flex items-start justify-between gap-1.5">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                          <span>Collaborated with Google Developer Experts (GDEs) and community leaders to expand the impact of technical events and student engagement.</span>
                        </div>
                        <a
                          href="#leadership"
                          onClick={onClose}
                          className="text-xs text-indigo-600 hover:underline font-semibold shrink-0"
                        >
                          Recommendation letter from Google ↗
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Microsoft Ambassador */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-xs sm:text-sm text-black">
                      <span>Microsoft Learn Student Ambassador – Microsoft</span>
                      <span className="text-xs italic font-normal text-slate-600">Jan 2023 – Dec 2023</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-800 list-none">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Accelerated community awareness of cloud computing ecosystems, developer tooling, and structured software learning paths through student meetups.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold select-none text-slate-900 leading-tight">▪</span>
                        <span>Organized hands-on technical labs highlighting cloud-native development with Microsoft Azure, Git automation, and advanced developer frameworks.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: EDUCATION & CERTIFICATIONS */}
              <div className="mt-6">
                <div className="border-b-2 border-black pb-0.5 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                    EDUCATION & CERTIFICATIONS
                  </h2>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                  <div>
                    <h3 className="font-bold text-black">
                      Bachelor's Degree in Commerce – Cairo University, Egypt
                    </h3>
                    <p className="text-xs text-slate-700">
                      ▪ <strong>(GPA: 3.1)</strong> | Graduated: May 2023
                    </p>
                  </div>

                  <p className="pt-1 leading-relaxed">
                    <strong className="text-black">Certifications:</strong> Angular Certificate – LinkedIn (2025) | Frontend Development – Route Academy (2023) | Nokia Egypt Internship (2023) | Web Design – NTI (2022) | C++ & Web Design Diplomas – Ministry of Defense (2019–2020)
                  </p>

                  <p>
                    <strong className="text-black">Languages:</strong> Arabic (Native) | English (Professional) | German (A2)
                  </p>
                </div>
              </div>

              {/* Page Number 2 */}
              <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[11px] text-slate-400 print:hidden">
                Page 2 of 2
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#151520] flex items-center justify-between text-xs text-slate-600 dark:text-neutral-400 print:hidden">
          <div className="flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Exact match with Bassem Hussein's official PDF CV</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-neutral-900 text-slate-800 dark:text-white hover:bg-slate-100 font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Document</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-neutral-800 text-slate-800 dark:text-white hover:bg-slate-300 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
