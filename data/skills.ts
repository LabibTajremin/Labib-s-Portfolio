import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  Wrench,
  Brain
} from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core programming languages I work with daily.",
    icon: Code2,
    skills: ["C#", "Java", "JavaScript", "TypeScript", "C++", "Python"]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, modern user interfaces.",
    icon: Palette,
    skills: ["React JS", "Angular", "HTML5", "CSS", "Bootstrap", "Telerik/Kendo"]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable server-side architecture and APIs.",
    icon: Server,
    skills: [
      ".NET Core",
      ".NET Framework",
      "ASP.NET",
      "Java Spring",
      "REST API",
      "Entity Framework"
    ]
  },
  {
    id: "databases",
    title: "Databases",
    description: "Designing efficient data models and queries.",
    icon: Database,
    skills: ["SQL Server", "MySQL", "PostgreSQL", "Entity Framework"]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Azure-first cloud architecture & CI/CD.",
    icon: Cloud,
    skills: [
      "Azure Functions",
      "Blob Storage",
      "Key Vault",
      "Azure DevOps",
      "CI/CD Pipelines"
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Security",
    description: "Multi-tenant systems with robust auth.",
    icon: ShieldCheck,
    skills: ["Multi-Tenant", "Microservices", "System Design", "Okta", "OAuth"]
  },
  {
    id: "lowcode",
    title: "Low-Code Platforms",
    description: "Rapid enterprise app delivery.",
    icon: Zap,
    skills: ["OutSystems", "MuleSoft", "Service Studio", "Integration Studio"]
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    description: "Daily-driver IDEs and workflows.",
    icon: Wrench,
    skills: [
      "Visual Studio",
      "VS Code",
      "Rider",
      "Git",
      "Azure DevOps",
      "Bitbucket"
    ]
  },
  {
    id: "ai-misc",
    title: "AI / ML & Misc",
    description: "Algorithms, Linux, and beyond.",
    icon: Brain,
    skills: ["ML Algorithms", "OOP", "DSA", "Linux", "Agile"]
  }
];

export const coreCompetencies = [
  "Strong C# & .NET expertise",
  "OOP, DSA fundamentals",
  "Database & Entity Framework",
  "Agile workflow proficiency",
  "Strong problem-solving",
  "Software best practices",
  "Quick learner & flexible",
  "Analytical & observant",
  "Rapid low-code delivery",
  "Linux working experience",
  "ML algorithms exposure",
  "Strong communication"
];
