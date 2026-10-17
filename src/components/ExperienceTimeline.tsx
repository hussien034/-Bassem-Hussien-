import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>("intercom");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  const isAr = language === "ar";

  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
          <Briefcase className="w-3.5 h-3.5 text-blue-500" />
          <span>{t("expKicker")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
          {t("expTitle")}
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t("expDesc")}
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div
        className={`relative ${
          isAr
            ? "border-r-2 border-neutral-200 dark:border-neutral-800 mr-3 sm:mr-8 pr-5 sm:pr-10 space-y-10 sm:space-y-12"
            : "border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 sm:ml-8 pl-5 sm:pl-10 space-y-10 sm:space-y-12"
        }`}
      >
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const isCurrent = exp.period.includes("Present") || exp.periodAr?.includes("الآن");

          const role = isAr && exp.roleAr ? exp.roleAr : exp.role;
          const company = isAr && exp.companyAr ? exp.companyAr : exp.company;
          const period = isAr && exp.periodAr ? exp.periodAr : exp.period;
          const location = isAr && exp.locationAr ? exp.locationAr : exp.location;
          const summary = isAr && exp.summaryAr ? exp.summaryAr : exp.summary;
          const highlights = isAr && exp.highlightsAr ? exp.highlightsAr : exp.highlights;
          const metrics = isAr && exp.metricsAr ? exp.metricsAr : exp.metrics;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Connector Dot with Glow */}
              <div
                className={`absolute ${
                  isAr ? "-right-[27px] sm:-right-[49px]" : "-left-[27px] sm:-left-[49px]"
                } top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isCurrent
                    ? "bg-blue-600 border-white dark:border-[#08090E] shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    : "bg-neutral-200 dark:bg-neutral-800 border-neutral-400 dark:border-neutral-700 group-hover:border-blue-500"
                }`}
              >
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Spotlight Experience Card */}
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.14)"
                className="p-5 sm:p-8"
              >
                {/* Top Row: Role, Company & Time */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200/80 dark:border-white/[0.08] pb-4 sm:pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-heading">
                        {role}
                      </h3>
                      {isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {t("currentRole")}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                      <span className="flex items-center gap-1 font-bold text-neutral-900 dark:text-neutral-200">
                        <Building2 className="w-3.5 h-3.5 text-blue-500" />
                        {company}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {location}
                      </span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {summary}
                </p>

                {/* Impact Metric Bar if available */}
                {metrics && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-xs font-mono text-blue-700 dark:text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{t("coreImpact")} {metrics}</span>
                  </div>
                )}

                {/* Detailed Highlights */}
                <div className="mt-5 space-y-2.5">
                  {highlights.slice(0, isExpanded ? highlights.length : 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Expand / Collapse Button if more than 2 items */}
                {highlights.length > 2 && (
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                  >
                    <span>
                      {isExpanded
                        ? isAr ? "إخفاء التفاصيل" : "Collapse highlights"
                        : isAr ? `عرض كافة الإنجازات (${highlights.length})` : `View all ${highlights.length} achievements`}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Tech Stack - Zero Pill Typography */}
                <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-wrap items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300 mr-1">
                    {t("techStackLabel")}
                  </span>
                  {exp.techStack.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      {tIdx > 0 && <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>}
                      <span className="text-neutral-800 dark:text-neutral-200 font-medium">{tech}</span>
                    </React.Fragment>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};
