import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import {
  Code,
  Layers,
  Palette,
  Terminal,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = skillCategories.map((cat) => {
    if (selectedCategory !== "all" && cat.category !== selectedCategory) {
      return { ...cat, skills: [] };
    }
    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter((cat) => cat.skills.length > 0);

  const getLevelProgress = (level: string) => {
    switch (level) {
      case "Expert":
      case "Power User":
        return "95%";
      case "Advanced":
        return "85%";
      case "Proficient":
        return "75%";
      default:
        return "80%";
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes("Languages")) return <Code className="w-4 h-4 text-[#3178C6]" />;
    if (category.includes("Frameworks")) return <Zap className="w-4 h-4 text-[#DD0031]" />;
    if (category.includes("UI Libraries")) return <Palette className="w-4 h-4 text-[#06B6D4]" />;
    if (category.includes("Architecture")) return <Layers className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF]" />;
    if (category.includes("AI Tools")) return <Sparkles className="w-4 h-4 text-amber-500" />;
    return <Terminal className="w-4 h-4 text-sky-600 dark:text-[#00E5FF]" />;
  };

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
            <Zap className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
            <span>03. Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Enterprise Stack & AI Tooling
          </h2>
          <p className="mt-2 text-slate-600 dark:text-neutral-400 text-sm sm:text-base max-w-xl">
            A battle-tested repertoire prioritizing strict typing, reactive stream predictability, and modern AI acceleration.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technology..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#12121A] text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
            selectedCategory === "all"
              ? "bg-indigo-600 dark:bg-[#8B7FFF] text-white shadow-xs"
              : "bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5"
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === cat.category
                ? "bg-indigo-600 dark:bg-[#8B7FFF] text-white shadow-xs"
                : "bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5"
            }`}
          >
            {getCategoryIcon(cat.category)}
            <span>{cat.category}</span>
          </button>
        ))}
      </div>

      {/* 3D Tilt Grid */}
      <div className="space-y-10 sm:space-y-12">
        {filteredCategories.map((category) => (
          <div key={category.category} className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <div className="flex items-center gap-2">
                {getCategoryIcon(category.category)}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                  {category.category}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                {category.skills.length} competencies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {category.skills.map((skill) => (
                <TiltCard
                  key={skill.name}
                  maxTilt={8}
                  className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-4 sm:p-5 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs shadow-inner"
                        style={{
                          backgroundColor: skill.color ? `${skill.color}15` : "rgba(99, 102, 241, 0.12)",
                          color: skill.color || "#6366F1",
                        }}
                      >
                        {skill.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          {skill.name}
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-[#00E5FF]" />
                          )}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400 dark:text-neutral-500">
                      {getLevelProgress(skill.level)}
                    </span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="mt-3.5 w-full bg-slate-100 dark:bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: getLevelProgress(skill.level),
                        backgroundColor: skill.color || "#6366F1",
                      }}
                    />
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
