import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { Award, Calendar, CheckCircle2, Download, FileText, ShieldCheck, Globe } from "lucide-react";
import { GoogleLetterModal } from "./GoogleLetterModal";

export const LeadershipSection: React.FC = () => {
  const { leadership, googleRecommendationLetter } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  return (
    <section id="leadership" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
          <Award className="w-3.5 h-3.5 text-blue-500" />
          <span>{t("leadKicker")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
          {t("leadTitle")}
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t("leadDesc")}
        </p>
      </div>

      {/* Modern Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {/* Bento Tile 1 (Anchor): Official Google Recommendation Letter (col-span-12 lg:col-span-8) */}
        <SpotlightCard
          spotlightColor="rgba(66, 133, 244, 0.18)"
          className="col-span-12 lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Top Bar with Google Colors & Verification */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/80 dark:border-white/[0.08] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl font-bold tracking-tight select-none font-sans" dir="ltr">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                  · {language === "ar" ? "توصية واعتماد رسمي" : "Official Recommendation"}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900/60 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>{t("googleEndorsement")}</span>
              </div>
            </div>

            {/* Letter Title */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-heading">
                {language === "ar"
                  ? "خطاب اعتماد وتوصية رسمي — قائد أندية مطوري Google للطلاب"
                  : "Confirmation & Recommendation Letter — GDSC Lead"}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {language === "ar"
                  ? "صادر من المقر الإقليمي لشركة Google (أوروبا والشرق الأوسط وإفريقيا) · 20 يوليو 2022"
                  : "Issued by Google EMEA / MENA Headquarters · July 20th, 2022"}
              </p>
            </div>

            {/* Official Letter Quote */}
            <blockquote className={`text-sm sm:text-base text-neutral-700 dark:text-neutral-300 italic ${language === "ar" ? "border-r-2 pr-4" : "border-l-2 pl-4"} border-blue-500 py-1 leading-relaxed`}>
              "{language === "ar" && googleRecommendationLetter.quoteAr ? googleRecommendationLetter.quoteAr : googleRecommendationLetter.quote}"
            </blockquote>

            {/* Endorser Metadata */}
            <div className="pt-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-white">
                {googleRecommendationLetter.signerName}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {language === "ar"
                  ? "المسؤول الإقليمي لمنظومة مطوري Google لمنطقة الشرق الأوسط وشمال إفريقيا"
                  : googleRecommendationLetter.signerRole}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsLetterModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>{t("viewGoogleModal")}</span>
            </button>

            <a
              href="./Google_Recommendation_Letter_Bassem_Hussein.pdf"
              download="Google_Recommendation_Letter_Bassem_Hussein.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <Download className="w-4 h-4 text-blue-500" />
              <span>{t("downloadPdf")}</span>
            </a>
          </div>
        </SpotlightCard>

        {/* Bento Tile 2: GDSC Ecosystem Metric Snapshot (col-span-12 lg:col-span-4) */}
        <SpotlightCard
          spotlightColor="rgba(16, 185, 129, 0.15)"
          className="col-span-12 lg:col-span-4 p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80 dark:border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {t("communityReach")}
              </span>
              <Globe className="w-4 h-4 text-emerald-500" />
            </div>

            <div className="mt-5 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{t("trainedDevs")}</span>
                  <span className="font-mono text-xl font-bold text-neutral-900 dark:text-white tabular-nums">500+</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{t("hackathonsBootcamps")}</span>
                  <span className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">14+</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[85%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{t("challengeTeams")}</span>
                  <span className="font-mono text-xl font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">3</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-[70%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] mt-4">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {language === "ar"
                ? "توجيه وتدريب الطلاب على أحدث أنماط TypeScript و Angular وسحابة Google Cloud."
                : "Mentored engineering students in modern TypeScript, Angular reactive patterns, and Google Cloud technologies."}
            </p>
          </div>
        </SpotlightCard>

        {/* Bento Tile 3: GDSC Cairo University Role Details (col-span-12 lg:col-span-6) */}
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.15)"
          className="col-span-12 lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200/80 dark:border-white/[0.08] pb-4">
              <div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  Google Developer Student Clubs
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading mt-1">
                  {language === "ar" ? "قائد نادي مطوري Google بجامعة القاهرة" : "Google DSC Campus Lead"}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {language === "ar" ? "جامعة القاهرة — كلية الحاسبات والذكاء الاصطناعي" : "Cairo University Chapter"}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                2021 – 2022
              </span>
            </div>

            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {language === "ar"
                ? "تم اختياري من قبل شركة Google Developers لقيادة النادي الطلابي بجامعة القاهرة، وإدارة فريق تنفيذي مكون من 25+ طالباً وتنفيذ معسكرات وورش عمل تكنولوجية."
                : "Selected by Google Developers to lead the Cairo University student chapter, directing a core team of 25+ student organizers and delivering university-wide tech initiatives."}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "تنظيم 14+ ورشة عمل تقنية متقدمة في Angular والويب السحابي."
                    : "Organized 14+ technical workshops covering Angular, Cloud, and web performance."}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "تأهيل وتوجيه فرق الطلاب في مسابقة Google Solution Challenge العالمية."
                    : "Mentored participants through the global Google Solution Challenge."}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500">
              {language === "ar" ? "الأثر: 500+ مطور" : "Impact: 500+ developers"}
            </span>
            <button
              onClick={() => setIsLetterModalOpen(true)}
              className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>{language === "ar" ? "معاينة توصية Google" : "View Google Recommendation"}</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </button>
          </div>
        </SpotlightCard>

        {/* Bento Tile 4: Microsoft Learn Student Ambassador (col-span-12 lg:col-span-6) */}
        <SpotlightCard
          spotlightColor="rgba(0, 164, 239, 0.15)"
          className="col-span-12 lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200/80 dark:border-white/[0.08] pb-4">
              <div>
                <span className="text-xs font-mono text-[#00A4EF] font-semibold">
                  Microsoft Tech Community
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading mt-1">
                  {language === "ar" ? "سفير طلاب Microsoft للتعلم" : "Microsoft Learn Student Ambassador"}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {language === "ar" ? "الشريك الطلابي العالمي لـ Microsoft" : "Microsoft Global Student Partner"}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-[#00A4EF]" />
                2022 – 2023
              </span>
            </div>

            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {language === "ar"
                ? "تمكين المهندسين والطلاب من خلال ورش عمل تطبيقية في TypeScript، وأحدث أدوات تطوير الواجهات، وممارسات التحكم بالإصدارات السحابية."
                : "Empowered students and aspiring software engineers with hands-on labs in TypeScript, modern frontend web tools, and collaborative version control workflows."}
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#00A4EF] shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "تقديم ندوات تقنية تفاعلية عن سلاسل أدوات الويب الحديثة ومبادئ الكود النظيف."
                    : "Conducted interactive technical webinars on modern frontend toolchains and clean code principles."}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#00A4EF] shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "التعاون مع سفراء الطلاب على مستوى منطقة أوروبا والشرق الأوسط وإفريقيا."
                    : "Collaborated with international student ambassadors across the EMEA region."}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-500">
            <span>{language === "ar" ? "التركيز: معايير الويب و TypeScript" : "Focus: Web Standards & TypeScript"}</span>
            <span className="text-neutral-700 dark:text-neutral-300 font-semibold">
              {language === "ar" ? "شبكة سفراء EMEA" : "EMEA Ambassador Network"}
            </span>
          </div>
        </SpotlightCard>
      </div>

      {/* Interactive Google Letter Modal */}
      <GoogleLetterModal
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
      />
    </section>
  );
};
