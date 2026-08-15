import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader, Section } from "@/components/SiteLayout";

export const Route = createFileRoute("/examples")({
  head: () => ({
    meta: [
      { title: "Worked Examples on Angles — Step-by-Step Solutions" },
      {
        name: "description",
        content:
          "Eight fully solved examples on reflex angles, complementary and supplementary angles, ratios between angle measures, straight lines, perpendicular rays and angle bisectors.",
      },
      { property: "og:title", content: "Worked Examples on Angles" },
      {
        property: "og:description",
        content: "Step-by-step solutions for every example in Lesson One, with hidden solutions you can reveal.",
      },
    ],
  }),
  component: Examples,
});

type Ex = { n: number; title: string; question: string[]; solution: string[]; tag: string };

const examples: Ex[] = [
  {
    n: 1,
    tag: "Reflex angles",
    title: "Find the measure of a reflex angle",
    question: ["In the figure, m (∠ABC) = 130°.", "Find the measure of reflex ∠ABC."],
    solution: [
      "m (∠ABC) + m (reflex ∠ABC) = 360°",
      "m (reflex ∠ABC) = 360° − 130°",
      "m (reflex ∠ABC) = 230°",
    ],
  },
  {
    n: 2,
    tag: "Equations",
    title: "Find the value of X",
    question: ["1  Two adjacent angles with perpendicular outer sides: (3X + 15)° fills a right angle.", "2  Angles around a point: (3X − 1)° + (X + 5)° = 360°"],
    solution: [
      "1  3X + 15 = 90  →  3X = 75  →  X = 25",
      "2  3X − 1 + X + 5 = 360  →  4X + 4 = 360",
      "   4X = 356  →  X = 89",
    ],
  },
  {
    n: 3,
    tag: "Complement / supplement",
    title: "Complete the table",
    question: ["Complete: angle · complementary angle · supplementary angle."],
    solution: [
      "35° → complement 55°, supplement 145°",
      "90° → complement 0°, supplement 90°",
      "0° → complement 90°, supplement 180°",
      "48° → complement 42°, supplement 132°",
      "60° → complement 30°, supplement 120°",
    ],
  },
  {
    n: 4,
    tag: "Ratios",
    title: "Angles given as a ratio",
    question: [
      "If m(∠A) : m(∠B) = 7 : 3 and the two angles are complementary, find m(∠A) and m(∠B).",
      "If m(∠A) : m(∠B) = 4 : 1 and the two angles are supplementary, find m(∠B).",
    ],
    solution: [
      "Sum of ratio parts = 7 + 3 = 10, total = 90°",
      "m(∠A) = 7 × 90° ÷ 10 = 63°   and   m(∠B) = 3 × 90° ÷ 10 = 27°",
      "Second part: sum of parts = 4 + 1 = 5, total = 180°",
      "m(∠B) = 1 × 180° ÷ 5 = 36°",
      "Note: if m(∠A) = 3/7 m(∠B), then m(∠A) : m(∠B) = 3 : 7",
    ],
  },
  {
    n: 5,
    tag: "Straight line",
    title: "Adjacent supplementary angles",
    question: ["In the figure, B ∈ AC and m(∠ABE) = 80°, m(∠EBD) = 30°.", "Find m(∠DBC)."],
    solution: [
      "Because BA and BC are opposite rays, the angles at B add to 180°.",
      "m(∠ABE) + m(∠EBD) + m(∠DBC) = 180°",
      "80° + 30° + m(∠DBC) = 180°",
      "m(∠DBC) = 180° − 110° = 70°",
    ],
  },
  {
    n: 6,
    tag: "Perpendicular",
    title: "Adjacent complementary angles",
    question: ["In the figure, AC ⊥ AB, and the two adjacent angles are (7X + 2)° and (3X − 5)°.", "Find the value of X."],
    solution: [
      "The outer sides are perpendicular → the angles are complementary.",
      "7X + 2 + 3X − 5 = 90",
      "10X − 3 = 90  →  10X = 93",
      "X = 9.3",
    ],
  },
  {
    n: 7,
    tag: "Proof",
    title: "Straight line or perpendicular?",
    question: [
      "1  Are BA and BC on a straight line, if the angles at B are 55°, 70° and 50°? Why?",
      "2  Is DC ⊥ DA, if m(∠ADB) = 37° and m(∠BDC) = 53°? Why?",
    ],
    solution: [
      "1  55° + 70° + 50° = 175° ≠ 180°, so BA and BC are NOT on a straight line.",
      "2  37° + 53° = 90°, so DC ⊥ DA — the outer sides are perpendicular.",
    ],
  },
  {
    n: 8,
    tag: "Bisector",
    title: "Using an angle bisector",
    question: ["BC ⊥ BA, m(∠EBC) = 40°, and BD bisects ∠ABE.", "Find m(∠ABD)."],
    solution: [
      "m(∠ABE) = 180° − (40° + 90°) = 50°",
      "BD bisects ∠ABE, so m(∠ABD) = 50° ÷ 2 = 25°",
    ],
  },
];

const tryIt = [
  { q: "The angle measuring 75° complements ……° and supplements ……°", a: "15° and 105°" },
  { q: "The angle measuring ……° complements 67° and supplements ……°", a: "23° and 157°" },
  { q: "The angle measuring ……° complements ……° and supplements 154°", a: "26° and 64°" },
  { q: "If m(∠A) ÷ m(∠B) = 3 and ∠B supplements ∠A, then m(∠B) = ……", a: "45°" },
  { q: "If 2 m(∠A) = 3 m(∠B) and ∠B complements ∠A, then m(∠A) = ……", a: "54°" },
];

function Examples() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Lesson One · Part 3"
        title="Worked Examples with Full Solutions"
        intro="Read the question first, try it on paper, then reveal the model answer. Every solution follows the same three moves: name the relation, write the equation, solve for the unknown."
      />

      <Section title="Solved examples">
        <div className="grid gap-4 md:grid-cols-2">
          {examples.map((ex) => (
            <ExampleCard key={ex.n} ex={ex} />
          ))}
        </div>
      </Section>

      <Section title="Try it yourself">
        <div className="grid gap-3 md:grid-cols-2">
          {tryIt.map((t) => (
            <RevealRow key={t.q} q={t.q} a={t.a} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          For timed practice, open the{" "}
          <Link to="/activities" className="font-medium text-primary underline underline-offset-4">
            activities and games
          </Link>{" "}
          section.
        </p>
      </Section>
    </SiteLayout>
  );
}

function ExampleCard({ ex }: { ex: Ex }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card-surface flex flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs">Example {ex.n}</span>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{ex.tag}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold">{ex.title}</h3>
      <div className="mt-2 space-y-1 text-sm text-foreground/85">
        {ex.question.map((q) => (
          <p key={q}>{q}</p>
        ))}
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-4 self-start rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
      >
        {open ? "Hide solution" : "Show solution"}
      </button>
      {open && (
        <div className="mt-3 space-y-1 rounded-lg bg-secondary p-4 font-mono text-sm">
          {ex.solution.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
      )}
    </article>
  );
}

function RevealRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="card-surface flex items-center justify-between gap-4 p-4 text-left text-sm transition-colors hover:bg-secondary/50"
    >
      <span>{q}</span>
      <span className={`shrink-0 rounded-md px-3 py-1 font-mono ${open ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"}`}>
        {open ? a : "reveal"}
      </span>
    </button>
  );
}
