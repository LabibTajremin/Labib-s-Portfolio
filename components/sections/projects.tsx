"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { projects, projectFilters } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visuals";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type FilterValue = (typeof projectFilters)[number]["value"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo<Project[]>(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  // Separate featured and regular projects
  const featuredProjects = visible.filter((p) => p.status === "featured");
  const regularProjects = visible.filter((p) => p.status !== "featured");

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
      {/* Premium Filter UI with glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 flex flex-wrap justify-center gap-3"
      >
        {projectFilters.map((f, idx) => {
          const active = filter === f.value;
          return (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={cn(
                "relative px-5 py-2.5 text-sm font-semibold transition-all duration-400",
                active ? "text-white" : "text-muted-foreground hover:text-foreground/80"
              )}
            >
              {active && (
                <motion.div
                  layoutId="active-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-slate-500/30 via-slate-600/30 to-slate-700/30 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(148,163,184,0.3)]"
                  transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {f.label}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && filter === "all" && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 font-display text-xl font-bold text-foreground"
          >
            ⭐ Featured Projects
          </motion.h3>
          <div className="space-y-8">
            {featuredProjects.map((project, idx) => (
              <FeaturedProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Regular Projects Grid */}
      {regularProjects.length > 0 && (
        <>
          {featuredProjects.length > 0 && filter === "all" && (
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 font-display text-xl font-bold text-foreground"
            >
              Other Projects
            </motion.h3>
          )}
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {regularProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={p} index={idx} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      {/* Empty State */}
      {visible.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center"
        >
          <p className="text-muted-foreground">No projects found in this category.</p>
        </motion.div>
      )}
    </Section>
  );
}

// Featured Project Component - Premium Layout
function FeaturedProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/3 to-transparent backdrop-blur-2xl shadow-[0_20px_80px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_40px_120px_0_rgba(255,255,255,0.12)]">
        {/* Animated gradient border */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-3xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Featured Project Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-80 items-center justify-center overflow-hidden border-r border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/50 lg:h-96"
          >
            {/* Premium animated visual */}
            <div className="absolute inset-0">
              <ProjectVisual projectId={project.id} />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          </motion.div>

          {/* Featured Project Content */}
          <div className="flex flex-col justify-between p-8 lg:p-10">
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-sm"
              >
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-semibold text-amber-200">Featured Project</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl font-bold text-foreground leading-tight"
              >
                {project.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-base leading-relaxed text-muted-foreground/90"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="my-6 space-y-2 border-y border-white/10 py-6"
              >
                {project.features.slice(0, 3).map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + idx * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground/80"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                    {feature}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.03 }}
                  className="rounded-lg bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm border border-white/10 hover:bg-white/12 hover:border-white/20 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex gap-4 pt-6 border-t border-white/10"
            >
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-white/8 px-4 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm border border-white/20 hover:bg-white/12 hover:border-white/30 transition-all"
                >
                  <Github className="h-4 w-4" /> View Source
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm border border-blue-400/30 hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/50 transition-all"
                >
                  Live Demo <ArrowRight className="h-4 w-4" />
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Regular Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-white/0 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:from-white/12 hover:to-white/4 hover:shadow-[0_25px_50px_0_rgba(255,255,255,0.1)]">
        {/* Animated corner glow on hover */}
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-gradient-to-tr from-slate-500/10 to-transparent rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

        {/* Gradient border effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          {/* Project Image/Visual */}
          <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/40">
            {/* Premium animated visual */}
            <ProjectVisual projectId={project.id} />

            {/* Status badge */}
            <StatusBadge status={project.status} />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            {/* Title */}
            <motion.h4
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1, color: "rgb(255, 255, 255)" }}
              className="font-display text-base font-bold text-foreground/95 transition-colors duration-300"
            >
              {project.title}
            </motion.h4>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground/75 transition-opacity duration-300"
            >
              {project.description}
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 + 0.2 }}
              className="mt-4 flex flex-wrap gap-1.5"
            >
              {project.technologies.slice(0, 3).map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ y: -1, scale: 1.05 }}
                  className="inline-flex items-center rounded-md bg-white/6 px-2 py-1 text-[10px] font-medium text-muted-foreground/70 backdrop-blur-sm border border-white/15 hover:bg-white/10 hover:text-foreground transition-all"
                >
                  {t}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] text-muted-foreground/50 px-2 py-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 + 0.3 }}
              className="mt-4 flex gap-3 border-t border-white/10 pt-4"
            >
              {project.githubUrl && (
                <motion.a
                  whileHover={{ x: 1 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </motion.a>
              )}
              <motion.a
                whileHover={{ x: 1 }}
                href={project.liveUrl || "#contact"}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Learn More
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Status Badge Component
function StatusBadge({ status }: { status: Project["status"] }) {
  const map: Record<
    Project["status"],
    { label: string; className: string; icon?: React.ReactNode }
  > = {
    featured: {
      label: "Featured",
      className: "bg-gradient-to-r from-amber-500/40 to-orange-500/30 text-amber-100 border-amber-400/50",
      icon: <Star className="h-3.5 w-3.5 fill-current" />
    },
    production: {
      label: "Production",
      className: "bg-gradient-to-r from-emerald-500/40 to-teal-500/30 text-emerald-100 border-emerald-400/50"
    },
    archived: {
      label: "Archived",
      className: "bg-gradient-to-r from-slate-600/40 to-slate-700/30 text-slate-200 border-slate-500/50"
    }
  };
  const c = map[status];
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className={cn(
        "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-bold backdrop-blur-md shadow-lg transition-all",
        c.className
      )}
    >
      {c.icon}
      {c.label}
    </motion.span>
  );
}
