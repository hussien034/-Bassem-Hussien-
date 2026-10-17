import React, { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { LiveAppModal } from "./LiveAppModal";
import {
  ExternalLink,
  Github,
  Stethoscope,
  Activity,
  CheckCircle2,
  X,
  Play,
  Code2,
  Monitor,
  Globe,
  FileText,
  CreditCard,
  MapPin,
} from "lucide-react";

export const FeaturedProjectSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();

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
      label: language === "ar" ? "ألم حاد أسفل البطن جهة اليمين مع حمى" : "Acute Lower Abdominal Pain & Fever",
      description:
        language === "ar"
          ? "ألم موضعي شديد أسفل البطن جهة اليمين، غثيان، حرارة 38.4°C مستمرة منذ 14 ساعة."
          : "Severe localized right lower quadrant pain, nausea, low-grade fever (38.4°C) for 14 hours.",
      triageLevel: language === "ar" ? "حالة طارئة حرجة (Red)" : "Emergency (Red)",
      triageScore: language === "ar" ? "أولوية P1 قصوى" : "P1 Urgent",
      differential: ["Acute Appendicitis", "Mesenteric Lymphadenitis", "Acute Diverticulitis"],
      recommendations:
        language === "ar"
          ? "تقييم جراحي فوري في أقرب قسم طوارئ (قصر العيني / مستشفى جامعي). الصيام التام عن الطعام والشراب والمسكنات حتى الفحص الجراحي."
          : "Immediate surgical evaluation required at nearest ER (Kasr Al Ainy / Emergency Center). Nil per os (NPO - do not take food or painkillers until surgical assessment).",
      otcAdvice:
        language === "ar"
          ? "تجنب تماماً تناول المسكنات (باراسيتامول / بروفين) لأنها قد تخفي أعراض انفجار الزائدة الحاد."
          : "Do NOT take OTC painkillers (NSAIDs/Paracetamol) as they may mask peritoneal perforation symptoms.",
      langAr: "ألم حاد أسفل البطن جهة اليمين مع ارتفاع طفيف في الحرارة - يتطلب طوارئ فورية",
    },
    {
      label: language === "ar" ? "سعال جاف مستمر واحتقان بالحلق" : "Persistent Dry Cough & Sore Throat",
      description:
        language === "ar"
          ? "حكة وتهيج بالحلق مع سعال جاف مستمر منذ 3 أيام، بدون ضيق تنفس ونسبة الأكسجين 99%."
          : "Tickling throat irritation, dry cough for 3 days, no shortness of breath, normal SpO2 99%.",
      triageLevel: language === "ar" ? "رعاية أولية روتينية (Green)" : "Routine / Primary Care (Green)",
      triageScore: language === "ar" ? "أولوية P3 غير حرجة" : "P3 Non-urgent",
      differential: ["Viral Upper Respiratory Infection", "Seasonal Pharyngitis", "Post-nasal Drip"],
      recommendations:
        language === "ar"
          ? "الراحة التامة، شرب السوائل الدافئة، استنشاق البخار، والغرغرة بالماء والملح."
          : "Rest, warm fluid hydration, steam inhalation, and oral saline gargles.",
      otcAdvice:
        language === "ar"
          ? "أدوية OTC مصرية: باراسيتامول 500 ملجم (Panadol Blue / Adol) للحلق، شراب كحة عشبي (Prospan / بروسبان)."
          : "Egyptian OTC: Paracetamol 500mg (Panadol Blue / Adol) for throat discomfort, Herbal Cough Syrup (Guaifenesin or Ivy Leaf extract / Prospan).",
      langAr: "سعال جاف مستمر مع احتقان بالحلق - استشارة روتينية وعلاجات منزلية",
    },
    {
      label: language === "ar" ? "تقلصات معوية حادة وإسهال" : "Acute Gastric Cramps & Dehydration",
      description:
        language === "ar"
          ? "إسهال مائي متكرر (4 مرات)، تقلصات شديدة بعد وجبة سريعة مع دوخة خفيفة."
          : "Watery diarrhea (4 episodes), moderate epigastric cramping following street meal, mild dizziness.",
      triageLevel: language === "ar" ? "عيادة عاجلة متوسطة (Yellow)" : "Urgent Clinic Care (Yellow)",
      triageScore: language === "ar" ? "أولوية P2 متوسطة" : "P2 Intermediate",
      differential: ["Acute Infectious Gastroenteritis", "Foodborne Intoxication", "Giardiasis"],
      recommendations:
        language === "ar"
          ? "تناول محلول معالجة الجفاف (ORS) كل 30 دقيقة. مراجعة الطبيب فوراً إذا تجاوزت الحرارة 38.5°C."
          : "Oral Rehydration Salts (ORS) intake every 30 minutes. If fever > 38.5°C or blood in stool, visit clinic.",
      otcAdvice:
        language === "ar"
          ? "أدوية OTC مصرية: أنتينال 200 ملجم (Antinal كبسول كل 6 ساعات)، أكياس هيدراسيف أو ريهيدران مذابة في 200 مل ماء مغلي ومبرد."
          : "Egyptian OTC: Antinal 200mg (Nifuroxazide) 1 cap q6h, Hydrasafe / Rehydran ORS sachets dissolved in 200ml boiled water.",
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
        return <Globe className="w-4 h-4 text-blue-500" />;
      case "cv-builder":
        return <FileText className="w-4 h-4 text-emerald-500" />;
      case "eg-bank":
        return <CreditCard className="w-4 h-4 text-cyan-500" />;
      case "ip-tracking":
        return <MapPin className="w-4 h-4 text-indigo-500" />;
      default:
        return <Stethoscope className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="featured" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
          <Code2 className="w-3.5 h-3.5 text-blue-500" />
          <span>{t("projectsKicker")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
          {t("projectsTitle")}
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          {t("projectsDesc")}
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PRIMARY SPOTLIGHT: GDSC Educational Platform                              */}
      {/* ========================================================================= */}
      <div className="mb-16">
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.2)"
          className="p-5 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Side: Mockup Frame with Live Tag & Browser Chrome */}
            <div className="lg:col-span-6 relative perspective-1200 w-full" dir="ltr">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-300 dark:border-white/15 bg-neutral-950 shadow-xl group/mockup">
                {/* Simulated Browser Chrome */}
                <div className="px-3.5 py-2.5 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded-md bg-neutral-800 text-[11px] font-mono text-neutral-300 flex items-center gap-1.5 truncate max-w-[240px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">hussien034.github.io/GDSC-Educational-Platform</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                  {/* Overlay Action Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mockup:opacity-100 transition-opacity bg-black/40 backdrop-blur-2xs">
                    <button
                      onClick={() => handleOpenLiveModal(spotlightProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-neutral-900 font-bold text-xs shadow-xl hover:scale-105 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-blue-600" />
                      <span>{t("launchLiveFrame")}</span>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-blue-400 font-semibold">
                      Angular 14+ · Reactive Forms
                    </span>
                    <span className="font-mono text-neutral-300 text-[11px]">
                      GDSC Cairo University
                    </span>
                  </div>
                </div>
              </div>

              {/* Reflection Below the Device */}
              <div className="hidden sm:block h-6 w-full bg-gradient-to-b from-blue-500/15 via-transparent to-transparent blur-md rounded-b-2xl mt-1 opacity-70" />
            </div>

            {/* Right Side: Architecture & Features */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {t("featuredDeployment")}
                </span>
                <span aria-hidden="true">·</span>
                <span>{language === "ar" ? "قائد مهندسي الواجهات" : spotlightProject.role}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
                  {language === "ar" ? "منصة GDSC التعليمية التفاعلية" : spotlightProject.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {language === "ar" ? "نظام تتبع مسارات ودورات الطلاب البرمجية" : spotlightProject.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {language === "ar"
                  ? "منصة تعليمية تفاعلية تم تصميمها وتطويرها لأعضاء أندية مطوري Google بجامعة القاهرة، تتيح تسجيل الطلاب وتتبع التقدم الدراسي والتحقق التفاعلي من النماذج وحفظ الحالات محلياً."
                  : spotlightProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                {(language === "ar"
                  ? [
                      "تم البناء باستخدام Angular 14+ وهيكل مكونات تركيبي مع معالجة متقدمة لـ SCSS.",
                      "نماذج تفاعلية Reactive Forms مع دوال تحقق برمجية ديناميكية مخصصة لتسجيل الطلاب.",
                      "إدارة الحالات غير المتزامنة عبر RxJS Observables ومخازن الحالات المتزامنة مع التخزين المحلي.",
                      "نظام توجيه تفاعلي وحماية المسارات عبر Angular Router Guards للمسارات المعتمدة.",
                    ]
                  : spotlightProject.highlights
                ).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack - Zero Pill Typography */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400" dir="ltr">
                {spotlightProject.techStack.map((tech, tIdx) => (
                  <React.Fragment key={tech}>
                    {tIdx > 0 && <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>}
                    <span className="text-neutral-900 dark:text-neutral-200 font-medium">{tech}</span>
                  </React.Fragment>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => handleOpenLiveModal(spotlightProject)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{t("launchLiveFrame")}</span>
                </button>

                <a
                  href={spotlightProject.displayUrl || spotlightProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-[#121520] hover:bg-neutral-100 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-white transition-colors shadow-2xs w-full sm:w-auto"
                >
                  <span>{t("openLiveApp")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={spotlightProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-[#121520] hover:bg-neutral-100 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-white transition-colors shadow-2xs w-full sm:w-auto"
                >
                  <Github className="w-4 h-4" />
                  <span>{t("githubRepo")}</span>
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* ========================================================================= */}
      {/* COMPLETE PROJECT SHOWCASE GALLERY (All 5 Projects)                         */}
      {/* ========================================================================= */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-white/[0.08] pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-heading">
              {language === "ar" ? "معرض المشاريع والأنظمة الكامل" : "Complete Projects Portfolio"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {language === "ar"
                ? "تطبيقات حية في الإنتاج مع كود مصدري متاح بالكامل على GitHub وتوثيق معماري شامل."
                : "Production apps with live demos, full source code on GitHub, and in-depth documentation."}
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Controls) */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 self-start sm:self-center overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-white dark:bg-[#181C28] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {t("allProjects")} ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory("angular")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "angular"
                  ? "bg-white dark:bg-[#181C28] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {t("angularRxjs")}
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "tools"
                  ? "bg-white dark:bg-[#181C28] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {t("webAppsApis")}
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === "ai"
                  ? "bg-white dark:bg-[#181C28] text-neutral-900 dark:text-white shadow-2xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {t("aiFullStack")}
            </button>
          </div>
        </div>

        {/* Project Cards Grid with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(59, 130, 246, 0.16)"
              className="p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-950 mb-4 group/card" dir="ltr">
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-neutral-950/80 text-white backdrop-blur-md border border-white/20">
                      {getProjectIcon(project.id)}
                      <span>{project.badge || project.category}</span>
                    </span>
                  </div>

                  {/* Live Status Indicator */}
                  {project.liveDemoUrl.startsWith("http") && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/90 text-white shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>LIVE</span>
                      </span>
                    </div>
                  )}

                  {/* In-Frame Title on hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-blue-400 truncate max-w-[200px]">
                      {project.displayUrl || project.liveDemoUrl}
                    </span>
                    <button
                      onClick={() => handleOpenLiveModal(project)}
                      className="px-2.5 py-1 rounded-md bg-white text-neutral-950 text-[11px] font-bold shadow-md hover:bg-neutral-100 transition-colors"
                    >
                      {project.id === "healthai" ? (language === "ar" ? "المحاكي الطبي" : "Simulator") : (language === "ar" ? "عرض تفاعلي" : "Live Frame")}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white font-heading">
                    {language === "ar" && project.titleAr ? project.titleAr : project.title}
                  </h4>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 shrink-0">
                    {language === "ar" && project.categoryAr ? project.categoryAr : project.category}
                  </span>
                </div>

                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {language === "ar" && project.subtitleAr ? project.subtitleAr : project.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {language === "ar" && project.descriptionAr ? project.descriptionAr : project.description}
                </p>

                {/* Bullet Highlights */}
                <div className="mt-3.5 space-y-1.5">
                  {(language === "ar" && project.highlightsAr ? project.highlightsAr : project.highlights).slice(0, 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack - Clean Unboxed Metadata */}
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/5 flex flex-wrap items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400" dir="ltr">
                  {project.techStack.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      {tIdx > 0 && <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>}
                      <span className="text-neutral-800 dark:text-neutral-200">{tech}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-5 pt-3 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  {project.liveDemoUrl.startsWith("http") ? (
                    <a
                      href={project.displayUrl || project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-2xs transition-colors"
                    >
                      <span>{t("openLiveApp")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setIsTriageModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-2xs transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === "ar" ? "تشغيل المحاكي" : "Launch Simulator"}</span>
                    </button>
                  )}

                  {project.isLiveEmbeddable && (
                    <button
                      onClick={() => handleOpenLiveModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      title="Test live directly inside portfolio frame"
                    >
                      <Monitor className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === "ar" ? "إطار تفاعلي" : "Interactive Frame"}</span>
                    </button>
                  )}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">{t("githubRepo")}</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* 1. LIVE APP INTERACTIVE MODAL */}
      <LiveAppModal
        project={selectedLiveProject}
        isOpen={isLiveModalOpen}
        onClose={() => {
          setIsLiveModalOpen(false);
          setSelectedLiveProject(null);
        }}
      />

      {/* 2. HEALTHAI EGYPT MEDICAL TRIAGE SIMULATOR MODAL */}
      {isTriageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white dark:bg-[#0E111A] border border-neutral-300 dark:border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-5 sm:px-6 py-4 border-b border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Stethoscope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white font-heading">
                    {language === "ar" ? "HealthAI Egypt — محاكي الفرز والتقييم الطبي الحي" : "HealthAI Egypt — Live Triage Assessment Simulator"}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    Node.js Express + Server-Side Google Gemini AI Integration Engine
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsTriageModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              {/* Step 1: Select Case Preset */}
              <div>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                  {language === "ar" ? "اختر حالة أعراض للمريض:" : "Select a Patient Symptom Case:"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sampleSymptoms.map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => runAnalysis(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all text-xs ${
                        activeSampleIndex === idx
                          ? "border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 dark:border-blue-500 shadow-2xs"
                          : "border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 bg-white dark:bg-[#121520]"
                      }`}
                    >
                      <p className="font-bold text-neutral-900 dark:text-white">{sample.label}</p>
                      <p className="text-[11px] text-neutral-500 line-clamp-2 mt-1">{sample.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Live AI Triage Analysis Result */}
              {isAnalyzing ? (
                <div className="p-10 rounded-xl bg-neutral-50 dark:bg-[#121520] flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-8 h-8 rounded-full border-2 border-blue-600 dark:border-blue-400 border-t-transparent animate-spin" />
                  <p className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
                    {language === "ar"
                      ? "جاري تقييم الأعراض السريرية مع Gemini AI وبروتوكولات الصيدلة المصرية..."
                      : "Evaluating clinical symptoms with Gemini AI & Egyptian OTC protocols..."}
                  </p>
                </div>
              ) : analysisResult ? (
                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#121520] border border-neutral-200 dark:border-white/10 space-y-4">
                  {/* Status Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-200 dark:border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold">
                        {language === "ar" ? "مستوى الخطورة السريري" : "Assigned Acuity"}
                      </span>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
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
                      <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold">
                        {language === "ar" ? "أولوية الفرز" : "Triage Priority"}
                      </span>
                      <p className="text-sm font-bold font-mono text-blue-600 dark:text-blue-400">{analysisResult.triageScore}</p>
                    </div>
                  </div>

                  {/* Differential Diagnoses */}
                  <div>
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                      {language === "ar" ? "التشخيصات التفريقية المقترحة:" : "Differential Diagnoses Evaluated:"}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300" dir="ltr">
                      {analysisResult.differential.map((diag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white dark:bg-white/[0.05] border border-neutral-200 dark:border-white/5 font-medium"
                        >
                          {diag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#161A26] border border-neutral-200 dark:border-white/5 space-y-1.5">
                    <p className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />{" "}
                      <span>{language === "ar" ? "التوجيهات والتدابير السريرية:" : "Clinical Directives:"}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {analysisResult.recommendations}
                    </p>
                  </div>

                  {/* Egyptian OTC Advice */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 space-y-1.5">
                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" />{" "}
                      <span>{language === "ar" ? "إرشادات الصيدلية وبروتوكول OTC المصري:" : "Egyptian OTC & Pharmacy Guidance:"}</span>
                    </p>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {analysisResult.otcAdvice}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
              <span>{language === "ar" ? "مطابق لمعايير الفرز المعتمدة بوزارة الصحة المصرية" : "Verified against Egyptian MoHP Triage Standards"}</span>
              <button
                onClick={() => setIsTriageModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 font-semibold"
              >
                {language === "ar" ? "إغلاق المحاكي" : "Close Simulator"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
