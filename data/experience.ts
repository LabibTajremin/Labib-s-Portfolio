import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "vivasoft",
    role: "Software Engineer L-II",
    company: "VivaSoft Ltd",
    duration: "May 2023 — Present",
    responsibilities: [
      "Architected and implemented a multi-tenant, multi-database SaaS system enabling secure data isolation and efficient synchronization across clients.",
      "Designed and deployed microservices-based applications on Azure, improving scalability and reducing deployment time through CI/CD pipelines.",
      "Developed a data synchronization engine integrating third-party APIs, automating updates every 30 minutes with manual sync for real-time accuracy.",
      "Led system design initiatives for tenant management, database architecture, and permission control.",
      "Collaborated with international clients in Agile sprints to deliver tailored enterprise solutions."
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
    duration: "Sep 2021 — May 2023",
    responsibilities: [
      "Delivered enterprise-grade web and mobile applications using OutSystems, accelerating development cycles by 40%.",
      "Designed and implemented custom client solutions with scalable architectures and optimized database performance.",
      "Integrated third-party APIs and services using Service Studio and Integration Studio, ensuring seamless interoperability.",
      "Partnered with cross-functional teams to deliver high-quality software in Agile environments."
    ],
    stack: ["C#", "ASP.NET", "ASP.NET Core", "JavaScript", "Angular", "SQL Server", "MySQL"]
  },
  {
    id: "adipster",
    role: "Software Engineer",
    company: "Adipster Tech Limited",
    duration: "Jul 2020 — Aug 2021",
    responsibilities: [
      "Developed and maintained enterprise applications using .NET technologies, ensuring code quality and adherence to best practices.",
      "Coordinated with team members to streamline development workflows and improve delivery timelines.",
      "Sharpened understanding of clean code practices and team-based delivery workflows."
    ],
    stack: [".NET", "C#", "SQL Server", "JavaScript"]
  }
];
