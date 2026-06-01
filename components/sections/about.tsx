"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/data/personalInfo";
import { careerJourney } from "@/data/achievements";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={
        <>
          The story <span className="gradient-text">behind the code</span>
        </>
      }
      description="A glimpse into who I am, where I've been, and what drives me as an engineer."
    >
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold">
            Engineer by craft, problem-solver by nature.
          </h3>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            {personalInfo.longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 rounded-lg border border-brand-cyan/30 bg-brand-cyan/5 p-4 backdrop-blur-sm"
          >
            <p className="text-sm">
              <span className="font-semibold text-brand-cyan">Currently exploring:</span>{" "}
              <span className="text-muted-foreground">{personalInfo.currentlyExploring}</span>
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3.5">
            {personalInfo.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <Card className="p-5 hover:-translate-y-1 hover:border-primary/60 hover:glow">
                  <div className="font-display text-3xl font-bold gradient-text leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-5 font-display text-2xl font-semibold">
            Career Journey
          </h3>
          <ol className="relative ml-3 border-l-2 border-border pl-6">
            <span className="pointer-events-none absolute -left-[2px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-brand-cyan to-transparent" />
            {careerJourney.map((step, i) => (
              <motion.li
                key={step.title + i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative mb-5"
              >
                <span className="absolute -left-[34px] top-5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_hsl(var(--primary)/0.55)]" />
                <Card className="p-5 hover:translate-x-1 hover:border-primary/60">
                  <div className="font-mono text-xs font-semibold text-brand-cyan">
                    {step.year}
                  </div>
                  <div className="mt-1 font-display text-base font-semibold">
                    {step.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {step.sub}
                  </div>
                </Card>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </Section>
  );
}
