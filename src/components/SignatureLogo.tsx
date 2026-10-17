import React from "react";

export interface SignatureLogoProps {
  language?: "en" | "ar";
  className?: string;
  variant?: "navbar" | "hero" | "stamp" | "footer" | "display";
  animated?: boolean;
}

export const SignatureLogo: React.FC<SignatureLogoProps> = ({
  language = "en",
  className = "",
  variant = "navbar",
  animated = true,
}) => {
  // Size presets tailored for each placement
  const sizePresets = {
    navbar: {
      text: "text-xl sm:text-2xl md:text-[26px]",
      underline: "w-28 sm:w-36 h-3.5 sm:h-4",
      seal: "w-5 h-5 sm:w-6 sm:h-6 text-[9px] sm:text-[10px]",
    },
    hero: {
      text: "text-3xl sm:text-4xl",
      underline: "w-44 sm:w-56 h-5 sm:h-6",
      seal: "w-8 h-8 text-xs",
    },
    stamp: {
      text: "text-xl sm:text-2xl",
      underline: "w-32 sm:w-40 h-4",
      seal: "w-7 h-7 text-[11px]",
    },
    footer: {
      text: "text-2xl sm:text-3xl",
      underline: "w-36 sm:w-44 h-4 sm:h-5",
      seal: "w-7 h-7 text-[11px]",
    },
    display: {
      text: "text-4xl sm:text-5xl",
      underline: "w-56 sm:w-72 h-6 sm:h-7",
      seal: "w-10 h-10 text-sm",
    },
  }[variant] || {
    text: "text-2xl sm:text-[26px]",
    underline: "w-32 sm:w-36 h-4",
    seal: "w-6 h-6 text-[10px]",
  };

  const isAr = language === "ar";

  if (isAr) {
    // ========================================================
    // Authentic Executive Arabic Signature: "باسم حسين"
    // Rendered with classical Ruq'ah calligraphic heritage (خط الرقعة التوقيعي)
    // using 'Aref Ruqaa' with zero letter overlapping and perfect native glyph shaping.
    // ========================================================
    return (
      <div
        className={`inline-flex flex-col items-start select-none group transition-all duration-300 ${className}`}
        title="باسم حسين - التوقيع الشخصي المعتمد"
        role="img"
        aria-label="توقيع باسم حسين"
        dir="rtl"
      >
        <div className="relative inline-flex items-center gap-2">
          {/* Ambient Fountain-Pen Ink Glow */}
          <span
            aria-hidden="true"
            className="absolute inset-0 blur-md opacity-20 dark:opacity-30 pointer-events-none text-blue-500 font-bold select-none"
            style={{ fontFamily: "'Aref Ruqaa', 'Reem Kufi', cursive" }}
          >
            باسم حسين
          </span>

          {/* Primary Calligraphic Signature Name */}
          <span
            className={`relative font-bold leading-none inline-block transition-transform duration-300 group-hover:scale-[1.02] ${sizePresets.text} bg-gradient-to-l from-neutral-950 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent`}
            style={{
              fontFamily: "'Aref Ruqaa', 'Reem Kufi', cursive",
              transform: "rotate(-2deg)",
              transformOrigin: "bottom right",
              letterSpacing: "0.02em",
            }}
          >
            باسم حسين
          </span>

          {/* Optional Executive Monogram Seal for Stamp variant */}
          {variant === "stamp" && (
            <span
              className={`shrink-0 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center font-mono ${sizePresets.seal}`}
              title="ختم معتمد"
            >
              ب.ح
            </span>
          )}
        </div>

        {/* Executive Pen Paraph Underline (شطحة قلم حبر فاخرة تحت التوقيع) */}
        <svg
          viewBox="0 0 200 24"
          className={`${sizePresets.underline} -mt-1 sm:-mt-1.5 overflow-visible`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`paraphGradAr-${variant}`} x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-primary, #3B82F6)" />
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* Swift fluid flourish from right to left */}
          <path
            d="M 195 6 
               C 150 14, 90 15, 25 12 
               C 14 11, 6 8, 4 4 
               C 2 1, 6 2, 12 5 
               C 20 8, 32 10, 48 10 
               L 95 10"
            stroke={`url(#paraphGradAr-${variant})`}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? "transition-all duration-500 group-hover:stroke-[2.6px]" : ""}
          />
        </svg>
      </div>
    );
  }

  // ========================================================
  // Authentic English Signature: "Bassem Hussein"
  // Rendered with elegant executive cursive script ('Caveat')
  // ========================================================
  return (
    <div
      className={`inline-flex flex-col items-start select-none group transition-all duration-300 ${className}`}
      title="Bassem Hussein - Official Signature"
      role="img"
      aria-label="Bassem Hussein Signature"
      dir="ltr"
    >
      <div className="relative inline-flex items-center gap-2">
        {/* Ambient Glow */}
        <span
          aria-hidden="true"
          className="absolute inset-0 blur-md opacity-20 dark:opacity-30 pointer-events-none text-blue-500 font-bold select-none"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Bassem Hussein
        </span>

        {/* Primary Signature */}
        <span
          className={`relative font-bold leading-none inline-block transition-transform duration-300 group-hover:scale-[1.02] ${sizePresets.text} bg-gradient-to-r from-neutral-950 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent`}
          style={{
            fontFamily: "'Caveat', cursive",
            transform: "rotate(-3deg)",
            transformOrigin: "bottom left",
            letterSpacing: "0.01em",
          }}
        >
          Bassem Hussein
        </span>

        {/* Optional Monogram Seal for Stamp variant */}
        {variant === "stamp" && (
          <span
            className={`shrink-0 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center font-mono ${sizePresets.seal}`}
            title="Verified Signature"
          >
            BH
          </span>
        )}
      </div>

      {/* Executive Pen Paraph Underline */}
      <svg
        viewBox="0 0 200 24"
        className={`${sizePresets.underline} -mt-1 sm:-mt-1.5 overflow-visible`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`paraphGradEn-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-primary, #3B82F6)" />
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        <path
          d="M 5 6 
             C 50 14, 110 15, 175 12 
             C 186 11, 194 8, 196 4 
             C 198 1, 194 2, 188 5 
             C 180 8, 168 10, 152 10 
             L 105 10"
          stroke={`url(#paraphGradEn-${variant})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? "transition-all duration-500 group-hover:stroke-[2.6px]" : ""}
        />
      </svg>
    </div>
  );
};
