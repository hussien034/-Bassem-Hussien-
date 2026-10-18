import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Laptop,
  Monitor,
  Coffee,
  Lightbulb,
  Sparkles,
  BookOpen,
  Eye,
  Camera,
  Layers,
  Flame,
  Check,
  Maximize2
} from "lucide-react";

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  icon: any;
  titleEn: string;
  titleAr: string;
  badgeEn: string;
  badgeAr: string;
  descEn: string;
  descAr: string;
  tagColor: string;
}

export const WorkspaceSection: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  // Image state: check localStorage first, then fallback to public asset or stylized illustration
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>("coffee");
  const [lampOn, setLampOn] = useState(true);
  const [steamActive, setSteamActive] = useState(true);
  const [screensGlow, setScreensGlow] = useState(true);
  const [hotspotsVisible, setHotspotsVisible] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("bassem_workspace_image");
    if (saved) {
      setCustomImage(saved);
    } else {
      // Check if static workspace_desk.jpg is present in assets
      const img = new Image();
      img.src = "./assets/images/workspace_desk.jpg";
      img.onload = () => setCustomImage("./assets/images/workspace_desk.jpg");
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImage(result);
          try {
            localStorage.setItem("bassem_workspace_image", result);
          } catch (err) {
            console.warn("Image too large for localStorage, keeping in state", err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const hotspots: Hotspot[] = [
    {
      id: "laptop",
      x: 23,
      y: 54,
      icon: Laptop,
      titleEn: "HP EliteBook Coding Rig",
      titleAr: "لابتوب التطوير الأساسي (HP EliteBook)",
      badgeEn: "Core IDE",
      badgeAr: "بيئة البرمجة",
      descEn: "Running VS Code with custom dark obsidian theme, strict TypeScript compiler, RxJS reactive operators, and Git version control.",
      descAr: "يعمل عليه VS Code بتهيئة داكنة مخصصة، ومترجم TypeScript الصارم، وحزم RxJS، والتحكم في الإصدارات Git.",
      tagColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    },
    {
      id: "monitor",
      x: 62,
      y: 35,
      icon: Monitor,
      titleEn: "Wide Secondary Workspace Display",
      titleAr: "شاشة العرض الكبيرة (HP Display)",
      badgeEn: "Multi-Screen",
      badgeAr: "شاشة مضاعفة",
      descEn: "Dedicated to architecture documentation, data test automation with Python, micro-frontend previews, and dev tools inspections.",
      descAr: "مخصصة للتوثيق الهندسي، وأتمتة الاختبارات ببايثون، ومراقبة مسارات الـ Micro-frontends وأدوات فحص المتصفح.",
      tagColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    },
    {
      id: "coffee",
      x: 58,
      y: 84,
      icon: Coffee,
      titleEn: "The Fuel: Double Espresso",
      titleAr: "وقود التركيز: دوبل إسبريسو",
      badgeEn: "Coffee Energy",
      badgeAr: "طاقة مستمرة",
      descEn: "Double shot espresso driving deep flow-state sessions, complex debugging rounds, and high-velocity architectural planning.",
      descAr: "جرعة إسبريسو مركزة للحفاظ على حالة التركيز الذهني العميق (Flow State) أثناء حل المشكلات المعقدة وتصميم الأنظمة.",
      tagColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    },
    {
      id: "lamp",
      x: 91,
      y: 50,
      icon: Lightbulb,
      titleEn: "Focused Workspace Lighting",
      titleAr: "إضاءة المكتب الزرقاء المركزة",
      badgeEn: "4000K Lighting",
      badgeAr: "إضاءة مريحة",
      descEn: "Balanced night lamp casting optimal blue/white illumination to eliminate eye strain during extensive coding marathons.",
      descAr: "إضاءة ليلية متوازنة تقلل إجهاد العين وتوفر بيئة مثالية لجلسات البرمجة الليلية الطويلة.",
      tagColor: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
    },
    {
      id: "calligraphy",
      x: 20,
      y: 12,
      icon: Sparkles,
      titleEn: "Heritage & Motivation Art",
      titleAr: "لوحات الخط العربي والتحفيز",
      badgeEn: "Arabic Calligraphy",
      badgeAr: "خط عربي وأمل",
      descEn: "Inspiring calligraphy wall art prints ('أمل' / Hope, 'علونا وافترقنا') representing Egyptian heritage, perseverance, and vision.",
      descAr: "لوحات جدارية تحفيزية بخطوط عربية أصيلة ('أمل' و 'علونا وافترقنا') تعكس الهوية المصرية والإصرار على التميز.",
      tagColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    },
    {
      id: "notebook",
      x: 77,
      y: 78,
      icon: BookOpen,
      titleEn: "System Design Journal & Specs",
      titleAr: "دفتر التخطيط والمخططات المعمارية",
      badgeEn: "Analog Blueprint",
      badgeAr: "مخططات يدوية",
      descEn: "Pen-and-paper architectural blueprints, edge-case trees, and component state charts drawn before writing a single line of code.",
      descAr: "مخططات هندسية مرسومة يدوياً وهياكل البيانات وحالات الحافة قبل كتابة أي سطر برمجي لضمان المتانة.",
      tagColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    },
  ];

  const currentHotspot = hotspots.find((h) => h.id === activeHotspot) || hotspots[0];

  return (
    <section id="workspace" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
              <Camera className="w-3.5 h-3.5" />
              <span>{isAr ? "بيئة العمل الحقيقية" : "AUTHENTIC DEV RIG"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {isAr ? "مساحة العمل والهندسة البرمجية" : "Behind The Code: The Battle Station"}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {isAr
                ? "إلقاء نظرة حصرية على محطة عملي الحقيقية؛ حيث تُكتب الأكواد المعقدة، وتُبنى أنظمة Angular المؤسسية وتطبيقات الذكاء الاصطناعي على مدار الساعة."
                : "An exclusive look inside my real engineering battle station; where scalable Angular enterprise architectures and AI workflows come to life."}
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 backdrop-blur-md">
            <button
              onClick={() => setLampOn(!lampOn)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                lampOn
                  ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/40"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              title={isAr ? "تبديل إضاءة اللمبة" : "Toggle Desk Lamp"}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{isAr ? (lampOn ? "إضاءة: تشغيل" : "إضاءة: مطفأة") : lampOn ? "Lamp: ON" : "Lamp: OFF"}</span>
            </button>

            <button
              onClick={() => setSteamActive(!steamActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                steamActive
                  ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              title={isAr ? "تبديل بخار القهوة" : "Toggle Coffee Steam"}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>{isAr ? (steamActive ? "بخار: نشط" : "بخار: هادئ") : steamActive ? "Steam: ON" : "Steam: OFF"}</span>
            </button>

            <button
              onClick={() => setScreensGlow(!screensGlow)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                screensGlow
                  ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              title={isAr ? "توهج الشاشات" : "Toggle Screen Glow"}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{isAr ? (screensGlow ? "توهج: فعال" : "توهج: هادئ") : screensGlow ? "Glow: ON" : "Glow: OFF"}</span>
            </button>

            <button
              onClick={() => setHotspotsVisible(!hotspotsVisible)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                hotspotsVisible
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
              title={isAr ? "إظهار/إخفاء نقاط الفحص" : "Toggle Hotspots"}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isAr ? (hotspotsVisible ? "النقاط: ظاهرة" : "النقاط: مخفية") : hotspotsVisible ? "Pins: ON" : "Pins: OFF"}</span>
            </button>

            {/* Custom Upload Action */}
            <label className="cursor-pointer px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 bg-neutral-200 dark:bg-white/10 hover:bg-neutral-300 dark:hover:bg-white/20 text-neutral-800 dark:text-neutral-200 transition-colors">
              <Camera className="w-3.5 h-3.5" />
              <span>{isAr ? "تحديث الصورة" : "Update Photo"}</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Workspace Canvas (Col 8) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-neutral-300 dark:border-white/10 bg-neutral-950 shadow-2xl relative group">
            {/* Aspect Ratio Box 16:10 for cinematic desk view */}
            <div className="relative aspect-[16/10] w-full overflow-hidden select-none">
              {/* The Actual Real Desk Image OR Stylized Authentic Canvas */}
              {customImage ? (
                <img
                  src={customImage}
                  alt="Bassem Hussein Developer Workspace Desk"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                />
              ) : (
                /* Fallback Stylized Interactive Vector Representation of Bassem's exact desk */
                <svg
                  viewBox="0 0 1200 750"
                  className="w-full h-full object-cover"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="wallDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1811" />
                      <stop offset="40%" stopColor="#2a2414" />
                      <stop offset="100%" stopColor="#0d0d0f" />
                    </linearGradient>
                    <linearGradient id="deskWood" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#181310" />
                      <stop offset="50%" stopColor="#251c16" />
                      <stop offset="100%" stopColor="#0f0b09" />
                    </linearGradient>
                    <linearGradient id="screenCodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d1117" />
                      <stop offset="100%" stopColor="#161b22" />
                    </linearGradient>
                    <radialGradient id="lampGlowLight" cx="90%" cy="35%" r="70%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity={lampOn ? "0.35" : "0"} />
                      <stop offset="60%" stopColor="#0284c7" stopOpacity={lampOn ? "0.08" : "0"} />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Dark Room Wall with golden-yellow accent corner */}
                  <rect width="1200" height="520" fill="url(#wallDark)" />

                  {/* Desk Surface */}
                  <polygon points="0,500 1200,480 1200,750 0,750" fill="url(#deskWood)" />

                  {/* Calligraphy Posters on Wall (Top-Left, matching Bassem's real wall) */}
                  <g transform="translate(40, 20)">
                    {/* Poster 1 */}
                    <rect x="0" y="0" width="80" height="90" rx="4" fill="#2d281a" stroke="#4a3e20" strokeWidth="2" />
                    <text x="40" y="55" fontFamily="'Cairo', serif" fontSize="24" fontWeight="bold" fill="#fef08a" textAnchor="middle">أمل</text>

                    {/* Poster 2 */}
                    <rect x="95" y="0" width="80" height="90" rx="4" fill="#1b2a24" stroke="#234237" strokeWidth="2" />
                    <text x="135" y="50" fontFamily="'Cairo', serif" fontSize="14" fontWeight="bold" fill="#86efac" textAnchor="middle">علونا</text>
                    <text x="135" y="70" fontFamily="'Cairo', serif" fontSize="14" fontWeight="bold" fill="#86efac" textAnchor="middle">وافترقنا</text>

                    {/* Poster 3 */}
                    <rect x="190" y="0" width="80" height="90" rx="4" fill="#2a1f1d" stroke="#482924" strokeWidth="2" />
                    <text x="230" y="55" fontFamily="'Cairo', serif" fontSize="20" fontWeight="bold" fill="#fca5a5" textAnchor="middle">يقين</text>

                    {/* Row 2 Posters */}
                    <rect x="0" y="100" width="80" height="85" rx="4" fill="#1f232b" stroke="#333b47" strokeWidth="2" />
                    <text x="40" y="148" fontFamily="'JetBrains Mono', monospace" fontSize="13" fontWeight="bold" fill="#93c5fd" textAnchor="middle">&lt;CODE/&gt;</text>
                    <rect x="95" y="100" width="80" height="85" rx="4" fill="#26231d" stroke="#3f382b" strokeWidth="2" />
                    <text x="135" y="148" fontFamily="'Cairo', serif" fontSize="16" fontWeight="bold" fill="#fde047" textAnchor="middle">شغف</text>
                  </g>

                  {/* Big Monitor in Center (HP Style) */}
                  <g transform="translate(480, 120)">
                    {/* Stand & Base */}
                    <rect x="250" y="320" width="20" height="80" fill="#2d3748" rx="2" />
                    <ellipse cx="260" cy="405" rx="75" ry="15" fill="#1a202c" stroke="#4a5568" strokeWidth="1.5" />
                    {/* Monitor Bezel */}
                    <rect x="0" y="0" width="520" height="325" rx="10" fill="#0d1117" stroke="#30363d" strokeWidth="5" />
                    {/* Screen Content */}
                    <rect x="8" y="8" width="504" height="305" rx="6" fill="url(#screenCodeGrad)" />
                    {/* VS Code title bar */}
                    <rect x="8" y="8" width="504" height="22" fill="#161b22" />
                    <circle cx="22" cy="19" r="4" fill="#ff5f56" />
                    <circle cx="34" cy="19" r="4" fill="#ffbd2e" />
                    <circle cx="46" cy="19" r="4" fill="#27c93f" />
                    <text x="70" y="24" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#8b949e">data_automation.py - VS Code</text>
                    {/* Code Lines on Screen */}
                    <text x="25" y="55" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#79c0ff">def print_sum(num1, num2):</text>
                    <text x="45" y="75" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#e6edf3">  try:</text>
                    <text x="65" y="95" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#7ee787">    print(num1 + num2)</text>
                    <text x="45" y="115" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#ff7b72">  except Exception as e:</text>
                    <text x="65" y="135" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#a5d6ff">    print('Could not add those numbers')</text>
                    <text x="25" y="170" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#d2a8ff">print_sum(1, "hi")</text>
                    {/* Live Output */}
                    <rect x="20" y="200" width="480" height="95" rx="4" fill="#030712" stroke="#1f2937" strokeWidth="1" />
                    <text x="32" y="222" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#ef4444">Traceback (most recent call last):</text>
                    <text x="32" y="240" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#f87171">TypeError: unsupported operand type(s) for +: 'int' and 'str'</text>
                    <text x="32" y="260" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#10b981">✓ Exception Handled: Could not add those numbers</text>
                    <text x="32" y="280" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#38bdf8">&gt; Terminal Ready: py test_suite.py</text>
                  </g>

                  {/* Laptop on Left (HP Open Laptop) */}
                  <g transform="translate(70, 270)">
                    {/* Screen part tilted */}
                    <polygon points="40,0 350,0 360,260 20,260" fill="#111827" stroke="#374151" strokeWidth="3" />
                    <polygon points="50,12 340,12 350,248 30,248" fill="#0a0f1d" />
                    {/* Laptop Screen Code Lines */}
                    <text x="60" y="45" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#60a5fa">class ArchitectureService &#123;</text>
                    <text x="75" y="65" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#93c5fd">  readonly state$ = inject(Store);</text>
                    <text x="75" y="85" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#c084fc">  readonly isScalable = signal(true);</text>
                    <text x="75" y="105" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#34d399">  loadEnterpriseModules() &#123;</text>
                    <text x="90" y="125" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#f472b6">    return this.http.get('/api/v1');</text>
                    <text x="75" y="145" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#34d399">  &#125;</text>
                    <text x="60" y="165" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#60a5fa">&#125;</text>
                    {/* Laptop Keyboard Base */}
                    <polygon points="10,260 370,260 410,400 -20,400" fill="#9ca3af" stroke="#6b7280" strokeWidth="2" />
                    {/* Trackpad */}
                    <rect x="135" y="330" width="120" height="60" rx="4" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
                    {/* Keyboard Area */}
                    <polygon points="35,270 345,270 365,320 15,320" fill="#1f2937" rx="4" />
                  </g>

                  {/* Desk Lamp on Right */}
                  <g transform="translate(980, 260)">
                    {/* Base */}
                    <ellipse cx="80" cy="220" rx="60" ry="22" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
                    {/* Flexible neck */}
                    <path d="M 80 210 C 95 140, 60 70, 40 20" fill="none" stroke="#60a5fa" strokeWidth="16" strokeLinecap="round" />
                    {/* Lamp Head */}
                    <rect x="-40" y="-15" width="140" height="42" rx="20" fill="#1e40af" stroke="#60a5fa" strokeWidth="2" />
                    <rect x="-30" y="-5" width="120" height="24" rx="12" fill={lampOn ? "#bae6fd" : "#334155"} />
                  </g>

                  {/* Coffee Glass Cup in Foreground */}
                  <g transform="translate(630, 520)">
                    {/* Coffee liquid in glass */}
                    <path d="M 15 20 L 75 20 L 68 110 L 22 110 Z" fill="#382216" stroke="#d1d5db" strokeWidth="3" opacity="0.9" />
                    {/* Crema top */}
                    <ellipse cx="45" cy="22" rx="30" ry="8" fill="#a16207" />
                    {/* Glass reflections */}
                    <path d="M 22 30 L 26 100" stroke="#ffffff" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
                  </g>

                  {/* Notebook & AirPods Case on Right */}
                  <g transform="translate(730, 480)">
                    {/* Open Notebook */}
                    <polygon points="20,20 280,30 260,180 5,170" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                    <line x1="40" y1="50" x2="250" y2="58" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="40" y1="75" x2="250" y2="83" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="40" y1="100" x2="250" y2="108" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="40" y1="125" x2="220" y2="133" stroke="#94a3b8" strokeWidth="1.5" />
                    {/* AirPods Case */}
                    <ellipse cx="200" cy="50" rx="32" ry="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  </g>
                </svg>
              )}

              {/* Dynamic Overlay: Lamp Light Cone & Glow Effect */}
              {lampOn && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-60 mix-blend-screen"
                  style={{
                    background:
                      "radial-gradient(ellipse 65% 55% at 85% 45%, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.15) 45%, transparent 75%)",
                  }}
                />
              )}

              {/* Dynamic Overlay: Screen Backlight Glow */}
              {screensGlow && (
                <>
                  {/* Big Monitor Glow */}
                  <div
                    className="absolute top-[20%] left-[45%] w-[40%] h-[40%] pointer-events-none transition-opacity duration-700 opacity-35 mix-blend-screen blur-2xl"
                    style={{
                      background: "radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, transparent 70%)",
                    }}
                  />
                  {/* Laptop Screen Glow */}
                  <div
                    className="absolute top-[35%] left-[10%] w-[30%] h-[30%] pointer-events-none transition-opacity duration-700 opacity-40 mix-blend-screen blur-xl"
                    style={{
                      background: "radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%)",
                    }}
                  />
                </>
              )}

              {/* Dynamic Overlay: Rising Coffee Steam Particles */}
              {steamActive && (
                <div className="absolute left-[54%] sm:left-[55%] bottom-[20%] sm:bottom-[22%] pointer-events-none w-16 h-28 overflow-visible flex justify-center">
                  <span className="w-2 h-14 bg-white/40 rounded-full blur-md animate-ping duration-1000 origin-bottom" style={{ animationDuration: "2.4s" }} />
                  <span className="w-1.5 h-16 bg-cyan-200/50 rounded-full blur-sm -ml-2 -mt-4 animate-pulse origin-bottom" style={{ animationDuration: "1.8s" }} />
                  <span className="w-2.5 h-12 bg-amber-100/35 rounded-full blur-md ml-1 animate-ping origin-bottom" style={{ animationDuration: "3.1s" }} />
                </div>
              )}

              {/* Vignette border for cinematic gaming/developer mood */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 90px rgba(0,0,0,0.85)",
                }}
              />

              {/* Interactive Hotspot Pins Overlaid on the Workspace */}
              {hotspotsVisible &&
                hotspots.map((spot) => {
                  const isSelected = activeHotspot === spot.id;
                  const IconComp = spot.icon;
                  return (
                    <div
                      key={spot.id}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin cursor-pointer"
                      onClick={() => setActiveHotspot(spot.id)}
                    >
                      {/* Pulsing beacon aura */}
                      <span className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping duration-1000" />

                      {/* Main Pin button */}
                      <button
                        className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                          isSelected
                            ? "bg-cyan-500 text-neutral-950 scale-125 ring-4 ring-cyan-400/30"
                            : "bg-neutral-900/90 text-cyan-400 border border-cyan-500/50 hover:scale-110 hover:border-cyan-400"
                        }`}
                        title={isAr ? spot.titleAr : spot.titleEn}
                      >
                        <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </button>

                      {/* Floating mini badge on hover */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-neutral-900/95 text-white text-[11px] font-mono px-2.5 py-1 rounded-lg border border-white/10 shadow-lg">
                        {isAr ? spot.titleAr : spot.titleEn}
                      </div>
                    </div>
                  );
                })}

              {/* Watermark in corner */}
              <div className="absolute bottom-3 right-4 z-10 flex items-center gap-2 text-[10px] font-mono text-white/50 bg-neutral-950/70 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Bassem Hussein // Workspace Station</span>
              </div>
            </div>
          </div>

          {/* Hotspot Detailed Inspector Card (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 shadow-xl relative overflow-hidden backdrop-blur-xl">
              {/* Top ambient color bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                    <currentHotspot.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
                      {isAr ? "عنصر الفحص المحدد" : "INSPECTION ELEMENT"}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                      {isAr ? currentHotspot.titleAr : currentHotspot.titleEn}
                    </h3>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${currentHotspot.tagColor}`}>
                  {isAr ? currentHotspot.badgeAr : currentHotspot.badgeEn}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {isAr ? currentHotspot.descAr : currentHotspot.descEn}
              </p>

              {/* Hotspot quick switch pills */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block mb-2">
                  {isAr ? "استكشف باقي أركان المكتب:" : "Click to inspect area:"}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {hotspots.map((spot) => {
                    const isSelected = activeHotspot === spot.id;
                    const Icon = spot.icon;
                    return (
                      <button
                        key={spot.id}
                        onClick={() => setActiveHotspot(spot.id)}
                        className={`p-2.5 rounded-xl text-xs font-medium text-left flex items-center gap-2 transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md font-semibold"
                            : "bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{isAr ? spot.badgeAr : spot.badgeEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>{isAr ? "مواصفات بيئة العمل اليومية" : "DAILY WORKSPACE SPECIFICATIONS"}</span>
              </div>
              <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                <li className="flex items-center justify-between">
                  <span>{isAr ? "نظام التشغيل:" : "Operating OS:"}</span>
                  <span className="font-mono text-neutral-900 dark:text-neutral-200">Windows 11 Pro + WSL2 Linux</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{isAr ? "محرر الأكواد:" : "Code Editor:"}</span>
                  <span className="font-mono text-neutral-900 dark:text-neutral-200">VS Code (Dark + GitHub Theme)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{isAr ? "إدارة الشاشات:" : "Display Configuration:"}</span>
                  <span className="font-mono text-neutral-900 dark:text-neutral-200">Dual-Screen Setup (Laptop + Ultrawide)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{isAr ? "المشروب الرسمي:" : "Daily Brew:"}</span>
                  <span className="font-mono text-neutral-900 dark:text-neutral-200">Double Espresso (Black)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
