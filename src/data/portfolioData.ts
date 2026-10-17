import gdscPlatformImg from "../assets/images/gdsc_platform_preview_1790996513884.jpg";
import cvBuilderImg from "../assets/images/cv_builder_preview_1790996524822.jpg";
import egBankImg from "../assets/images/eg_bank_preview_1790996537670.jpg";
import ipTrackingImg from "../assets/images/ip_tracking_preview_1790996550529.jpg";
import healthAiImg from "../assets/images/healthai_mockup_1790309055393.jpg";

export interface WorkExperience {
  id: string;
  role: string;
  roleAr?: string;
  company: string;
  companyAr?: string;
  period: string;
  periodAr?: string;
  location: string;
  locationAr?: string;
  summary: string;
  summaryAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  techStack: string[];
  metrics?: string;
  metricsAr?: string;
}

export interface SkillCategory {
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
  skills: {
    name: string;
    level: string; // e.g. "Expert", "Advanced", "Proficient"
    levelAr?: string;
    iconName?: string;
    highlight?: boolean;
    color?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  category: string;
  categoryAr?: string;
  role: string;
  roleAr?: string;
  description: string;
  descriptionAr?: string;
  summaryAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  techStack: string[];
  imagePath: string;
  liveDemoUrl: string;
  displayUrl?: string;
  githubUrl: string;
  isLiveEmbeddable?: boolean;
  badge?: string;
  badgeAr?: string;
  features?: {
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
  }[];
}

export interface FeaturedProject {
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  role: string;
  roleAr?: string;
  description: string;
  descriptionAr?: string;
  summaryAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  techStack: string[];
  imagePath: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  features: {
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
  }[];
}

export interface CommunityLeadership {
  title: string;
  titleAr?: string;
  organization: string;
  organizationAr?: string;
  period: string;
  periodAr?: string;
  summary: string;
  summaryAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  badge: string;
  badgeAr?: string;
  impactMetrics: string[];
  impactMetricsAr?: string[];
  hasRecommendationLetter?: boolean;
  letterPdfUrl?: string;
}

export interface GoogleRecommendationLetter {
  title: string;
  titleAr?: string;
  issuer: string;
  date: string;
  dateAr?: string;
  signerName: string;
  signerRole: string;
  signerRoleAr?: string;
  signerEmail: string;
  recipientOrganization: string;
  recipientOrganizationAr?: string;
  leadName: string;
  verifiedUrl: string;
  pdfUrl: string;
  quote: string;
  quoteAr?: string;
}

export interface Certification {
  title: string;
  titleAr?: string;
  issuer: string;
  issuerAr?: string;
  year: string;
  credentialId?: string;
}

export interface PortfolioData {
  personalInfo: {
    fullName: string;
    fullNameAr?: string;
    title: string;
    titleAr?: string;
    location: string;
    locationAr?: string;
    relocation: string;
    relocationAr?: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
    summary: string;
    summaryAr?: string;
    languages: { name: string; nameAr?: string; level: string; levelAr?: string }[];
  };
  metrics: {
    yearsExp: string;
    companies: string;
    productionApps: string;
    coreFocus: string;
    coreFocusAr?: string;
  };
  experiences: WorkExperience[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  featuredProject: FeaturedProject;
  leadership: CommunityLeadership[];
  education: {
    degree: string;
    degreeAr?: string;
    institution: string;
    institutionAr?: string;
    graduationDate: string;
    graduationDateAr?: string;
    location: string;
    locationAr?: string;
  };
  certifications: Certification[];
  googleRecommendationLetter: GoogleRecommendationLetter;
}

export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    fullName: "Bassem Hussein",
    fullNameAr: "باسم حسين",
    title: "Frontend Software Engineer | Angular & AI-Assisted Development",
    titleAr: "مهندس برمجيات واجهات أمامية | متخصص Angular وحلول الذكاء الاصطناعي",
    location: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    relocation: "Open to relocate",
    relocationAr: "مستعد للانتقال للعمل دولياً",
    email: "bassemh594@gmail.com",
    phone: "+20 101 622 6031",
    githubUrl: "https://github.com/hussien034",
    linkedinUrl: "https://www.linkedin.com/in/bassem-hussien-130b24205/",
    summary:
      "Frontend Developer with 2+ years of experience building scalable, maintainable Angular applications for enterprise platforms. Strong in TypeScript, RxJS reactive state management, responsive UI engineering, and RESTful API integration. Focused on performance, clean architecture (SOLID/OOP), and shipping reliable features within Agile teams. Uses AI-assisted workflows to accelerate delivery without compromising code quality.",
    summaryAr:
      "مهندس واجهات أمامية بخبرة تزيد عن عامين في بناء تطبيقات Angular المؤسسية عالية الكفاءة والتوسع. متمكن بعمق من TypeScript وإدارة الحالة التفاعلية عبر RxJS، وهندسة واجهات الاستخدام سريعة الاستجابة، وربط واجهات RESTful APIs المؤسسية. يركز على معايير الأداء المتقدمة، والمعمارية النظيفة (SOLID/OOP)، وتسريع دورات التطوير بالذكاء الاصطناعي مع الحفاظ على أعلى معايير الجودة.",
    languages: [
      { name: "Arabic", nameAr: "العربية", level: "Native", levelAr: "اللغة الأم" },
      { name: "English", nameAr: "الإنجليزية", level: "Professional", levelAr: "مستوى احترافي متقدم" },
      { name: "German", nameAr: "الألمانية", level: "A2", levelAr: "مستوى أساسي A2" },
    ],
  },
  metrics: {
    yearsExp: "2+",
    companies: "3",
    productionApps: "6+",
    coreFocus: "Angular & AI",
    coreFocusAr: "Angular والذكاء الاصطناعي",
  },
  experiences: [
    {
      id: "intercom",
      role: "Frontend Developer",
      roleAr: "مطور واجهات أمامية (Frontend Developer)",
      company: "Intercom Enterprise",
      companyAr: "إنتركوم للمشاريع المؤسسية (Intercom)",
      period: "Sep 2025 – Present",
      periodAr: "سبتمبر 2025 – حتى الآن",
      location: "Cairo, Egypt",
      locationAr: "القاهرة، مصر",
      summary:
        "Develop and maintain enterprise-scale Angular applications for the Egyptian Public Prosecution within a shared Angular workspace powering multiple core business platforms.",
      summaryAr:
        "تطوير وصيانة تطبيقات Angular ضخمة على المستوى المؤسسي للنيابة العامة المصرية ضمن بيئة عمل Angular متكاملة تدير أنظمة الأعمال القضائية والخدمية الحيوية.",
      highlights: [
        "Architected reusable UI component libraries and complex reactive forms with dynamic schema-based validation driving critical legal workflows.",
        "Diagnosed and resolved subtle reactive state bugs across interconnected micro-modules, reducing recurring production UI defects.",
        "Integrated Angular applications with Java-based enterprise RESTful APIs, guaranteeing transactional data integrity and state synchronization.",
        "Delivered interactive operational dashboard and reporting features that streamlined daily judicial procedures for institutional end-users.",
        "Collaborated proactively with backend engineers, QA specialists, business analysts, and product owners across Agile sprints.",
      ],
      highlightsAr: [
        "تصميم وبناء مكتبات مكونات واجهة مستخدم قابلة لإعادة الاستخدام ونماذج تفاعلية (Reactive Forms) معقدة مدعومة بقواعد تحقق ديناميكية تدير مسارات العمل القضائي الحساسة.",
        "تشخيص وحل مشكلات إدارة الحالة التفاعلية غير المتزامنة عبر الوحدات البرمجية المترابطة، مما قلص أخطاء واجهات الاستخدام في بيئة الإنتاج بنسبة ملحوظة.",
        "ربط واجهات Angular بخدمات الـ RESTful APIs المؤسسية المبنية بلغة Java مع ضمان تكامل البيانات المعاملاتية وتزامن الحالة اللحظي.",
        "تطوير لوحات تحكم تشغيلية وتقارير تفاعلية ذللت الإجراءات القضائية اليومية للمستخدمين والموظفين في الهيئات القضائية.",
        "التعاون الفعال ضمن منهجية Agile مع مهندسي الباك إند، وأخصائيي فحص الجودة (QA)، ومحللي الأعمال، ومديري المنتجات.",
      ],
      techStack: ["Angular 17+", "TypeScript", "RxJS", "Reactive Forms", "Java REST APIs", "Enterprise Architecture"],
      metrics: "Core Public Prosecution platform workspace",
      metricsAr: "منظومة النيابة العامة الرقمية المتكاملة",
    },
    {
      id: "etmana",
      role: "Frontend Developer",
      roleAr: "مطور واجهات أمامية (Frontend Developer)",
      company: "Etmana",
      companyAr: "إتمنى (Etmana E-commerce)",
      period: "Dec 2024 – Jul 2025",
      periodAr: "ديسمبر 2024 – يوليو 2025",
      location: "Cairo, Egypt",
      locationAr: "القاهرة، مصر",
      summary:
        "Maintained and optimized consumer-facing Angular features for a high-traffic fashion e-commerce platform, strengthening checkout and account conversion flows.",
      summaryAr:
        "صيانة وتطوير ميزات واجهة المستخدم الموجهة للمستهلك لمنصة تجارة إلكترونية كبرى في قطاع الأزياء ذات حركة زيارات عالية، مع تعزيز مسارات إتمام الشراء وتسجيل الحسابات.",
      highlights: [
        "Engineered pixel-perfect, cross-device responsive layouts engineered for peak retail campaigns and diverse screen densities.",
        "Boosted perceived performance and initial load speeds through route-level lazy loading, asset preloading, and fine-grained bundle optimization.",
        "Partnered with UI/UX engineers to translate high-converting fashion checkout workflows into clean, reusable component definitions.",
        "Integrated RESTful services powering fast catalog listings, real-time inventory checking, secure session handling, and checkout pipelines.",
      ],
      highlightsAr: [
        "بناء واجهات متجاوبة بدقة متناهية (Pixel-Perfect) عبر كافة الهواتف والشاشات المختلفة لتحمل حملات التسوق الموسمية والمبيعات المكثفة.",
        "تسريع أداء التحميل الأولي وسرعة العرض من خلال التحميل الكسول (Lazy Loading) للمسارات وتحسين حزم التجميع (Bundle Optimization).",
        "التعاون الوثيق مع مصممي الـ UI/UX لتحويل مسارات إتمام الطلبات المعقدة إلى مكونات برمجية نظيفة وقابلة لإعادة الاستخدام.",
        "ربط خدمات RESTful المسؤولة عن تصفح كتالوج المنتجات اللحظي، والتحقق الفوري من المخزون، وإدارة الجلسات الآمنة وعمليات الدفع.",
      ],
      techStack: ["Angular", "TypeScript", "Tailwind CSS", "RxJS", "E-commerce Optimization", "REST APIs"],
      metrics: "Sub-second product listings & higher checkout conversion",
      metricsAr: "عرض للمنتجات في أجزاء من الثانية وزيادة نسبة إتمام الشراء",
    },
    {
      id: "nokia",
      role: "Frontend Developer Intern",
      roleAr: "متدرب تطوير واجهات أمامية",
      company: "Nokia",
      companyAr: "نوكيا مصر (Nokia)",
      period: "May 2023 – Dec 2023",
      periodAr: "مايو 2023 – ديسمبر 2023",
      location: "Cairo, Egypt",
      locationAr: "القاهرة، مصر",
      summary:
        "Contributed to development and maintenance of enterprise-grade Angular applications within Nokia's global engineering environment.",
      summaryAr:
        "المساهمة في بناء وصيانة تطبيقات Angular ذات المعايير المؤسسية العالية ضمن بيئة نوكيا الهندسية العالمية متعددة الجنسيات.",
      highlights: [
        "Developed responsive Angular UIs using TypeScript, HTML5, SCSS, and modular component-based architectural patterns.",
        "Refactored legacy template logic and component hierarchies to improve code maintainability and team velocity.",
        "Actively participated in rigorous peer code reviews and modern CI practices across multi-country cross-functional engineering teams.",
      ],
      highlightsAr: [
        "تطوير واجهات مستخدم متجاوبة باستخدام Angular و TypeScript و SCSS ومعمارية المكونات المعيارية النظيفة.",
        "إعادة هيكلة قوالب الكود القديمة (Refactoring) لتحسين قابلية الصيانة وتسهيل إضافة الميزات للفرق البرمجية.",
        "المشاركة الفعالة في مراجعات الكود الصارمة (Peer Code Reviews) وممارسات الـ CI/CD الحديثة ضمن فرق هندسية دولية.",
      ],
      techStack: ["Angular", "TypeScript", "SCSS", "Component Architecture", "Global CI/CD", "Enterprise Standards"],
      metrics: "Global engineering team standards & CI pipeline",
      metricsAr: "العمل وفق أعلى معايير الشركات التكنولوجية العالمية",
    },
  ],
  skillCategories: [
    {
      category: "Languages",
      categoryAr: "لغات البرمجة والأنظمة",
      description: "Foundational syntaxes and typing systems powering robust codebases",
      descriptionAr: "لغات البرمجة الأساسية ونظم الكتابة الصارمة التي تبني برمجيات فائقة الاستقرار",
      skills: [
        { name: "TypeScript", level: "Expert", levelAr: "خبير", highlight: true, color: "#3178C6" },
        { name: "JavaScript (ES6+)", level: "Expert", levelAr: "خبير", highlight: true, color: "#F7DF1E" },
        { name: "HTML5", level: "Expert", levelAr: "خبير", color: "#E34F26" },
        { name: "CSS3", level: "Expert", levelAr: "خبير", color: "#1572B6" },
        { name: "Sass/SCSS", level: "Advanced", levelAr: "متقدم", color: "#CC6699" },
        { name: "SQL", level: "Proficient", levelAr: "متمكن", color: "#4479A1" },
      ],
    },
    {
      category: "Frameworks & Reactive Core",
      categoryAr: "أطر العمل والنواة التفاعلية",
      description: "Modern component architectures, signals, and asynchronous data streams",
      descriptionAr: "معماريات المكونات الحديثة، الإشارات البرمجية (Signals)، وتدفقات البيانات غير المتزامنة",
      skills: [
        { name: "Angular (v17+)", level: "Expert", levelAr: "خبير", highlight: true, color: "#DD0031" },
        { name: "RxJS", level: "Expert", levelAr: "خبير", highlight: true, color: "#B7178C" },
        { name: "Angular CLI", level: "Expert", levelAr: "خبير", color: "#C3002F" },
        { name: "Angular Signals", level: "Advanced", levelAr: "متقدم", highlight: true, color: "#E0234E" },
        { name: "Reactive Forms", level: "Expert", levelAr: "خبير", color: "#D81B60" },
      ],
    },
    {
      category: "UI Libraries & Design Systems",
      categoryAr: "مكتبات الواجهات وأنظمة التصميم",
      description: "Component libraries, accessible styling, and responsive layout toolkits",
      descriptionAr: "مكتبات المكونات المعتمدة، التنسيق المتقن، وحزم التجاوب مع مختلف الشاشات",
      skills: [
        { name: "Angular Material", level: "Advanced", levelAr: "متقدم", highlight: true, color: "#7952B3" },
        { name: "NG-ZORRO", level: "Advanced", levelAr: "متقدم", color: "#1890FF" },
        { name: "PrimeNG", level: "Advanced", levelAr: "متقدم", color: "#007AD9" },
        { name: "Tailwind CSS", level: "Expert", levelAr: "خبير", highlight: true, color: "#06B6D4" },
        { name: "Bootstrap", level: "Proficient", levelAr: "متمكن", color: "#7952B3" },
      ],
    },
    {
      category: "Architecture & Engineering Principles",
      categoryAr: "المعمارية والمبادئ الهندسية",
      description: "Clean code design patterns, performance budgets, and algorithmic rigor",
      descriptionAr: "أنماط التصميم النظيف، ميزانيات الأداء البرمجي، والدقة الخوارزمية",
      skills: [
        { name: "SOLID Principles", level: "Advanced", levelAr: "متقدم", highlight: true },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", levelAr: "متقدم" },
        { name: "Code Splitting & Lazy Loading", level: "Expert", levelAr: "خبير", highlight: true },
        { name: "Responsive UI Engineering", level: "Expert", levelAr: "خبير" },
        { name: "Search Engine Optimization (SEO)", level: "Proficient", levelAr: "متمكن" },
        { name: "Data Structures & Algorithms (DSA)", level: "Proficient", levelAr: "متمكن" },
      ],
    },
    {
      category: "AI-Assisted Development",
      categoryAr: "تسريع التطوير بالذكاء الاصطناعي",
      description: "Leveraging cutting-edge LLMs and agentic tools to accelerate velocity",
      descriptionAr: "استغلال النماذج اللغوية وأدوات الذكاء الاصطناعي لرفع كفاءة وسرعة التسليم",
      skills: [
        { name: "GitHub Copilot", level: "Power User", levelAr: "مستخدم محترف", highlight: true, color: "#00E5FF" },
        { name: "Claude Sonnet / Opus", level: "Power User", levelAr: "مستخدم محترف", highlight: true, color: "#D97706" },
        { name: "Google Gemini 2.5/3", level: "Power User", levelAr: "مستخدم محترف", highlight: true, color: "#4285F4" },
        { name: "Cursor IDE & Agentic CLI", level: "Advanced", levelAr: "متقدم", color: "#8B5CF6" },
        { name: "Prompt Architecture & Refactoring", level: "Advanced", levelAr: "متقدم" },
      ],
    },
    {
      category: "Tools & Testing",
      categoryAr: "الأدوات وبيئات العمل والاختبار",
      description: "Version control, containerization basics, package managers, and inspection tools",
      descriptionAr: "إدارة الإصدارات، الحاويات، مديري الحزم، وأدوات الفحص والتحليل",
      skills: [
        { name: "Git & GitHub", level: "Advanced", levelAr: "متقدم", highlight: true },
        { name: "Postman / REST Testing", level: "Advanced", levelAr: "متقدم" },
        { name: "Chrome DevTools & Memory Profiler", level: "Expert", levelAr: "خبير" },
        { name: "npm / Yarn / pnpm", level: "Advanced", levelAr: "متقدم" },
        { name: "VS Code / WebStorm", level: "Expert", levelAr: "خبير" },
      ],
    },
  ],
  projects: [
    {
      id: "gdsc-platform",
      title: "GDSC Educational Platform",
      titleAr: "منصة نادي مطوري جوجل التعليمية",
      subtitle: "Interactive Student Learning & Course Tracking Platform",
      subtitleAr: "منصة تعليمية تفاعلية لمتابعة مسارات التعلم والمقررات",
      category: "Enterprise Angular App",
      categoryAr: "تطبيق Angular مؤسسي",
      role: "Lead Frontend Engineer & GDSC Campus Lead",
      roleAr: "قائد فريق الواجهات وقائد نادي GDSC",
      description:
        "An interactive educational platform designed and developed for Google Developer Student Clubs (GDSC) members. Features modular track learning, student enrollment pipelines, reactive forms validation, routing guards, and persistent state management.",
      descriptionAr:
        "منصة تعليمية تفاعلية صُممت خصيصاً لأعضاء نوادي مطوري جوجل للطلاب (GDSC). تتضمن مسارات تعلم معيارية، ونظام تسجيل طلابي متكامل، وتحقق تفاعلي من النماذج، ومسارات محمية بحراس التنقل (Guards).",
      highlights: [
        "Engineered with Angular 14+, Angular CLI, modular component hierarchy, and SCSS styling.",
        "Built complex Reactive Forms with custom dynamic validation directives for student onboarding.",
        "Managed asynchronous state streams via RxJS Observables, Subject stores, and LocalStorage synchronization.",
        "Created responsive, accessible navigation with Angular Router guards ensuring protected track modules.",
      ],
      highlightsAr: [
        "تم البناء باستخدام Angular 14+، ومكتبات Angular CLI، وهيكل مكونات برمجي منظم وتنسيق SCSS متقدم.",
        "بناء نماذج تفاعلية (Reactive Forms) معقدة بقواعد تحقق مخصصة لتسجيل الطلاب وتوزيع المسارات.",
        "إدارة تدفقات الحالة غير المتزامنة عبر RxJS Observables و Subject ومزامنة البيانات مع LocalStorage.",
        "تأمين وتوجيه المسارات بواسطة Angular Router Guards لضمان حماية المواد التعليمية للمسجلين فقط.",
      ],
      techStack: ["Angular 14+", "TypeScript", "RxJS", "Reactive Forms", "Routing Guards", "LocalStorage", "SCSS"],
      imagePath: gdscPlatformImg,
      liveDemoUrl: "https://hussien034.github.io/GDSC-Educational-Platform/",
      displayUrl: "https://hussien034.github.io/GDSC-Educational-Platform/main",
      githubUrl: "https://github.com/hussien034/GDSC-Educational-Platform",
      isLiveEmbeddable: true,
      badge: "Live Angular App",
      badgeAr: "تطبيق Angular حي",
    },
    {
      id: "cv-builder",
      title: "CV Builder",
      titleAr: "منشئ السيرة الذاتية التفاعلي",
      subtitle: "Dynamic Resume & Curriculum Vitae Creator",
      subtitleAr: "أداة ذكية لإنشاء وتخصيص السير الذاتية وتصديرها",
      category: "JavaScript & DOM Engineering",
      categoryAr: "هندسة جافاسكريبت ومعالجة DOM",
      role: "Frontend Developer",
      roleAr: "مطور واجهات أمامية",
      description:
        "Build your resumes in a few clicks. An interactive resume builder web application built with a strong focus on advanced JavaScript DOM & BOM manipulation, live preview rendering, and theme customizability.",
      descriptionAr:
        "أنشئ سيرتك الذاتية في ثوانٍ معدودة. تطبيق ويب تفاعلي يعتمد على التلاعب المتقدم بالـ DOM والـ BOM في JavaScript، مع عرض ومعاينة فورية حية وتخصيص كامل للألوان.",
      highlights: [
        "Dynamic interactive form allowing users to add, update, and reorder experience, education, and skill sections on the fly.",
        "Instant live document synchronization displaying the generated resume in real-time as users type.",
        "Utilized DOM & BOM methods with LocalStorage auto-save to retain user data across browser refreshes.",
        "Engineered with Bootstrap and CSS3 animations (Wow.js) with print-to-PDF styles for high-fidelity export.",
      ],
      highlightsAr: [
        "نموذج تفاعلي ديناميكي يتيح للمستخدم إضافة وتعديل وإعادة ترتيب أقسام الخبرات والتعليم والمهارات فورياً.",
        "مزامنة فورية حية تعرض معاينة السيرة الذاتية لحظة بلحظة أثناء كتابة البيانات.",
        "استخدام أساليب DOM & BOM مع ميزة الحفظ التلقائي في LocalStorage للحفاظ على بيانات المستخدم.",
        "تنسيقات طباعة وتصدير احترافية إلى PDF بجودة تصميم فائقة وتجاوب تام مع كافة الشاشات.",
      ],
      techStack: ["JavaScript (ES6+)", "DOM & BOM", "LocalStorage", "Bootstrap", "CSS3 / Animations", "PDF Export"],
      imagePath: cvBuilderImg,
      liveDemoUrl: "https://hussien034.github.io/CV-Bulider/",
      displayUrl: "https://hussien034.github.io/CV-Bulider/",
      githubUrl: "https://github.com/hussien034/CV-Bulider",
      isLiveEmbeddable: true,
      badge: "Live Web Tool",
      badgeAr: "أداة ويب حية",
    },
    {
      id: "eg-bank",
      title: "EG-BANK",
      titleAr: "بوابة البطاقات المصرفية (EG-BANK)",
      subtitle: "Cards for Everyday Life & Online Banking Experience",
      subtitleAr: "بوابة مصرفية ذكية لبطاقات الدفع والخدمات البنكية اليومية",
      category: "Financial Web Portal",
      categoryAr: "بوابة خدمات مالية ومصرفية",
      role: "Frontend Developer",
      roleAr: "مطور واجهات أمامية",
      description:
        "Designed to provide a seamless banking experience to customers. Built with a strong focus on JavaScript DOM, BOM, Local Storage, Regular Expressions, dynamic search filters, and Bootstrap for a fully responsive financial portal.",
      descriptionAr:
        "صُممت لتقديم تجربة مصرفية رقمية سلسة. تعتمد على المعالجة البرمجية الصارمة للـ DOM و LocalStorage والتحقق بالتعابير النمطية (RegEx) وفلاتر البحث اللحظية.",
      highlights: [
        "Interactive banking cards catalog showcasing everyday debit and credit tiers with customized benefits.",
        "Robust client-side validation using Regular Expressions (RegEx) for national identity, card numbers, and contact forms.",
        "Implemented instant search and filter controls with zero page reloads.",
        "Persisted customer card inquiries and application preferences using LocalStorage.",
      ],
      highlightsAr: [
        "كتالوج تفاعلي للبطاقات المصرفية يعرض فئات بطاقات الخصم والائتمان مع تفاصيل المزايا والرسوم.",
        "نظام تحقق صارم من جانب العميل باستخدام الـ RegEx للأرقام القومية، وأرقام البطاقات، ونماذج التقدم.",
        "فلاتر بحث ديناميكية وتصنيف لحظي بدون إعادة تحميل الصفحة.",
        "حفظ طلبات التقديم وتفضيلات المستخدمين بالاعتماد على LocalStorage.",
      ],
      techStack: ["JavaScript", "jQuery", "RegEx Validation", "LocalStorage", "Bootstrap", "Custom CSS", "Financial UI"],
      imagePath: egBankImg,
      liveDemoUrl: "https://hussien034.github.io/EG-BANK/",
      displayUrl: "https://hussien034.github.io/EG-BANK/",
      githubUrl: "https://github.com/hussien034/EG-BANK",
      isLiveEmbeddable: true,
      badge: "Live Banking App",
      badgeAr: "تطبيق مصرفي حي",
    },
    {
      id: "ip-tracking",
      title: "IP Tracker APP",
      titleAr: "متتبع عناوين الـ IP والموقع الجغرافي",
      subtitle: "Real-Time Geolocation & Network Telemetry",
      subtitleAr: "تحديد الموقع الجغرافي اللحظي وبيانات مزود الخدمة عبر الشبكة",
      category: "API & Geo Integration",
      categoryAr: "تكامل خرائط وواجهات برمجية",
      role: "Frontend Developer",
      roleAr: "مطور واجهات أمامية",
      description:
        "A real-time network intelligence and IP tracking application. Allows users to query any public IPv4/IPv6 address or domain name to instantly pinpoint geographic location, ISP organization, and local timezone on an interactive map.",
      descriptionAr:
        "تطبيق ذكي لتتبع عناوين الشبكة وتحديد المواقع الجغرافية لحظياً. يتيح الاستعلام عن أي عنوان IPv4/IPv6 أو نطاق لتحديد الموقع ومزود الإنترنت والمنطقة الزمنية على خريطة تفاعلية.",
      highlights: [
        "Integrated public IP Geolocation REST APIs with async/await error-handling and fallback defaults.",
        "Dynamic interactive map rendering with coordinate pin markers and smooth pan-zoom transitions.",
        "Input parsing and defensive sanitization for domain names and IP strings.",
        "Mobile-first responsive dashboard layout with high-contrast telemetry metrics.",
      ],
      highlightsAr: [
        "ربط واجهات برمجة تطبيقات الموقع الجغرافي REST APIs مع معالجة استباقية للأخطاء بدوال async/await.",
        "رسم خرائط تفاعلية ديناميكية وتحديد إحداثيات الموقع مع انتقالات وتكبير سلس.",
        "معالجة أمنية وتدقيق لمدخلات أسماء النطاقات وعناوين الـ IP لحمايتها من الأخطاء.",
        "لوحة مؤشرات متجاوبة متوافقة مع الهواتف الذكية تبرز مؤشرات وبيانات الشبكة بوضوح.",
      ],
      techStack: ["JavaScript (ES6+)", "IP Geolocation API", "Interactive Maps", "Bootstrap", "CSS3", "Async/Await"],
      imagePath: ipTrackingImg,
      liveDemoUrl: "https://hussien034.github.io/IP_Tracking/",
      displayUrl: "https://hussien034.github.io/IP_Tracking/",
      githubUrl: "https://github.com/hussien034/IP_Tracking",
      isLiveEmbeddable: true,
      badge: "Live Geo Tool",
      badgeAr: "أداة جغرافية حية",
    },
    {
      id: "healthai",
      title: "HealthAI Egypt",
      titleAr: "هيلث إيه آي مصر (HealthAI Egypt)",
      subtitle: "AI Medical Triage & Clinical Consultation Platform",
      subtitleAr: "منصة الفرز الطبي الذكي والاستشارات السريرية بالذكاء الاصطناعي",
      category: "Full-Stack & AI",
      categoryAr: "فل ستاك وذكاء اصطناعي",
      role: "Full-Stack Engineer & AI Architect",
      roleAr: "مهندس برمجيات متكامل ومعمار ذكاء اصطناعي",
      description:
        "An intelligent medical triage and consultation web platform architected to streamline healthcare intake across Egypt. Incorporates conversational symptom evaluation, dynamic triage urgency scoring, and localized Egyptian OTC pharmaceutical guidance with bilingual Arabic and English accessibility.",
      descriptionAr:
        "منصة ويب ذكية للفرز الطبي والاستشارات الصحية لتنظيم استقبال الحالات المرضية في مصر. تشمل تقييماً تفاعلياً للأعراض وتصنيفاً لدرجة الخطورة مع توجيه دوائي محلي متوافق مع البيئة المصرية باللغتين العربية والإنجليزية.",
      highlights: [
        "Integrated server-side Google Gemini AI via Node.js/Express to analyze medical complaints, evaluate differential diagnoses, and format clinical insights securely without exposing client-side credentials.",
        "Engineered an interactive, bilingual (Arabic RTL & English LTR) frontend with React 18, TypeScript, and Tailwind CSS.",
        "Engineered localized Egyptian OTC medication references aligned with Egyptian national health guidelines.",
        "Delivered sub-100ms UI feedback with defensive error-handling for intermittent telecommunication connectivity.",
      ],
      highlightsAr: [
        "ربط نماذج Google Gemini AI من جانب السيرفر عبر Node.js/Express لتحليل الشكاوى الطبية وتصنيف الحالات دون كشف مفاتيح الـ API للمتصفح.",
        "هندسة واجهة أمامية ثنائية اللغة (عربي RTL وإنجليزي LTR) باستخدام React 18 و TypeScript و Tailwind CSS.",
        "إدراج مرجع للأدوية الشائعة (OTC) المتوفرة في الصيدليات المصرية والمطابقة للإرشادات الصحية الوطنية.",
        "استجابة سريعة جداً لواجهة المستخدم مع معالجة احترازية لحالات انقطاع أو بطء الاتصال بالإنترنت.",
      ],
      techStack: ["React 18", "TypeScript", "Node.js", "Express", "Google Gemini AI", "Tailwind CSS", "RTL / Bilingual"],
      imagePath: healthAiImg,
      liveDemoUrl: "#healthai-demo",
      displayUrl: "https://healthai-egypt.gov.app",
      githubUrl: "https://github.com/bassemh594",
      isLiveEmbeddable: false,
      badge: "AI Flagship",
      badgeAr: "مشروع الذكاء الاصطناعي الرائد",
    },
  ],
  featuredProject: {
    title: "GDSC Educational Platform",
    titleAr: "منصة نادي مطوري جوجل التعليمية",
    subtitle: "Interactive Student Learning & Course Tracking Platform",
    subtitleAr: "منصة تعليمية تفاعلية لنوادي مطوري جوجل للطلاب",
    role: "Lead Frontend Engineer & GDSC Campus Lead",
    roleAr: "قائد فريق الواجهات وقائد نادي GDSC",
    description:
      "An interactive educational platform designed and developed for Google Developer Student Clubs (GDSC) members. Features modular track learning, student enrollment pipelines, reactive forms validation, routing guards, and persistent state management.",
    descriptionAr:
      "منصة تعليمية تفاعلية تم تطويرها لأعضاء Google Developer Student Clubs. تضم مسارات تعليمية، تسجيل الطلاب، نماذج تفاعلية بحراس توجيه، وإدارة حالة البيانات.",
    highlights: [
      "Engineered with Angular 14+, Angular CLI, modular component hierarchy, and SCSS styling.",
      "Built complex Reactive Forms with custom dynamic validation directives for student onboarding.",
      "Managed asynchronous state streams via RxJS Observables, Subject stores, and LocalStorage synchronization.",
      "Created responsive, accessible navigation with Angular Router guards ensuring protected track modules.",
    ],
    highlightsAr: [
      "بناء متكامل بواسطة Angular 14+ و Angular CLI وتنسيقات SCSS معيارية.",
      "نماذج تفاعلية متقدمة بقواعد تدقيق ديناميكية لتسجيل الطلاب.",
      "إدارة تدفقات البيانات اللحظية بواسطة RxJS و Subject مع حفظ محلي.",
      "تأمين مسارات التنقل عبر Angular Router Guards للحفاظ على أمان المقررات.",
    ],
    techStack: ["Angular 14+", "TypeScript", "RxJS", "Reactive Forms", "Routing Guards", "LocalStorage", "SCSS", "UI/UX"],
    imagePath: gdscPlatformImg,
    liveDemoUrl: "https://hussien034.github.io/GDSC-Educational-Platform/",
    githubUrl: "https://github.com/hussien034/GDSC-Educational-Platform",
    features: [
      {
        title: "Dynamic Learning Tracks",
        titleAr: "مسارات تعلم ديناميكية",
        description: "Student track modules with step-by-step progress bars and interactive lessons.",
        descriptionAr: "وحدات تعليمية مقسمة مع شريط تقدم خطوة بخطوة ودروس تفاعلية.",
      },
      {
        title: "Angular Reactive Forms",
        titleAr: "نماذج تفاعلية متقدمة (Reactive Forms)",
        description: "Robust data validation for student onboarding and course registration.",
        descriptionAr: "تحقق فوري وشامل من صحة المدخلات لتسجيل الطلاب في المسارات.",
      },
      {
        title: "RxJS & Local Persistence",
        titleAr: "إدارة تدفقات RxJS والتخزين المحلي",
        description: "Zero data loss with synchronized state streams across browser sessions.",
        descriptionAr: "انعدام فقدان البيانات مع مزامنة لحظية للحالة عبر جلسات المتصفح.",
      },
      {
        title: "Live Interactive App",
        titleAr: "تطبيق حي مباشر",
        description: "Deployed live on GitHub Pages with complete cross-device responsiveness.",
        descriptionAr: "منشور ومتاح حياً عبر GitHub Pages مع تجاوب تام مع جميع الأجهزة.",
      },
    ],
  },
  leadership: [
    {
      title: "Campus Lead",
      titleAr: "قائد الحرم الجامعي (GDSC Lead)",
      organization: "Google Developer Student Clubs, Cairo University",
      organizationAr: "نوادي مطوري جوجل للطلاب - جامعة القاهرة",
      period: "Jan 2022 – Feb 2023",
      periodAr: "يناير 2022 – فبراير 2023",
      summary:
        "Led the GDSC chapter at Cairo University, fostering a collaborative learning environment and promoting modern software engineering practices among 1,500+ students.",
      summaryAr:
        "قيادة مجتمع GDSC في جامعة القاهرة، وبناء بيئة تعليمية تعاونية، ونشر أحدث ممارسات هندسة البرمجيات وتطوير الويب بين أكثر من 1500 طالب وطالبة.",
      highlights: [
        "Organized 15+ technical workshops, developer community hackathons, and hands-on coding sessions covering frontend engineering, Angular, and cloud computing.",
        "Delivered technical sessions on modern web engineering, helping hundreds of students build their first Angular applications and master modern JavaScript.",
        "Mentored aspiring developers and led a multidisciplinary student team in the annual Google Solution Challenge.",
        "Collaborated with Google Developer Experts (GDEs) and tech industry leaders to bring enterprise software insights to campus.",
      ],
      highlightsAr: [
        "تنظيم أكثر من 15 ورشة عمل تقنية، وهاكاثونات برمجية مجتمعية، وجلسات تدريب عملية غطت هندسة الواجهات الأمامية و Angular والحوسبة السحابية.",
        "تقديم جلسات تدريبية تقنية في هندسة الويب الحديثة، مما مكّن مئات الطلاب من بناء أول تطبيقاتهم بلغة Angular وإتقان جافاسكريبت الحديثة.",
        "توجيه المطورين الصاعدين وقيادة فريق طلابي متعدد التخصصات في مسابقة تحدي حلول جوجل السنوية (Google Solution Challenge).",
        "التعاون مع خبراء مطوري جوجل (GDEs) ورواد صناعة التكنولوجيا لنقل الخبرات البرمجية المؤسسية إلى الطلاب.",
      ],
      badge: "Google Developer Student Clubs",
      badgeAr: "نوادي مطوري جوجل للطلاب",
      impactMetrics: ["1,500+ Students Reached", "15+ Workshops Hosted", "Google Solution Challenge Finalist"],
      impactMetricsAr: ["أكثر من 1500 طالب تم تدريبهم", "15+ ورشة عمل وهاكاثون", "الوصول لنهائيات تحدي جوجل"],
      hasRecommendationLetter: true,
      letterPdfUrl: "./Google_Recommendation_Letter_Bassem_Hussein.pdf",
    },
    {
      title: "Microsoft Learn Student Ambassador",
      titleAr: "سفير طلاب مايكروسوفت ليرن (MLSA)",
      organization: "Microsoft",
      organizationAr: "مايكروسوفت (Microsoft)",
      period: "Jan 2023 – Dec 2023",
      periodAr: "يناير 2023 – ديسمبر 2023",
      summary:
        "Accelerated student awareness of cloud computing ecosystems, developer tooling, and structured software engineering career pathways.",
      summaryAr:
        "تعزيز وعي الطلاب بالحوسبة السحابية وأدوات المطورين الاحترافية والمسارات الوظيفية المنهجية في هندسة البرمجيات.",
      highlights: [
        "Organized hands-on technical labs highlighting cloud-native development with Microsoft Azure, Git automation, and advanced web frameworks.",
        "Guided student developers through professional certification paths, Azure cloud deployments, and collaborative open-source workflows.",
        "Co-hosted inter-university technical summits bringing together student leaders across North Africa.",
      ],
      highlightsAr: [
        "تنظيم معامل برمجية تطبيقية تركز على التطوير السحابي الأصيل مع Microsoft Azure وأتمتة Git وأحدث أطر عمل الويب.",
        "توجيه المطورين الطلاب نحو مسارات الشهادات المهنية، ونشر التطبيقات السحابية على Azure، والعمل الجماعي على المشاريع مفتوحة المصدر.",
        "المشاركة في تنظيم قمم ومؤتمرات تقنية بين الجامعات جمعت قادة مجتمعات المطورين في شمال إفريقيا.",
      ],
      badge: "Microsoft Ambassador",
      badgeAr: "سفير مايكروسوفت",
      impactMetrics: ["Azure Cloud Workshops", "Open Source Labs", "Inter-University Summits"],
      impactMetricsAr: ["معامل سحابية مع Azure", "مشاريع مفتوحة المصدر", "مؤتمرات طلابية مشتركة"],
    },
  ],
  education: {
    degree: "Bachelor's Degree in Commerce",
    degreeAr: "بكالوريوس التجارة وإدارة الأعمال",
    institution: "Cairo University",
    institutionAr: "جامعة القاهرة",
    graduationDate: "May 2023",
    graduationDateAr: "مايو 2023",
    location: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
  },
  certifications: [
    {
      title: "Angular Certificate",
      titleAr: "شهادة احترافية في Angular",
      issuer: "LinkedIn",
      issuerAr: "لينكد إن (LinkedIn)",
      year: "2025",
    },
    {
      title: "Frontend Development",
      titleAr: "دبلومة تطوير الواجهات الأمامية المتقدمة",
      issuer: "Route Academy",
      issuerAr: "أكاديمية روت (Route Academy)",
      year: "2023",
    },
    {
      title: "Nokia Egypt Internship",
      titleAr: "شهادة تدريب هندسة البرمجيات في نوكيا",
      issuer: "Nokia",
      issuerAr: "نوكيا مصر (Nokia)",
      year: "2023",
    },
    {
      title: "Web Design",
      titleAr: "شهادة تصميم وتطوير مواقع الويب",
      issuer: "National Telecommunication Institute (NTI)",
      issuerAr: "المعهد القومي للاتصالات (NTI)",
      year: "2022",
    },
    {
      title: "C++ & Web Design Diplomas",
      titleAr: "دبلومات البرمجة بلغة C++ وتصميم الويب",
      issuer: "Ministry of Defense",
      issuerAr: "وزارة الدفاع المصرية",
      year: "2019 – 2020",
    },
  ],
  googleRecommendationLetter: {
    title: "Official Google Recommendation & Confirmation Letter",
    titleAr: "خطاب التوصية والاعتماد الرسمي من شركة Google",
    issuer: "Google",
    date: "July 20th, 2022",
    dateAr: "20 يوليو 2022",
    signerName: "Salim Abid",
    signerRole: "Google Developer EcoSystem Region Lead - Middle East and North Africa",
    signerRoleAr: "قائد منظومة مطوري جوجل الإقليمية - الشرق الأوسط وشمال إفريقيا",
    signerEmail: "SalimAbid@google.com",
    recipientOrganization: "Cairo University - Faculty of Computers and Artificial Intelligence",
    recipientOrganizationAr: "جامعة القاهرة - كلية الحاسبات والذكاء الاصطناعي",
    leadName: "Basim Husain (Bassem Hussein)",
    verifiedUrl: "https://developers.google.com/community/dsc",
    pdfUrl: "./Google_Recommendation_Letter_Bassem_Hussein.pdf",
    quote:
      "Please accept this letter to confirm that Cairo University - Faculty of Computers and Artificial Intelligence, is one of the Google Developer Students Club in our Google approved communities network. Basim Husain currently leads the GDSC.",
    quoteAr:
      "يرجى قبول هذا الخطاب لتأكيد أن كلية الحاسبات والذكاء الاصطناعي بجامعة القاهرة هي أحد أندية Google Developer Students Club المعتمدة رسمياً ضمن شبكة مجتمعات جوجل، وأن باسم حسين يقود النادي رسمياً.",
  },
};
