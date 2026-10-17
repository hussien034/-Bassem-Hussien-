import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    brandTitle: "Bassem Hussein",
    brandRole: "Frontend Engineer",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navLeadership: "Leadership",
    navContact: "Contact",
    cvButton: "Curriculum Vitae",
    paletteLabel: "Accent Palette",

    // Hero
    availableTag: "Available for Global Engineering Roles",
    locationCairo: "Cairo, Egypt",
    googleVerified: "Google Recommendation Verified",
    heroNameFirst: "Bassem",
    heroNameLast: "Hussein",
    heroRole1: "Frontend Software Engineer",
    heroRole2: "Angular 17+ Enterprise Specialist",
    heroRole3: "RxJS Reactive State Architect",
    heroRole4: "AI-Assisted Workflow Pioneer",
    heroSummary:
      "Frontend Developer with 2+ years of experience building scalable, maintainable Angular applications for enterprise platforms. Strong in TypeScript, RxJS reactive state management, and modern AI acceleration.",
    exploreProjects: "Explore Featured Projects",
    inspectCV: "Inspect Official CV (PDF)",
    officialSignature: "Official Signature",
    certifiedSignature: "Certified Signature Seal",
    statYears: "Years Building Web Architectures",
    statDevs: "Developers Mentored & Guided",
    statHackathons: "Hackathons & Community Events",
    statDelivery: "On-Time Enterprise Delivery",

    // About
    aboutKicker: "Engineering Mindset & Architecture",
    aboutTitle: "Engineering Scalable Interfaces with Mathematical Precision",
    aboutLead:
      "Specializing in enterprise Angular architectures, reactive state isolation, dynamic DOM manipulation, and AI-accelerated delivery that preserves clean code standards.",
    yearsProduction: "Years Production",
    enterpriseOrgs: "Enterprise Orgs",
    coreModules: "Core Modules",
    sprintReliability: "Sprint Reliability",
    simTitle: "Simulate Enterprise Search Stream:",
    dispatchStream: "Dispatch Stream",
    executing: "Executing...",
    resetSimulation: "Reset Stream",
    simSearchPlaceholder: "Egyptian Case #8921",
    principlesTitle: "Architectural Principles & Best Practices",

    // Experience
    expKicker: "Professional Experience",
    expTitle: "Engineering Enterprise Platforms & High-Traffic Products",
    expDesc:
      "A track record of delivering scalable Angular applications for government judicial bodies, national telecommunication systems, and enterprise banking portals.",
    currentRole: "Current Role",
    techStackLabel: "Tech Stack:",
    keyHighlights: "Key Engineering Highlights",
    coreImpact: "Core Impact:",

    // Skills
    skillsKicker: "Technical Capabilities",
    skillsTitle: "Enterprise Stack & AI Acceleration",
    skillsDesc:
      "A production-proven skillset prioritizing strict TypeScript typing, reactive stream architectures, and AI-augmented developer velocity.",
    searchPlaceholder: "Filter competencies (e.g. Angular, RxJS, TypeScript)...",
    allDomains: "All Domains",
    noSkillsFound: "No competencies matched your filter.",

    // Projects
    projectsKicker: "Featured Engineering Works",
    projectsTitle: "Production Deployments & Interactive Systems",
    projectsDesc:
      "Explore production web applications built with Angular, reactive RxJS architectures, dynamic DOM engineering, and real-time network APIs deployed on GitHub Pages.",
    featuredDeployment: "Featured Live Deployment",
    launchLiveFrame: "Launch Live Interactive Frame",
    openLiveApp: "Open Live App",
    githubRepo: "GitHub Repository",
    allProjects: "All Projects",
    angularRxjs: "Angular & RxJS",
    webAppsApis: "Web Apps & APIs",
    aiFullStack: "AI & Full-Stack",
    interactiveTriageSim: "Interactive AI Triage Simulator",
    testMedicalCase: "Test Sample Clinical Case",
    closeTriage: "Close Simulator",

    // Leadership
    leadKicker: "Community & Leadership",
    leadTitle: "Empowering Developer Communities & Tech Leadership",
    leadDesc:
      "Spearheading developer ecosystems at Cairo University through hands-on technical workshops, hackathons, and international engineering challenges.",
    googleEndorsement: "Verified Google Endorsement",
    viewGoogleModal: "Inspect Official Letterhead (Modal)",
    downloadPdf: "Download PDF",
    communityReach: "Community Reach",
    trainedDevs: "Trained Developers",
    hackathonsBootcamps: "Hackathons & Bootcamps",
    challengeTeams: "Solution Challenge Teams",
    officialRecommendation: "Official Google Recommendation",

    // Education
    eduKicker: "Academic Background & Credentials",
    eduTitle: "Education & Verified Certifications",
    eduDesc:
      "Formal engineering foundations from Cairo University combined with continuous professional certifications in enterprise architectures and modern web standards.",
    higherEducation: "Higher Education",
    languagesTitle: "Language Proficiencies",
    verifiedCredentials: "Verified Industry Credentials",
    graduatedLabel: "Graduated",
    gpaLabel: "GPA",

    // Contact
    contactKicker: "Connect & Collaboration",
    contactTitle: "Let's Build Something Exceptional Together",
    contactDesc:
      "Open to full-time Frontend Engineer roles, enterprise Angular consulting, and high-impact software initiatives globally (willing to relocate).",
    directEmail: "Direct Email",
    phoneWhatsapp: "Phone & WhatsApp",
    currentBase: "Current Base & Mobility",
    directInquiries: "Direct Inquiries & Opportunities",
    inquiriesDesc: "Send a direct message or role specifications. Direct reply within 24 hours.",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subjectScope: "Subject / Scope",
    messageDetails: "Project Details or Message",
    sendMessage: "Send Message",
    dispatching: "Dispatching...",
    copiedEmailToast: "Email copied to clipboard!",
    openRelocation: "Open to Relocate Globally",
    availableImmediately: "Available for Global Opportunities",

    // Footer
    allRights: "All Rights Reserved",
    footerFocus: "Engineered for Angular Enterprise Precision",
    topButton: "Top",
    cairoEgypt: "Cairo, Egypt",

    // Modals
    closeModal: "Close",
    printDoc: "Print Document",
    downloadFile: "Download PDF",
    exactMatchCV: "Exact match with Bassem Hussein's official PDF CV",
    googleLetterTitle: "Official Google Recommendation & Confirmation Letter",
    issuedByGoogle: "Issued by Google Developer Ecosystem",
    verifyCommunity: "Verified on Google Community Directory",
  },
  ar: {
    // Nav
    brandTitle: "باسم حسين",
    brandRole: "مهندس واجهات أمامية",
    navAbout: "عنّي",
    navExperience: "الخبرات",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navLeadership: "القيادة",
    navContact: "تواصل معي",
    cvButton: "السيرة الذاتية",
    paletteLabel: "طيف الألوان",

    // Hero
    availableTag: "متاح لفرص العمل الهندسية العالمية",
    locationCairo: "القاهرة، مصر",
    googleVerified: "توصية رسمية موثقة من Google",
    heroNameFirst: "باسم",
    heroNameLast: "حسين",
    heroRole1: "مهندس برمجيات واجهات أمامية",
    heroRole2: "متخصص معمارية أنظمة Angular 17+ المؤسسية",
    heroRole3: "مهندس تدفقات RxJS وحالات البيانات التفاعلية",
    heroRole4: "رائد تسريع الإنتاج بأدوات الذكاء الاصطناعي الحديثة",
    heroSummary:
      "مهندس واجهات أمامية بخبرة تتجاوز العامين في بناء تطبيقات Angular المؤسسية عالية التوسع والاستقرار. متمكن من TypeScript وإدارة الحالات التفاعلية عبر RxJS، وتسريع الإنتاج بالذكاء الاصطناعي.",
    exploreProjects: "استكشف المشاريع المميزة",
    inspectCV: "معاينة السيرة الذاتية الرسمية (PDF)",
    officialSignature: "توقيع معتمد",
    certifiedSignature: "ختم التوقيع الرسمي المعتمد",
    statYears: "سنوات في بناء المعماريات السحابية",
    statDevs: "مطور تم تدريبهم وتوجيههم",
    statHackathons: "هاكاثونات وفعاليات تقنية مجتمعية",
    statDelivery: "التزام كامل بمواعيد التسليم المؤسسية",

    // About
    aboutKicker: "الفكر الهندسي والمعمارية البرمجية",
    aboutTitle: "هندسة واجهات قابلة للتوسع بدقة رياضية متناهية",
    aboutLead:
      "متخصص في معماريات Angular المؤسسية، وعزل الحالات التفاعلية عبر RxJS، والتحكم المتقدم بعناصر الـ DOM، وتسريع دورات التسليم بأحدث أدوات الذكاء الاصطناعي مع الحفاظ على كود نظيف وقابل للصيانة.",
    yearsProduction: "سنوات خبرة إنتاجية",
    enterpriseOrgs: "مؤسسات وهيئات كبرى",
    coreModules: "أنظمة برمجية رئيسية",
    sprintReliability: "دقة الإنجاز بالسبرنت",
    simTitle: "محاكاة تدفق البحث التفاعلي بالمؤسسة:",
    dispatchStream: "إطلاق التدفق البرمجي",
    executing: "جاري التنفيذ...",
    resetSimulation: "إعادة ضبط التدفق",
    simSearchPlaceholder: "قضية نيابة #8921",
    principlesTitle: "المبادئ الهندسية وأفضل الممارسات البرمجية",

    // Experience
    expKicker: "المسيرة المهنية والخبرات الإنتاجية",
    expTitle: "هندسة المنصات المؤسسية والأنظمة الضخمة",
    expDesc:
      "سجل حافل في بناء وتسليم تطبيقات Angular معقدة للهيئات القضائية الحكومية، وشركات التجارة الإلكترونية الكبرى، وأنظمة الاتصالات الدولية.",
    currentRole: "الوظيفة الحالية",
    techStackLabel: "حزمة التقنيات:",
    keyHighlights: "أبرز الإنجازات البرمجية والتقنية",
    coreImpact: "الأثر والنتيجة:",

    // Skills
    skillsKicker: "القدرات والكفاءات التقنية",
    skillsTitle: "الحزمة البرمجية وتسريع الذكاء الاصطناعي",
    skillsDesc:
      "مجموعة مهارات مثبتة في الإنتاج تركز على الكتابة الصارمة بلغة TypeScript، والمعمارية التفاعلية مع RxJS، وتسريع الإنتاجية.",
    searchPlaceholder: "ابحث عن مهارة أو تقنية (مثال: Angular, RxJS, TypeScript)...",
    allDomains: "كافة المجالات",
    noSkillsFound: "لم يتم العثور على مهارات تطابق البحث.",

    // Projects
    projectsKicker: "أبرز الأعمال والمشاريع الهندسية",
    projectsTitle: "تطبيقات منشورة وأنظمة تفاعلية حية",
    projectsDesc:
      "استكشف تطبيقات ويب حية تم بناؤها باستخدام Angular، وتدفقات RxJS التفاعلية، ومعالجة الـ DOM المتقدمة، وربط الـ APIs الحية المنشورة على GitHub Pages.",
    featuredDeployment: "مشروع حي مميز",
    launchLiveFrame: "فتح التطبيق داخل إطار تفاعلي",
    openLiveApp: "فتح التطبيق المباشر",
    githubRepo: "مستودع GitHub",
    allProjects: "جميع المشاريع",
    angularRxjs: "Angular & RxJS",
    webAppsApis: "تطبيقات الويب والـ APIs",
    aiFullStack: "الذكاء الاصطناعي و Full-Stack",
    interactiveTriageSim: "محاكي الفرز الطبي بالذكاء الاصطناعي",
    testMedicalCase: "اختبار حالة سريرية تجريبية",
    closeTriage: "إغلاق المحاكي",

    // Leadership
    leadKicker: "القيادة والمجتمع التقني",
    leadTitle: "تمكين مجتمعات المطورين والقيادة التقنية",
    leadDesc:
      "قيادة منظومة المطورين بجامعة القاهرة من خلال ورش العمل البرمجية المكثفة والهاكاثونات وتوجيه الطلاب في التحديات الهندسية العالمية.",
    googleEndorsement: "توصية واعتماد رسمي من Google",
    viewGoogleModal: "معاينة خطاب التوصية الرسمي (نافذة)",
    downloadPdf: "تحميل ملف PDF",
    communityReach: "الأثر المجتمعي بالأرقام",
    trainedDevs: "مطور تم تدريبهم",
    hackathonsBootcamps: "هاكاثونات ومعسكرات تدريب",
    challengeTeams: "فرق مسابقة Google العالمية",
    officialRecommendation: "توصية رسمية موثقة من Google",

    // Education
    eduKicker: "المؤهلات الأكاديمية والشهادات",
    eduTitle: "التعليم والشهادات المهنية المعتمدة",
    eduDesc:
      "أساس هندسي وتجاري من جامعة القاهرة مدمج بشهادات احترافية متقدمة في معمارية الأنظمة ومعايير الويب العالمية.",
    higherEducation: "التعليم العالي",
    languagesTitle: "اللغات المتقنة",
    verifiedCredentials: "الشهادات والاعتمادات الموثقة",
    graduatedLabel: "سنة التخرج",
    gpaLabel: "المعدل التراكمي",

    // Contact
    contactKicker: "التواصل وفرص التعاون",
    contactTitle: "لنصنع معاً برمجيات استثنائية ونبني المستقبل",
    contactDesc:
      "متاح لفرص العمل بدوام كامل كمهندس واجهات أمامية، والاستشارات التقنية المتخصصة، والفرص الهندسية العالمية (مستعد للانتقال).",
    directEmail: "البريد الإلكتروني المباشر",
    phoneWhatsapp: "الهاتف والواتساب",
    currentBase: "الموقع والجاهزية للانتقال",
    directInquiries: "الاستفسارات وفرص التوظيف المباشرة",
    inquiriesDesc: "أرسل رسالة مباشرة أو تفاصيل المنصب الوظيفي. يتم الرد خلال 24 ساعة.",
    yourName: "الاسم الكريم",
    yourEmail: "بريدك الإلكتروني",
    subjectScope: "موضوع التواصل / طبيعة الدور",
    messageDetails: "تفاصيل المشروع أو التطلعات الوظيفية",
    sendMessage: "إرسال الرسالة",
    dispatching: "جاري الإرسال...",
    copiedEmailToast: "تم نسخ البريد الإلكتروني إلى الحافظة!",
    openRelocation: "مستعد للانتقال للعمل دولياً",
    availableImmediately: "متاح فوراً للفرص الهندسية العالمية",

    // Footer
    allRights: "جميع الحقوق محفوظة",
    footerFocus: "تمت الهندسة بدقة متناهية لأنظمة Angular المؤسسية",
    topButton: "للأعلى",
    cairoEgypt: "القاهرة، مصر",

    // Modals
    closeModal: "إغلاق",
    printDoc: "طباعة المستند",
    downloadFile: "تحميل PDF",
    exactMatchCV: "مطابقة تامة للسيرة الذاتية الرسمية الخاصة بباسم حسين",
    googleLetterTitle: "خطاب التوصية والتأكيد الرسمي من شركة Google",
    issuedByGoogle: "صادر من منظومة مطوري جوجل الإقليمية",
    verifyCommunity: "موثق في دليل مجتمعات Google للمطورين",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bassem_portfolio_lang") as Language | null;
      if (saved === "en" || saved === "ar") return saved;
    }
    return "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", language);
    root.setAttribute("dir", isRTL ? "rtl" : "ltr");
    if (isRTL) {
      root.classList.add("rtl");
      document.title = "باسم حسين | مهندس برمجيات واجهات أمامية (Angular & TypeScript)";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "معرض الأعمال والخبرات الهندسية للمهندس باسم حسين، متخصص أنظمة وتطبيقات Angular المؤسسية و RxJS والذكاء الاصطناعي. متاح لفرص العمل الهندسية العالمية.");
      }
    } else {
      root.classList.remove("rtl");
      document.title = "Bassem Hussein | Frontend Software Engineer Portfolio | باسم حسين";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "Award-winning personal portfolio of Bassem Hussein (باسم حسين), Senior Frontend Software Engineer specializing in Angular, TypeScript, RxJS, and Enterprise Architecture. Open to global opportunities.");
      }
    }
    localStorage.setItem("bassem_portfolio_lang", language);
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
