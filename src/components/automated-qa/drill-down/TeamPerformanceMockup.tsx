import { TEAM_AGENT_ROWS, TEAM_METRIC_CARDS } from './drill-down-data';
import { DrilldownChrome } from './DrilldownChrome';
import { DrilldownMockupShell } from './DrilldownMockupShell';
import { TeamMetricTrendLine } from './TeamMetricTrendLine';

const TABLE_GRID =
  'grid grid-cols-[minmax(5.5rem,1fr)_2.75rem_2.5rem_2.75rem_2.25rem] sm:grid-cols-[1fr_60px_60px_60px_60px]';

type TeamPerformanceMockupProps = {
  style?: React.CSSProperties;
};

export function TeamPerformanceMockup({ style }: TeamPerformanceMockupProps) {
  return (
    <DrilldownMockupShell style={style}>
      <DrilldownChrome
        title="Team · Support Operations"
        badge="Last 7 days"
        badgeTone="neutral"
      />
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
          {TEAM_METRIC_CARDS.map((metric) => (
            <div
              key={metric.label}
              className="flex min-h-[96px] flex-col rounded-[14px] border border-[#dcdee2] bg-white p-2.5 sm:min-h-[107px] sm:p-3"
            >
              <p className="text-[9px] font-medium uppercase leading-snug tracking-[1.6px] text-[#4a4d54] sm:text-[11px] sm:tracking-[2px]">
                {metric.label}
              </p>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-1 gap-y-0">
                <span className="font-display text-xl leading-7 text-[#0b0d13] sm:text-2xl sm:leading-8">
                  {metric.value}
                </span>
                <span
                  className={
                    metric.deltaPositive
                      ? 'text-[9px] text-[#21763c] sm:text-[10px]'
                      : 'text-[9px] text-[#de3b3d] sm:text-[10px]'
                  }
                >
                  {metric.delta}
                </span>
              </div>
              <div className="mt-auto flex justify-center pt-2">
                <TeamMetricTrendLine />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-x-auto rounded-[14px] border border-[#dcdee2] sm:mt-5 sm:overflow-hidden">
          <div className="min-w-70 sm:min-w-0">
            <div
              className={`${TABLE_GRID} border-b border-[#dcdee2] px-2.5 py-2 text-[9px] font-medium uppercase tracking-[1.4px] text-[#4a4d54] sm:px-3 sm:text-[10px] sm:tracking-[1.8px]`}
            >
              <span>Agent</span>
              <span>Voice</span>
              <span>CSAT</span>
              <span>TTR</span>
              <span>Score</span>
            </div>
            {TEAM_AGENT_ROWS.map((row) => (
              <div
                key={row.name}
                className={`${TABLE_GRID} items-center border-b border-[#dcdee2]/60 px-2.5 py-2 text-[11px] text-[#0b0d13] last:border-0 sm:px-3 sm:text-xs`}
              >
                <span className="whitespace-nowrap font-medium">
                  {row.name}
                </span>
                <span className="tabular-nums text-[#4a4d54]">{row.voice}</span>
                <span className="tabular-nums text-[#4a4d54]">{row.csat}</span>
                <span className="whitespace-nowrap tabular-nums text-[#4a4d54]">
                  {row.ttr}
                </span>
                <span className="font-medium tabular-nums">{row.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DrilldownMockupShell>
  );
}
