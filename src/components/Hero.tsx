import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SignatureLogo } from "./SignatureLogo";
import { TiltCard } from "./TiltCard";
import { ArrowDown, Code2, Cpu, ExternalLink, Download, Layers, ShieldCheck, Activity, MessageCircle, Linkedin } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personalInfo } = PORTFOLIO_DATA;
  const { language, isRTL, t } = useLanguage();
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"architecture" | "rxjs" | "metrics">("architecture");

  const titlesEn = [
    "Frontend Software Engineer",
    "Angular 17+ Enterprise Specialist",
    "RxJS Reactive State Architect",
    "AI-Assisted Workflow Pioneer",
  ];

  const titlesAr = [
    "مهندس برمجيات واجهات أمامية",
    "متخصص معمارية أنظمة Angular 17+ المؤسسية",
    "مهندس تدفقات RxJS وحالات البيانات التفاعلية",
    "رائد تسريع الإنتاج بأدوات الذكاء الاصطناعي",
  ];

  const activeTitles = language === "ar" ? titlesAr : titlesEn;

  // Rotate titles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setTypedTitleIndex((prev) => (prev + 1) % activeTitles.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [activeTitles.length]);

  // Mouse Parallax for hero ambient orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useTransform(mouseX, [-500, 500], [-25, 25]);
  const orb1Y = useTransform(mouseY, [-500, 500], [-25, 25]);
  const orb2X = useTransform(mouseX, [-500, 500], [30, -30]);
  const orb2Y = useTransform(mouseY, [-500, 500], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const firstName = language === "ar" ? "باسم" : "Bassem";
  const lastName = language === "ar" ? "حسين" : "Hussein";

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-14 px-4 sm:px-8 overflow-hidden tech-grid-bg"
    >
      {/* Background Animated Gradient Mesh & Parallax Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep ambient mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[110px] rounded-full opacity-60 dark:opacity-40" />

        {/* Dynamic mouse parallax orb 1 */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-12 -left-12 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-[90px]"
        />

        {/* Dynamic mouse parallax orb 2 */}
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-10 right-0 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-gradient-to-tl from-cyan-500/15 via-blue-600/10 to-transparent blur-[100px]"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10 my-auto">
        {/* Left Column: Typography, Bilingual Staggered Reveal, Signature */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
          {/* Zero-Pill Unboxed Location & Availability Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {language === "ar" ? "متاح للعمل فوراً (Open to Work)" : "Open to Work · Ready to Hire"}
            </span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
            <span>{t("locationCairo")}</span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
            <a
              href="#leadership"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              <span>{t("googleVerified")}</span>
            </a>
          </div>

          {/* Staggered Name Heading + Signature Badge */}
          <div className="overflow-visible w-full flex flex-col gap-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08] flex items-baseline flex-wrap gap-x-2.5 sm:gap-x-4 gap-y-1">
              {language === "ar" ? (
                <>
                  <motion.span
                    key="ar-fn"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-neutral-900 dark:text-white"
                  >
                    {firstName}
                  </motion.span>
                  <motion.span
                    key="ar-ln"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-white dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
                  >
                    {lastName}
                  </motion.span>
                </>
              ) : (
                <>
                  <span className="inline-block whitespace-nowrap">
                    {firstName.split("").map((char, i) => (
                      <motion.span
                        key={`fn-en-${i}`}
                        initial={{ opacity: 0, rotateX: -85, y: 30 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <span className="inline-block whitespace-nowrap bg-gradient-to-r from-neutral-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                    {lastName.split("").map((char, i) => (
                      <motion.span
                        key={`ln-en-${i}`}
                        initial={{ opacity: 0, rotateX: -85, y: 30 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + i * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </>
              )}
            </h1>

            {/* Language-Specific Authentic Signature Stamp */}
            <div className="pt-1 flex items-center gap-3">
              <SignatureLogo language={language} variant="hero" animated={true} />
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 border-l rtl:border-l-0 rtl:border-r border-neutral-300 dark:border-neutral-700 pl-2 rtl:pl-0 rtl:pr-2">
                {language === "ar" ? "توقيع معتمد" : "Official Signature"}
              </span>
            </div>
          </div>

          {/* Dynamic Subtitle */}
          <div className="h-8 sm:h-9 flex items-center">
            <motion.p
              key={`${language}-${typedTitleIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-lg sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 font-heading flex items-center gap-2"
            >
              <span>{activeTitles[typedTitleIndex]}</span>
            </motion.p>
          </div>

          {/* Professional Summary Lead */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
            {t("heroSummary")}
          </p>

          {/* Unboxed Highlights & Tech Tokens */}
          <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> {language === "ar" ? "إشارات Angular 17+" : "Angular 17+ Signals"}
            </span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">/</span>
            <span className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> {language === "ar" ? "المعمارية النظيفة (Clean Code)" : "Clean Architecture"}
            </span>
            <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">/</span>
            <span className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-200">
              <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> {language === "ar" ? "تسريع الإنتاج بالذكاء الاصطناعي" : "AI-Augmented Velocity"}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
            <a
              href="#featured"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-md w-full sm:w-auto"
            >
              <span>{t("exploreProjects")}</span>
              <ExternalLink className={`w-4 h-4 transition-transform ${isRTL ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"} group-hover:-translate-y-0.5`} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-[#0E111A]/80 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-900 dark:text-white transition-colors shadow-2xs w-full sm:w-auto"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t("inspectCV")}</span>
            </button>

            <a
              href={`https://wa.me/201016226031?text=${encodeURIComponent(
                language === "ar"
                  ? "مرحباً مهندس باسم، اطلعت على معرض أعمالك وأرغب في مناقشة فرصة عمل/مشروع واجهات أمامية معكم."
                  : "Hello Bassem, I reviewed your portfolio and would like to discuss a frontend role/project with you."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl border border-emerald-500/35 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 transition-colors shadow-2xs w-full sm:w-auto"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{language === "ar" ? "واتساب فوري" : "WhatsApp"}</span>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-[#0E111A]/80 text-[#0A66C2] hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors shadow-2xs"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code & Architecture Terminal */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <TiltCard
            maxTilt={6}
            className="w-full max-w-md rounded-2xl p-2.5 sm:p-3 bg-white dark:bg-[#0E111A] border border-neutral-200 dark:border-white/10 shadow-2xl"
          >
            {/* Terminal Window Header */}
            <div className="rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 text-neutral-200 font-mono text-xs">
              <div className="px-3.5 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-neutral-400">enterprise.engine.ts</span>
                </div>
                {/* Tabs */}
                <div className="flex items-center gap-1 p-0.5 bg-neutral-800 rounded-md">
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
                      activeTab === "architecture"
                        ? "bg-neutral-700 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Signals
                  </button>
                  <button
                    onClick={() => setActiveTab("rxjs")}
                    className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
                      activeTab === "rxjs"
                        ? "bg-neutral-700 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    RxJS
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
                      activeTab === "metrics"
                        ? "bg-neutral-700 text-white font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Metrics
                  </button>
                  <a
                    href="#workspace"
                    className="px-2 py-0.5 text-[10px] rounded transition-colors text-cyan-400 hover:text-cyan-200 flex items-center gap-1 border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20"
                    title={language === "ar" ? "معاينة بيئة العمل الحقيقية" : "Inspect Authentic Dev Rig"}
                  >
                    <span>🖥️ {language === "ar" ? "بيئة العمل" : "Rig"}</span>
                  </a>
                </div>
              </div>

              {/* Code Tab Content */}
              <div className="p-4 space-y-1.5 text-[11px] sm:text-xs leading-relaxed overflow-x-auto min-h-[220px]" dir="ltr">
                {activeTab === "architecture" && (
                  <>
                    <p className="text-neutral-500">// Angular 17+ Fine-Grained Reactivity</p>
                    <p>
                      <span className="text-blue-400">@Component</span>
                      <span className="text-neutral-400">({'{'}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">changeDetection:</span>{" "}
                      <span className="text-amber-300">ChangeDetectionStrategy.OnPush</span>
                    </p>
                    <p className="text-neutral-400">{'}'})</p>
                    <p>
                      <span className="text-blue-400">export class</span>{" "}
                      <span className="text-amber-200">JudicialStateEngine</span> <span className="text-neutral-400">{'{'}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-blue-300">readonly</span> <span className="text-cyan-300">prosecution =</span>{" "}
                      <span className="text-amber-300">signal</span><span className="text-neutral-400">({'{'}</span>
                    </p>
                    <p className="pl-8 text-emerald-300">
                      client: <span className="text-white">'Egyptian Public Prosecution'</span>,
                    </p>
                    <p className="pl-8 text-emerald-300">
                      engineer: <span className="text-white">'Bassem Hussein'</span>,
                    </p>
                    <p className="pl-8 text-emerald-300">
                      fps: <span className="text-cyan-300">60</span>, <span className="text-neutral-400">zeroJank: true</span>
                    </p>
                    <p className="pl-4 text-neutral-400">{'}'});</p>
                    <p className="text-neutral-400">{'}'}</p>
                  </>
                )}

                {activeTab === "rxjs" && (
                  <>
                    <p className="text-neutral-500">// RxJS Declarative Stream Pipeline</p>
                    <p>
                      <span className="text-blue-400">readonly</span>{" "}
                      <span className="text-cyan-300">triageEvents$ =</span>{" "}
                      <span className="text-amber-300">this.telemetry$</span>
                      <span className="text-neutral-400">.pipe(</span>
                    </p>
                    <p className="pl-4 text-cyan-300">
                      filter(<span className="text-amber-200">event =&gt; event.priority === 'CRITICAL'</span>),
                    </p>
                    <p className="pl-4 text-cyan-300">
                      debounceTime(<span className="text-amber-300">80</span>),
                    </p>
                    <p className="pl-4 text-cyan-300">
                      switchMap(<span className="text-amber-200">payload =&gt; this.aiTriage.evaluate(payload)</span>),
                    </p>
                    <p className="pl-4 text-cyan-300">
                      catchError(<span className="text-amber-200">err =&gt; this.handleFallback(err)</span>),
                    </p>
                    <p className="pl-4 text-cyan-300">
                      shareReplay(<span className="text-amber-300">{'{ bufferSize: 1, refCount: true }'}</span>)
                    </p>
                    <p className="text-neutral-400">);</p>
                  </>
                )}

                {activeTab === "metrics" && (
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                      <span className="text-neutral-400">Bundle Size (Gzipped)</span>
                      <span className="font-mono text-emerald-400 font-semibold tabular-nums">&lt; 216 KB</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                      <span className="text-neutral-400">Lighthouse Performance</span>
                      <span className="font-mono text-emerald-400 font-semibold tabular-nums">98 / 100</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                      <span className="text-neutral-400">Change Detection Strategy</span>
                      <span className="font-mono text-blue-400 font-semibold">100% OnPush</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Memory Leak Profiling</span>
                      <span className="font-mono text-cyan-400 font-semibold">0 Detected</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Runtime Telemetry Bar */}
              <div className="px-3.5 py-2.5 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>Angular Signals Engine</span>
                </span>
                <span className="text-neutral-500">Cairo, Egypt</span>
              </div>
            </div>

            {/* Floating Card: GDSC Campus Lead */}
            <div className="absolute -bottom-3 -left-3 bg-white dark:bg-[#121520] border border-neutral-200 dark:border-white/10 rounded-xl px-3.5 py-2 shadow-xl hidden sm:block">
              <p className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold">
                {language === "ar" ? "القيادة المجتمعية" : "Community Leadership"}
              </p>
              <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                {language === "ar" ? "قائد أندية Google للطلاب (جامعة القاهرة)" : "Ex-Google DSC Campus Lead"}
              </p>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Full-Width Quantitative Rigor Strip Below Split */}
      <div className="max-w-7xl w-full mx-auto mt-10 pt-6 border-t border-neutral-200/80 dark:border-white/[0.08]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              4+
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t("statYears")}
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-blue-600 dark:text-blue-400 tabular-nums">
              500+
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t("statDevs")}
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-indigo-600 dark:text-indigo-400 tabular-nums">
              14+
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t("statHackathons")}
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
              100%
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {t("statDelivery")}
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Scroll Indicator */}
      <div className="mt-8 flex flex-col items-center justify-center gap-1 text-neutral-400 dark:text-neutral-500">
        <span className="text-[10px] font-mono tracking-widest uppercase">{language === "ar" ? "تمرير" : "Scroll"}</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
};
