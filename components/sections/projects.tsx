"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, projectFilters } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type FilterValue = (typeof projectFilters)[number]["value"];

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo<Project[]>(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={
        <>
          Selected <span className="gradient-text">Projects</span>
        </>
      }
      description="A curated look at enterprise systems and applications I've shipped across my career."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                active
                  ? "border-transparent bg-gradient-brand text-white shadow-[0_6px_18px_-6px_hsl(var(--primary)/0.5)]"
                  : "border-border bg-card/50 text-muted-foreground hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:border-primary/60 hover:glow">
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-gradient-brand-soft">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />
        <span className="relative text-5xl drop-shadow-[0_8px_16px_hsl(var(--primary)/0.4)] transition-transform duration-500 group-hover:scale-110">
          {project.emoji}
        </span>
        <StatusBadge status={project.status} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <Badge key={t} variant="soft" className="text-[11px]">
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-5 flex gap-4 border-t border-border pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" /> Source
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" /> Details
          </a>
        </div>
      </div>
    </Card>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const map: Record<
    Project["status"],
    { label: string; className: string; icon?: React.ReactNode }
  > = {
    featured: {
      label: "Featured",
      className: "bg-amber-500/15 text-amber-500 border-amber-500/30",
      icon: <Star className="h-3 w-3 fill-current" />
    },
    production: {
      label: "Production",
      className: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30"
    },
    archived: {
      label: "Archived",
      className: "bg-muted text-muted-foreground border-border"
    }
  };
  const c = map[status];
  return (
    <span
      className={cn(
        "absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-md",
        c.className
      )}
    >
      {c.icon}
      {c.label}
    </span>
  );
}
