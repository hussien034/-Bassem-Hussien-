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
  TrendingUp,
  Zap,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  MessageCircle,
  Mail,
  Calculator,
  Server,
  Database,
  Globe,
  Bot,
  Terminal,
} from "lucide-react";

interface SystemTier {
  id: string;
  titleEn: string;
  titleAr: string;
  badgeEn: string;
  badgeAr: string;
  marketPrice: string;
  directPrice: string;
  deliveryTimeEn: string;
  deliveryTimeAr: string;
  descriptionEn: string;
  descriptionAr: string;
  capabilities: { en: string; ar: string }[];
  highlight?: boolean;
}

const SYSTEM_TIERS: SystemTier[] = [
  {
    id: "mvp",
    titleEn: "Rapid MVP / Single-Page System",
    titleAr: "نموذج أولي سريع / نظام ويب مخصص (MVP)",
    badgeEn: "Fastest Time to Market",
    badgeAr: "أسرع انطلاق للسوق",
    marketPrice: "$1,800 – $3,500",
    directPrice: "$450 – $850",
    deliveryTimeEn: "7 – 14 Days",
    deliveryTimeAr: "7 إلى 14 يوم",
    descriptionEn: "Ideal for startups, validations, and focused utility tools needing high performance and spotless UI.",
    descriptionAr: "مثالي للشركات الناشئة واختبار الأفكار وأدوات العمل السريعة بواجهة عصرية فائقة السرعة.",
    capabilities: [
      { en: "Custom Angular or React Modern Frontend", ar: "واجهة حديثة مخصصة بـ Angular أو React" },
      { en: "Responsive Mobile-First Architecture", ar: "تصميم متجاوب بالكامل لجميع الشاشات والهواتف" },
      { en: "Direct API & Contact Integrations", ar: "ربط النماذج وقواعد البيانات والـ APIs" },
      { en: "High-Performance SEO & OG Metadata", ar: "تهيئة محركات البحث ومشاركات السوشيال ميديا" },
      { en: "Production Vercel / Cloud Deployment", ar: "نشر إنتاجي سحابي على Vercel أو Cloud Run" },
    ],
  },
  {
    id: "fullstack",
    titleEn: "Full-Stack Enterprise Web Application",
    titleAr: "تطبيق ويب متكامل (Full-Stack Enterprise)",
    badgeEn: "Most Popular",
    badgeAr: "الأكثر طلباً",
    marketPrice: "$4,500 – $9,000",
    directPrice: "$1,100 – $2,200",
    deliveryTimeEn: "2 – 4 Weeks",
    deliveryTimeAr: "أسبوعين إلى 4 أسابيع",
    descriptionEn: "Complete end-to-end architecture: Secure database, REST API backend, reactive UI, and multi-user roles.",
    descriptionAr: "معمارية برمجية متكاملة تشمل الواجهة وقاعدة البيانات والـ Backend وصلاحيات المستخدمين المتعددة.",
    capabilities: [
      { en: "Angular 17+ or React with Strict TypeScript", ar: "واجهة قوية بمعمارية Angular أو React مع TypeScript" },
      { en: "Node.js / Express / NestJS Backend API", ar: "واجهة برمجية متينة مبنية بـ Node.js أو Express" },
      { en: "PostgreSQL / MongoDB Cloud Storage", ar: "قاعدة بيانات سحابية PostgreSQL أو MongoDB" },
      { en: "Multi-Role User Authentication & RBAC", ar: "نظام تسجيل دخول وصلاحيات مستخدمين متعددة" },
      { en: "Enterprise Admin Dashboard & Tables", ar: "لوحة تحكم إدارية تفاعلية مع جداول وإحصائيات" },
      { en: "Automated CI/CD & Cloud Infrastructure", ar: "نظام نشر آلي وبنية تحتية سحابية متينة" },
    ],
    highlight: true,
  },
  {
    id: "ai-systems",
    titleEn: "AI-Powered SaaS & Automation Agent",
    titleAr: "نظام ذكاء اصطناعي وأتمتة ذكية (AI SaaS)",
    badgeEn: "Cutting-Edge Innovation",
    badgeAr: "حلول الذكاء الاصطناعي",
    marketPrice: "$6,500 – $14,000",
    directPrice: "$1,600 – $3,200",
    deliveryTimeEn: "3 – 5 Weeks",
    deliveryTimeAr: "3 إلى 5 أسابيع",
    descriptionEn: "Empower your business with custom LLM agents, document parsing, automated workflows, and conversational AI.",
    descriptionAr: "تطوير أنظمة مدعومة بالذكاء الاصطناعي التوليدي، معالجة المستندات، الشات الذكي، وأتمتة المهام.",
    capabilities: [
      { en: "Gemini / OpenAI API Real-time Integration", ar: "دمج مباشر لنماذج Gemini و LLMs المتقدمة" },
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
  price: number;
}

const ADDON_FEATURES: FeatureOption[] = [
  { id: "auth", nameEn: "Multi-Role User Auth & RBAC", nameAr: "نظام إدارة المستخدمين والصلاحيات (RBAC)", price: 200 },
  { id: "ai", nameEn: "AI Chat / Gemini Agent Integration", nameAr: "دمج مساعد ذكاء اصطناعي (Gemini Agent)", price: 350 },
  { id: "payments", nameEn: "Payment Gateway & Subscriptions", nameAr: "بوابات دفع إلكتروني واشتراكات", price: 250 },
  { id: "i18n", nameEn: "Bilingual Arabic & English (RTL/LTR)", nameAr: "دعم لغوي مزدوج (عربي وإنجليزي كامل)", price: 150 },
  { id: "pwa", nameEn: "Mobile PWA & Offline Support", nameAr: "تطبيق ويب تقدمي (PWA) يعمل أوفلاين", price: 180 },
  { id: "reports", nameEn: "Automated PDF Reports & Exports", nameAr: "تصدير تقارير PDF وإحصائيات متقدمة", price: 150 },
];

export const CustomSystemsPricingSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isAr = language === "ar";
  const { personalInfo } = PORTFOLIO_DATA;

  const [selectedTier, setSelectedTier] = useState<string>("fullstack");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "i18n"]);

  const cleanPhone = personalInfo.phone.replace(/[\s+]/g, "");

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base tier calculation
  const currentTier = SYSTEM_TIERS.find((t) => t.id === selectedTier) || SYSTEM_TIERS[1];
  const baseCost = selectedTier === "mvp" ? 550 : selectedTier === "fullstack" ? 1400 : 2100;
  const addonsCost = selectedFeatures.reduce((acc, featId) => {
    const feat = ADDON_FEATURES.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalEstimateMin = baseCost + addonsCost;
  const totalEstimateMax = Math.round((baseCost + addonsCost) * 1.35);

  // Market agency baseline comparison (2.8x higher)
  const marketBaselineMin = Math.round(totalEstimateMin * 2.8);
  const marketBaselineMax = Math.round(totalEstimateMax * 3.1);

  // WhatsApp Pre-filled custom quote request
  const getWhatsAppQuoteUrl = () => {
    const featureNames = selectedFeatures
      .map((id) => (isAr ? ADDON_FEATURES.find((f) => f.id === id)?.nameAr : ADDON_FEATURES.find((f) => f.id === id)?.nameEn))
      .filter(Boolean)
      .join(", ");

    const text = isAr
      ? `مرحباً مهندس باسم،\nأرغب في الاستفسار عن بناء نظام جديد:\n• نوع النظام: ${currentTier.titleAr}\n• الإضافات المطلوبة: ${featureNames || "الأساسية"}\n• التقدير المقترح: ~$${totalEstimateMin} - $${totalEstimateMax}\nهل يمكننا مناقشة التفاصيل والبدء في التنفيذ؟`
      : `Hello Bassem,\nI would like to inquire about building a custom software system:\n• Architecture: ${currentTier.titleEn}\n• Features: ${featureNames || "Standard"}\n• Estimated Budget: ~$${totalEstimateMin} - $${totalEstimateMax}\nCan we discuss the project roadmap?`;

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  // Direct Gmail composer pre-filled URL
  const getGmailQuoteUrl = () => {
    const featureNames = selectedFeatures
      .map((id) => (isAr ? ADDON_FEATURES.find((f) => f.id === id)?.nameAr : ADDON_FEATURES.find((f) => f.id === id)?.nameEn))
      .filter(Boolean)
      .join(", ");

    const subject = isAr
      ? `طلب بناء مشروع برمجي: ${currentTier.titleAr}`
      : `Project Build Inquiry: ${currentTier.titleEn}`;

    const body = isAr
      ? `مرحباً مهندس باسم،\n\nأود الاستفسار عن تطوير نظام مخصص:\n• معمارية النظام: ${currentTier.titleAr}\n• الميزات المحددة: ${featureNames || "الباقة الأساسية"}\n• الميزانية التقديرية المقترحة: $${totalEstimateMin} – $${totalEstimateMax}\n\nتفاصيل المشروع:\n[اكتب هنا فكرة النظام، الأهداف، أو أي متطلبات إضافية...]`
      : `Hello Bassem,\n\nI am inquiring about developing a custom system:\n• Architecture: ${currentTier.titleEn}\n• Selected Features: ${featureNames || "Base Configuration"}\n• Target Budget Range: $${totalEstimateMin} – $${totalEstimateMax}\n\nProject Scope:\n[Please describe your system goals, user flows, or custom requirements...]`;

    return createGmailComposeUrl({
      recipientEmail: personalInfo.email,
      name: "Prospective Client",
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

        {/* Market Price Advantage Banner */}
        <div className="mt-6 p-4 rounded-2xl border border-blue-500/30 bg-blue-50/70 dark:bg-blue-950/20 max-w-3xl flex items-center gap-3.5 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900 dark:text-white font-heading">
              {isAr ? "أسعار مباشرة وموفرة جداً مقارنة بالسوق" : "Direct Senior Engineering · Zero Agency Overhead"}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-0.5">
              {t("marketComparison")}
            </p>
          </div>
        </div>
      </div>

      {/* 3 Major Architecture Tiers */}
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
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {isAr ? tier.badgeAr : tier.badgeEn}
                </span>

                <span className="text-xs font-mono text-neutral-500">
                  ⏱️ {isAr ? tier.deliveryTimeAr : tier.deliveryTimeEn}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading">
                  {isAr ? tier.titleAr : tier.titleEn}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {isAr ? tier.descriptionAr : tier.descriptionEn}
                </p>

                {/* Price Benchmarks: Market vs Bassem */}
                <div className="mt-5 p-3.5 rounded-xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono">
                      {isAr ? "سعر الشركات / السوق المعتاد:" : "Agency Market Average:"}
                    </span>
                    <span className="font-mono text-neutral-400 line-through">
                      {tier.marketPrice}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-emerald-700 dark:text-emerald-400 font-mono flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      {isAr ? "تكلفة مباشرة مع باسم:" : "Bassem Direct Rate:"}
                    </span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base">
                      {tier.directPrice}
                    </span>
                  </div>
                </div>

                {/* Capabilities list */}
                <div className="mt-5 space-y-2">
                  <p className="text-[11px] font-mono uppercase text-neutral-500 font-semibold">
                    {isAr ? "أبرز مميزات ومعمارية النظام:" : "Included Capabilities:"}
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
                  <span>{isSelected ? (isAr ? "✓ النظام المحدد حالياً" : "✓ Active in Calculator") : (isAr ? "تحديد هذا النظام للحساب" : "Select for Calculation")}</span>
                </button>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Interactive Project Cost Estimator Card */}
      <SpotlightCard
        spotlightColor="rgba(59, 130, 246, 0.16)"
        className="p-6 sm:p-9 border-blue-500/30"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
              <Calculator className="w-4 h-4 text-blue-500" />
              <span>{t("estimatorTitle")}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-heading">
              {isAr ? "احسب تكلفة مشروعك التقديرية بدقة" : "Estimate Your Custom Project in Real-Time"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
              {isAr
                ? "حدد الإضافات والخدمات البرمجية التي يحتاجها نظامك وشاهد التكلفة الموفرة ومقارنتها بالسوق فوراً."
                : "Select add-on modules to dynamically configure your system scope and see estimated investment."}
            </p>
          </div>

          {/* Savings Highlight Badge */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-mono text-center">
            <span className="text-xs uppercase font-bold block">{t("savingsLabel")}</span>
            <span className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              55% – 70% OFF
            </span>
            <span className="text-[11px] block text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
              {isAr ? "مقارنة بأسعار الوكالات والشركات" : "vs traditional agency quotes"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left: Features / Addons Selection */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono uppercase text-neutral-500 font-bold">
              {t("selectFeatures")}
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
                        <span className="text-[10px] font-mono text-neutral-400">
                          +{feat.price} USD
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Live Calculated Investment & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-neutral-100/90 dark:bg-[#10131E] border border-neutral-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase text-neutral-500 block">
                {t("estimatedBudget")}
              </span>

              {/* Price display */}
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-neutral-900 dark:text-white">
                  ${totalEstimateMin} – ${totalEstimateMax}
                </span>
                <span className="text-xs font-mono text-neutral-500">USD</span>
              </div>

              {/* Market Comparison comparison line */}
              <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-white/10 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-neutral-500">
                  <span>{t("marketRateLabel")}:</span>
                  <span className="line-through">${marketBaselineMin} – ${marketBaselineMax}</span>
                </div>
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>{isAr ? "صافي التوفير لمشروعك:" : "Direct Cost Savings:"}</span>
                  <span>~${marketBaselineMin - totalEstimateMin}+</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>{t("turnaroundTime")}:</span>
                  <span>{isAr ? currentTier.deliveryTimeAr : currentTier.deliveryTimeEn}</span>
                </div>
              </div>
            </div>

            {/* Direct Order / Quote Action Buttons */}
            <div className="mt-6 space-y-2.5">
              <a
                href={getWhatsAppQuoteUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("requestThisQuote")}</span>
              </a>

              <a
                href={getGmailQuoteUrl()}
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
