"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career Path"
      title={
        <>
          Professional <span className="gradient-text">Experience</span>
        </>
      }
      description="Five years of building software that ships, scales, and stays maintainable."
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="pointer-events-none absolute inset-y-0 left-4 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((exp, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="relative grid items-start gap-4 md:grid-cols-2 md:gap-10"
              >
                <span className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-primary bg-background shadow-[0_0_14px_hsl(var(--primary)/0.55)] md:left-1/2" />

                <div className={cn("pl-10 md:pl-0", right && "md:col-start-2")}>
                  <Card className="p-6 hover:-translate-y-1 hover:border-primary/60 hover:glow">
                    <span className="inline-block rounded-md border border-border bg-card/60 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {exp.duration}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <div className="mt-1 text-sm font-semibold gradient-text inline-block">
                      {exp.company}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="relative pl-5 text-sm text-muted-foreground"
                        >
                          <span className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.stack.map((t) => (
                        <Badge key={t} variant="soft" className="text-[11px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
