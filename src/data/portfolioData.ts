import gdscPlatformImg from "../assets/images/gdsc_platform_preview_1790996513884.jpg";
import cvBuilderImg from "../assets/images/cv_builder_preview_1790996524822.jpg";
import egBankImg from "../assets/images/eg_bank_preview_1790996537670.jpg";
import ipTrackingImg from "../assets/images/ip_tracking_preview_1790996550529.jpg";
import healthAiImg from "../assets/images/healthai_mockup_1790309055393.jpg";

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Expert", "Advanced", "Proficient"
    iconName?: string;
    highlight?: boolean;
    color?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
  imagePath: string;
  liveDemoUrl: string;
  displayUrl?: string;
  githubUrl: string;
  isLiveEmbeddable?: boolean;
  badge?: string;
  features?: {
    title: string;
    description: string;
  }[];
}

export interface FeaturedProject {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
  imagePath: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  features: {
    title: string;
    description: string;
  }[];
}

export interface CommunityLeadership {
  title: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
  badge: string;
  impactMetrics: string[];
  hasRecommendationLetter?: boolean;
  letterPdfUrl?: string;
}

export interface GoogleRecommendationLetter {
  title: string;
  issuer: string;
  date: string;
  signerName: string;
  signerRole: string;
  signerEmail: string;
  recipientOrganization: string;
  leadName: string;
  verifiedUrl: string;
  pdfUrl: string;
  quote: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface PortfolioData {
  personalInfo: {
    fullName: string;
    title: string;
    location: string;
    relocation: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
    summary: string;
    languages: { name: string; level: string }[];
  };
  metrics: {
    yearsExp: string;
    companies: string;
    productionApps: string;
    coreFocus: string;
  };
  experiences: WorkExperience[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  featuredProject: FeaturedProject;
  leadership: CommunityLeadership[];
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
    location: string;
  };
  certifications: Certification[];
  googleRecommendationLetter: GoogleRecommendationLetter;
}

export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    fullName: "Bassem Hussein",
    title: "Frontend Software Engineer | Angular & AI-Assisted Development",
    location: "Cairo, Egypt",
    relocation: "Open to relocate",
    email: "bassemh594@gmail.com",
    phone: "+20 101 622 6031",
    githubUrl: "https://github.com/hussien034",
    linkedinUrl: "https://www.linkedin.com/in/bassem-hussien-130b24205/",
    summary:
      "Frontend Developer with 2+ years of experience building scalable, maintainable Angular applications for enterprise platforms. Strong in TypeScript, RxJS reactive state management, responsive UI engineering, and RESTful API integration. Focused on performance, clean architecture (SOLID/OOP), and shipping reliable features within Agile teams. Uses AI-assisted workflows to accelerate delivery without compromising code quality.",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Professional" },
      { name: "German", level: "A2" },
    ],
  },
  metrics: {
    yearsExp: "2+",
    companies: "3",
    productionApps: "6+",
    coreFocus: "Angular & AI",
  },
  experiences: [
    {
      id: "intercom",
      role: "Frontend Developer",
      company: "Intercom Enterprise",
      period: "Sep 2025 – Present",
      location: "Cairo, Egypt",
      summary:
        "Develop and maintain enterprise-scale Angular applications for the Egyptian Public Prosecution within a shared Angular workspace powering multiple core business platforms.",
      highlights: [
        "Architected reusable UI component libraries and complex reactive forms with dynamic schema-based validation driving critical legal workflows.",
        "Diagnosed and resolved subtle reactive state bugs across interconnected micro-modules, reducing recurring production UI defects.",
        "Integrated Angular applications with Java-based enterprise RESTful APIs, guaranteeing transactional data integrity and state synchronization.",
        "Delivered interactive operational dashboard and reporting features that streamlined daily judicial procedures for institutional end-users.",
        "Collaborated proactively with backend engineers, QA specialists, business analysts, and product owners across Agile sprints.",
      ],
      techStack: ["Angular 17+", "TypeScript", "RxJS", "Reactive Forms", "Java REST APIs", "Enterprise Architecture"],
      metrics: "Core Public Prosecution platform workspace",
    },
    {
      id: "etmana",
      role: "Frontend Developer",
      company: "Etmana",
      period: "Dec 2024 – Jul 2025",
      location: "Cairo, Egypt",
      summary:
        "Maintained and optimized consumer-facing Angular features for a high-traffic fashion e-commerce platform, strengthening checkout and account conversion flows.",
      highlights: [
        "Engineered pixel-perfect, cross-device responsive layouts engineered for peak retail campaigns and diverse screen densities.",
        "Boosted perceived performance and initial load speeds through route-level lazy loading, asset preloading, and fine-grained bundle optimization.",
        "Partnered with UI/UX engineers to translate high-converting fashion checkout workflows into clean, reusable component definitions.",
        "Integrated RESTful services powering fast catalog listings, real-time inventory checking, secure session handling, and checkout pipelines.",
      ],
      techStack: ["Angular", "TypeScript", "Tailwind CSS", "RxJS", "E-commerce Optimization", "REST APIs"],
      metrics: "Sub-second product listings & higher checkout conversion",
    },
    {
      id: "nokia",
      role: "Frontend Developer Intern",
      company: "Nokia",
      period: "May 2023 – Dec 2023",
      location: "Cairo, Egypt",
      summary:
        "Contributed to development and maintenance of enterprise-grade Angular applications within Nokia's global engineering environment.",
      highlights: [
        "Developed responsive Angular UIs using TypeScript, HTML5, SCSS, and modular component-based architectural patterns.",
        "Refactored legacy template logic and component hierarchies to improve code maintainability and team velocity.",
        "Actively participated in rigorous peer code reviews and modern CI practices across multi-country cross-functional engineering teams.",
      ],
      techStack: ["Angular", "TypeScript", "SCSS", "Component Architecture", "Global CI/CD", "Enterprise Standards"],
      metrics: "Global engineering team standards & CI pipeline",
    },
  ],
  skillCategories: [
    {
      category: "Languages",
      description: "Foundational syntaxes and typing systems powering robust codebases",
      skills: [
        { name: "TypeScript", level: "Expert", highlight: true, color: "#3178C6" },
        { name: "JavaScript (ES6+)", level: "Expert", highlight: true, color: "#F7DF1E" },
        { name: "HTML5", level: "Expert", color: "#E34F26" },
        { name: "CSS3", level: "Expert", color: "#1572B6" },
        { name: "Sass/SCSS", level: "Advanced", color: "#CC6699" },
        { name: "SQL", level: "Proficient", color: "#4479A1" },
      ],
    },
    {
      category: "Frameworks & Reactive Core",
      description: "Modern component architectures, signals, and asynchronous data streams",
      skills: [
        { name: "Angular (v17+)", level: "Expert", highlight: true, color: "#DD0031" },
        { name: "RxJS", level: "Expert", highlight: true, color: "#B7178C" },
        { name: "Angular CLI", level: "Expert", color: "#C3002F" },
        { name: "Angular Signals", level: "Advanced", highlight: true, color: "#E0234E" },
        { name: "Reactive Forms", level: "Expert", color: "#D81B60" },
      ],
    },
    {
      category: "UI Libraries & Design Systems",
      description: "Component libraries, accessible styling, and responsive layout toolkits",
      skills: [
        { name: "Angular Material", level: "Advanced", highlight: true, color: "#7952B3" },
        { name: "NG-ZORRO", level: "Advanced", color: "#1890FF" },
        { name: "PrimeNG", level: "Advanced", color: "#007AD9" },
        { name: "Tailwind CSS", level: "Expert", highlight: true, color: "#06B6D4" },
        { name: "Bootstrap", level: "Proficient", color: "#7952B3" },
      ],
    },
    {
      category: "Architecture & Engineering Principles",
      description: "Clean code design patterns, performance budgets, and algorithmic rigor",
      skills: [
        { name: "SOLID Principles", level: "Advanced", highlight: true },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
        { name: "Code Splitting & Lazy Loading", level: "Expert", highlight: true },
        { name: "Responsive UI Engineering", level: "Expert" },
        { name: "Search Engine Optimization (SEO)", level: "Proficient" },
        { name: "Data Structures & Algorithms (DSA)", level: "Proficient" },
      ],
    },
    {
      category: "AI-Assisted Development",
      description: "Accelerating sprint velocity and code verification through modern LLM workflows",
      skills: [
        { name: "Claude 3.7 / 3.5 Sonnet", level: "Power User", highlight: true, color: "#D97706" },
        { name: "Cursor IDE", level: "Power User", highlight: true, color: "#6366F1" },
        { name: "Cline", level: "Advanced", color: "#10B981" },
        { name: "GitHub Copilot", level: "Power User", color: "#24292F" },
        { name: "Gemini AI API", level: "Advanced", highlight: true, color: "#4285F4" },
      ],
    },
    {
      category: "Tools & DevOps Ecosystem",
      description: "Version control, build orchestrators, cloud services, and integration pipelines",
      skills: [
        { name: "Git & GitHub", level: "Advanced", color: "#F05032" },
        { name: "GitLab", level: "Advanced", color: "#FC6D26" },
        { name: "Microsoft Azure", level: "Proficient", color: "#0078D4" },
        { name: "Vite", level: "Advanced", color: "#646CFF" },
        { name: "REST APIs & WebSockets", level: "Expert", highlight: true },
        { name: "CI/CD Pipelines", level: "Proficient" },
      ],
    },
  ],
  projects: [
    {
      id: "gdsc-platform",
      title: "GDSC Educational Platform",
      subtitle: "Interactive Student Learning & Course Tracking Platform",
      category: "Angular & RxJS",
      role: "Lead Frontend Engineer & GDSC Campus Lead",
      description:
        "An interactive educational platform designed and developed for Google Developer Student Clubs (GDSC) members. Features modular track learning, student enrollment, reactive forms validation, routing guards, and persistent state management.",
      highlights: [
        "Engineered with Angular 14+, Angular CLI, modular component hierarchy, and SCSS styling.",
        "Built complex Reactive Forms with custom dynamic validation directives for student onboarding.",
        "Managed asynchronous state streams via RxJS Observables, Subject stores, and LocalStorage synchronization.",
        "Created responsive, accessible navigation with Angular Router guards ensuring protected track modules.",
      ],
      techStack: ["Angular 14+", "TypeScript", "RxJS", "Reactive Forms", "Routing Guards", "LocalStorage", "SCSS", "UI/UX"],
      imagePath: gdscPlatformImg,
      liveDemoUrl: "https://hussien034.github.io/GDSC-Educational-Platform/",
      displayUrl: "https://hussien034.github.io/GDSC-Educational-Platform/main",
      githubUrl: "https://github.com/hussien034/GDSC-Educational-Platform",
      isLiveEmbeddable: true,
      badge: "Live Angular App",
    },
    {
      id: "cv-builder",
      title: "CV Builder",
      subtitle: "Dynamic Resume & Curriculum Vitae Creator",
      category: "JavaScript & DOM Engineering",
      role: "Frontend Developer",
      description:
        "Build your resumes in a few clicks. An interactive resume builder web application built with a strong focus on advanced JavaScript DOM & BOM manipulation, live preview rendering, and theme customizability.",
      highlights: [
        "Dynamic interactive form allowing users to add, update, and reorder experience, education, and skill sections on the fly.",
        "Instant live document synchronization displaying the generated resume in real-time as users type.",
        "Utilized DOM & BOM methods with LocalStorage auto-save to retain user data across browser refreshes.",
        "Engineered with Bootstrap and CSS3 animations (Wow.js) with print-to-PDF styles for high-fidelity export.",
      ],
      techStack: ["JavaScript (ES6+)", "DOM & BOM", "LocalStorage", "Bootstrap", "CSS3 / Animations", "PDF Export"],
      imagePath: cvBuilderImg,
      liveDemoUrl: "https://hussien034.github.io/CV-Bulider/",
      displayUrl: "https://hussien034.github.io/CV-Bulider/",
      githubUrl: "https://github.com/hussien034/CV-Bulider",
      isLiveEmbeddable: true,
      badge: "Live Web Tool",
    },
    {
      id: "eg-bank",
      title: "EG-BANK",
      subtitle: "Cards for Everyday Life & Online Banking Experience",
      category: "Financial Web Portal",
      role: "Frontend Developer",
      description:
        "Designed to provide a seamless banking experience to customers. Built with a strong focus on JavaScript DOM, BOM, Local Storage, Regular Expressions, dynamic search filters, and Bootstrap for a fully responsive financial portal.",
      highlights: [
        "Interactive banking cards catalog showcasing everyday debit and credit tiers with customized benefits.",
        "Robust client-side validation using Regular Expressions (RegEx) for national identity, card numbers, and contact forms.",
        "Implemented instant search and filter controls with zero page reloads.",
        "Persisted customer card inquiries and application preferences using LocalStorage.",
      ],
      techStack: ["JavaScript", "jQuery", "RegEx Validation", "LocalStorage", "Bootstrap", "Custom CSS", "Financial UI"],
      imagePath: egBankImg,
      liveDemoUrl: "https://hussien034.github.io/EG-BANK/",
      displayUrl: "https://hussien034.github.io/EG-BANK/",
      githubUrl: "https://github.com/hussien034/EG-BANK",
      isLiveEmbeddable: true,
      badge: "Live Banking App",
    },
    {
      id: "ip-tracking",
      title: "IP Tracker APP",
      subtitle: "Real-Time Geolocation & Network Telemetry",
      category: "API & Geo Integration",
      role: "Frontend Developer",
      description:
        "A real-time network intelligence and IP tracking application. Allows users to query any public IPv4/IPv6 address or domain name to instantly pinpoint geographic location, ISP organization, and local timezone on an interactive map.",
      highlights: [
        "Integrated public IP Geolocation REST APIs with async/await error-handling and fallback defaults.",
        "Dynamic interactive map rendering with coordinate pin markers and smooth pan-zoom transitions.",
        "Input parsing and defensive sanitization for domain names and IP strings.",
        "Mobile-first responsive dashboard layout with high-contrast telemetry metrics.",
      ],
      techStack: ["JavaScript (ES6+)", "IP Geolocation API", "Interactive Maps", "Bootstrap", "CSS3", "Async/Await"],
      imagePath: ipTrackingImg,
      liveDemoUrl: "https://hussien034.github.io/IP_Tracking/",
      displayUrl: "https://hussien034.github.io/IP_Tracking/",
      githubUrl: "https://github.com/hussien034/IP_Tracking",
      isLiveEmbeddable: true,
      badge: "Live Geo Tool",
    },
    {
      id: "healthai",
      title: "HealthAI Egypt",
      subtitle: "AI Medical Triage & Clinical Consultation Platform",
      category: "Full-Stack & AI",
      role: "Full-Stack Engineer & AI Architect",
      description:
        "An intelligent medical triage and consultation web platform architected to streamline healthcare intake across Egypt. Incorporates conversational symptom evaluation, dynamic triage urgency scoring, and localized Egyptian OTC pharmaceutical guidance with bilingual Arabic and English accessibility.",
      highlights: [
        "Integrated server-side Google Gemini AI via Node.js/Express to analyze medical complaints, evaluate differential diagnoses, and format clinical insights securely without exposing client-side credentials.",
        "Engineered an interactive, bilingual (Arabic RTL & English LTR) frontend with React 18, TypeScript, and Tailwind CSS.",
        "Engineered localized Egyptian OTC medication references aligned with Egyptian national health guidelines.",
        "Delivered sub-100ms UI feedback with defensive error-handling for intermittent telecommunication connectivity.",
      ],
      techStack: ["React 18", "TypeScript", "Node.js", "Express", "Google Gemini AI", "Tailwind CSS", "RTL / Bilingual"],
      imagePath: healthAiImg,
      liveDemoUrl: "#healthai-demo",
      displayUrl: "https://healthai-egypt.gov.app",
      githubUrl: "https://github.com/bassemh594",
      isLiveEmbeddable: false,
      badge: "AI Flagship",
    },
  ],
  featuredProject: {
    title: "GDSC Educational Platform",
    subtitle: "Interactive Student Learning & Course Tracking Platform",
    role: "Lead Frontend Engineer & GDSC Campus Lead",
    description:
      "An interactive educational platform designed and developed for Google Developer Student Clubs (GDSC) members. Features modular track learning, student enrollment pipelines, reactive forms validation, routing guards, and persistent state management.",
    highlights: [
      "Engineered with Angular 14+, Angular CLI, modular component hierarchy, and SCSS styling.",
      "Built complex Reactive Forms with custom dynamic validation directives for student onboarding.",
      "Managed asynchronous state streams via RxJS Observables, Subject stores, and LocalStorage synchronization.",
      "Created responsive, accessible navigation with Angular Router guards ensuring protected track modules.",
    ],
    techStack: ["Angular 14+", "TypeScript", "RxJS", "Reactive Forms", "Routing Guards", "LocalStorage", "SCSS", "UI/UX"],
    imagePath: gdscPlatformImg,
    liveDemoUrl: "https://hussien034.github.io/GDSC-Educational-Platform/",
    githubUrl: "https://github.com/hussien034/GDSC-Educational-Platform",
    features: [
      {
        title: "Dynamic Learning Tracks",
        description: "Student track modules with step-by-step progress bars and interactive lessons.",
      },
      {
        title: "Angular Reactive Forms",
        description: "Robust data validation for student onboarding and course registration.",
      },
      {
        title: "RxJS & Local Persistence",
        description: "Zero data loss with synchronized state streams across browser sessions.",
      },
      {
        title: "Live Interactive App",
        description: "Deployed live on GitHub Pages with complete cross-device responsiveness.",
      },
    ],
  },
  leadership: [
    {
      title: "Campus Lead",
      organization: "Google Developer Student Clubs, Cairo University",
      period: "Jan 2022 – Feb 2023",
      summary:
        "Led the GDSC chapter at Cairo University, fostering a collaborative learning environment and promoting modern software engineering practices among 1,500+ students.",
      highlights: [
        "Organized 15+ technical workshops, developer community hackathons, and hands-on coding sessions covering frontend engineering, Angular, and cloud computing.",
        "Delivered technical sessions on modern web engineering, helping hundreds of students build their first Angular applications and master modern JavaScript.",
        "Mentored aspiring developers and led a multidisciplinary student team in the annual Google Solution Challenge.",
        "Collaborated with Google Developer Experts (GDEs) and tech industry leaders to bring enterprise software insights to campus.",
      ],
      badge: "Google Developer Student Clubs",
      impactMetrics: ["1,500+ Students Reached", "15+ Workshops Hosted", "Google Solution Challenge Finalist"],
      hasRecommendationLetter: true,
      letterPdfUrl: "./Google_Recommendation_Letter_Bassem_Hussein.pdf",
    },
    {
      title: "Microsoft Learn Student Ambassador",
      organization: "Microsoft",
      period: "Jan 2023 – Dec 2023",
      summary:
        "Accelerated student awareness of cloud computing ecosystems, developer tooling, and structured software engineering career pathways.",
      highlights: [
        "Organized hands-on technical labs highlighting cloud-native development with Microsoft Azure, Git automation, and advanced web frameworks.",
        "Guided student developers through professional certification paths, Azure cloud deployments, and collaborative open-source workflows.",
        "Co-hosted inter-university technical summits bringing together student leaders across North Africa.",
      ],
      badge: "Microsoft Ambassador",
      impactMetrics: ["Azure Cloud Workshops", "Open Source Labs", "Inter-University Summits"],
    },
  ],
  education: {
    degree: "Bachelor's Degree in Commerce",
    institution: "Cairo University",
    graduationDate: "May 2023",
    location: "Cairo, Egypt",
  },
  certifications: [
    {
      title: "Angular Certificate",
      issuer: "LinkedIn",
      year: "2025",
    },
    {
      title: "Frontend Development",
      issuer: "Route Academy",
      year: "2023",
    },
    {
      title: "Nokia Egypt Internship",
      issuer: "Nokia",
      year: "2023",
    },
    {
      title: "Web Design",
      issuer: "National Telecommunication Institute (NTI)",
      year: "2022",
    },
    {
      title: "C++ & Web Design Diplomas",
      issuer: "Ministry of Defense",
      year: "2019 – 2020",
    },
  ],
  googleRecommendationLetter: {
    title: "Official Google Recommendation & Confirmation Letter",
    issuer: "Google",
    date: "July 20th, 2022",
    signerName: "Salim Abid",
    signerRole: "Google Developer EcoSystem Region Lead - Middle East and North Africa",
    signerEmail: "SalimAbid@google.com",
    recipientOrganization: "Cairo University - Faculty of Computers and Artificial Intelligence",
    leadName: "Basim Husain (Bassem Hussein)",
    verifiedUrl: "https://developers.google.com/community/dsc",
    pdfUrl: "./Google_Recommendation_Letter_Bassem_Hussein.pdf",
    quote: "Please accept this letter to confirm that Cairo University - Faculty of Computers and Artificial Intelligence, is one of the Google Developer Students Club in our Google approved communities network. Basim Husain currently leads the GDSC.",
  },
};
