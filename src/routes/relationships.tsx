import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader, Section, Callout } from "@/components/SiteLayout";
import { AdjacentFigure, AngleFigure } from "@/components/AngleFigure";

export const Route = createFileRoute("/relationships")({
  head: () => ({
    meta: [
      { title: "Adjacent, Complementary and Supplementary Angles Explained" },
      {
        name: "description",
        content:
          "Relations between angles: adjacent angles, complementary angles summing to 90°, supplementary angles summing to 180°, and the outer-sides rules for straight lines and perpendicular rays.",
      },
      { property: "og:title", content: "Relations between Angles" },
      {
        property: "og:description",
        content: "Adjacent, complementary and supplementary angles with figures, notes and non-examples.",
      },
    ],
  }),
  component: Relationships,
});

function Relationships() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Lesson One · Part 2"
        title="Relations between Angles"
        intro="Two angles can share a position (adjacent) or share a total measure (complementary and supplementary). Combining both ideas gives the rules used to prove that rays lie on a straight line or are perpendicular."
      />

      <Section title="1. Adjacent Angles">
        <div className="grid gap-6 md:grid-cols-[1fr_260px]">
          <div className="card-surface space-y-4 p-6">
            <p className="text-lg">
              <strong>Adjacent angles</strong> are two angles in the same plane, with a common vertex and a common
              side, where the other two sides lie on opposite sides of the common side.
            </p>
            <p className="text-sm text-muted-foreground">In the figure, ∠ABD and ∠CBD are adjacent because:</p>
            <ul className="space-y-2 text-sm">
              <li>• They share the vertex <span className="font-mono">B</span> and the side <span className="font-mono">BD</span>.</li>
              <li>• The other sides <span className="font-mono">BA</span> and <span className="font-mono">BC</span> lie on opposite sides of <span className="font-mono">BD</span>.</li>
            </ul>
          </div>
          <div className="card-surface p-4">
            <AdjacentFigure first={45} second={60} start={30} className="w-full" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-surface p-5">
            <p className="font-display font-semibold text-destructive">Not adjacent — case 1</p>
            <p className="mt-2 text-sm">
              ∠ABD and ∠ABC are <strong>not</strong> adjacent, because the sides BD and BC lie on the{" "}
              <em>same side</em> of the common side BA (one angle is inside the other).
            </p>
          </div>
          <div className="card-surface p-5">
            <p className="font-display font-semibold text-destructive">Not adjacent — case 2</p>
            <p className="mt-2 text-sm">
              ∠ABC and ∠CDE are <strong>not</strong> adjacent, because they do not share a common vertex or a common
              side.
            </p>
          </div>
        </div>
      </Section>

      <Section title="2. Complementary Angles">
        <div className="grid gap-6 md:grid-cols-[1fr_260px]">
          <div className="card-surface space-y-4 p-6">
            <p className="text-lg">
              <strong>Complementary angles</strong> are two angles whose measures have a sum of <strong>90°</strong>.
            </p>
            <p className="rounded-lg bg-secondary p-3 font-mono text-sm">55° + 35° = 90° → they are complementary</p>
            <p className="text-sm text-muted-foreground">
              They do not have to be adjacent: two separate angles measuring 55° and 35° are still complementary.
            </p>
          </div>
          <div className="card-surface p-4">
            <AdjacentFigure first={55} second={35} start={0} labels={["55°", "35°"]} className="w-full" />
          </div>
        </div>

        <Callout title="Notes on complementary angles">
          <p>1. They are either two acute angles, or one is a zero angle and the other is a right angle.</p>
          <p>
            2. Complements of the same angle (or of angles with equal measure) are equal. If ∠A complements ∠B and ∠C
            complements ∠B, then <span className="font-mono">m(∠A) = m(∠C)</span>.
          </p>
        </Callout>
      </Section>

      <Section title="3. Supplementary Angles">
        <div className="grid gap-6 md:grid-cols-[1fr_260px]">
          <div className="card-surface space-y-4 p-6">
            <p className="text-lg">
              <strong>Supplementary angles</strong> are two angles whose measures have a sum of <strong>180°</strong>.
            </p>
            <p className="rounded-lg bg-secondary p-3 font-mono text-sm">143° + 37° = 180° → they are supplementary</p>
          </div>
          <div className="card-surface p-4">
            <AdjacentFigure first={143} second={37} start={0} labels={["143°", "37°"]} className="w-full" />
          </div>
        </div>

        <Callout title="Notes on supplementary angles">
          <p>
            1. They are either one obtuse and one acute angle, two right angles, or one zero angle and one straight
            angle.
          </p>
          <p>
            2. Supplements of the same angle (or of angles with equal measure) are equal. If ∠A supplements ∠B and ∠C
            supplements ∠B, then <span className="font-mono">m(∠A) = m(∠C)</span>.
          </p>
        </Callout>

        <div className="card-surface overflow-x-auto p-2">
          <table className="w-full min-w-[600px] text-sm">
            <caption className="p-3 text-left font-display font-semibold">
              Example 3 — the complement and supplement table
            </caption>
            <tbody>
              {[
                ["The measure of the angle", "35°", "90°", "0°", "48°", "60°"],
                ["The measure of the complementary angle", "55°", "0°", "90°", "42°", "30°"],
                ["The measure of the supplementary angle", "145°", "90°", "180°", "132°", "120°"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0">
                  <th className="bg-secondary p-3 text-left font-medium">{row[0]}</th>
                  {row.slice(1).map((c, i) => (
                    <td key={i} className="p-3 text-center font-mono">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="4. The Outer Sides of Two Adjacent Angles">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-surface p-6">
            <h3 className="font-semibold">Adjacent supplementary angles</h3>
            <p className="mt-2 text-sm">
              If the outer sides of two adjacent angles lie on one straight line, the two angles are{" "}
              <strong>supplementary</strong>.
            </p>
            <p className="mt-3 rounded-lg bg-secondary p-3 font-mono text-sm">
              If BA and BC are opposite rays → m(∠ABD) + m(∠DBC) = 180°
            </p>
            <AdjacentFigure first={50} second={130} start={0} labels={["∠ABD", "∠DBC"]} className="mx-auto mt-3 w-full max-w-[240px]" />
            <p className="mt-2 text-sm text-muted-foreground">
              The converse is also used: if the sum is 180°, the outer sides form a straight line.
            </p>
          </div>
          <div className="card-surface p-6">
            <h3 className="font-semibold">Adjacent complementary angles</h3>
            <p className="mt-2 text-sm">
              If the outer sides of two adjacent angles are perpendicular, the two angles are{" "}
              <strong>complementary</strong>.
            </p>
            <p className="mt-3 rounded-lg bg-secondary p-3 font-mono text-sm">
              If BA ⊥ BC → m(∠ABD) + m(∠DBC) = 90°
            </p>
            <AdjacentFigure first={42} second={48} start={0} labels={["∠ABD", "∠DBC"]} className="mx-auto mt-3 w-full max-w-[240px]" />
            <p className="mt-2 text-sm text-muted-foreground">
              The converse is also used: if the sum is 90°, the outer sides are perpendicular.
            </p>
          </div>
        </div>

        <Callout title="Bisector reminder">
          <p>
            The <strong>bisector</strong> of an angle is the ray that divides it into two angles of equal measure. If BD
            bisects ∠ABE and m(∠ABE) = 50°, then m(∠ABD) = m(∠DBE) = 25°.
          </p>
        </Callout>

        <div className="card-surface p-6">
          <h3 className="font-semibold">Quick check: is OA ∪ OB a straight line?</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm">
            {[
              { s: "144° + 36°", t: "= 180° → yes, straight line", ok: true },
              { s: "65° + 48° + 55°", t: "= 168° ≠ 180° → no", ok: false },
              { s: "49° + 42° + 89°", t: "= 180° → yes, straight line", ok: true },
            ].map((c) => (
              <div
                key={c.s}
                className={`rounded-lg border p-4 ${c.ok ? "border-success/40 bg-success/10" : "border-destructive/40 bg-destructive/10"}`}
              >
                <p className="font-mono">{c.s}</p>
                <p className="mt-1 text-muted-foreground">{c.t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <p className="font-display font-semibold">See these rules used in full solutions</p>
            <p className="text-sm text-muted-foreground">Eight worked examples with every step written out.</p>
          </div>
          <Link
            to="/examples"
            className="rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Worked Examples
          </Link>
        </div>
      </Section>

      <Section title="Visual summary">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { m: 90, t: "Complementary pair totals 90°" },
            { m: 180, t: "Supplementary pair totals 180°" },
            { m: 360, t: "Angle + reflex angle totals 360°" },
          ].map((x) => (
            <div key={x.t} className="card-surface p-4 text-center">
              <AngleFigure measure={x.m === 360 ? 359.9 : x.m} label={`${x.m}°`} size={170} className="mx-auto w-full max-w-[180px]" />
              <p className="mt-1 text-sm text-muted-foreground">{x.t}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
