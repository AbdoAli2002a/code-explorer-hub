type Props = {
  /** measure in degrees, 0..360 */
  measure: number;
  /** rotation of the first ray, degrees counter-clockwise from east */
  start?: number;
  label?: string;
  showLabel?: boolean;
  size?: number;
  vertexLabel?: string;
  raysLabels?: [string, string];
  className?: string;
};

const R = 78;

function pt(cx: number, cy: number, angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy - r * Math.sin(rad)] as const;
}

/** Draws a labelled angle built from two rays sharing a vertex. */
export function AngleFigure({
  measure,
  start = 0,
  label,
  showLabel = true,
  size = 200,
  vertexLabel = "B",
  raysLabels = ["A", "C"],
  className,
}: Props) {
  const cx = size / 2;
  const cy = size / 2 + 14;
  const a1 = start;
  const a2 = start + measure;
  const [x1, y1] = pt(cx, cy, a1, R);
  const [x2, y2] = pt(cx, cy, a2, R);

  const arcR = Math.min(34, R * 0.45);
  const [ax1, ay1] = pt(cx, cy, a1, arcR);
  const [ax2, ay2] = pt(cx, cy, a2, arcR);
  const largeArc = measure > 180 ? 1 : 0;
  const [lx, ly] = pt(cx, cy, a1 + measure / 2, arcR + 22);
  const [rl1x, rl1y] = pt(cx, cy, a1, R + 14);
  const [rl2x, rl2y] = pt(cx, cy, a2, R + 14);

  const isRight = Math.round(measure) === 90;

  return (
    <svg
      viewBox={`0 0 ${size} ${size + 20}`}
      className={className}
      role="img"
      aria-label={`${label ?? "Angle"} measuring ${measure} degrees`}
    >
      {measure > 0 && (
        <path
          d={`M ${cx} ${cy} L ${ax1} ${ay1} A ${arcR} ${arcR} 0 ${largeArc} 0 ${ax2} ${ay2} Z`}
          fill="var(--accent)"
          opacity="0.22"
        />
      )}
      {measure > 0 && !isRight && (
        <path
          d={`M ${ax1} ${ay1} A ${arcR} ${arcR} 0 ${largeArc} 0 ${ax2} ${ay2}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
        />
      )}
      {isRight && (
        <rect
          x={cx}
          y={cy - 16}
          width="16"
          height="16"
          transform={`rotate(${-start} ${cx} ${cy})`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
        />
      )}
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="4.5" fill="var(--primary)" />
      <text x={cx - 6} y={cy + 20} fontSize="13" fill="var(--muted-foreground)" fontFamily="var(--font-mono)">
        {vertexLabel}
      </text>
      <text x={rl1x - 5} y={rl1y + 4} fontSize="13" fill="var(--muted-foreground)" fontFamily="var(--font-mono)">
        {raysLabels[0]}
      </text>
      <text x={rl2x - 5} y={rl2y + 4} fontSize="13" fill="var(--muted-foreground)" fontFamily="var(--font-mono)">
        {raysLabels[1]}
      </text>
      {showLabel && (
        <text
          x={lx}
          y={ly}
          fontSize="14"
          textAnchor="middle"
          fill="var(--foreground)"
          fontFamily="var(--font-mono)"
          fontWeight="600"
        >
          {label ?? `${measure}°`}
        </text>
      )}
    </svg>
  );
}

/** Two adjacent angles sharing the ray BD. */
export function AdjacentFigure({
  first,
  second,
  start = 0,
  size = 220,
  labels = ["∠ABD", "∠DBC"],
  className,
}: {
  first: number;
  second: number;
  start?: number;
  size?: number;
  labels?: [string, string];
  className?: string;
}) {
  const cx = size / 2;
  const cy = size / 2 + 20;
  const rays = [start, start + first, start + first + second];
  const names = ["A", "D", "C"];

  return (
    <svg viewBox={`0 0 ${size} ${size + 20}`} className={className} role="img" aria-label="Two adjacent angles">
      <path
        d={`M ${cx} ${cy} L ${pt(cx, cy, rays[0], 36)[0]} ${pt(cx, cy, rays[0], 36)[1]} A 36 36 0 ${first > 180 ? 1 : 0} 0 ${pt(cx, cy, rays[1], 36)[0]} ${pt(cx, cy, rays[1], 36)[1]} Z`}
        fill="var(--accent)"
        opacity="0.25"
      />
      <path
        d={`M ${cx} ${cy} L ${pt(cx, cy, rays[1], 52)[0]} ${pt(cx, cy, rays[1], 52)[1]} A 52 52 0 ${second > 180 ? 1 : 0} 0 ${pt(cx, cy, rays[2], 52)[0]} ${pt(cx, cy, rays[2], 52)[1]} Z`}
        fill="var(--primary)"
        opacity="0.18"
      />
      {rays.map((a, i) => {
        const [x, y] = pt(cx, cy, a, R);
        const [lxx, lyy] = pt(cx, cy, a, R + 14);
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
            <text x={lxx - 5} y={lyy + 4} fontSize="13" fill="var(--muted-foreground)" fontFamily="var(--font-mono)">
              {names[i]}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="4.5" fill="var(--primary)" />
      <text x={cx - 6} y={cy + 20} fontSize="13" fill="var(--muted-foreground)" fontFamily="var(--font-mono)">
        B
      </text>
      <text x={pt(cx, cy, start + first / 2, 60)[0]} y={pt(cx, cy, start + first / 2, 60)[1]} fontSize="12" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-mono)">
        {first}°
      </text>
      <text x={pt(cx, cy, start + first + second / 2, 74)[0]} y={pt(cx, cy, start + first + second / 2, 74)[1]} fontSize="12" textAnchor="middle" fill="var(--foreground)" fontFamily="var(--font-mono)">
        {second}°
      </text>
      <text x={cx} y={size + 12} fontSize="12" textAnchor="middle" fill="var(--muted-foreground)">
        {labels[0]} + {labels[1]} = {first + second}°
      </text>
    </svg>
  );
}
