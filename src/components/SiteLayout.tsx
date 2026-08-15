import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/angle-types", label: "Types of Angles" },
  { to: "/relationships", label: "Angle Relationships" },
  { to: "/examples", label: "Worked Examples" },
  { to: "/activities", label: "Activities & Games" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
              ∠
            </span>
            <span className="font-display text-base font-bold leading-tight">
              Unit 3 · Geometry
              <span className="block text-xs font-normal text-muted-foreground">Angles & Relationships</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-20 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <p className="font-display text-base font-semibold text-foreground">
            Lesson One — Types of Angles and Relationships between them
          </p>
          <p className="mt-2 max-w-2xl">
            An interactive study companion for Unit 3: Geometry and Measurement. Every definition, figure, example and
            drill on this site follows the lesson sequence of the printed unit.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="grid-paper border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/70">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>
      </div>
    </div>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-accent bg-accent/10 p-5">
      <p className="font-display font-semibold">{title}</p>
      <div className="mt-2 space-y-2 text-sm text-foreground/85">{children}</div>
    </div>
  );
}
