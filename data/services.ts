import {
  Layers,
  Code,
  Cloud,
  Plug,
  Compass,
  Zap,
  Building2,
  Lock
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "saas",
    title: "SaaS Architecture",
    description:
      "Designing and implementing multi-tenant, multi-database SaaS platforms with secure isolation, role-based permissions, and reliable synchronization at scale.",
    icon: Layers
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end product development with .NET, React, and Angular — from database design through API layer to polished, responsive user interfaces.",
    icon: Code
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Azure-native deployments, microservices architectures, CI/CD pipelines via Azure DevOps, and infrastructure that's easy to scale and maintain.",
    icon: Cloud
  },
  {
    id: "api",
    title: "API Development & Integration",
    description:
      "Building robust REST APIs and integrating third-party services with reliable sync engines, identity providers like Okta, and secure data flows.",
    icon: Plug
  },
  {
    id: "system-design",
    title: "System Design",
    description:
      "Architecting scalable enterprise systems with tenant management, modular components, and maintainable structures built for long-term growth.",
    icon: Compass
  },
  {
    id: "low-code",
    title: "Low-Code / Rapid Delivery",
    description:
      "Accelerating enterprise app delivery using OutSystems and MuleSoft — proven to cut dev cycles by ~40% without compromising on quality.",
    icon: Zap
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Custom CRM, HR, document management, and clinical/regulated systems with custom workflows tailored to specific business domains.",
    icon: Building2
  },
  {
    id: "security",
    title: "Identity & Security",
    description:
      "OAuth/OpenID flows, Okta integration, Azure Key Vault, and permission systems designed for multi-tenant compliance and data protection.",
    icon: Lock
  }
];
