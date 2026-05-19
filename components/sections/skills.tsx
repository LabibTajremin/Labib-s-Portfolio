"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
            >
              <Card className="relative h-full overflow-hidden p-6 hover:-translate-y-1.5 hover:border-primary/60 hover:glow group">
                <div className="absolute inset-0 -z-0 bg-gradient-brand-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.5)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <Badge key={s} variant="soft" className="text-[11px]">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
