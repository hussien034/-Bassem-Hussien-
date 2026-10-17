import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { GraduationCap, Award, Languages, CheckCircle2, Calendar, MapPin } from "lucide-react";

export const EducationSection: React.FC = () => {
  const { education, certifications, personalInfo } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const degree = isAr && education.degreeAr ? education.degreeAr : education.degree;
  const institution = isAr && education.institutionAr ? education.institutionAr : education.institution;
  const location = isAr && education.locationAr ? education.locationAr : education.location;
  const gradDate = isAr && education.graduationDateAr ? education.graduationDateAr : education.graduationDate;

  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
          <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
          <span>{t("eduKicker")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
          {t("eduTitle")}
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t("eduDesc")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Degree & Languages */}
        <div className="lg:col-span-5 space-y-6">
          {/* Degree Card */}
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.15)"
            className="p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 font-bold">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>{t("higherEducation")}</span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading">
              {degree}
            </h3>

            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mt-1">
              {institution}
            </p>

            <div className="mt-4 pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {location}
              </span>
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {t("graduatedLabel")}: {gradDate}
              </span>
            </div>
          </SpotlightCard>

          {/* Languages Card */}
          <SpotlightCard
            spotlightColor="rgba(6, 182, 212, 0.15)"
            className="p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-4 font-bold">
              <Languages className="w-4 h-4 text-cyan-500" />
              <span>{t("languagesTitle")}</span>
            </div>

            <div className="space-y-3">
              {personalInfo.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/5">
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">
                    {isAr && lang.nameAr ? lang.nameAr : lang.name}
                  </span>
                  <span className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300">
                    {isAr && lang.levelAr ? lang.levelAr : lang.level}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Verified Certifications Matrix */}
        <div className="lg:col-span-7">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.08] pb-3">
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-heading flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                {t("verifiedCredentials")}
              </h3>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tabular-nums">
                {certifications.length} {isAr ? "شهادات معتمدة" : "Credentials"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {certifications.map((cert) => {
                const certTitle = isAr && cert.titleAr ? cert.titleAr : cert.title;
                const certIssuer = isAr && cert.issuerAr ? cert.issuerAr : cert.issuer;

                return (
                  <SpotlightCard
                    key={cert.title}
                    spotlightColor="rgba(59, 130, 246, 0.12)"
                    className="p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Award className="w-4 h-4" />
                        </span>
                        <span className="text-xs font-mono text-neutral-400 tabular-nums">
                          {cert.year}
                        </span>
                      </div>

                      <h4 className="mt-3 text-sm sm:text-base font-bold text-neutral-900 dark:text-white font-heading">
                        {certTitle}
                      </h4>

                      <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                        {certIssuer}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isAr ? "اعتماد رسمي موثق" : "Verified Credential"}</span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
