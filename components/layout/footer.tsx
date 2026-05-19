import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" }
];

const DOCS = [
  { label: "View Resume", href: "/resume.pdf", external: true },
  { label: "Download Resume", href: "/resume.pdf", download: true },
  { label: "View Cover Letter", href: "/cover-letter.pdf", external: true },
  { label: "Download Cover Letter", href: "/cover-letter.pdf", download: true }
];

const ICONS = { github: Github, linkedin: Linkedin, mail: Mail, phone: Phone };

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-12 border-t border-border bg-card/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold gradient-text">
              {personalInfo.name}
            </h3>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Software Engineer crafting scalable SaaS systems, multi-tenant
              architectures, and enterprise applications with .NET, React, and
              Azure.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Documents
            </h4>
            <ul className="mt-4 space-y-2">
              {DOCS.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    target={d.external ? "_blank" : undefined}
                    rel={d.external ? "noopener noreferrer" : undefined}
                    download={d.download || undefined}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Connect
            </h4>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((s) => {
                const Icon = ICONS[s.icon] ?? Mail;
                return (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {s.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {year} {personalInfo.name}. All rights reserved.</div>
          <div>Designed & engineered with care.</div>
        </div>
      </div>
    </footer>
  );
}
