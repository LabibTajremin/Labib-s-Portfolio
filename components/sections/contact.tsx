"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/personalInfo";

const ROWS = [
  {
    Icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  },
  {
    Icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/labib-tajremin",
    href: "https://www.linkedin.com/in/labib-tajremin"
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/LabibTajremin",
    href: "https://github.com/LabibTajremin"
  },
  {
    Icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: undefined
  }
] as const;

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `From: ${data.name} <${data.email}>\n\n${data.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    toast.success("Message ready! Opening your email client…", {
      description: "If nothing opens, please email me directly."
    });
    reset();
    setSubmittedOnce(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title={
        <>
          Let's build something <span className="gradient-text">together</span>
        </>
      }
      description="Have a project in mind, a role to discuss, or just want to say hello? My inbox is open."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="space-y-3"
        >
          {ROWS.map(({ Icon, label, value, href }) => {
            const Component: any = href ? "a" : "div";
            const props = href
              ? {
                  href,
                  target: href.startsWith("http") ? "_blank" : undefined,
                  rel: href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              : {};
            return (
              <Component
                key={label}
                {...props}
                className="flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:glow"
              >
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-brand-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              </Component>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <Card className="p-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email"
                      }
                    })}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                </Field>
              </div>
              <Field label="Subject" error={errors.subject?.message}>
                <Input
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                />
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <Textarea
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "At least 10 characters" }
                  })}
                  placeholder="Tell me a bit about your project or idea…"
                  aria-invalid={!!errors.message}
                />
              </Field>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
              {submittedOnce && (
                <p className="text-center text-xs text-muted-foreground">
                  Thanks — your email client should be opening with the message pre-filled.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
