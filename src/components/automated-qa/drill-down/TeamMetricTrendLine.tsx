/** Sparkline from Figma team metric cards (7143:3185) — exact path + stroke. */
const FIGMA_TREND_PATH = 'M0 14L10 12L20 13L30 9L40 10L50 6L60 7L70 4L80 5';

export function TeamMetricTrendLine() {
  return (
    <svg viewBox="0 0 80 20" className="h-5 w-20" fill="none" aria-hidden>
      <path
        d={FIGMA_TREND_PATH}
        stroke="#237FC8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
