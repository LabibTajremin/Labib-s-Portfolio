import {
  Layers,
  Code,
  Cloud,
  Plug,
  Building2
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "saas",
    title: "SaaS Architecture & Multi-Tenant Systems",
    description:
      "Designing and implementing multi-tenant, multi-database SaaS platforms with secure data isolation, role-based permissions, compliance-ready identity management (Okta), and reliable synchronization at scale.",
    icon: Layers
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end product development with .NET, React, and Angular — from database design through robust APIs to polished, responsive user interfaces. Proven ability to ship 12+ features per quarter in Agile environments.",
    icon: Code
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Azure-native deployments, microservices architectures, CI/CD pipelines via Azure DevOps, and infrastructure automation that reduces deployment time by 60% while maintaining high availability and scalability.",
    icon: Cloud
  },
  {
    id: "api",
    title: "API Development & Integration",
    description:
      "Building robust REST APIs, integrating third-party services, implementing reliable sync engines, and managing real-time data flows. Experience integrating 12+ external APIs with 99.5% uptime.",
    icon: Plug
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Custom CRM, HR systems, document management, clinical/regulated applications, and rapid delivery using low-code platforms (OutSystems, MuleSoft) to accelerate time-to-market by 40%.",
    icon: Building2
  }
];
