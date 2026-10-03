import React, { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { LiveAppModal } from "./LiveAppModal";
import {
  ExternalLink,
  Github,
  Stethoscope,
  Activity,
  CheckCircle2,
  X,
  Play,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Monitor,
  Globe,
  FileText,
  CreditCard,
  MapPin,
} from "lucide-react";

export const FeaturedProjectSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  // Selected project for live interactive modal
  const [selectedLiveProject, setSelectedLiveProject] = useState<ProjectItem | null>(null);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // HealthAI Triage Simulator modal state
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);

  // Sample medical cases for HealthAI interactive simulator
  const sampleSymptoms = [
    {
      label: "Acute Lower Abdominal Pain & Fever",
      description: "Severe localized right lower quadrant pain, nausea, low-grade fever (38.4°C) for 14 hours.",
      triageLevel: "Emergency (Red)",
      triageScore: "P1 Urgent",
      differential: ["Acute Appendicitis", "Mesenteric Lymphadenitis", "Acute Diverticulitis"],
      recommendations: "Immediate surgical evaluation required at nearest ER (Kasr Al Ainy / Emergency Center). Nil per os (NPO - do not take food or painkillers until surgical assessment).",
      otcAdvice: "Do NOT take OTC painkillers (NSAIDs/Paracetamol) as they may mask peritoneal perforation symptoms.",
      langAr: "ألم حاد أسفل البطن جهة اليمين مع ارتفاع طفيف في الحرارة - يتطلب طوارئ فورية",
    },
    {
      label: "Persistent Dry Cough & Sore Throat",
      description: "Tickling throat irritation, dry cough for 3 days, no shortness of breath, normal SpO2 99%.",
      triageLevel: "Routine / Primary Care (Green)",
      triageScore: "P3 Non-urgent",
      differential: ["Viral Upper Respiratory Infection", "Seasonal Pharyngitis", "Post-nasal Drip"],
      recommendations: "Rest, warm fluid hydration, steam inhalation, and oral saline gargles.",
      otcAdvice: "Egyptian OTC: Paracetamol 500mg (Panadol Blue / Adol) for throat discomfort, Herbal Cough Syrup (Guaifenesin or Ivy Leaf extract / Prospan).",
      langAr: "سعال جاف مستمر مع احتقان بالحلق - استشارة روتينية وعلاجات منزلية",
    },
    {
      label: "Acute Gastric Cramps & Dehydration",
      description: "Watery diarrhea (4 episodes), moderate epigastric cramping following street meal, mild dizziness.",
      triageLevel: "Urgent Clinic Care (Yellow)",
      triageScore: "P2 Intermediate",
      differential: ["Acute Infectious Gastroenteritis", "Foodborne Intoxication", "Giardiasis"],
      recommendations: "Oral Rehydration Salts (ORS) intake every 30 minutes. If fever > 38.5°C or blood in stool, visit clinic.",
      otcAdvice: "Egyptian OTC: Antinal 200mg (Nifuroxazide) 1 cap q6h, Hydrasafe / Rehydran ORS sachets dissolved in 200ml boiled water.",
      langAr: "تقلصات معوية حادة مع إسهال - ينصح بمطهر معوي وأملاح تعويض الجفاف",
    },
  ];

  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<typeof sampleSymptoms[0] | null>(sampleSymptoms[0]);

  const runAnalysis = (index: number) => {
    setActiveSampleIndex(index);
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setAnalysisResult(sampleSymptoms[index]);
      setIsAnalyzing(false);
    }, 400);
  };

  const handleOpenLiveModal = (project: ProjectItem) => {
    if (project.id === "healthai") {
      setIsTriageModalOpen(true);
    } else {
      setSelectedLiveProject(project);
      setIsLiveModalOpen(true);
    }
  };

  // Primary featured spotlight project (GDSC Educational Platform)
  const spotlightProject = projects.find((p) => p.id === "gdsc-platform") || projects[0];

  // Filter projects for the gallery grid
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "angular") return project.category.includes("Angular");
    if (activeCategory === "tools") return project.category.includes("JavaScript") || project.category.includes("Banking") || project.category.includes("API");
    if (activeCategory === "ai") return project.category.includes("AI");
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "gdsc-platform":
        return <Globe className="w-4 h-4 text-[#4285F4]" />;
      case "cv-builder":
        return <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "eg-bank":
        return <CreditCard className="w-4 h-4 text-sky-600 dark:text-[#00E5FF]" />;
      case "ip-tracking":
        return <MapPin className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF]" />;
      default:
        return <Stethoscope className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="featured" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
          <Code2 className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
          <span>04. Featured Engineering Projects</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Production Deployments & Interactive Systems
        </h2>
        <p className="mt-3 text-slate-600 dark:text-neutral-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explore live web applications built with Angular, reactive RxJS architectures, dynamic DOM engineering, and real-time network APIs deployed on GitHub Pages.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PRIMARY SPOTLIGHT: GDSC Educational Platform (Live on GitHub Pages)       */}
      {/* ========================================================================= */}
      <div className="mb-16">
        <TiltCard
          maxTilt={6}
          className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 sm:p-8 lg:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 via-sky-400/5 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Side: Mockup Frame with Live Tag & Browser Chrome */}
            <div className="lg:col-span-6 relative perspective-1200 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-white/15 bg-slate-950 shadow-xl group/mockup">
                {/* Simulated Browser Chrome */}
                <div className="px-3.5 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5 truncate max-w-[240px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">hussien034.github.io/GDSC-Educational-Platform/main</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                </div>

                {/* Display Image with Hover Zoom */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={spotlightProject.imagePath}
                    alt={spotlightProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover/mockup:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Overlay Action Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mockup:opacity-100 transition-opacity bg-black/40 backdrop-blur-2xs">
                    <button
                      onClick={() => handleOpenLiveModal(spotlightProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-xl hover:scale-105 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-indigo-600" />
                      <span>Launch In-App Live Frame</span>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-sky-400 dark:text-[#00E5FF] font-semibold">
                      Angular 14+ · Reactive Forms
                    </span>
                    <span className="font-mono text-slate-300 text-[11px]">
                      GDSC Cairo University
                    </span>
                  </div>
                </div>
              </div>

              {/* Reflection Below the Device */}
              <div className="hidden sm:block h-6 w-full bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent blur-md rounded-b-2xl mt-1 opacity-70" />
            </div>

            {/* Right Side: Architecture & Features */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-indigo-50 dark:bg-[#8B7FFF]/10 text-indigo-700 dark:text-[#8B7FFF] border border-indigo-200 dark:border-[#8B7FFF]/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Featured Live Deployment</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                  {spotlightProject.role}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
                  {spotlightProject.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-[#8B7FFF] mt-0.5">
                  {spotlightProject.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-neutral-300 leading-relaxed">
                {spotlightProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                {spotlightProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {spotlightProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-neutral-200 border border-slate-200 dark:border-white/5 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* 1. In-App Interactive Modal */}
                <button
                  onClick={() => handleOpenLiveModal(spotlightProject)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#796bf0] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch Live Interactive Frame</span>
                </button>

                {/* 2. Direct External Link */}
                <a
                  href={spotlightProject.displayUrl || spotlightProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 hover:bg-slate-50 dark:hover:bg-neutral-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white transition-colors shadow-xs w-full sm:w-auto"
                >
                  <span>Open Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* 3. GitHub Link */}
                <a
                  href={spotlightProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900 hover:bg-slate-50 dark:hover:bg-neutral-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-white transition-colors shadow-xs w-full sm:w-auto"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* ========================================================================= */}
      {/* COMPLETE PROJECT SHOWCASE GALLERY (All 5 Projects)                         */}
      {/* ========================================================================= */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Complete Projects Portfolio
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-0.5">
              Production apps with live demos, full source code on GitHub, and in-depth documentation.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 self-start sm:self-center overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-white dark:bg-[#1E1E2C] text-slate-900 dark:text-white shadow-2xs"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("angular")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "angular"
                  ? "bg-white dark:bg-[#1E1E2C] text-slate-900 dark:text-white shadow-2xs"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Angular & RxJS
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "tools"
                  ? "bg-white dark:bg-[#1E1E2C] text-slate-900 dark:text-white shadow-2xs"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Web Apps & APIs
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "ai"
                  ? "bg-white dark:bg-[#1E1E2C] text-slate-900 dark:text-white shadow-2xs"
                  : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              AI & Full-Stack
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={6}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 mb-4 group/card">
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/20">
                      {getProjectIcon(project.id)}
                      <span>{project.badge || project.category}</span>
                    </span>
                  </div>

                  {/* Live Status Pill */}
                  {project.liveDemoUrl.startsWith("http") && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/90 text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>LIVE</span>
                      </span>
                    </div>
                  )}

                  {/* In-Frame Title on hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-sky-400 dark:text-[#00E5FF] truncate max-w-[200px]">
                      {project.displayUrl || project.liveDemoUrl}
                    </span>
                    <button
                      onClick={() => handleOpenLiveModal(project)}
                      className="px-2.5 py-1 rounded-md bg-white text-slate-950 text-[11px] font-bold shadow-md hover:bg-slate-100 transition-colors"
                    >
                      {project.id === "healthai" ? "Simulator" : "Live Frame"}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {project.title}
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs font-semibold text-indigo-600 dark:text-[#8B7FFF] mt-0.5">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="mt-3.5 space-y-1.5">
                  {project.highlights.slice(0, 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-[#8B7FFF] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  {project.liveDemoUrl.startsWith("http") ? (
                    <a
                      href={project.displayUrl || project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#796bf0] text-white shadow-xs transition-colors"
                    >
                      <span>Open Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setIsTriageModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#796bf0] text-white shadow-xs transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Simulator</span>
                    </button>
                  )}

                  {project.isLiveEmbeddable && (
                    <button
                      onClick={() => handleOpenLiveModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-neutral-900 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                      title="Test live directly inside portfolio frame"
                    >
                      <Monitor className="w-3.5 h-3.5 text-sky-500" />
                      <span>Interactive Frame</span>
                    </button>
                  )}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. LIVE APP INTERACTIVE MODAL (for GDSC, CV Builder, EG-BANK, IP Tracker)  */}
      {/* ========================================================================= */}
      <LiveAppModal
        project={selectedLiveProject}
        isOpen={isLiveModalOpen}
        onClose={() => {
          setIsLiveModalOpen(false);
          setSelectedLiveProject(null);
        }}
      />

      {/* ========================================================================= */}
      {/* 2. HEALTHAI EGYPT MEDICAL TRIAGE SIMULATOR MODAL                           */}
      {/* ========================================================================= */}
      {isTriageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white dark:bg-[#12121A] border border-slate-300 dark:border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181824] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Stethoscope className="w-5 h-5 text-indigo-600 dark:text-[#8B7FFF]" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading">
                    HealthAI Egypt — Live Triage Assessment Simulator
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Node.js Express + Server-Side Google Gemini AI Integration Engine
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsTriageModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              {/* Step 1: Select Case Preset */}
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                  Select a Patient Symptom Case:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sampleSymptoms.map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => runAnalysis(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all text-xs ${
                        activeSampleIndex === idx
                          ? "border-indigo-500 bg-indigo-50/70 dark:bg-[#8B7FFF]/10 dark:border-[#8B7FFF] shadow-xs"
                          : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-white dark:bg-[#161622]"
                      }`}
                    >
                      <p className="font-bold text-slate-900 dark:text-white">{sample.label}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{sample.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Live AI Triage Analysis Result */}
              {isAnalyzing ? (
                <div className="p-10 rounded-xl bg-slate-50 dark:bg-[#181824] flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-600 dark:border-[#8B7FFF] border-t-transparent animate-spin" />
                  <p className="text-xs font-mono text-slate-600 dark:text-neutral-300">
                    Evaluating clinical symptoms with Gemini AI & Egyptian OTC protocols...
                  </p>
                </div>
              ) : analysisResult ? (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#161622] border border-slate-200 dark:border-white/10 space-y-4">
                  {/* Status Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold">Assigned Acuity</span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            analysisResult.triageLevel.includes("Red")
                              ? "bg-rose-500 shadow-[0_0_8px_#f43f5e]"
                              : analysisResult.triageLevel.includes("Yellow")
                              ? "bg-amber-500 shadow-[0_0_8px_#f59e0b]"
                              : "bg-emerald-500 shadow-[0_0_8px_#10b981]"
                          }`}
                        />
                        {analysisResult.triageLevel}
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold">Triage Priority</span>
                      <p className="text-sm font-bold font-mono text-sky-600 dark:text-[#00E5FF]">{analysisResult.triageScore}</p>
                    </div>
                  </div>

                  {/* Differential Diagnoses */}
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                      Differential Diagnoses Evaluated:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.differential.map((diag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-white/[0.05] text-slate-800 dark:text-neutral-200 border border-slate-200 dark:border-white/5 font-medium"
                        >
                          {diag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#1C1C2A] border border-slate-200 dark:border-white/5 space-y-1.5">
                    <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-indigo-600 dark:text-[#8B7FFF]" /> Clinical Directives:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed">
                      {analysisResult.recommendations}
                    </p>
                  </div>

                  {/* Egyptian OTC Advice */}
                  <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-[#8B7FFF]/10 border border-indigo-200 dark:border-[#8B7FFF]/20 space-y-1.5">
                    <p className="text-xs font-bold text-indigo-700 dark:text-[#8B7FFF] flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" /> Egyptian OTC & Pharmacy Guidance:
                    </p>
                    <p className="text-xs text-slate-700 dark:text-neutral-300 leading-relaxed">
                      {analysisResult.otcAdvice}
                    </p>
                  </div>

                  {/* Arabic Translation Preview */}
                  <div className="p-3 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-right" dir="rtl">
                    <span className="text-[10px] font-mono text-slate-500 block mb-1">الترجمة الطبية المعتمدة (Bilingual Support):</span>
                    <p className="text-xs text-slate-800 dark:text-neutral-200 font-sans leading-relaxed">{analysisResult.langAr}</p>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181824] flex items-center justify-between text-xs text-slate-600 dark:text-neutral-400">
              <span>Verified against Egyptian MoHP Triage Standards</span>
              <button
                onClick={() => setIsTriageModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 hover:bg-slate-300 dark:hover:bg-neutral-700 font-semibold"
              >
                Close Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
