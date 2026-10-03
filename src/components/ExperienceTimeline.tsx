import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
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
  const [expandedId, setExpandedId] = useState<string>("intercom");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
          <Briefcase className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
          <span>02. Work Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Engineering Enterprise Platforms & High-Traffic Products
        </h2>
        <p className="mt-3 text-slate-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl">
          A continuous record of delivering scalable Angular applications for government institutions, consumer e-commerce, and global telecommunication infrastructure.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative border-l-2 border-slate-200 dark:border-neutral-800 ml-3 sm:ml-8 pl-5 sm:pl-10 space-y-10 sm:space-y-12">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const isCurrent = exp.period.includes("Present");

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Connector Dot with Glow */}
              <div
                className={`absolute -left-[27px] sm:-left-[49px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isCurrent
                    ? "bg-indigo-600 dark:bg-[#8B7FFF] border-white dark:border-[#0A0A0F] shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                    : "bg-slate-200 dark:bg-neutral-800 border-slate-400 dark:border-neutral-700 group-hover:border-sky-500 dark:group-hover:border-[#00E5FF]"
                }`}
              >
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* 3D Tilt Experience Card */}
              <TiltCard
                maxTilt={6}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 sm:p-8 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Top Row: Role, Company & Time */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4 sm:pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                        {exp.role}
                      </h3>
                      {isCurrent && (
                        <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1 font-bold text-slate-800 dark:text-neutral-200">
                        <Building2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#8B7FFF]" />
                        {exp.company}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-[#00E5FF]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-neutral-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Impact Metric Bar if available */}
                {exp.metrics && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-[#8B7FFF]/10 border border-indigo-200 dark:border-[#8B7FFF]/20 text-xs font-mono text-indigo-700 dark:text-[#8B7FFF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-[#8B7FFF]" />
                    <span>Focus: {exp.metrics}</span>
                  </div>
                )}

                {/* Detailed Highlights */}
                <div className="mt-5 space-y-2.5">
                  {exp.highlights.slice(0, isExpanded ? exp.highlights.length : 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Expand / Collapse Button if more than 2 items */}
                {exp.highlights.length > 2 && (
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-[#8B7FFF] hover:text-indigo-800 dark:hover:text-[#7a6dfa] transition-colors"
                  >
                    <span>{isExpanded ? "Collapse highlights" : `View all ${exp.highlights.length} achievements`}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Tech Stack Unboxed Tokens */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 mr-1">
                    Technologies:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 text-slate-800 dark:text-neutral-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};
