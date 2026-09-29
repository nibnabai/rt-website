import { SPARKLINE_AREA, SPARKLINE_LINE } from './conversation-mockup-data';

interface MockupSparklineProps {
  animate: boolean;
  reduceMotion: boolean;
  delay?: string;
}

export function MockupSparkline({
  animate,
  reduceMotion,
  delay = '0s'
}: MockupSparklineProps) {
  const pathLength = 140;
  const showDrawn = animate || reduceMotion;

  return (
    <svg
      viewBox="0 0 105 28"
      className="h-7 w-[105px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={SPARKLINE_AREA}
        fill="rgba(42, 157, 103, 0.18)"
        style={{
          opacity: showDrawn ? 1 : 0,
          transition: reduceMotion ? 'none' : `opacity 0.6s ease-out ${delay}`
        }}
      />
      <path
        d={SPARKLINE_LINE}
        stroke="#2a9d67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset: showDrawn ? 0 : pathLength,
          transition: reduceMotion
            ? 'none'
            : `stroke-dashoffset 0.8s ease-out ${delay}`
        }}
      />
    </svg>
  );
}
