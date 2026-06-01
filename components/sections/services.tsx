"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import { MessageSquare, Lightbulb, Zap, Headphones } from "lucide-react";

export function Services() {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      description: "Understanding your vision, requirements, and constraints"
    },
    {
      icon: Lightbulb,
      title: "Proposal & Scoping",
      description: "Detailed solution design with timeline and budget"
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description: "Iterative development with bi-weekly sprints and demos"
    },
    {
      icon: Headphones,
      title: "Handoff & Support",
      description: "Deployment, documentation, and ongoing maintenance"
    }
  ];

  return (
    <Section
      id="services"
      eyebrow="What I Offer"
      title={
        <>
          Services & <span className="gradient-text">Expertise</span>
        </>
      }
      description="End-to-end engineering services backed by 5+ years of enterprise delivery."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 5) * 0.06, duration: 0.5 }}
            >
              <Card className="group relative h-full overflow-hidden p-7 hover:-translate-y-1.5 hover:border-primary/60 hover:glow">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-gradient-brand-soft">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {svc.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* How I Work Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16"
      >
        <h3 className="mb-8 text-center font-display text-2xl font-semibold">How I Work</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative"
              >
                {/* Connector line */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute -right-2 top-1/3 hidden w-4 lg:block">
                    <svg className="h-5 w-full text-gradient-brand" viewBox="0 0 20 10" fill="none">
                      <path d="M0 5 Q5 0, 10 5 T20 5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                )}
                <Card className="flex flex-col items-center p-6 text-center hover:-translate-y-1.5 hover:border-primary/60 hover:glow">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-blue-600/40 shadow-[0_0_16px_rgba(59,130,246,0.3)]">
                    <StepIcon className="h-6 w-6 text-blue-100" />
                  </div>
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
