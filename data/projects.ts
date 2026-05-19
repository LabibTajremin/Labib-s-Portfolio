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
    title: "Structural Design Automation",
    description:
      "Web app for civil engineers to automate structural measurements and export results to Excel.",
    longDescription:
      "Full-stack tool that automates structural measurements, performs real-time calculations, and exports results to Excel for design documentation. Delivered as a production-ready engineering workflow optimizer.",
    emoji: "📐",
    technologies: ["Java Spring", "JavaScript", "HTML5", "CSS"],
    categories: ["fullstack"],
    status: "archived",
    role: "Developer",
    githubUrl: "https://github.com/LabibTajremin",
    features: [
      "Automated measurement engine",
      "Real-time calculations",
      "Excel export support",
      "Intuitive UI"
    ]
  }
];

export const projectFilters: { label: string; value: "all" | Project["categories"][number] }[] = [
  { label: "All Projects", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Enterprise", value: "enterprise" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Low-Code", value: "lowcode" },
  { label: "Backend", value: "backend" }
];
