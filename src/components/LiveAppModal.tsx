import React, { useState } from "react";
import {
  X,
  ExternalLink,
  RotateCw,
  Monitor,
  Tablet,
  Smartphone,
  Github,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ProjectItem } from "../data/portfolioData";

interface LiveAppModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LiveAppModal: React.FC<LiveAppModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen || !project) return null;

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[400px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "max-w-full";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-7xl h-[92vh] bg-slate-100 dark:bg-[#0D0D14] rounded-2xl border border-slate-300 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col">
        {/* Top Browser Chrome Bar */}
        <div className="px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#151520] flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Left: Window Controls + Project Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-heading truncate max-w-[130px] sm:max-w-xs">
                {project.title}
              </h3>
              <span className="hidden md:inline px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-indigo-50 dark:bg-[#8B7FFF]/10 text-indigo-700 dark:text-[#8B7FFF] border border-indigo-200 dark:border-[#8B7FFF]/20">
                {project.badge || "Live Interactive App"}
              </span>
            </div>
          </div>

          {/* Center: Simulated Address Bar */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-neutral-300 max-w-md w-full truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="truncate select-all">{project.displayUrl || project.liveDemoUrl}</span>
          </div>

          {/* Right: Viewport Controls + External Launch + Close */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Viewport switcher */}
            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <button
                onClick={() => setViewport("desktop")}
                title="Desktop View (100%)"
                className={`p-1.5 rounded-md transition-colors ${
                  viewport === "desktop"
                    ? "bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-2xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport("tablet")}
                title="Tablet View (768px)"
                className={`p-1.5 rounded-md transition-colors ${
                  viewport === "tablet"
                    ? "bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-2xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewport("mobile")}
                title="Mobile View (390px)"
                className={`p-1.5 rounded-md transition-colors ${
                  viewport === "mobile"
                    ? "bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-2xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Reload iframe */}
            <button
              onClick={handleReload}
              title="Reload Live App"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Direct Open in New Tab */}
            <a
              href={project.displayUrl || project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              title="Open in new browser tab"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#796bf0] text-white shadow-xs transition-colors"
            >
              <span className="hidden sm:inline">Open Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* GitHub Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              title="View Repository on GitHub"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Iframe Body Area */}
        <div className="flex-1 bg-slate-900 overflow-hidden relative flex items-center justify-center p-0 sm:p-2">
          {isLoading && (
            <div className="absolute inset-0 z-20 bg-slate-950 flex flex-col items-center justify-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
              <p className="text-xs font-mono text-slate-400">
                Loading live application from GitHub Pages...
              </p>
            </div>
          )}

          <div
            className={`w-full h-full ${getViewportWidth()} transition-all duration-300 mx-auto rounded-none sm:rounded-xl overflow-hidden shadow-2xl bg-white`}
          >
            <iframe
              key={iframeKey}
              src={project.liveDemoUrl}
              title={project.title}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>

        {/* Bottom Status & Info Ribbon */}
        <div className="px-4 py-2.5 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#151520] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-neutral-400 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Interactive live instance running inside secure sandbox container</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>Tech:</span>
            <span className="text-indigo-600 dark:text-[#8B7FFF] font-semibold">
              {project.techStack.slice(0, 4).join(" · ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
