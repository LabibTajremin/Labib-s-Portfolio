import type { Project } from "@/types";

// Ordered by client appeal: live-demo, high-polish SaaS work first, then
// production systems by complexity, then archived/older projects last.
export const projects: Project[] = [
  {
    id: "academic-lab-platform",
    title: "Multi-Tenant Academic Lab Website Platform",
    description:
      "Next.js platform letting academic research labs deploy their own professional websites from one shared, multi-tenant codebase.",
    longDescription:
      "Each lab operates as an independent tenant while sharing infrastructure, with public sections for research, publications, people, news, funding, galleries, and contact information. Built with clean architecture (zero framework dependencies in the domain layer), tenant resolution via environment scoping plus PostgreSQL Row-Level Security for defense-in-depth isolation, and a non-technical admin panel for content management.",
    emoji: "🎓",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Auth.js", "Tailwind CSS", "S3"],
    categories: ["saas", "fullstack"],
    status: "featured",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin",
    liveUrl: "https://lab-platform-chi.vercel.app/",
    features: [
      "Tenant resolution via env scoping + Postgres RLS",
      "Non-technical admin panel for content management",
      "Research, publications, people & funding sections",
      "Clean architecture with zero framework deps in domain layer"
    ]
  },
  {
    id: "momentum-productivity",
    title: "Momentum - Habit Tracker & Productivity Dashboard",
    description:
      "Habit-tracking productivity app combining a monthly calendar, one-off task management, and an analytics dashboard.",
    longDescription:
      "Combines a monthly calendar interface (with per-day habit toggles and notes via right-click/double-click) with one-off task management (due dates, priority levels) and an analytics dashboard (stat cards, weekly bar charts, completion donuts, habit leaderboards). Supports multi-user authentication, dark/light theming with system detection, and automated daily/weekly email reminders.",
    emoji: "📅",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Prisma", "PostgreSQL", "NextAuth", "Recharts", "Resend"],
    categories: ["saas", "fullstack"],
    status: "featured",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin",
    liveUrl: "https://productive-calender.vercel.app/dashboard",
    features: [
      "Monthly calendar with per-day habit toggles & notes",
      "Task management with due dates & priority levels",
      "Analytics dashboard: stat cards, charts, leaderboards",
      "Automated daily/weekly email reminders via Resend"
    ]
  },
  {
    id: "hr-solution",
    title: "HR Solution Platform",
    description:
      "Comprehensive centralized HR solution serving multiple clients with distinct user bases and full data isolation.",
    longDescription:
      "Multi-tenant HR system built with .NET 7 and React.js. Encompasses leave management, attendance tracking, employee management, salary administration, and tax management. Designed to streamline HR processes and provide a polished UX for both admins and employees.",
    emoji: "🏢",
    technologies: [".NET 7", "React JS", "C#", "Multi-Tenant"],
    categories: ["saas", "enterprise", "fullstack"],
    status: "featured",
    role: "Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Multi-client data isolation",
      "Leave & attendance tracking",
      "Salary and tax administration",
      "Role-based user management"
    ]
  },
  {
    id: "structural-design",
    title: "Measurement Automation for Structural Design",
    description:
      "Enterprise-grade automation platform enabling civil engineers to perform structural calculations with real-time validation and seamless Excel integration.",
    longDescription:
      "Comprehensive engineering automation system built with Java Spring backend and JavaScript frontend. Streamlines structural design workflows with automated calculations, instant validation, and one-click Excel report generation for design documentation and client delivery.",
    emoji: "📐",
    technologies: ["Java Spring", "JavaScript", "HTML5", "CSS3"],
    categories: ["fullstack"],
    status: "production",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/raseldc/civil/tree/dev",
    liveUrl: "http://103.142.184.74:8001/CivilProject/login",
    features: [
      "Real-time calculation engine",
      "Automated measurement validation",
      "Excel export with formatting",
      "Intuitive engineering interface"
    ]
  },
  {
    id: "study-abroad-hub",
    title: "Study Abroad University Hub",
    description:
      "Frontend platform helping students explore and compare university options for studying abroad.",
    longDescription:
      "A frontend web platform helping students explore and compare university options for studying abroad, with a responsive, SCSS-driven interface deployed as a static site.",
    emoji: "🌍",
    technologies: ["TypeScript", "JavaScript", "SCSS", "HTML"],
    categories: ["fullstack"],
    status: "archived",
    role: "Frontend Developer",
    githubUrl: "https://github.com/LabibTajremin/Study-Abroad-University-Hub",
    liveUrl: "https://labibtajremin.github.io/Study-Abroad-University-Hub/",
    features: [
      "University comparison and exploration UI",
      "Responsive SCSS-based design",
      "Static frontend, GitHub Pages deployment"
    ]
  },
  {
    id: "intelligent-chessboard",
    title: "Intelligent Chess Board",
    description:
      "IoT-enabled chess system leveraging hardware-software integration to deliver responsive AI-generated moves through smart LED feedback.",
    longDescription:
      "Hardware-software integration project combining Arduino microcontroller with reed switches, proximity sensors, and LED indicators to create an interactive chess experience. Implements game logic for move validation and AI-powered response generation, demonstrating advanced embedded systems design.",
    emoji: "♟️",
    technologies: ["Arduino", "C++", "Embedded Systems", "Game Logic"],
    categories: ["iot", "fullstack"],
    status: "archived",
    role: "Hardware & Software Engineer",
    githubUrl: "https://github.com/LabibTajremin/Intelligent_chessboard",
    liveUrl: "https://www.youtube.com/watch?v=XdiYR49XbgI",
    features: [
      "Real-time move detection with reed switches",
      "AI move generation engine",
      "LED-based board feedback system",
      "Complete game state management"
    ]
  },
  {
    id: "ecommerce-saas",
    title: "Multi-Tenant E-Commerce SaaS Platform",
    description:
      "SaaS platform serving multiple independent storefronts from one deployment, isolated via PostgreSQL row-level security.",
    longDescription:
      "A single deployment serves multiple independent storefronts, each on its own subdomain, using PostgreSQL row-level security for true multi-tenant data isolation rather than application-level filtering alone. Features tenant onboarding, admin dashboards, a full product catalog with full-text search, a public storefront API, Stripe-integrated checkout, plan-tier enforcement, and a superadmin console.",
    emoji: "🛒",
    technologies: ["FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Redis", "Stripe", "Next.js 15", "React 19", "TypeScript"],
    categories: ["saas", "backend", "fullstack"],
    status: "production",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Per-tenant subdomains with Postgres RLS isolation",
      "Full-text product search & public storefront API",
      "Stripe-integrated checkout with plan-tier enforcement",
      "Superadmin console for tenant onboarding"
    ]
  },
  {
    id: "maapkathi-studio",
    title: "White-Label Portfolio & Showcase Platform",
    description:
      "Dual-mode (SaaS + self-hosted licensed) portfolio and showcase platform for design studios, built with clean architecture. Client: Maapkathi Studio.",
    longDescription:
      "Client project for Maapkathi Studio. Delivered a public-facing showcase site (projects, team, SEO/JSON-LD) that's fully editable through a custom admin panel (content, branding, theming/motion, SEO, contact forms), 6 pluggable storage adapters (S3, R2, Supabase, Google Drive, Bunny, Local), RBAC authentication with secure password hashing, an approvals/audit-log workflow, and offline-tolerant license verification for self-hosted deployments. Covered by 88 unit, 18 integration, and 8 end-to-end tests, all passing in CI.",
    emoji: "🎨",
    technologies: ["Next.js 15", "Tailwind CSS v4", "shadcn/ui", "Framer Motion", "PostgreSQL (Neon)", "Drizzle ORM", "Auth.js v5", "Docker"],
    categories: ["saas", "fullstack"],
    status: "production",
    role: "Full-Stack Developer (Client: Maapkathi Studio)",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "6 pluggable storage adapters (S3, R2, Supabase, Drive, Bunny, Local)",
      "RBAC auth, approvals & audit-log workflow",
      "Offline-tolerant license verification for self-hosted mode",
      "88 unit, 18 integration & 8 E2E tests passing in CI"
    ]
  },
  {
    id: "data-sync",
    title: "Multi-Tenant Data Sync System",
    description:
      "Multi-tenant, multi-database system synchronizing data from third-party sources to tenant databases.",
    longDescription:
      "Tenants can either spin up their own databases or let the application generate one on the application server. Supports per-tenant permission management for both reading and synchronization. Auto-syncs every 30 minutes with manual on-demand sync for real-time updates.",
    emoji: "🔄",
    technologies: [".NET", "SQL Server", "Angular", "TypeScript", "Entity Framework"],
    categories: ["saas", "enterprise", "backend"],
    status: "production",
    role: "Developer, System Designer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Auto and manual sync modes",
      "Per-tenant DB provisioning",
      "Permission-controlled data access",
      "Third-party API integration"
    ]
  },
  {
    id: "document-portal",
    title: "Document Sharing Portal",
    description:
      "Web portal for secure document sharing across multiple client entities with role-based access.",
    longDescription:
      "Each client manages document-sharing preferences independently. Identity and access are handled via Okta as IdentityServer, with role-driven sharing logic and fine-grained customization.",
    emoji: "📄",
    technologies: ["ASP.NET Core", "Angular", "SQL", "Okta"],
    categories: ["enterprise", "fullstack"],
    status: "production",
    role: "Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Role-based document sharing",
      "Customizable per-client preferences",
      "Okta identity management",
      "Audit-friendly architecture"
    ]
  },
  {
    id: "clinical-trial",
    title: "Clinical Trial Management",
    description:
      "Suite of full-stack applications to track clinical trial data across different study phases.",
    longDescription:
      "Family of applications used to manage clinical study data. Each app has its own user base and job requirements, supporting different phases of the trial lifecycle with tailored workflows.",
    emoji: "🔬",
    technologies: ["ASP.NET MVC", ".NET Core", "Kendo", "SQL"],
    categories: ["enterprise", "fullstack"],
    status: "production",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Phase-specific applications",
      "Distinct user roles per study",
      "Kendo UI integration",
      "Data integrity workflows"
    ]
  },
  {
    id: "khoroch-expense-tracker",
    title: "Khoroch - AI-Powered Bilingual Expense Tracker",
    description:
      "Mobile-first PWA for logging expenses in natural Bangla or English using a zero-cost, LLM-free language parser.",
    longDescription:
      "Users log expenses using natural language in Bangla and English (e.g. \"spent 500 taka on lunch\"), powered by digit normalization and keyword matching to extract amount and category, with a confirmation step before saving. Includes per-category budget tracking, spending reports with charts and month-over-month comparisons, CSV/PDF export, a 4-digit PIN app lock, and full Supabase-backed authentication.",
    emoji: "💰",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "jsPDF"],
    categories: ["saas", "fullstack"],
    status: "production",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Bilingual (Bangla/English) natural-language expense parsing",
      "Per-category budgets with spending reports & charts",
      "CSV/PDF export and 4-digit PIN app lock",
      "Supabase-backed auth with Postgres RLS"
    ]
  },
  {
    id: "lease-management",
    title: "Lease Management System",
    description:
      "Modular OutSystems application covering the full lease origination process end-to-end.",
    longDescription:
      "Built on OutSystems to deliver application submission, verification, credit underwriting, and custom pricing modules. Combines low-code rapid delivery with custom pricing engines.",
    emoji: "📑",
    technologies: ["OutSystems", "Service Studio", "SQL Server", "React JS"],
    categories: ["enterprise", "lowcode"],
    status: "production",
    role: "Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Application submission flow",
      "Credit underwriting logic",
      "Custom pricing modules",
      "Modular architecture"
    ]
  },
  {
    id: "windows-service",
    title: "Custom Windows Service",
    description:
      "Windows services automating retrieval, processing, and storage of XML/PDF/Excel files from secure FTP.",
    longDescription:
      "Production Windows services that pull files from a secure FTP, process them across XML, PDF, and Excel formats, update databases, generate logs, and emit output XML for downstream systems.",
    emoji: "⚙️",
    technologies: [".NET Core", "C#", "FTP", "XML"],
    categories: ["enterprise", "backend"],
    status: "production",
    role: "Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Automated FTP retrieval",
      "Multi-format file processing",
      "Log generation",
      "Output XML emission"
    ]
  },
  {
    id: "iot-vending-machine",
    title: "IoT Smart Vending Machine",
    description:
      "Connected vending system featuring RFID authentication and WiFi-enabled remote monitoring for seamless transactions.",
    longDescription:
      "Advanced IoT vending machine combining Arduino microcontroller with ESP8266 WiFi module for cloud connectivity. Implements RFID card authentication for contactless payments, real-time transaction logging, inventory monitoring, and remote system management capabilities.",
    emoji: "🤖",
    technologies: ["Arduino", "ESP8266", "RFID", "IoT", "C++"],
    categories: ["iot", "fullstack"],
    status: "archived",
    role: "IoT Engineer",
    githubUrl: "https://github.com/LabibTajremin/Vending_Machine",
    features: [
      "RFID card authentication",
      "WiFi connectivity and cloud sync",
      "Real-time inventory management",
      "Transaction logging and analytics"
    ]
  },
  {
    id: "getlift",
    title: "GetLift - Ride-Sharing Platform",
    description:
      "Full-stack ride-sharing platform connecting drivers and passengers with robust booking system and real-time dispatch management.",
    longDescription:
      "Comprehensive web-based ride-sharing solution supporting both car and bike categories. Features user authentication, real-time ride booking, driver-passenger matching logic, payment processing, and trip tracking. Built with PHP backend and MySQL database for reliability and scalability.",
    emoji: "🚗",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3"],
    categories: ["fullstack"],
    status: "archived",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin/Getlift",
    features: [
      "Dual-category booking system (cars & bikes)",
      "Real-time driver-passenger matching",
      "Integrated payment processing",
      "Trip history and ratings"
    ]
  },
  {
    id: "store-management",
    title: "Store Management System",
    description:
      "Enterprise desktop application providing centralized inventory and warehouse monitoring with intuitive graphical interface.",
    longDescription:
      "Java Swing/AWT-based desktop application designed for retail operations teams. Delivers real-time inventory tracking, stock management, warehouse operations oversight, and reporting capabilities with a user-friendly GUI. Built to streamline shop and warehouse operations.",
    emoji: "🏪",
    technologies: ["Java", "Swing", "AWT", "SQL"],
    categories: ["fullstack"],
    status: "archived",
    role: "Desktop Application Developer",
    githubUrl: "https://github.com/LabibTajremin/Store_magement_system",
    features: [
      "Real-time inventory tracking",
      "Multi-location warehouse support",
      "Stock movement history",
      "Reporting and analytics"
    ]
  },
  {
    id: "potho-shishur-alo",
    title: "Potho Shishur Alo - Donation Platform",
    description:
      "Social-impact web platform enabling secure donations for street children with transparent fund tracking and donor engagement.",
    longDescription:
      "Laravel-based donation management system creating meaningful social impact. Features secure payment integration, donor profile management, real-time donation tracking, and comprehensive fund allocation monitoring. Combines modern web technology with mission-driven purpose for community support.",
    emoji: "💝",
    technologies: ["Laravel", "MySQL", "PHP", "JavaScript"],
    categories: ["fullstack"],
    status: "production",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/LabibTajremin/potho_shishur_alo",
    features: [
      "Secure donation processing",
      "Donor profile management",
      "Real-time fund tracking",
      "Impact reporting and transparency"
    ]
  },
  {
    id: "catch-it-game",
    title: "Catch It - Dynamic Game Engine",
    description:
      "Graphics-intensive game featuring adaptive difficulty scaling and physics-based collision detection for engaging user experience.",
    longDescription:
      "C-based game engine showcasing graphics programming fundamentals with I-Graphics library. Features dynamic difficulty progression that adapts ball-falling speed and spawn patterns based on player performance, coupled with collision detection and score management systems.",
    emoji: "🎮",
    technologies: ["C", "Graphics Programming", "Game Physics"],
    categories: ["game", "fullstack"],
    status: "archived",
    role: "Game Developer",
    githubUrl: "https://github.com/LabibTajremin/Catch_it",
    features: [
      "Progressive difficulty scaling",
      "Real-time physics engine",
      "Collision detection system",
      "Score tracking and leaderboard"
    ]
  }
];

export const projectFilters: { label: string; value: "all" | Project["categories"][number] }[] = [
  { label: "All Projects", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Enterprise", value: "enterprise" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Low-Code", value: "lowcode" },
  { label: "Backend", value: "backend" },
  { label: "IoT", value: "iot" },
  { label: "Games", value: "game" }
];
