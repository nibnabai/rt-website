import { cn } from '@/lib/utils';

const CENTER = 120;
const MAX_RADIUS = 92;
const AXES = 6;
const RING_COUNT = 4;
const SONAR_PINGS = 2;
const SONAR_DURATION = '2.2s';

/** Softer powder blue from Figma vector (7143:3024) — less saturated than brand cyan. */
const RADAR_STROKE = '#84C8F0';
const RADAR_FILL = 'rgba(132, 200, 240, 0.38)';

/** Clockwise from top; ring level 1–4 (4 = outer). Top axis nudged inward per Figma. */
const DATA_LEVELS: readonly number[] = [3.65, 3, 3, 1, 3, 3];
const HIGHLIGHT_AXIS = 3;

function axisAngle(axisIndex: number) {
  return -Math.PI / 2 + (axisIndex * 2 * Math.PI) / AXES;
}

function pointAt(axisIndex: number, level: number) {
  const r = (level / RING_COUNT) * MAX_RADIUS;
  const angle = axisAngle(axisIndex);
  return {
    x: CENTER + r * Math.cos(angle),
    y: CENTER + r * Math.sin(angle)
  };
}

function hexRingPoints(level: number) {
  return Array.from({ length: AXES }, (_, i) => pointAt(i, level))
    .map((p) => `${p.x},${p.y}`)
    .join(' ');
}

const DATA_POINTS = DATA_LEVELS.map((level, i) => pointAt(i, level));
const DATA_PATH = `${DATA_POINTS.map(
  (p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`
).join(' ')} Z`;
const HIGHLIGHT_POINT = DATA_POINTS[HIGHLIGHT_AXIS];

type VoiceAdherenceRadarChartProps = {
  className?: string;
  showSonar?: boolean;
};

function SonarPulse({
  cx,
  cy,
  begin
}: {
  cx: number;
  cy: number;
  begin: string;
}) {
  return (
    <circle cx={cx} cy={cy} r="7" stroke="#de3b3d" strokeWidth="2" fill="none">
      <animate
        attributeName="r"
        values="7;17"
        dur={SONAR_DURATION}
        begin={begin}
        repeatCount="indefinite"
      />
      <animate
        attributeName="stroke-opacity"
        values="0.7;0"
        dur={SONAR_DURATION}
        begin={begin}
        repeatCount="indefinite"
      />
    </circle>
  );
}

/** Six-axis voice adherence radar — shared by What we score (7143:3013) and drill-down agent view. */
export function VoiceAdherenceRadarChart({
  className,
  showSonar = true
}: VoiceAdherenceRadarChartProps) {
  const { x: hx, y: hy } = HIGHLIGHT_POINT;

  return (
    <svg
      viewBox="0 0 240 240"
      className={cn('h-full w-full', className)}
      fill="none"
      aria-hidden
    >
      {Array.from({ length: AXES }, (_, i) => {
        const outer = pointAt(i, RING_COUNT);
        return (
          <line
            key={`axis-${i}`}
            x1={CENTER}
            y1={CENTER}
            x2={outer.x}
            y2={outer.y}
            stroke="#eaebef"
            strokeWidth="1"
          />
        );
      })}

      {Array.from({ length: RING_COUNT }, (_, ring) => (
        <polygon
          key={`ring-${ring}`}
          points={hexRingPoints(ring + 1)}
          stroke="#eaebef"
          strokeWidth="1"
        />
      ))}

      <path
        d={DATA_PATH}
        fill={RADAR_FILL}
        stroke={RADAR_STROKE}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {showSonar ? (
        <>
          <g className="motion-reduce:hidden">
            {Array.from({ length: SONAR_PINGS }, (_, ping) => (
              <SonarPulse key={ping} cx={hx} cy={hy} begin={`${ping * 1.1}s`} />
            ))}
          </g>
          <circle
            cx={hx}
            cy={hy}
            r="7"
            stroke="#de3b3d"
            strokeWidth="2"
            fill="none"
            className="motion-reduce:opacity-100"
          />
        </>
      ) : null}

      {DATA_POINTS.map((p, i) => (
        <circle
          key={`dot-${i}`}
          cx={p.x}
          cy={p.y}
          r="3.5"
          fill={RADAR_STROKE}
        />
      ))}
    </svg>
  );
}
