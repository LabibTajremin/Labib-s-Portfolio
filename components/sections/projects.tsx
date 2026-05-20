"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Section } from "@/components/layout/section";
import { projects, projectFilters } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type FilterValue = (typeof projectFilters)[number]["value"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

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
      {/* Premium Filter UI */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-wrap justify-center gap-3"
      >
        {projectFilters.map((f) => {
          const active = filter === f.value;
          return (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group relative px-4 py-2 text-sm font-medium transition-all duration-300",
                active
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Background Effect */}
              {active && (
                <motion.div
                  layoutId="filter-bg"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-slate-600/20 to-slate-700/20 backdrop-blur-md border border-white/20"
                  transition={{ duration: 0.3 }}
                />
              )}

              <span className="relative inline-flex items-center gap-2">
                {f.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Premium Projects Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:from-white/10 hover:to-white/5 hover:shadow-[0_20px_40px_0_rgba(255,255,255,0.08)]">
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          {/* Premium Project Header with Visual */}
          <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
            {/* Grid background effect */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* Glowing emoji */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.4 }}
              className="relative text-6xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              {project.emoji}
            </motion.div>

            {/* Status Badge - Premium */}
            <StatusBadge status={project.status} />
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col p-6">
            {/* Title */}
            <h3 className="font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground/80 transition-colors duration-300 group-hover:text-muted-foreground">
              {project.description}
            </p>

            {/* Premium Tech Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center rounded-lg bg-white/8 px-2.5 py-1 text-xs font-medium text-muted-foreground/80 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/12 hover:text-foreground hover:border-white/20"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Action Links */}
            <div className="mt-5 flex gap-4 border-t border-white/10 pt-4">
              {project.githubUrl && (
                <motion.a
                  whileHover={{ x: 2 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/70 transition-colors duration-300 hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> Source
                </motion.a>
              )}
              <motion.a
                whileHover={{ x: 2 }}
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" /> Learn More
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const map: Record<
    Project["status"],
    { label: string; className: string; icon?: React.ReactNode }
  > = {
    featured: {
      label: "Featured",
      className: "bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-200 border-amber-500/50 backdrop-blur-md",
      icon: <Star className="h-3.5 w-3.5 fill-current" />
    },
    production: {
      label: "Production",
      className: "bg-gradient-to-r from-emerald-500/30 to-emerald-600/30 text-emerald-200 border-emerald-500/50 backdrop-blur-md"
    },
    archived: {
      label: "Archived",
      className: "bg-slate-600/30 text-slate-300 border-slate-500/50 backdrop-blur-md"
    }
  };
  const c = map[status];
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className={cn(
        "absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-semibold transition-all duration-300",
        c.className
      )}
    >
      {c.icon}
      {c.label}
    </motion.span>
  );
}
