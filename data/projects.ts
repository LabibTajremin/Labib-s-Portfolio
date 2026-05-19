import type { Project } from "@/types";

export const projects: Project[] = [
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
