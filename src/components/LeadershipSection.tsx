import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { Award, Calendar, CheckCircle2, Sparkles } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  const { leadership } = PORTFOLIO_DATA;

  return (
    <section id="leadership" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
          <Award className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
          <span>05. Community & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Empowering Developer Communities & Mentorship
        </h2>
        <p className="mt-3 text-slate-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl">
          Fostering tech ecosystem growth at Cairo University through workshops, hackathons, and international developer challenges.
        </p>
      </div>

      {/* Two Large 3D Tilt Cards Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {leadership.map((item) => (
          <TiltCard
            key={item.title}
            maxTilt={7}
            className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4 sm:pb-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 dark:bg-[#8B7FFF]/10 text-indigo-700 dark:text-[#8B7FFF] border border-indigo-200 dark:border-[#8B7FFF]/20">
                    <Sparkles className="w-3 h-3 text-sky-500 dark:text-[#00E5FF]" />
                    {item.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-neutral-400 mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-[#00E5FF]" />
                  {item.period}
                </span>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-neutral-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2.5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF] shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric Bar */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
              {item.impactMetrics.map((metric, mIdx) => (
                <span
                  key={mIdx}
                  className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-neutral-200 border border-slate-200 dark:border-white/5"
                >
                  {metric}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>

    </section>
  );
};
