import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import {
  Code,
  Layers,
  Palette,
  Terminal,
  Search,
  Zap,
  Sparkles,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const { language, isRTL, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const isAr = language === "ar";

  const filteredCategories = skillCategories
    .map((cat) => {
      const catKey = cat.category;
      if (selectedCategory !== "all" && catKey !== selectedCategory) {
        return { ...cat, skills: [] };
      }
      const filteredSkills = cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (isAr && skill.levelAr?.includes(searchQuery))
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  const getLevelProgress = (level: string) => {
    switch (level) {
      case "Expert":
      case "Power User":
        return 95;
      case "Advanced":
        return 88;
      case "Proficient":
        return 78;
      default:
        return 82;
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return <Code className="w-4 h-4 text-blue-500" />;
    if (category.includes("Frameworks")) return <Zap className="w-4 h-4 text-red-500" />;
    if (category.includes("UI Libraries")) return <Palette className="w-4 h-4 text-cyan-500" />;
    if (category.includes("Architecture")) return <Layers className="w-4 h-4 text-indigo-500" />;
    if (category.includes("AI Tools") || category.includes("AI-Assisted"))
      return <Sparkles className="w-4 h-4 text-amber-500" />;
    return <Terminal className="w-4 h-4 text-blue-400" />;
  };

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>{t("skillsKicker")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
            {t("skillsTitle")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {t("skillsDesc")}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search
            className={`absolute ${
              isRTL ? "right-3.5" : "left-3.5"
            } top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className={`w-full ${
              isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
            } py-2 rounded-xl border border-neutral-300 dark:border-white/10 bg-white/70 dark:bg-[#0E111A] text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all shadow-2xs`}
          />
        </div>
      </div>

      {/* Segmented Category Filter Controls */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 overflow-x-auto pb-1 mb-8 sm:mb-10 max-w-full">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
            selectedCategory === "all"
              ? "bg-white dark:bg-[#181C28] text-neutral-900 dark:text-white shadow-2xs"
              : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          }`}
        >
          {t("allDomains")}
        </button>
        {skillCategories.map((cat) => {
          const categoryTitle = isAr && cat.categoryAr ? cat.categoryAr : cat.category;
          return (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.category
                  ? "bg-white dark:bg-[#181C28] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {getCategoryIcon(cat.category)}
              <span>{categoryTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid with SpotlightCard */}
      <div className="space-y-10 sm:space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="py-12 text-center text-sm font-mono text-neutral-500 dark:text-neutral-400">
            {t("noSkillsFound")}
          </div>
        ) : (
          filteredCategories.map((category) => {
            const catTitle = isAr && category.categoryAr ? category.categoryAr : category.category;
            const catDesc = isAr && category.descriptionAr ? category.descriptionAr : category.description;

            return (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/[0.08] pb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(category.category)}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-heading">
                        {catTitle}
                      </h3>
                      {catDesc && (
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
                          {catDesc}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tabular-nums">
                    {category.skills.length} {isAr ? "مهارة" : "competencies"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {category.skills.map((skill) => {
                    const progress = getLevelProgress(skill.level);
                    const levelText = isAr && skill.levelAr ? skill.levelAr : skill.level;

                    return (
                      <SpotlightCard
                        key={skill.name}
                        spotlightColor="rgba(59, 130, 246, 0.12)"
                        className="p-4 sm:p-5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
                              style={{
                                backgroundColor: skill.color ? `${skill.color}18` : "rgba(59, 130, 246, 0.12)",
                                color: skill.color || "#3B82F6",
                              }}
                            >
                              {skill.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                                {skill.name}
                                {skill.highlight && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                )}
                              </h4>
                              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                                {levelText}
                              </span>
                            </div>
                          </div>

                          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tabular-nums">
                            {progress}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-3.5 w-full bg-neutral-100 dark:bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: `${progress}%`,
                              backgroundColor: skill.color || "#3B82F6",
                            }}
                          />
                        </div>
                      </SpotlightCard>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
