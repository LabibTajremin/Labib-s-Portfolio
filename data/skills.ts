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
    skills: [
      { name: "C#", proficiency: "expert" },
      { name: "Java", proficiency: "advanced" },
      { name: "JavaScript", proficiency: "advanced" },
      { name: "TypeScript", proficiency: "advanced" },
      { name: "C++", proficiency: "proficient" },
      { name: "Python", proficiency: "proficient" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, modern user interfaces.",
    icon: Palette,
    skills: [
      { name: "React JS", proficiency: "advanced" },
      { name: "Angular", proficiency: "advanced" },
      { name: "HTML5", proficiency: "expert" },
      { name: "CSS", proficiency: "expert" },
      { name: "Bootstrap", proficiency: "advanced" },
      { name: "Telerik/Kendo", proficiency: "proficient" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable server-side architecture and APIs.",
    icon: Server,
    skills: [
      { name: ".NET Core", proficiency: "expert" },
      { name: ".NET Framework", proficiency: "expert" },
      { name: "ASP.NET", proficiency: "advanced" },
      { name: "Java Spring", proficiency: "proficient" },
      { name: "REST API", proficiency: "expert" },
      { name: "Entity Framework", proficiency: "advanced" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    description: "Designing efficient data models and queries.",
    icon: Database,
    skills: [
      { name: "SQL Server", proficiency: "expert" },
      { name: "MySQL", proficiency: "advanced" },
      { name: "PostgreSQL", proficiency: "advanced" },
      { name: "Entity Framework", proficiency: "advanced" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Azure-first cloud architecture & CI/CD.",
    icon: Cloud,
    skills: [
      { name: "Azure Functions", proficiency: "advanced" },
      { name: "Blob Storage", proficiency: "advanced" },
      { name: "Key Vault", proficiency: "advanced" },
      { name: "Azure DevOps", proficiency: "expert" },
      { name: "CI/CD Pipelines", proficiency: "advanced" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Security",
    description: "Multi-tenant systems with robust auth.",
    icon: ShieldCheck,
    skills: [
      { name: "Multi-Tenant", proficiency: "advanced" },
      { name: "Microservices", proficiency: "advanced" },
      { name: "System Design", proficiency: "advanced" },
      { name: "Okta", proficiency: "proficient" },
      { name: "OAuth", proficiency: "advanced" }
    ]
  },
  {
    id: "lowcode",
    title: "Low-Code Platforms",
    description: "Rapid enterprise app delivery.",
    icon: Zap,
    skills: [
      { name: "OutSystems", proficiency: "expert" },
      { name: "MuleSoft", proficiency: "advanced" },
      { name: "Service Studio", proficiency: "expert" },
      { name: "Integration Studio", proficiency: "advanced" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    description: "Daily-driver IDEs and workflows.",
    icon: Wrench,
    skills: [
      { name: "Visual Studio", proficiency: "expert" },
      { name: "VS Code", proficiency: "advanced" },
      { name: "Rider", proficiency: "advanced" },
      { name: "Git", proficiency: "expert" },
      { name: "Azure DevOps", proficiency: "expert" },
      { name: "Bitbucket", proficiency: "proficient" }
    ]
  },
  {
    id: "ai-misc",
    title: "AI / ML & Misc",
    description: "Algorithms, Linux, and beyond.",
    icon: Brain,
    skills: [
      { name: "ML Algorithms", proficiency: "proficient" },
      { name: "OOP", proficiency: "expert" },
      { name: "DSA", proficiency: "advanced" },
      { name: "Linux", proficiency: "proficient" },
      { name: "Agile", proficiency: "advanced" }
    ]
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
