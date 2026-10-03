import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import {
  CheckCircle2,
  Workflow,
  Cpu,
  Layers,
  Activity,
  Play,
  RotateCcw,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const { metrics } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<"reactive" | "solid" | "forms">("reactive");

  // Reactive simulation state
  const [streamEvents, setStreamEvents] = useState<string[]>([
    "Initialized BehaviorSubject<AppState>",
    "Registered OnPush ChangeDetectionStrategy",
  ]);
  const [searchQuery, setSearchQuery] = useState("Egyptian Case #8921");
  const [isProcessing, setIsProcessing] = useState(false);

  const simulateReactiveStream = () => {
    setIsProcessing(true);
    const newEvents = [
      `Dispatch: queryInput$ ('${searchQuery}')`,
      "Pipe: debounceTime(250ms)",
      "Pipe: distinctUntilChanged()",
      "Pipe: switchMap(api.fetchCaseRecord)",
      "Sync: signal.set(CaseRecordPayload)",
      "UI: OnPush change cycle triggered with zero DOM redraw penalty",
    ];

    setStreamEvents([]);
    newEvents.forEach((ev, idx) => {
      setTimeout(() => {
        setStreamEvents((prev) => [...prev, ev]);
        if (idx === newEvents.length - 1) {
          setIsProcessing(false);
        }
      }, (idx + 1) * 260);
    });
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
          <Workflow className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
          <span>01. Engineering Mindset & Bio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Engineering Scalable Interfaces with Mathematical Precision
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Bio & Core Philosophy */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-base sm:text-lg text-slate-700 dark:text-neutral-300 leading-relaxed">
            I am a Frontend Software Engineer based in Cairo, Egypt, dedicated to crafting resilient,
            enterprise-grade web architectures. With 2+ years of production experience across national
            institutions like the <strong className="text-slate-950 dark:text-white font-bold">Egyptian Public Prosecution</strong> and high-velocity
            e-commerce platforms like <strong className="text-slate-950 dark:text-white font-bold">Etmana</strong>, I bridge intricate business logic with fluid,
            accessible user experiences.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
            My engineering practice centers around <strong className="text-slate-900 dark:text-white">Angular (v17+ with Signals)</strong>, <strong className="text-slate-900 dark:text-white">RxJS reactive stream pipelines</strong>, and clean <strong className="text-slate-900 dark:text-white">SOLID/OOP principles</strong>. I believe that high-performing frontend systems must be predictable, maintainable, and type-safe from the ground up.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
            Furthermore, I actively harness modern <strong className="text-slate-900 dark:text-white">AI-assisted development tooling</strong> (Claude, Cursor, Copilot, Gemini API) to accelerate velocity, generate comprehensive test cases, and eliminate boilerplate while preserving uncompromising human architectural scrutiny.
          </p>

          {/* Key Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-bold font-heading text-indigo-600 dark:text-[#8B7FFF] tabular-nums">
                {metrics.yearsExp}
              </span>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-neutral-400 mt-1 font-medium">
                Years Production
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-bold font-heading text-sky-600 dark:text-[#00E5FF] tabular-nums">
                {metrics.companies}
              </span>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-neutral-400 mt-1 font-medium">
                Enterprise Orgs
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-bold font-heading text-emerald-600 dark:text-emerald-400 tabular-nums">
                {metrics.productionApps}
              </span>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-neutral-400 mt-1 font-medium">
                Core Modules
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-bold font-heading text-amber-600 dark:text-amber-400 tabular-nums">
                100%
              </span>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-neutral-400 mt-1 font-medium">
                Sprint Reliability
              </p>
            </div>
          </div>

          {/* Core Values Checklist */}
          <div className="space-y-2.5 pt-2">
            {[
              "Strict Type-Safety & Immutable State Management",
              "OnPush Change Detection with Zero Unnecessary Redraws",
              "Complex Reactive Forms with Dynamic Business Validation",
              "Bilingual RTL/LTR Architecture (Arabic Native & English)",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-[#8B7FFF] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Angular Architecture Sandbox */}
        <div className="lg:col-span-6 w-full">
          <TiltCard
            maxTilt={6}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] shadow-xl overflow-hidden"
          >
            {/* Terminal Window Chrome */}
            <div className="px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#181824] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-600 dark:text-neutral-400">
                  angular.architecture.telemetry
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">LIVE</span>
              </div>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#151520] p-1.5 gap-1.5 overflow-x-auto">
              <button
                onClick={() => setActiveTab("reactive")}
                className={`flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === "reactive"
                    ? "bg-white dark:bg-[#20202E] text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-indigo-600 dark:text-[#8B7FFF]" />
                <span>RxJS & Signals</span>
              </button>

              <button
                onClick={() => setActiveTab("solid")}
                className={`flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === "solid"
                    ? "bg-white dark:bg-[#20202E] text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-[#00E5FF]" />
                <span>SOLID Design</span>
              </button>

              <button
                onClick={() => setActiveTab("forms")}
                className={`flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === "forms"
                    ? "bg-white dark:bg-[#20202E] text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                <span>Reactive Forms</span>
              </button>
            </div>

            {/* Tab 1: Live RxJS Stream Visualizer */}
            {activeTab === "reactive" && (
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-700 dark:text-neutral-300">
                  <span className="font-mono">Simulate Enterprise Search Stream:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={simulateReactiveStream}
                      disabled={isProcessing}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#796bf0] text-white disabled:opacity-50 transition-all shadow-xs"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isProcessing ? "Executing..." : "Dispatch Stream"}</span>
                    </button>
                    <button
                      onClick={() => setStreamEvents(["Stream reset. Ready for event trigger."])}
                      className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-neutral-800 text-slate-500"
                      title="Reset Stream"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter query..."
                    className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#181824] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* Event Logs */}
                <div className="bg-slate-900 text-slate-200 rounded-lg p-3.5 font-mono text-xs space-y-1.5 min-h-[170px] max-h-[220px] overflow-y-auto">
                  <div className="text-[11px] text-slate-400 pb-1 border-b border-slate-800 flex items-center justify-between">
                    <span>// ASYNC TELEMETRY PIPELINE</span>
                    <span className="text-sky-400 dark:text-[#00E5FF]">Angular v19.x</span>
                  </div>
                  {streamEvents.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 select-none">›</span>
                      <span className={idx === streamEvents.length - 1 ? "text-emerald-400 font-medium" : "text-slate-300"}>
                        {event}
                      </span>
                    </div>
                  ))}
                  {isProcessing && (
                    <div className="flex items-center gap-2 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      <span>Switching streams & canceling stale HTTP request...</span>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-slate-500 dark:text-neutral-400 font-mono">
                  Engineered with <code>distinctUntilChanged()</code> and <code>switchMap()</code> to prevent race conditions during high-volume enterprise legal lookups.
                </p>
              </div>
            )}

            {/* Tab 2: SOLID Architecture Diagram */}
            {activeTab === "solid" && (
              <div className="p-4 sm:p-5 space-y-4">
                <div className="text-xs text-slate-700 dark:text-neutral-300">
                  <p className="font-bold text-slate-900 dark:text-white mb-1">
                    Multi-Platform Enterprise Workspace Structure
                  </p>
                  <p className="text-slate-500 dark:text-neutral-400 text-xs">
                    As implemented for the Egyptian Public Prosecution:
                  </p>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#181824] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-indigo-600 dark:text-[#8B7FFF] font-semibold">1. Core Layer (Singleton)</span>
                    <span className="text-slate-500 text-[11px]">Auth, Interceptors, Telemetry</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#181824] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sky-600 dark:text-[#00E5FF] font-semibold">2. Shared UI Component Library</span>
                    <span className="text-slate-500 text-[11px]">Stateless, Pure Inputs/Outputs</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#181824] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-emerald-600 dark:text-emerald-500 font-semibold">3. Feature Modules (Lazy Loaded)</span>
                    <span className="text-slate-500 text-[11px]">Case Filing, Doctor Portal, Triage</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#181824] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-amber-600 dark:text-amber-500 font-semibold">4. Data Access (Repository Pattern)</span>
                    <span className="text-slate-500 text-[11px]">Java REST API Adapter + RxJS</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-[#8B7FFF]/10 border border-indigo-200 dark:border-[#8B7FFF]/20 text-[11px] text-slate-700 dark:text-neutral-300">
                  <span className="font-bold text-indigo-600 dark:text-[#8B7FFF]">Impact:</span> Zero circular dependencies, 40% reduction in regression defects, and rapid onboarding for multi-developer teams.
                </div>
              </div>
            )}

            {/* Tab 3: Dynamic Reactive Forms Showcase */}
            {activeTab === "forms" && (
              <div className="p-4 sm:p-5 space-y-4">
                <div className="text-xs text-slate-700 dark:text-neutral-300">
                  <p className="font-bold text-slate-900 dark:text-white mb-1">
                    Complex Dynamic Validation Architecture
                  </p>
                  <p className="text-slate-500 dark:text-neutral-400 text-xs">
                    Built custom Angular validator directives and cross-field validation pipelines:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#181824] border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="font-mono text-indigo-600 dark:text-[#8B7FFF] font-semibold">Cross-Field Checks</span>
                    <p className="text-[11px] text-slate-600 dark:text-neutral-400">
                      Synchronized legal filing date dependencies and court tier requirements.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#181824] border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="font-mono text-sky-600 dark:text-[#00E5FF] font-semibold">Async National ID Validator</span>
                    <p className="text-[11px] text-slate-600 dark:text-neutral-400">
                      Debounced validation against official Egyptian institutional registries.
                    </p>
                  </div>
                </div>

                <pre className="p-3 rounded-lg bg-slate-900 text-slate-200 text-[11px] font-mono overflow-x-auto leading-relaxed">
                  <code>{`// Angular 17+ Custom Async Validator
export function nationalIdValidator(registryService: RegistryService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(300).pipe(
      switchMap(() => registryService.verifyCitizenId(control.value)),
      map(res => (res.isValid ? null : { invalidNationalId: true })),
      catchError(() => of(null))
    );
  };
}`}</code>
                </pre>
              </div>
            )}
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
