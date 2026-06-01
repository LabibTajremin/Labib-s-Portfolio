"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personalInfo";

const SOCIALS = [
  {
    Icon: Github,
    href: "https://github.com/LabibTajremin",
    label: "GitHub"
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/labib-tajremin",
    label: "LinkedIn"
  },
  { Icon: Mail, href: "mailto:ltajremin@gmail.com", label: "Email" },
  { Icon: Phone, href: "tel:+8801911294876", label: "Phone" }
];

function useTypewriter(words: string[], typeSpeed = 70, deleteSpeed = 35, pause = 1800) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      timeout = setTimeout(() => {}, 300);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const dynamic = useTypewriter(personalInfo.taglines);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-32 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_theme(colors.emerald.500)] animate-pulse-glow" />
              {personalInfo.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
            >
              <span className="block">
                Hi, I&apos;m <span className="gradient-text">{personalInfo.firstName}</span>
              </span>
              <span className="block">{personalInfo.lastName}.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 font-display text-xl font-semibold md:text-2xl"
            >
              <span className="text-muted-foreground">I build </span>
              <span className="gradient-text">{dynamic || personalInfo.taglines[0]}</span>
              <span className="ml-0.5 inline-block animate-pulse-glow text-primary">
                |
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {personalInfo.bio} I care about software that&apos;s thoughtfully
              designed, easy for teams to extend, and reliable enough that
              clients trust it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <Button asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/cover-letter.pdf" download>
                  <FileText className="h-4 w-4" />
                  Cover Letter
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex gap-3"
            >
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground hover:glow"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto aspect-square w-full max-w-[420px] lg:justify-self-end"
          >
            <div className="absolute inset-0 rounded-full p-[3px] animate-spin-slow"
                 style={{
                   background:
                     "conic-gradient(from 0deg, hsl(var(--brand-violet)), hsl(var(--brand-cyan)), hsl(var(--brand-pink)), hsl(var(--brand-violet)))"
                 }}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <span className="font-display text-[7rem] font-bold leading-none gradient-text tracking-tighter">
                  {personalInfo.initials}
                </span>
              </div>
            </div>

            <FloatingBadge
              className="left-[-12%] top-[6%]"
              emoji="⚡"
              label="Status"
              value="Open to Work"
              delay={0}
            />
            <FloatingBadge
              className="bottom-[18%] right-[-8%]"
              emoji="🚀"
              label="Experience"
              value="5+ Years"
              delay={-2}
            />
            <FloatingBadge
              className="-bottom-2 left-[8%]"
              emoji=".NET"
              label="Core Stack"
              value="C# · React · Azure"
              delay={-1}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBadge({
  className,
  emoji,
  label,
  value,
  delay = 0
}: {
  className?: string;
  emoji: string;
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={`pointer-events-none absolute hidden items-center gap-2 rounded-xl glass px-3 py-2 text-xs font-semibold shadow-xl md:inline-flex ${className}`}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand text-white text-sm">
        {emoji}
      </span>
      <div>
        <div className="text-[10px] font-medium text-muted-foreground">
          {label}
        </div>
        <div className="text-foreground">{value}</div>
      </div>
    </motion.div>
  );
}
