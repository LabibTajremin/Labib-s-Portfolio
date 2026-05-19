"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";

export function Services() {
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
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
    </Section>
  );
}
