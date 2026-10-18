import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { createGmailComposeUrl } from "../utils/emailService";
import {
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  MessageCircle,
  Mail,
  Server,
  Database,
  Globe,
  Bot,
  Terminal,
  Clock,
  Code2,
  Workflow,
  ChevronRight,
} from "lucide-react";

interface SystemTier {
  id: string;
  titleEn: string;
  titleAr: string;
  badgeEn: string;
  badgeAr: string;
  deliveryTimeEn: string;
  deliveryTimeAr: string;
  descriptionEn: string;
  descriptionAr: string;
  techStack: string[];
  capabilities: { en: string; ar: string }[];
  highlight?: boolean;
}

const SYSTEM_TIERS: SystemTier[] = [
  {
    id: "mvp",
    titleEn: "Rapid MVP & Single-Page Solution",
    titleAr: "نموذج أولي سريع ونظام ويب مخصص (MVP)",
    badgeEn: "Fastest Time to Market",
    badgeAr: "أسرع انطلاق للسوق",
    deliveryTimeEn: "7 – 14 Days",
    deliveryTimeAr: "7 إلى 14 يوم",
    descriptionEn: "Ideal for startups, validations, and focused utility tools needing spotless UI, zero bloat, and instant market presence.",
    descriptionAr: "مثالي للشركات الناشئة واختبار الأفكار وأدوات العمل السريعة بواجهة عصرية فائقة السرعة وكود نقي.",
    techStack: ["Angular 17 / React", "TypeScript", "Tailwind CSS", "Vercel / Cloud"],
    capabilities: [
      { en: "Custom Angular or React Modern Frontend", ar: "واجهة حديثة مخصصة بـ Angular أو React" },
      { en: "Responsive Mobile-First Architecture", ar: "تصميم متجاوب بالكامل لجميع الشاشات والهواتف" },
      { en: "Direct API & Contact Form Integrations", ar: "ربط النماذج وقواعد البيانات والـ APIs" },
      { en: "High-Performance SEO & OpenGraph Metadata", ar: "تهيئة محركات البحث ومشاركات السوشيال ميديا" },
      { en: "Production Vercel / Cloud Deployment", ar: "نشر إنتاجي سحابي على Vercel أو Cloud Run" },
    ],
  },
  {
    id: "fullstack",
    titleEn: "Full-Stack Enterprise Web Platform",
    titleAr: "منصة ويب متكاملة (Full-Stack Enterprise)",
    badgeEn: "Enterprise Grade",
    badgeAr: "معمارية مؤسسية شاملة",
    deliveryTimeEn: "2 – 4 Weeks",
    deliveryTimeAr: "أسبوعين إلى 4 أسابيع",
    descriptionEn: "Complete end-to-end architecture: Secure database, RESTful API backend, reactive UI, and multi-role RBAC permissions.",
    descriptionAr: "معمارية برمجية متكاملة تشمل الواجهة وقاعدة البيانات والـ Backend وصلاحيات المستخدمين المتعددة ولوحة التحكم.",
    techStack: ["Angular / React", "Node.js / Express", "PostgreSQL / Mongo", "Docker CI/CD"],
    capabilities: [
      { en: "Angular 17+ or React with Strict TypeScript", ar: "واجهة قوية بمعمارية Angular أو React مع TypeScript" },
      { en: "Node.js / Express / NestJS Backend API", ar: "واجهة برمجية متينة مبنية بـ Node.js أو Express" },
      { en: "PostgreSQL / MongoDB Cloud Storage", ar: "قاعدة بيانات سحابية PostgreSQL أو MongoDB" },
      { en: "Multi-Role User Authentication & RBAC", ar: "نظام تسجيل دخول وصلاحيات مستخدمين متعددة" },
      { en: "Enterprise Admin Dashboard & Tables", ar: "لوحة تحكم إدارية تفاعلية مع جداول وإحصائيات" },
      { en: "Automated CI/CD & Container Infrastructure", ar: "نظام نشر آلي وبنية تحتية سحابية متينة" },
    ],
    highlight: true,
  },
  {
    id: "ai-systems",
    titleEn: "AI-Powered SaaS & Autonomous Agents",
    titleAr: "أنظمة الذكاء الاصطناعي والأتمتة الذكية (AI SaaS)",
    badgeEn: "Cutting-Edge Innovation",
    badgeAr: "حلول الذكاء الاصطناعي التوليدي",
    deliveryTimeEn: "3 – 5 Weeks",
    deliveryTimeAr: "3 إلى 5 أسابيع",
    descriptionEn: "Empower your business with custom LLM agents, document parsing, automated workflows, semantic RAG, and conversational AI.",
    descriptionAr: "تطوير أنظمة مدعومة بالذكاء الاصطناعي التوليدي، معالجة المستندات، الشات الذكي، وأتمتة المهام المعقدة.",
    techStack: ["Gemini 2.5 Flash / Pro", "Vector RAG", "Python / Node.js", "Streaming UI"],
    capabilities: [
      { en: "Gemini / LLM API Real-Time Integration", ar: "دمج مباشر لنماذج Gemini و LLMs المتقدمة" },
      { en: "Semantic Search & Vector RAG Pipeline", ar: "محرك بحث دلالي ومعالجة بيانات متقدمة (RAG)" },
      { en: "Automated Document Extraction & Parsing", ar: "استخراج وتلخيص المستندات والبيانات آلياً" },
      { en: "Interactive Streaming Chat Interface", ar: "واجهة محادثة ذكية متدفقة (Live Streaming)" },
      { en: "Prompt Engineering & Guardrails", ar: "هندسة أوامر دقيقة وحماية مخرجات الذكاء الاصطناعي" },
      { en: "Full-Stack Security & Quota Controls", ar: "تحكم كامل بمعدلات الاستهلاك وأمان البيانات" },
    ],
  },
];

interface FeatureOption {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  category: "auth" | "ai" | "core" | "cloud";
}

const ADDON_FEATURES: FeatureOption[] = [
  {
    id: "auth",
    nameEn: "Multi-Role User Auth & RBAC",
    nameAr: "نظام إدارة المستخدمين والصلاحيات (RBAC)",
    descEn: "JWT / Session auth, role-based route guards, and admin privileges",
    descAr: "تسجيل دخول آمن وحماية المسارات وتوزيع الصلاحيات",
    category: "auth",
  },
  {
    id: "ai",
    nameEn: "AI Agent & Gemini Assistant",
    nameAr: "دمج مساعد ذكاء اصطناعي (Gemini Agent)",
    descEn: "Context-aware conversational interface with function calling",
    descAr: "شات بوت ذكي مدمج مع وظائف النظام ومعالجة السياق",
    category: "ai",
  },
  {
    id: "payments",
    nameEn: "Payment Gateway & Subscriptions",
    nameAr: "بوابات الدفع الإلكتروني والاشتراكات",
    descEn: "Stripe / Paymob checkout flows with webhooks & invoices",
    descAr: "تكامل بوابات الدفع وإدارة الفواتير والاشتراكات الدورية",
    category: "core",
  },
  {
    id: "i18n",
    nameEn: "Bilingual Arabic & English (RTL/LTR)",
    nameAr: "دعم لغوي مزدوج كامل (عربي وإنجليزي)",
    descEn: "Pixel-perfect bidirectional styling and dynamic language switching",
    descAr: "تصميم متناسق تماماً للغتين مع دعم كامل للاتجاهين",
    category: "core",
  },
  {
    id: "pwa",
    nameEn: "Mobile PWA & Offline Support",
    nameAr: "تطبيق ويب تقدمي (PWA) يعمل بدون إنترنت",
    descEn: "Installable app manifest, service workers, and local storage",
    descAr: "إمكانية التثبيت على الهاتف والعمل في حالة انقطاع الاتصال",
    category: "cloud",
  },
  {
    id: "reports",
    nameEn: "Automated PDF Reports & Analytics",
    nameAr: "تصدير تقارير PDF وإحصائيات متقدمة",
    descEn: "Dynamic PDF document generation, data exports, and charts",
    descAr: "توليد ملفات PDF تلقائياً مع جداول بيانية وإحصائية",
    category: "core",
  },
  {
    id: "realtime",
    nameEn: "Real-Time WebSockets & Notifications",
    nameAr: "إشعارات وتحديثات لحظية (WebSockets)",
    descEn: "Instant push notifications, live status updates, and chat",
    descAr: "تحديث البيانات والإشعارات لحظة بلحظة دون إعادة تحميل",
    category: "cloud",
  },
  {
    id: "cicd",
    nameEn: "Containerization & CI/CD Pipeline",
    nameAr: "حاويات Docker ونشر آلي مستمر",
    descEn: "Automated test suites, Dockerfiles, and GitHub Actions",
    descAr: "بناء واختبار ونشر تلقائي للكود إلى السحابة",
    category: "cloud",
  },
];

export const CustomSystemsPricingSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isAr = language === "ar";
  const { personalInfo } = PORTFOLIO_DATA;

  const [selectedTier, setSelectedTier] = useState<string>("fullstack");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "i18n",
    "ai",
  ]);

  const cleanPhone = personalInfo.phone.replace(/[\s+]/g, "");

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentTier =
    SYSTEM_TIERS.find((t) => t.id === selectedTier) || SYSTEM_TIERS[1];

  // WhatsApp Pre-filled custom proposal request (NO PRICES)
  const getWhatsAppProposalUrl = () => {
    const featureNames = selectedFeatures
      .map((id) =>
        isAr
          ? ADDON_FEATURES.find((f) => f.id === id)?.nameAr
          : ADDON_FEATURES.find((f) => f.id === id)?.nameEn
      )
      .filter(Boolean)
      .join(", ");

    const text = isAr
      ? `مرحباً مهندس باسم،\nأرغب في مناقشة بناء نظام برمجي جديد:\n• معمارية النظام: ${currentTier.titleAr}\n• الوحدات المطلوبة: ${featureNames || "المعمارية الأساسية"}\n• المدة المقترحة: ${currentTier.deliveryTimeAr}\nهل يمكننا مناقشة التفاصيل وخطة التنفيذ؟`
      : `Hello Bassem,\nI would like to discuss building a custom software system:\n• Architecture: ${currentTier.titleEn}\n• Modules: ${featureNames || "Standard Architecture"}\n• Timeline Target: ${currentTier.deliveryTimeEn}\nCan we discuss the project roadmap and technical execution?`;

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  // Direct Gmail composer pre-filled URL (NO PRICES)
  const getGmailProposalUrl = () => {
    const featureNames = selectedFeatures
      .map((id) =>
        isAr
          ? ADDON_FEATURES.find((f) => f.id === id)?.nameAr
          : ADDON_FEATURES.find((f) => f.id === id)?.nameEn
      )
      .filter(Boolean)
      .join(", ");

    const subject = isAr
      ? `استفسار عن بناء نظام برمجي: ${currentTier.titleAr}`
      : `Project Build Inquiry: ${currentTier.titleEn}`;

    const body = isAr
      ? `مرحباً مهندس باسم،\n\nأود الاستفسار عن تطوير وتنفيذ نظام مخصص:\n• معمارية النظام المختارة: ${currentTier.titleAr}\n• الوحدات والميزات المطلوبة: ${featureNames || "المعمارية الأساسية"}\n• المدة المتوقعة للتسليم: ${currentTier.deliveryTimeAr}\n\nنظرة عامة على متطلبات المشروع وأهدافه:\n[اكتب هنا فكرة المشروع، المستخدمين المستهدفين، أو أي تفاصيل خاصة...]`
      : `Hello Bassem,\n\nI am inquiring about developing a custom software system:\n• Architecture: ${currentTier.titleEn}\n• Selected Modules: ${featureNames || "Base Configuration"}\n• Target Timeline: ${currentTier.deliveryTimeEn}\n\nProject Scope & Objectives:\n[Please describe your system goals, user flows, or custom requirements...]`;

    return createGmailComposeUrl({
      recipientEmail: personalInfo.email,
      name: "Prospective Client / Partner",
      subject,
      message: body,
    });
  };

  return (
    <section id="systems" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
          <Cpu className="w-3.5 h-3.5 text-blue-500" />
          <span>{t("systemsKicker")}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
          {t("systemsTitle")}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          {t("systemsDesc")}
        </p>

        {/* Engineering Value Proposition Banner */}
        <div className="mt-6 p-4 rounded-2xl border border-blue-500/30 bg-blue-50/70 dark:bg-blue-950/20 max-w-3xl flex items-center gap-3.5 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900 dark:text-white font-heading">
              {isAr ? "هندسة برمجية مباشرة بدون تعقيدات أو وسطاء" : "Direct Senior Engineering · Clean Code Architecture"}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-0.5">
              {t("engineeringAdvantage")}
            </p>
          </div>
        </div>
      </div>

      {/* 3 Major Architecture Solution Cards (Clean, Technical, Zero Prices) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {SYSTEM_TIERS.map((tier) => {
          const isSelected = selectedTier === tier.id;
          return (
            <SpotlightCard
              key={tier.id}
              spotlightColor={tier.highlight ? "rgba(59, 130, 246, 0.22)" : "rgba(16, 185, 129, 0.15)"}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.highlight
                  ? "border-blue-500/50 dark:border-blue-500/40 shadow-lg ring-1 ring-blue-500/20"
                  : "border-neutral-200 dark:border-white/10"
              }`}
            >
              {/* Badge & Delivery Timeline */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {isAr ? tier.badgeAr : tier.badgeEn}
                </span>

                <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{isAr ? tier.deliveryTimeAr : tier.deliveryTimeEn}</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading">
                  {isAr ? tier.titleAr : tier.titleEn}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {isAr ? tier.descriptionAr : tier.descriptionEn}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tier.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Capabilities list */}
                <div className="mt-5 space-y-2 pt-4 border-t border-neutral-200/80 dark:border-white/10">
                  <p className="text-[11px] font-mono uppercase text-neutral-500 font-semibold flex items-center gap-1.5">
                    <Workflow className="w-3 h-3 text-neutral-400" />
                    <span>{isAr ? "معمارية وقدرات النظام:" : "Core Architecture & Capabilities:"}</span>
                  </p>
                  {tier.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{isAr ? cap.ar : cap.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200/80 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold font-mono transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-white/10"
                  }`}
                >
                  <span>
                    {isSelected
                      ? isAr
                        ? "✓ المعمارية المحددة في المخطط"
                        : "✓ Selected in Architecture Planner"
                      : isAr
                      ? "تحديد هذه المعمارية للتخصيص"
                      : "Select this Architecture"}
                  </span>
                </button>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Interactive Project Scope & Specification Planner (ZERO PRICES) */}
      <SpotlightCard
        spotlightColor="rgba(59, 130, 246, 0.16)"
        className="p-6 sm:p-9 border-blue-500/30"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
              <Code2 className="w-4 h-4 text-blue-500" />
              <span>{t("estimatorTitle")}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
              {isAr ? "حدد متطلبات ومعمارية مشروعك بدقة" : "Configure Your Project Scope & Architecture"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
              {isAr
                ? "اختر الوحدات التقنية والإضافات التي يحتاجها نظامك، وسيقوم المخطط بتجهيز مواصفات مشروعك لمناقشتها فوراً."
                : "Select system modules to configure your exact technical stack, ready to discuss roadmaps and delivery milestones."}
            </p>
          </div>

          {/* Senior Quality Guarantee Badge */}
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-800 dark:text-blue-300 font-mono text-center shrink-0">
            <span className="text-xs uppercase font-bold block">
              {isAr ? "ضمان الجودة الهندسية" : "Engineering Standard"}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
              <span>100% Production Ready</span>
            </span>
            <span className="text-[11px] block text-blue-600/80 dark:text-blue-400/80 mt-0.5">
              {isAr ? "كود نظيف مع اختبارات ونشر سحابي" : "Strict TypeScript · Automated CI/CD"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left: Features / Technical Modules Selection */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono uppercase text-neutral-500 font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neutral-400" />
              <span>{t("selectFeatures")}</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDON_FEATURES.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      isChecked
                        ? "bg-blue-50/80 dark:bg-blue-950/30 border-blue-500/50 text-neutral-900 dark:text-white"
                        : "bg-white/60 dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-neutral-400 dark:border-neutral-600"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold block">
                          {isAr ? feat.nameAr : feat.nameEn}
                        </span>
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight block mt-0.5">
                          {isAr ? feat.descAr : feat.descEn}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Architecture Summary & Consultation Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-neutral-100/90 dark:bg-[#10131E] border border-neutral-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 font-bold block">
                {t("scopeSummary")}
              </span>

              {/* Selected Architecture Title */}
              <div className="mt-2 pb-3 border-b border-neutral-200 dark:border-white/10">
                <span className="text-lg font-bold font-heading text-neutral-900 dark:text-white block">
                  {isAr ? currentTier.titleAr : currentTier.titleEn}
                </span>
                <span className="text-xs font-mono text-neutral-500 block mt-0.5">
                  ⏱️ {t("turnaroundTime")}: {isAr ? currentTier.deliveryTimeAr : currentTier.deliveryTimeEn}
                </span>
              </div>

              {/* Modules breakdown */}
              <div className="mt-3 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center text-neutral-600 dark:text-neutral-400">
                  <span>{isAr ? "عدد الوحدات المختارة:" : "Selected Modules:"}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                    {selectedFeatures.length} {isAr ? "وحدات" : "modules"}
                  </span>
                </div>

                <div className="pt-2 text-[11px] text-neutral-500 space-y-1">
                  <span className="block font-semibold text-neutral-700 dark:text-neutral-300">
                    {t("recommendedStack")}:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {currentTier.techStack.map((st, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] bg-neutral-200 dark:bg-white/10 text-neutral-800 dark:text-neutral-200"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Consultation / Proposal Action Buttons */}
            <div className="mt-6 space-y-2.5">
              <a
                href={getWhatsAppProposalUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("requestThisQuote")}</span>
              </a>

              <a
                href={getGmailProposalUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{t("composeGmailQuote")}</span>
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

// Also export as CustomSystemsSection for semantic naming
export const CustomSystemsSection = CustomSystemsPricingSection;
