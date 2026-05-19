import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Labib Tajremin",
  title: "Labib Tajremin — Software Engineer | SaaS, .NET & Cloud Architect",
  description:
    "Premium portfolio of Labib Tajremin — Software Engineer with 5+ years of experience building scalable SaaS solutions, multi-tenant architectures, and microservices on Azure.",
  url: "https://labib-tajremin.vercel.app",
  ogImage: "/og.png",
  keywords: [
    "Labib Tajremin",
    "Software Engineer",
    ".NET Developer",
    "React Developer",
    "Azure",
    "SaaS",
    "Multi-Tenant",
    "Microservices",
    "Dhaka",
    "Bangladesh"
  ]
};
