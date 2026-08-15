import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SiteLayout, PageHeader, Section } from "@/components/SiteLayout";
import { AngleFigure } from "@/components/AngleFigure";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Angle Activities, Drills and Learning Games" },
      {
        name: "description",
        content:
          "Practise angles with four interactive games: classify the angle type, a complement and supplement speed drill, a protractor estimation challenge, and a multiple-choice exam quiz.",
      },
      { property: "og:title", content: "Angle Activities, Drills and Learning Games" },
      {
        property: "og:description",
        content: "Four interactive games and drills covering every idea in Lesson One.",
      },
    ],
  }),
  component: Activities,
});

function Activities() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Lesson One · Part 4"
        title="Activities, Drills and Learning Games"
        intro="Four self-marking activities. Each one targets a different skill from the lesson: recognising types, computing complements and supplements, estimating measures, and answering exam-style questions."
      />

      <Section id="game-1" title="Game 1 — Classify the Angle">
        <p className="max-w-2xl text-muted-foreground">
          A random angle is drawn. Name its type before the next one appears. Score one point for each correct answer.
        </p>
        <ClassifyGame />
      </Section>

      <Section id="game-2" title="Game 2 — Complement & Supplement Speed Drill">
        <p className="max-w-2xl text-muted-foreground">
          Sixty seconds. Type the complement (90° − angle) or the supplement (180° − angle) as requested. Press Enter to
          submit.
        </p>
        <SpeedDrill />
      </Section>

      <Section id="game-3" title="Game 3 — Protractor Challenge">
        <p className="max-w-2xl text-muted-foreground">
          Drag the slider until the drawn angle matches the target measure. Within 3° is excellent, within 8° is a pass.
        </p>
        <ProtractorChallenge />
      </Section>

      <Section id="game-4" title="Activity 4 — Exam-Style Quiz">
        <p className="max-w-2xl text-muted-foreground">
          Twelve multiple-choice questions taken from the lesson exercise. You get instant feedback and a short reason
          for each answer.
        </p>
        <Quiz />
      </Section>

      <Section id="offline" title="Activity 5 — Classroom Tasks (offline)">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Angle hunt",
              d: "Photograph five angles around the school (door, ladder, clock hands, ramp, scissors). Estimate each measure, then check it with a protractor and classify it.",
            },
            {
              t: "Billiards & squash",
              d: "On a billiard table, ∠1 = ∠3 = 43° and the three angles lie on a straight line. Find ∠2 (answer: 94°). Repeat with your own bounce angles.",
            },
            {
              t: "Gate arm model",
              d: "A gate arm stands 42° from the vertical. Through what angle must it turn to become horizontal? Build a cardboard model and verify (answer: 48°).",
            },
          ].map((c) => (
            <div key={c.t} className="card-surface p-5">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

/* ---------------- Game 1 ---------------- */

const TYPES = ["Zero", "Acute", "Right", "Obtuse", "Straight", "Reflex"] as const;
type AngleType = (typeof TYPES)[number];

function typeOf(m: number): AngleType {
  if (m === 0) return "Zero";
  if (m < 90) return "Acute";
  if (m === 90) return "Right";
  if (m < 180) return "Obtuse";
  if (m === 180) return "Straight";
  return "Reflex";
}

function randomMeasure() {
  const pool = [0, 90, 180];
  const r = Math.random();
  if (r < 0.18) return pool[Math.floor(Math.random() * 3)] as number;
  if (r < 0.46) return 5 + Math.floor(Math.random() * 84);
  if (r < 0.74) return 91 + Math.floor(Math.random() * 88);
  return 181 + Math.floor(Math.random() * 178);
}

function ClassifyGame() {
  const [measure, setMeasure] = useState(40);
  const [start, setStart] = useState(0);
  const [score, setScore] = useState(0);
  const [asked, setAsked] = useState(0);
  const [feedback, setFeedback] = useState<null | { ok: boolean; text: string }>(null);

  const next = useCallback(() => {
    setMeasure(randomMeasure());
    setStart(Math.floor(Math.random() * 8) * 15);
    setFeedback(null);
  }, []);

  const answer = (t: AngleType) => {
    if (feedback) return;
    const correct = typeOf(measure);
    const ok = t === correct;
    setAsked((a) => a + 1);
    if (ok) setScore((s) => s + 1);
    setFeedback({ ok, text: ok ? `Correct — ${measure}° is ${correct.toLowerCase()}.` : `Not quite. ${measure}° is a ${correct.toLowerCase()} angle.` });
  };

  return (
    <div className="card-surface grid gap-6 p-6 md:grid-cols-[240px_1fr]">
      <div className="rounded-xl bg-secondary/60 p-2">
        <AngleFigure measure={measure} start={start} showLabel={false} size={220} className="w-full" />
      </div>
      <div>
        <div className="flex items-center gap-4 text-sm">
          <span className="rounded-full bg-primary px-3 py-1 font-mono text-primary-foreground">
            Score {score}/{asked}
          </span>
          <span className="text-muted-foreground">What type of angle is this?</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => answer(t)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary disabled:opacity-60"
              disabled={!!feedback}
            >
              {t}
            </button>
          ))}
        </div>
        {feedback && (
          <div
            className={`mt-4 rounded-lg p-4 text-sm ${feedback.ok ? "bg-success/12 text-success" : "bg-destructive/12 text-destructive"}`}
          >
            {feedback.text}
          </div>
        )}
        <button
          onClick={next}
          className="mt-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {feedback ? "Next angle" : "Skip / new angle"}
        </button>
      </div>
    </div>
  );
}

/* ---------------- Game 2 ---------------- */

function SpeedDrill() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [value, setValue] = useState("");
  const [task, setTask] = useState(() => makeTask());
  const [flash, setFlash] = useState<"ok" | "no" | null>(null);

  function makeTask() {
    const kind = Math.random() < 0.5 ? "complement" : "supplement";
    const limit = kind === "complement" ? 90 : 180;
    const angle = 5 + Math.floor(Math.random() * (limit / 5 - 1)) * 5;
    return { kind, angle, answer: limit - angle };
  }

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          setRunning(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!running) return;
    if (Number(value) === task.answer) {
      setScore((s) => s + 1);
      setFlash("ok");
    } else {
      setMisses((m) => m + 1);
      setFlash("no");
    }
    setTimeout(() => setFlash(null), 350);
    setValue("");
    setTask(makeTask());
  };

  const start = () => {
    setScore(0);
    setMisses(0);
    setTime(60);
    setTask(makeTask());
    setRunning(true);
  };

  return (
    <div className="card-surface p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-secondary px-3 py-1 font-mono">⏱ {time}s</span>
        <span className="rounded-full bg-success/15 px-3 py-1 font-mono text-success">✓ {score}</span>
        <span className="rounded-full bg-destructive/12 px-3 py-1 font-mono text-destructive">✗ {misses}</span>
        <button
          onClick={start}
          className="ml-auto rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {running ? "Restart" : "Start 60s drill"}
        </button>
      </div>

      <form
        onSubmit={submit}
        className={`mt-6 rounded-xl border p-6 text-center transition-colors ${
          flash === "ok" ? "border-success bg-success/10" : flash === "no" ? "border-destructive bg-destructive/10" : "border-border bg-secondary/40"
        }`}
      >
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          Find the {task.kind} of
        </p>
        <p className="mt-2 font-display text-4xl font-bold">{task.angle}°</p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!running}
          inputMode="numeric"
          placeholder={running ? "type the answer" : "press start"}
          className="mt-5 w-40 rounded-lg border border-input bg-card px-4 py-2 text-center font-mono text-lg outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
        />
        <p className="mt-3 text-xs text-muted-foreground">
          complement = 90° − angle · supplement = 180° − angle
        </p>
      </form>

      {!running && time === 0 && (
        <p className="mt-4 text-center font-display font-semibold">
          Time! You solved {score} correctly with {misses} misses.
        </p>
      )}
    </div>
  );
}

/* ---------------- Game 3 ---------------- */

function ProtractorChallenge() {
  const [target, setTarget] = useState(65);
  const [guess, setGuess] = useState(90);
  const [checked, setChecked] = useState(false);
  const diff = Math.abs(guess - target);
  const verdict = diff <= 3 ? "Excellent" : diff <= 8 ? "Good — that passes" : "Try again";

  return (
    <div className="card-surface grid gap-6 p-6 md:grid-cols-[260px_1fr]">
      <div className="rounded-xl bg-secondary/60 p-2">
        <AngleFigure measure={guess} showLabel={checked} label={`${guess}°`} size={230} className="w-full" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Build an angle of</p>
        <p className="font-display text-4xl font-bold">{target}°</p>
        <label className="mt-6 block text-sm text-muted-foreground" htmlFor="angle-slider">
          Your angle: <span className="font-mono text-foreground">{checked ? `${guess}°` : "hidden until you check"}</span>
        </label>
        <input
          id="angle-slider"
          type="range"
          min={0}
          max={359}
          value={guess}
          onChange={(e) => {
            setGuess(Number(e.target.value));
            setChecked(false);
          }}
          className="mt-3 w-full accent-[var(--accent)]"
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => setChecked(true)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check my angle
          </button>
          <button
            onClick={() => {
              setTarget(10 + Math.floor(Math.random() * 340));
              setGuess(90);
              setChecked(false);
            }}
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            New target
          </button>
        </div>
        {checked && (
          <div className={`mt-4 rounded-lg p-4 text-sm ${diff <= 8 ? "bg-success/12 text-success" : "bg-destructive/12 text-destructive"}`}>
            {verdict} — you were off by {diff}°. The target {target}° is {typeOf(target).toLowerCase()}.
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Activity 4 ---------------- */

type Q = { q: string; options: string[]; correct: number; why: string };

const questions: Q[] = [
  { q: "m(∠A) + m(reflex ∠A) equals the measure of …", options: ["1 right angle", "2 right angles", "3 right angles", "4 right angles"], correct: 3, why: "The sum is 360°, and 360° ÷ 90° = 4 right angles." },
  { q: "If m(∠X) = 120°, then m(reflex ∠X) = …", options: ["180°", "220°", "240°", "260°"], correct: 2, why: "360° − 120° = 240°." },
  { q: "The complement of an acute angle is always …", options: ["right", "obtuse", "acute", "straight"], correct: 2, why: "90° minus an acute angle is still between 0° and 90°." },
  { q: "What is the type of the angle that supplements a zero angle?", options: ["acute", "obtuse", "straight", "right"], correct: 2, why: "180° − 0° = 180°, a straight angle." },
  { q: "Two complementary angles are in the ratio 2 : 3. The greater angle is …", options: ["18°", "36°", "54°", "60°"], correct: 2, why: "3 × 90° ÷ 5 = 54°." },
  { q: "Two angles measure 143° and 37°. They are …", options: ["complementary", "supplementary", "adjacent", "equal"], correct: 1, why: "143° + 37° = 180°." },
  { q: "Adjacent angles must share …", options: ["a vertex only", "a side only", "a vertex and a side", "nothing"], correct: 2, why: "They share the vertex and one side, with the other sides on opposite sides of it." },
  { q: "If the outer sides of two adjacent angles are perpendicular, the angles are …", options: ["supplementary", "complementary", "reflex", "equal"], correct: 1, why: "Their measures add to 90°." },
  { q: "If the outer sides of two adjacent angles lie on one straight line, the angles are …", options: ["complementary", "supplementary", "zero", "reflex"], correct: 1, why: "Their measures add to 180°." },
  { q: "1° equals …", options: ["10′", "60′", "100′", "60″"], correct: 1, why: "One degree = 60 minutes, and one minute = 60 seconds." },
  { q: "An angle measuring 89° 60′ is a(n) …", options: ["acute angle", "right angle", "obtuse angle", "reflex angle"], correct: 1, why: "60′ = 1°, so the measure is exactly 90°." },
  { q: "BD bisects ∠ABC and m(∠ABC) = 76°. Then m(∠ABD) = …", options: ["19°", "38°", "76°", "152°"], correct: 1, why: "A bisector halves the angle: 76° ÷ 2 = 38°." },
];

function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = useMemo(
    () => questions.reduce((s, q, i) => (answers[i] === q.correct ? s + 1 : s), 0),
    [answers],
  );
  const done = Object.keys(answers).length;

  return (
    <div className="space-y-4">
      <div className="card-surface sticky top-16 z-30 flex flex-wrap items-center gap-3 p-4 text-sm">
        <span className="font-display font-semibold">
          Score: {score} / {questions.length}
        </span>
        <span className="text-muted-foreground">Answered {done} of {questions.length}</span>
        <button
          onClick={() => setAnswers({})}
          className="ml-auto rounded-lg border border-border px-4 py-1.5 font-medium transition-colors hover:bg-secondary"
        >
          Reset quiz
        </button>
      </div>

      {questions.map((q, i) => {
        const chosen = answers[i];
        return (
          <div key={q.q} className="card-surface p-5">
            <p className="font-medium">
              <span className="mr-2 font-mono text-muted-foreground">{i + 1}.</span>
              {q.q}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((o, oi) => {
                const state =
                  chosen === undefined
                    ? "idle"
                    : oi === q.correct
                      ? "right"
                      : oi === chosen
                        ? "wrong"
                        : "idle";
                return (
                  <button
                    key={o}
                    onClick={() => chosen === undefined && setAnswers((a) => ({ ...a, [i]: oi }))}
                    className={`rounded-lg border px-4 py-2 text-left text-sm transition-colors ${
                      state === "right"
                        ? "border-success bg-success/12 text-success"
                        : state === "wrong"
                          ? "border-destructive bg-destructive/12 text-destructive"
                          : "border-border hover:bg-secondary"
                    }`}
                  >
                    <span className="mr-2 font-mono text-xs">{"abcd"[oi]})</span>
                    {o}
                  </button>
                );
              })}
            </div>
            {chosen !== undefined && (
              <p className="mt-3 rounded-lg bg-secondary p-3 text-sm text-muted-foreground">{q.why}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
