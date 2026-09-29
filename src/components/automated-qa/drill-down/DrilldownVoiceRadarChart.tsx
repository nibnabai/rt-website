import { cn } from '@/lib/utils';

/** Figma agent drill-down radar (7143:3261) — 280×280, rings only. */
const SIZE = 280;
const CENTER = 140;
const MAX_RADIUS = 107;
const AXES = 6;
const RING_COUNT = 4;
const SONAR_PINGS = 2;
const SONAR_DURATION = '2.2s';

/** Data polygon stroke (7143:3266) — darker than vertex dots. */
const DATA_STROKE = '#237FC8';
const RADAR_FILL = 'rgba(132, 200, 240, 0.38)';
const DOT_FILL = '#84C8F0';

/** Clockwise from top: Tone, Empathy, Closing, Escalation, Forbidden, Brand. */
const DATA_LEVELS: readonly number[] = [3.5, 4, 2.15, 3.5, 2, 3];
const FORBIDDEN_AXIS = 4;

const BLUE_DOT_R = 3.5;
const FORBIDDEN_RING_R = 5.83;
const SONAR_TO = 14.2;

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
const FORBIDDEN_POINT = DATA_POINTS[FORBIDDEN_AXIS];

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
    <circle
      cx={cx}
      cy={cy}
      r={FORBIDDEN_RING_R}
      stroke="#de3b3d"
      strokeWidth="2"
      fill="none"
    >
      <animate
        attributeName="r"
        values={`${FORBIDDEN_RING_R};${SONAR_TO}`}
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

type DrilldownVoiceRadarChartProps = {
  className?: string;
};

export function DrilldownVoiceRadarChart({
  className
}: DrilldownVoiceRadarChartProps) {
  const { x: fx, y: fy } = FORBIDDEN_POINT;

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={cn('h-full w-full', className)}
      fill="none"
      aria-hidden
    >
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
        stroke={DATA_STROKE}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {DATA_POINTS.map((p, i) =>
        i === FORBIDDEN_AXIS ? null : (
          <circle
            key={`dot-${i}`}
            cx={p.x}
            cy={p.y}
            r={BLUE_DOT_R}
            fill={DOT_FILL}
          />
        )
      )}

      <g className="motion-reduce:hidden">
        {Array.from({ length: SONAR_PINGS }, (_, ping) => (
          <SonarPulse key={ping} cx={fx} cy={fy} begin={`${ping * 1.1}s`} />
        ))}
      </g>
      <circle
        cx={fx}
        cy={fy}
        r={FORBIDDEN_RING_R}
        stroke="#de3b3d"
        strokeWidth="2"
        fill="none"
        className="motion-reduce:opacity-100"
      />
    </svg>
  );
}
