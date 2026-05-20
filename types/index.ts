import type { LucideIcon } from "lucide-react";

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  title: string;
  taglines: string[];
  bio: string;
  longBio: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  stats: { value: string; label: string }[];
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "map";
}

export interface Skill {
  name: string;
  proficiency: "expert" | "advanced" | "proficient" | "learning";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}

export type ProjectCategory =
  | "saas"
  | "enterprise"
  | "fullstack"
  | "lowcode"
  | "backend"
  | "iot"
  | "game";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  emoji: string;
  technologies: string[];
  categories: ProjectCategory[];
  status: "featured" | "production" | "archived";
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  field?: string;
  duration: string;
  grade: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
