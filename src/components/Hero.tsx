import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import { ArrowDown, Sparkles, Code2, Cpu, ExternalLink, Download, Layers } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personalInfo } = PORTFOLIO_DATA;
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);

  const titles = [
    "Frontend Software Engineer",
    "Angular 17+ Enterprise Specialist",
    "RxJS Reactive State Architect",
    "AI-Assisted Workflow Pioneer",
  ];

  // Rotate titles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setTypedTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Mouse Parallax for hero floating orbs
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

  // Staggered letters for "Bassem Hussein"
  const firstName = "Bassem";
  const lastName = "Hussein";

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden noise-overlay"
    >
      {/* Background Animated Gradient Mesh & Parallax Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep ambient mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-transparent blur-[90px] sm:blur-[130px] rounded-full animate-mesh-slow opacity-60 dark:opacity-50" />

        {/* Dynamic mouse parallax orb 1 */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -top-12 -left-12 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-indigo-500/20 dark:from-[#8B7FFF]/25 to-transparent blur-[80px] sm:blur-[110px]"
        />

        {/* Dynamic mouse parallax orb 2 */}
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute bottom-10 right-0 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-gradient-to-tl from-sky-400/15 dark:from-[#00E5FF]/20 via-indigo-500/10 dark:via-[#6C63FF]/15 to-transparent blur-[80px] sm:blur-[120px]"
        />

        {/* Architectural subtle hairline grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        {/* Left Column: Typography & Staggered Reveal */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
          {/* Zero-Pill Unboxed Location & Availability Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Full-time Roles
            </span>
            <span aria-hidden="true">·</span>
            <span>Cairo, Egypt (Open to Relocate)</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Angular & AI</span>
          </div>

          {/* Staggered 3D RotateX Name Heading */}
          <div className="overflow-visible w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] perspective-1000">
              <span className="inline-block whitespace-nowrap mr-2.5 sm:mr-4">
                {firstName.split("").map((char, i) => (
                  <motion.span
                    key={`fn-${i}`}
                    initial={{ opacity: 0, rotateX: -85, y: 30 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block transform-origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="inline-block whitespace-nowrap bg-gradient-to-r from-slate-900 via-indigo-600 to-sky-600 dark:from-white dark:via-[#8B7FFF] dark:to-[#00E5FF] bg-clip-text text-transparent">
                {lastName.split("").map((char, i) => (
                  <motion.span
                    key={`ln-${i}`}
                    initial={{ opacity: 0, rotateX: -85, y: 30 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block transform-origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* Animated Dynamic Subtitle */}
          <div className="h-8 sm:h-10 flex items-center">
            <motion.p
              key={typedTitleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-medium text-indigo-600 dark:text-[#8B7FFF] font-heading flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-sky-500 dark:text-[#00E5FF] shrink-0" />
              <span>{titles[typedTitleIndex]}</span>
            </motion.p>
          </div>

          {/* Professional Summary Lead */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-neutral-300 max-w-2xl leading-relaxed text-wrap-balance">
            {personalInfo.summary}
          </p>

          {/* Unboxed Highlights & Tech Tokens */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-xs font-mono text-slate-600 dark:text-neutral-400">
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-neutral-200">
              <Code2 className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF]" /> Angular 17+ & RxJS
            </span>
            <span aria-hidden="true">/</span>
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-neutral-200">
              <Layers className="w-4 h-4 text-sky-600 dark:text-[#00E5FF]" /> SOLID Architecture
            </span>
            <span aria-hidden="true">/</span>
            <span className="flex items-center gap-1.5 text-slate-800 dark:text-neutral-200">
              <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-500" /> AI-Augmented Delivery
            </span>
          </div>

          {/* Magnetic CTA Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#featured"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-[#8B7FFF] dark:hover:text-white transition-all shadow-md hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] w-full sm:w-auto"
            >
              <span>Explore Featured Project</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-neutral-900/80 hover:bg-slate-50 dark:hover:bg-neutral-800 text-slate-900 dark:text-white transition-colors shadow-sm w-full sm:w-auto"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF]" />
              <span>Inspect Official CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive Architecture Terminal & Telemetry */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <TiltCard
            maxTilt={7}
            className="w-full max-w-md rounded-2xl p-3 bg-white dark:bg-[#12121A] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl"
          >
            {/* Terminal Window Chrome */}
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs">
              <div className="px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-slate-400">enterprise.workspace.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 space-y-2 text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300">
                <p className="text-slate-500">// Angular 17+ Enterprise Architecture</p>
                <p>
                  <span className="text-indigo-400">@Component</span>
                  <span className="text-slate-400">({'{'}</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">selector:</span> <span className="text-emerald-300">'app-enterprise-root'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">changeDetection:</span> <span className="text-amber-300">ChangeDetectionStrategy.OnPush</span>
                </p>
                <p className="text-slate-400">{'}'})</p>
                <p>
                  <span className="text-indigo-400">export class</span> <span className="text-amber-200">JudicialPlatformEngine</span> <span className="text-slate-400">{'{'}</span>
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">// Reactive Stream Architecture</span>
                </p>
                <p className="pl-4">
                  <span className="text-indigo-300">readonly</span> <span className="text-sky-300">state =</span> <span className="text-amber-300">signal</span><span className="text-slate-400">({'{'}</span>
                </p>
                <p className="pl-8 text-emerald-300">
                  client: <span className="text-white">'Egyptian Public Prosecution'</span>,
                </p>
                <p className="pl-8 text-emerald-300">
                  engineer: <span className="text-white">'Bassem Hussein'</span>,
                </p>
                <p className="pl-8 text-emerald-300">
                  streams: <span className="text-sky-300">'RxJS 7+ Reactive State'</span>,
                </p>
                <p className="pl-8 text-emerald-300">
                  reliability: <span className="text-amber-300">'100% OnPush 60FPS'</span>
                </p>
                <p className="pl-4 text-slate-400">{'}'});</p>
                <p className="text-slate-400">{'}'}</p>
              </div>

              {/* Bottom Runtime Telemetry Bar */}
              <div className="px-3.5 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-sky-400 font-semibold">Angular v19.x · Signals</span>
                <span className="text-slate-500 font-mono">Cairo, Egypt</span>
              </div>
            </div>

            {/* Floating 3D Depth Card 1: Experience */}
            <div className="absolute -top-3 -right-3 bg-white dark:bg-[#161622] border border-slate-200 dark:border-white/15 rounded-xl px-3.5 py-2 shadow-lg hidden sm:block preserve-3d translate-z-30">
              <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-neutral-400">
                Track Record
              </p>
              <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-[#8B7FFF]" />
                2+ Years Enterprise
              </p>
            </div>

            {/* Floating 3D Depth Card 2: GDSC Campus Lead */}
            <div className="absolute -bottom-3 -left-3 bg-white dark:bg-[#161622] border border-slate-200 dark:border-white/15 rounded-xl px-3.5 py-2 shadow-lg hidden sm:block preserve-3d translate-z-30">
              <p className="text-[10px] font-mono uppercase text-sky-600 dark:text-[#00E5FF]">
                Community Leadership
              </p>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">
                Google DSC Campus Lead
              </p>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Parallax Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-neutral-500">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-indigo-600 dark:text-[#8B7FFF]" />
        </motion.div>
      </div>
    </section>
  );
};
