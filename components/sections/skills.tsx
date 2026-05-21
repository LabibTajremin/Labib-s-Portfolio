"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { skillCategories } from "@/data/skills";

// Premium vibrant color palette - More lively and eye-catching
const proficiencyColors = {
  expert: "from-blue-500 via-blue-600 to-blue-700",
  advanced: "from-cyan-400 via-cyan-500 to-blue-600",
  proficient: "from-amber-400 via-yellow-500 to-amber-600",
  learning: "from-purple-400 via-indigo-500 to-purple-600"
};

const proficiencyWidths = {
  expert: 95,
  advanced: 75,
  proficient: 50,
  learning: 30
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Arsenal"
      title={
        <>
          Skills & <span className="gradient-text">Technologies</span>
        </>
      }
      description="The tools, frameworks, and platforms I use to build production-grade software."
    >
      {/* Premium Legend */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-wrap gap-6 sm:gap-8"
      >
        {(
          [
            { level: "Expert", gradient: "from-blue-500 to-blue-700" },
            { level: "Advanced", gradient: "from-cyan-400 to-blue-600" },
            { level: "Proficient", gradient: "from-amber-400 to-amber-600" },
            { level: "Learning", gradient: "from-purple-400 to-purple-600" }
          ] as const
        ).map((item) => (
          <div key={item.level} className="flex items-center gap-2.5">
            <div className={`h-2.5 w-8 rounded-full bg-gradient-to-r ${item.gradient} shadow-[0_0_12px_rgba(var(--color),0.4)]`} />
            <span className="text-sm font-medium text-muted-foreground">{item.level}</span>
          </div>
        ))}
      </motion.div>

      {/* Premium Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group"
            >
              {/* Premium Card with glassmorphism */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Category Header with Icon */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-blue-600/40 backdrop-blur-sm transition-all duration-300 group-hover:from-blue-400/50 group-hover:via-cyan-400/40 group-hover:to-blue-500/50 shadow-[0_0_16px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_24px_rgba(59,130,246,0.5)]">
                      <Icon className="h-5 w-5 text-blue-100 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground/70">
                        {category.skills.length} proficiencies
                      </p>
                    </div>
                  </div>

                  {/* Skills with Premium Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const colorClass = proficiencyColors[skill.proficiency];
                      const width = proficiencyWidths[skill.proficiency];

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            delay: catIndex * 0.08 + skillIndex * 0.03,
                            duration: 0.4
                          }}
                          className="group/skill"
                        >
                          {/* Skill Label and Proficiency */}
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs font-medium text-foreground/90">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground/60 capitalize">
                              {skill.proficiency}
                            </span>
                          </div>

                          {/* Premium Progress Bar */}
                          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/8 shadow-inner">
                            <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              whileInView={{ width: `${width}%`, opacity: 1 }}
                              viewport={{ once: true, margin: "-60px" }}
                              transition={{
                                delay: catIndex * 0.08 + skillIndex * 0.03,
                                duration: 0.7,
                                ease: "easeOut"
                              }}
                              className={`h-full rounded-full bg-gradient-to-r ${colorClass} shadow-[0_0_20px_currentColor] transition-all duration-300 group-hover/skill:shadow-[0_0_28px_currentColor,0_0_40px_rgba(255,255,255,0.2)]`}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
