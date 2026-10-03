import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { Award, Calendar, CheckCircle2, Download, ExternalLink, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { GoogleLetterModal } from "./GoogleLetterModal";

export const LeadershipSection: React.FC = () => {
  const { leadership, googleRecommendationLetter } = PORTFOLIO_DATA;
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

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

      {/* Featured Google Recommendation Letter Banner */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/50 dark:from-[#101426] dark:via-[#12121A] dark:to-[#0e1628] shadow-lg relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Google Verified Credential Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-100 dark:bg-blue-950/60 text-[#1a73e8] dark:text-[#4285F4] border border-blue-300 dark:border-blue-800">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4285F4]" />
                Official Google Endorsement
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                Issued July 20th, 2022 · Verified Network
              </span>
            </div>

            {/* Letter Title & Google Letterhead Styling */}
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight select-none" style={{ fontFamily: "'Product Sans', system-ui, sans-serif" }}>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Confirmation & Recommendation Letter — GDSC Lead
              </h3>
            </div>

            {/* Direct Official Quote */}
            <blockquote className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 italic border-l-2 border-[#4285F4] pl-3 leading-relaxed">
              "{googleRecommendationLetter.quote}"
            </blockquote>

            {/* Signer Endorsement Footnote */}
            <div className="pt-1 text-xs text-slate-600 dark:text-neutral-400 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-semibold text-slate-900 dark:text-white">
                Signed by: {googleRecommendationLetter.signerName}
              </span>
              <span>•</span>
              <span>{googleRecommendationLetter.signerRole}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => setIsLetterModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>View Recommendation Letter</span>
            </button>

            <a
              href="./Google_Recommendation_Letter_Bassem_Hussein.pdf"
              download="Google_Recommendation_Letter_Bassem_Hussein.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-xs sm:text-sm font-semibold text-slate-800 dark:text-neutral-200 transition-colors"
            >
              <Download className="w-4 h-4 text-[#4285F4]" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>
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

            {/* Card Footer: If GDSC has letter, offer quick link */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {item.impactMetrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-neutral-200 border border-slate-200 dark:border-white/5"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {item.hasRecommendationLetter && (
                <button
                  onClick={() => setIsLetterModalOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#1a73e8] dark:text-[#4285F4] hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Inspect Google Letter</span>
                </button>
              )}
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Interactive Google Letter Modal */}
      <GoogleLetterModal
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
      />
    </section>
  );
};
