/** Line path exported from Figma node 7840:1102 (viewBox 525.183 × 48.9529). */
const LINE_PATH =
  'M0.0610956 1.14554L87.5611 5.81221L175.061 10.4789L262.561 15.1455L350.061 19.8122L437.561 38.4789L525.061 47.8122';

const VIEWBOX_WIDTH = 525.183;
const VIEWBOX_HEIGHT = 48.9529;
const DOT_RADIUS = 4.46808;

const DOTS: ReadonlyArray<readonly [number, number]> = [
  [0.0610956, 1.14554],
  [87.5611, 5.81221],
  [175.061, 10.4789],
  [262.561, 15.1455],
  [350.061, 19.8122],
  [437.561, 38.4789],
  [525.061, 47.8122]
];

export function IvyCsatSparkline({ animate = false }: { animate?: boolean }) {
  return (
    <div className="relative h-14 w-full" aria-hidden>
      <svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className={`h-full w-full overflow-visible ${
          animate ? 'ivy-animate-sparkline' : ''
        }`}
        preserveAspectRatio="none"
      >
        <path
          className="ivy-sparkline-path"
          d={LINE_PATH}
          pathLength={1}
          fill="none"
          stroke="#0A0D12"
          strokeWidth="2.29434"
          vectorEffect="non-scaling-stroke"
        />

        {DOTS.map(([cx, cy], index) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={DOT_RADIUS}
            fill="#0A0D12"
            className={animate ? 'ivy-spark-dot' : undefined}
            style={
              animate
                ? {
                    animationDelay: `${0.08 + index * 0.11}s`
                  }
                : undefined
            }
          />
        ))}
      </svg>
    </div>
  );
}
