import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "vivasoft",
    role: "Software Engineer L-II",
    company: "VivaSoft Ltd",
    duration: "May 2023 — Present",
    responsibilities: [
      "Architected and deployed a multi-tenant, multi-database SaaS platform from the ground up, serving 15+ enterprise clients with secure data isolation and 99.9% uptime.",
      "Implemented automated data synchronization engine processing 2,800+ files daily with 99.8% success rate, supporting both 30-minute cycles and on-demand real-time sync.",
      "Designed and deployed microservices architecture on Azure, reducing deployment time by 60% through optimized CI/CD pipelines managing 40+ monthly releases.",
      "Led system architecture for 4-engineer team across 2 product lines, establishing design patterns and standards adopted company-wide.",
      "Integrated Okta identity management for 8+ applications, enabling seamless SSO across enterprise client ecosystem."
    ],
    stack: [
      ".NET (C#)",
      "React JS",
      "Azure Functions",
      "Azure Blob",
      "Azure DevOps",
      "SQL Server"
    ]
  },
  {
    id: "relisource",
    role: "Software Engineer",
    company: "ReliSource",
    duration: "September 2021 — May 2023",
    responsibilities: [
      "Delivered 8+ enterprise applications using OutSystems, accelerating development cycles by 40% (vs. traditional .NET delivery), serving 200+ daily active users.",
      "Designed scalable architectures handling 50,000+ transactions monthly with sub-second response times and optimized database queries.",
      "Integrated 12+ third-party APIs and services using Service Studio and Integration Studio, achieving 99.5% integration uptime.",
      "Mentored 3 junior engineers on OutSystems best practices, establishing code review standards and development workflows."
    ],
    stack: ["C#", "ASP.NET", "ASP.NET Core", "JavaScript", "Angular", "SQL Server", "MySQL"]
  },
  {
    id: "adipster",
    role: "Software Engineer",
    company: "Adipster Tech Limited",
    duration: "July 2020 — August 2021",
    responsibilities: [
      "Developed and maintained 3 production .NET applications serving 200+ daily active users, achieving <0.1% downtime over 14 months.",
      "Implemented entity relationship design and database optimization, improving query performance by 45% across legacy applications.",
      "Collaborated with product team to ship 12+ feature releases, ensuring code quality and adherence to SOLID principles."
    ],
    stack: [".NET", "C#", "SQL Server", "JavaScript"]
  }
];
