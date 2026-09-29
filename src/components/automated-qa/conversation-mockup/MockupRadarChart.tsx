import { cn } from '@/lib/utils';

/** Pentagon radar used in agent dimension profile + voice adherence cards. */
export const MOCKUP_RADAR_POINTS = [
  { x: 60, y: 18 },
  { x: 95, y: 42 },
  { x: 82, y: 88 },
  { x: 38, y: 88 },
  { x: 25, y: 42 }
] as const;

const RADAR_PATH = `${MOCKUP_RADAR_POINTS.map(
  (p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`
).join(' ')} Z`;

type MockupRadarChartProps = {
  className?: string;
  gridStroke?: string;
  fill?: string;
  stroke?: string;
};

export function MockupRadarChart({
  className,
  gridStroke = '#e8ebf2',
  fill = 'rgba(12, 174, 233, 0.15)',
  stroke = '#0caee9'
}: MockupRadarChartProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn('h-full w-full', className)}
      fill="none"
      aria-hidden
    >
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <polygon
          key={scale}
          points={MOCKUP_RADAR_POINTS.map((p) => {
            const cx = 60;
            const cy = 60;
            return `${cx + (p.x - cx) * scale},${cy + (p.y - cy) * scale}`;
          }).join(' ')}
          fill="none"
          stroke={gridStroke}
          strokeWidth="1"
        />
      ))}
      <path d={RADAR_PATH} fill={fill} stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
