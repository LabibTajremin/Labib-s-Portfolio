"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { skillCategories } from "@/data/skills";

const proficiencyColors = {
  expert: "from-blue-500 to-blue-600",
  advanced: "from-green-500 to-green-600",
  proficient: "from-amber-500 to-amber-600",
  learning: "from-slate-500 to-slate-600"
};

const proficiencyWidths = {
  expert: 95,
  advanced: 75,
  proficient: 50,
  learning: 30
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
      {/* Legend */}
      <div className="mb-8 flex flex-wrap gap-4 sm:gap-6">
        {(
          [
            { level: "Expert", color: "bg-blue-500" },
            { level: "Advanced", color: "bg-green-500" },
            { level: "Proficient", color: "bg-amber-500" },
            { level: "Learning", color: "bg-slate-500" }
          ] as const
        ).map((item) => (
          <div key={item.level} className="flex items-center gap-2">
            <div className={`h-2 w-6 rounded ${item.color}`} />
            <span className="text-sm text-muted-foreground">{item.level}</span>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: catIndex * 0.05, duration: 0.5 }}
            >
              <div className="rounded-lg border border-primary/20 bg-card/50 p-6 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300">
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-[0_4px_12px_-4px_hsl(var(--primary)/0.5)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills with Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const colorClass =
                      proficiencyColors[skill.proficiency];
                    const width = proficiencyWidths[skill.proficiency];

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          delay: catIndex * 0.05 + skillIndex * 0.02,
                          duration: 0.3
                        }}
                        className="group"
                      >
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground capitalize">
                            {skill.proficiency}
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary/50 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${width}%` }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                              delay: catIndex * 0.05 + skillIndex * 0.02,
                              duration: 0.6,
                              ease: "easeOut"
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${colorClass} shadow-[0_0_8px_rgba(var(--primary),0.3)]`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
