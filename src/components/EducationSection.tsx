import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { GraduationCap, Award, Languages, CheckCircle2, Calendar, MapPin } from "lucide-react";

export const EducationSection: React.FC = () => {
  const { education, certifications, personalInfo } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
          <GraduationCap className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
          <span>06. Academic Background & Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Education & Professional Certifications
        </h2>
        <p className="mt-3 text-slate-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl">
          Continuous formal upskilling spanning enterprise Angular architectures, web development diplomas, and global internships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Degree & Languages */}
        <div className="lg:col-span-5 space-y-6">
          {/* Degree 3D Card */}
          <TiltCard
            maxTilt={7}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] uppercase tracking-wider mb-2 font-bold">
              <GraduationCap className="w-4 h-4 text-sky-500 dark:text-[#00E5FF]" />
              <span>Higher Education</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              {education.degree}
            </h3>

            <p className="text-sm font-semibold text-slate-700 dark:text-neutral-300 mt-1">
              {education.institution}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {education.location}
              </span>
              <span className="flex items-center gap-1 text-indigo-600 dark:text-[#8B7FFF] font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                Graduated: {education.graduationDate}
              </span>
            </div>
          </TiltCard>

          {/* Languages 3D Card */}
          <TiltCard
            maxTilt={7}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-[#00E5FF] uppercase tracking-wider mb-4 font-bold">
              <Languages className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF]" />
              <span>Language Proficiencies</span>
            </div>

            <div className="space-y-3">
              {personalInfo.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-[#8B7FFF]/10 text-indigo-700 dark:text-[#8B7FFF] border border-indigo-200 dark:border-[#8B7FFF]/20">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Verified Certifications Matrix */}
        <div className="lg:col-span-7">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                Verified Industry Credentials
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {certifications.length} Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {certifications.map((cert) => (
                <TiltCard
                  key={cert.title}
                  maxTilt={7}
                  className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#8B7FFF]/10 flex items-center justify-center text-indigo-600 dark:text-[#8B7FFF]">
                        <Award className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="mt-3 text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading">
                      {cert.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-600 dark:text-neutral-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
