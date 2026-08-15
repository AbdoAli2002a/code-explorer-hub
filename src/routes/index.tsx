import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { AngleFigure } from "@/components/AngleFigure";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angles & Relationships — Unit 3 Geometry Study Site" },
      {
        name: "description",
        content:
          "Interactive English lesson on types of angles, adjacent, complementary and supplementary angles, with figures, worked examples, drills and learning games.",
      },
      { property: "og:title", content: "Angles & Relationships — Unit 3 Geometry" },
      {
        property: "og:description",
        content: "Learn every angle type and relationship with diagrams, worked examples and interactive games.",
      },
    ],
  }),
  component: Index,
});

const outcomes = [
  "Learn the concept of an angle and its measuring units.",
  "Identify different types of angles and how to distinguish between them.",
  "Identify adjacent angles.",
  "Learn complementary angles.",
  "Learn supplementary angles.",
];

const vocab = ["Straight Angle", "Reflex Angle", "Adjacent Angles", "Complementary Angles", "Supplementary Angles"];

const map = [
  {
    to: "/angle-types",
    n: "01",
    title: "Concept & Types of Angles",
    text: "Vertex, sides, degrees, minutes and seconds — then the six angle types from zero to reflex.",
  },
  {
    to: "/relationships",
    n: "02",
    title: "Relations between Angles",
    text: "Adjacent, complementary and supplementary angles, plus the outer-sides rules.",
  },
  {
    to: "/examples",
    n: "03",
    title: "Worked Examples",
    text: "Eight solved examples with full steps, including ratios and angle bisectors.",
  },
  {
    to: "/activities",
    n: "04",
    title: "Activities & Games",
    text: "Classify-the-angle game, complement/supplement speed drill, protractor challenge and an exam quiz.",
  },
];

function Index() {
  return (
    <SiteLayout>
      <section className="grid-paper border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground/70">
              Unit 3 · Geometry and Measurement · Lesson One
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Types of Angles and the Relationships between them
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              A complete, illustrated walk-through of the lesson: the concept of an angle, how angles are measured,
              every angle type, and the relations that connect two angles — followed by exercises and learning games.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/angle-types"
                className="rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start the lesson
              </Link>
              <Link
                to="/activities"
                className="rounded-lg border border-border bg-card px-5 py-2.5 font-medium transition-colors hover:bg-secondary"
              >
                Play the games
              </Link>
            </div>
          </div>
          <div className="card-surface grid grid-cols-2 gap-2 p-4">
            <AngleFigure measure={45} label="45° acute" size={170} className="w-full" />
            <AngleFigure measure={90} label="90° right" size={170} className="w-full" />
            <AngleFigure measure={130} label="130° obtuse" size={170} className="w-full" />
            <AngleFigure measure={230} label="230° reflex" size={170} className="w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface p-6">
            <h2 className="text-xl font-bold">Learning Outcomes</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <h2 className="text-xl font-bold">Key Vocabulary</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {vocab.map((v) => (
                <span key={v} className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
                  {v}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Each term is defined on its own page with a figure you can compare against the printed lesson.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="text-2xl font-bold">Lesson Map</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {map.map((m) => (
            <Link key={m.to} to={m.to} className="card-surface group p-6 transition-colors hover:bg-secondary/50">
              <span className="font-mono text-xs text-muted-foreground">{m.n}</span>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-primary">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
