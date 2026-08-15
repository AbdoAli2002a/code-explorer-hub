import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader, Section, Callout } from "@/components/SiteLayout";
import { AngleFigure } from "@/components/AngleFigure";

export const Route = createFileRoute("/angle-types")({
  head: () => ({
    meta: [
      { title: "Types of Angles — Zero, Acute, Right, Obtuse, Straight, Reflex" },
      {
        name: "description",
        content:
          "The concept of an angle, degrees, minutes and seconds, and the six types of angles classified by measure with clear diagrams and examples.",
      },
      { property: "og:title", content: "Types of Angles — Concept and Classification" },
      {
        property: "og:description",
        content: "Vertex, sides and measure, plus zero, acute, right, obtuse, straight and reflex angles.",
      },
    ],
  }),
  component: AngleTypes,
});

const types = [
  {
    n: 1,
    name: "Zero Angle",
    rule: "An angle that measures 0°, where the two sides coincide with each other.",
    measure: 0,
    example: "0°",
  },
  {
    n: 2,
    name: "Acute Angle",
    rule: "An angle that measures more than 0° but less than 90°.",
    measure: 40,
    example: "0° < m < 90°",
  },
  {
    n: 3,
    name: "Right Angle",
    rule: "An angle that measures exactly 90°. Its two sides are perpendicular.",
    measure: 90,
    example: "m = 90°",
  },
  {
    n: 4,
    name: "Obtuse Angle",
    rule: "An angle that measures more than 90° but less than 180°.",
    measure: 130,
    example: "90° < m < 180°",
  },
  {
    n: 5,
    name: "Straight Angle",
    rule: "An angle that measures exactly 180°; its sides form a straight line in opposite directions.",
    measure: 180,
    example: "m = 180°",
  },
  {
    n: 6,
    name: "Reflex Angle",
    rule: "An angle that measures more than 180° but less than 360°.",
    measure: 250,
    example: "180° < m < 360°",
  },
];

function AngleTypes() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Lesson One · Part 1"
        title="Concept of an Angle and Types of Angles"
        intro="Before comparing angles we must agree on what an angle is, how it is named, and how it is measured. Then every angle can be sorted into one of six families by its measure."
      />

      <Section title="Concept of an Angle">
        <div className="grid gap-6 md:grid-cols-[1fr_260px]">
          <div className="card-surface space-y-4 p-6">
            <p className="text-lg">
              An <strong>angle</strong> is the union of two rays with a common starting point.
            </p>
            <ul className="space-y-2 text-sm text-foreground/85">
              <li>• The common starting point of the two rays is called the <strong>vertex</strong> of the angle.</li>
              <li>• Each ray is called a <strong>side</strong> of the angle.</li>
            </ul>
            <div className="rounded-lg bg-secondary p-4 font-mono text-sm">
              BA ∪ BC = ∠ABC
              <span className="mt-2 block text-muted-foreground">
                It may be named: ∠ABC, ∠CBA, ∠B or ∠1 — the vertex letter always sits in the middle.
              </span>
            </div>
          </div>
          <div className="card-surface p-4">
            <AngleFigure measure={55} label="∠ABC" size={210} className="w-full" />
          </div>
        </div>

        <Callout title="Naming rule">
          <p>
            Use the three-letter name (∠ABC) whenever several angles share the same vertex. The single-letter name (∠B)
            is only safe when exactly one angle is drawn at that vertex.
          </p>
        </Callout>
      </Section>

      <Section title="Angle Measure">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface p-6">
            <p>
              A <strong>protractor</strong> is used to measure an angle, and angles are measured in{" "}
              <strong>degrees</strong>. For the figure opposite we write:
            </p>
            <p className="mt-3 rounded-lg bg-secondary p-3 text-center font-mono">m (∠ABC) = 50°</p>
            <p className="mt-4">Degrees are divided into smaller parts: minutes ( ′ ) and seconds ( ″ ).</p>
            <div className="mt-3 grid grid-cols-2 gap-3 font-mono text-sm">
              <div className="rounded-lg border border-border p-3 text-center">1° = 60′</div>
              <div className="rounded-lg border border-border p-3 text-center">1′ = 60″</div>
            </div>
          </div>
          <div className="card-surface p-4">
            <Protractor measure={50} />
          </div>
        </div>

        <Callout title="Worked conversion">
          <p>
            89° 60′ = 89° + 1° = <strong>90°</strong>, so it is a right angle. Always convert minutes to degrees before
            you compare two measures.
          </p>
        </Callout>
      </Section>

      <Section title="Types of Angles according to their Measurements">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <article key={t.n} className="card-surface flex flex-col p-5">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-primary font-mono text-xs text-primary-foreground">
                  {t.n}
                </span>
                <h3 className="font-semibold">{t.name}</h3>
              </div>
              <AngleFigure measure={t.measure} label={t.example} size={190} className="mx-auto my-2 w-full max-w-[190px]" />
              <p className="mt-auto text-sm text-muted-foreground">{t.rule}</p>
            </article>
          ))}
        </div>

        <Callout title="Note — the full circle">
          <p>
            A full circle measures 360°, so for any angle ∠M:{" "}
            <span className="font-mono">m(∠M) + m(reflex ∠M) = 360°</span>
          </p>
          <p>
            Example: if m(∠ABC) = 130°, then m(reflex ∠ABC) = 360° − 130° = <strong>230°</strong>.
          </p>
        </Callout>

        <div className="card-surface overflow-x-auto p-2">
          <table className="w-full min-w-[640px] text-sm">
            <caption className="p-3 text-left font-display font-semibold">
              Try it yourself 1 — complete the table (answers shown in the second row)
            </caption>
            <tbody className="font-mono">
              <tr className="border-b border-border">
                <th className="bg-secondary p-3 text-left font-sans font-medium">m (∠ABC)</th>
                {["135°", "85°", "165°", "100°", "89°", "52.5°", "89° 60′"].map((v) => (
                  <td key={v} className="p-3 text-center">
                    {v}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="bg-secondary p-3 text-left font-sans font-medium">m (reflex ∠ABC)</th>
                {["225°", "275°", "195°", "260°", "271°", "307.5°", "270°"].map((v) => (
                  <td key={v} className="p-3 text-center text-accent-foreground">
                    {v}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground">
          Ready to test this? The{" "}
          <Link to="/activities" className="font-medium text-primary underline underline-offset-4">
            classify-the-angle game
          </Link>{" "}
          draws a random angle and asks you to name its type.
        </p>
      </Section>
    </SiteLayout>
  );
}

function Protractor({ measure }: { measure: number }) {
  const cx = 150;
  const cy = 150;
  const r = 120;
  const ticks = Array.from({ length: 37 }, (_, i) => i * 5);
  const rad = (a: number) => (a * Math.PI) / 180;
  const rd = (n: number) => Math.round(n * 100) / 100;
  return (
    <svg viewBox="0 0 300 190" className="w-full" role="img" aria-label={`Protractor reading ${measure} degrees`}>
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy} Z`}
        fill="var(--secondary)"
        stroke="var(--border)"
        strokeWidth="1.5"
      />
      {ticks.map((t) => {
        const major = t % 15 === 0;
        const inner = major ? r - 16 : r - 8;
        return (
          <line
            key={t}
            x1={rd(cx + inner * Math.cos(rad(t)))}
            y1={rd(cy - inner * Math.sin(rad(t)))}
            x2={rd(cx + r * Math.cos(rad(t)))}
            y2={rd(cy - r * Math.sin(rad(t)))}
            stroke="var(--muted-foreground)"
            strokeWidth={major ? 1.4 : 0.7}
          />
        );
      })}
      {[0, 45, 90, 135, 180].map((t) => (
        <text
          key={t}
          x={rd(cx + (r - 30) * Math.cos(rad(t)))}
          y={rd(cy - (r - 30) * Math.sin(rad(t)) + 4)}
          fontSize="10"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontFamily="var(--font-mono)"
        >
          {t}
        </text>
      ))}
      <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke="var(--primary)" strokeWidth="3" />
      <line
        x1={cx}
        y1={cy}
        x2={rd(cx + r * Math.cos(rad(measure)))}
        y2={rd(cy - r * Math.sin(rad(measure)))}
        stroke="var(--accent)"
        strokeWidth="3"
      />
      <circle cx={cx} cy={cy} r="4" fill="var(--primary)" />
      <text x={cx} y={cy + 26} fontSize="13" textAnchor="middle" fontFamily="var(--font-mono)" fill="var(--foreground)">
        m (∠ABC) = {measure}°
      </text>
    </svg>
  );
}
