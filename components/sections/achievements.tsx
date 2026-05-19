"use client";

import { motion } from "framer-motion";
import { Check, GraduationCap, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { education } from "@/data/achievements";
import { coreCompetencies } from "@/data/skills";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Background"
      title={
        <>
          Education & <span className="gradient-text">Strengths</span>
        </>
      }
      description="Academic foundation paired with the soft and technical skills that drive my work."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <Card className="h-full p-7">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <GraduationCap className="h-5 w-5 text-primary" />
              Academic History
            </h3>
            <div className="mt-5 space-y-3">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="rounded-xl border border-border bg-card/40 p-4 transition-all hover:translate-x-1 hover:border-primary/60"
                >
                  <div className="font-display text-base font-semibold">
                    {e.degree}
                  </div>
                  <div className="mt-0.5 text-sm text-muted-foreground">
                    {e.school}
                    {e.field ? ` · ${e.field}` : ""}
                  </div>
                  <div className="mt-2 flex justify-between font-mono text-xs text-muted-foreground">
                    <span>{e.duration}</span>
                    <span className="font-semibold text-primary">{e.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Card className="h-full p-7">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-primary" />
              Core Competencies
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {coreCompetencies.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/40 px-3.5 py-2.5 text-sm transition-all hover:translate-x-1 hover:border-brand-cyan/60"
                >
                  <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
