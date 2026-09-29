import { AnimatedNumber } from '@/components/lp/AnimatedNumber';
import { METRIC_ROWS, SCORE_PANEL } from './conversation-mockup-data';
import { MockupMetricRow } from './MockupMetricRow';

interface ConversationScorePanelProps {
  animate: boolean;
  immediate?: boolean;
  panelStyle?: React.CSSProperties;
  scoreStyle?: React.CSSProperties;
  getMetricStyle: (index: number) => React.CSSProperties;
  flaggedStyle?: React.CSSProperties;
}

export function ConversationScorePanel({
  animate,
  immediate = false,
  panelStyle,
  scoreStyle,
  getMetricStyle,
  flaggedStyle
}: ConversationScorePanelProps) {
  return (
    <aside
      className="w-full shrink-0 border-t border-lp-mockup-hairline bg-[rgba(248,247,243,0.6)] md:w-[320px] md:border-t-0"
      style={panelStyle}
    >
      <div className="px-5 py-5">
        <p className="text-[11.5px] font-medium uppercase tracking-[2.07px] text-lp-mockup-label">
          {SCORE_PANEL.title}
        </p>
        <div className="mt-2 flex items-end gap-2" style={scoreStyle}>
          <span className="font-display text-[48px] leading-none text-lp-mockup-ink">
            <AnimatedNumber
              value={SCORE_PANEL.score}
              animate={animate}
              immediate={immediate}
            />
          </span>
          <span className="pb-1 text-[12px] text-lp-mockup-label">
            / {SCORE_PANEL.maxScore}
          </span>
          <span className="ml-auto rounded bg-[#fef0d4] px-1.5 py-0.5 text-[10px] font-normal text-[#6c4300]">
            {SCORE_PANEL.riskLabel}
          </span>
        </div>
        <p className="mt-2 text-[11px] text-lp-mockup-muted">
          {SCORE_PANEL.subtitle}
        </p>

        <hr className="my-4 border-lp-mockup-hairline" />

        <div className="flex flex-col gap-3">
          {METRIC_ROWS.map((row, index) => (
            <MockupMetricRow
              key={row.id}
              row={row}
              style={getMetricStyle(index)}
            />
          ))}
        </div>

        <hr className="my-4 border-lp-mockup-hairline" />

        <p className="text-[11.5px] font-medium uppercase tracking-[2.07px] text-lp-mockup-label">
          {SCORE_PANEL.flaggedTitle}
        </p>
        <div
          className="mt-3 rounded-[14px] border border-lp-mockup-hairline bg-white p-3"
          style={flaggedStyle}
        >
          <div className="flex items-center gap-2 text-[11px] font-medium text-[#97000f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#de3b3d]" />
            {SCORE_PANEL.flaggedHeading}
          </div>
          <p className="mt-2 text-[11px] leading-snug text-lp-mockup-label">
            {SCORE_PANEL.flaggedDetail}
          </p>
        </div>
      </div>
    </aside>
  );
}
