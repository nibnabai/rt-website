import { AGENT_VIOLATIONS } from './drill-down-data';
import { AgentLabeledRadar } from './AgentLabeledRadar';
import { DrilldownChrome } from './DrilldownChrome';
import { DrilldownMockupShell } from './DrilldownMockupShell';

type AgentDetailMockupProps = {
  style?: React.CSSProperties;
};

export function AgentDetailMockup({ style }: AgentDetailMockupProps) {
  return (
    <DrilldownMockupShell style={style}>
      <DrilldownChrome
        title={
          <span className="flex items-center gap-2 text-[11px]">
            <span className="font-normal text-[#777a82]">Team</span>
            <span className="text-[#777a82]">›</span>
            <span className="text-xs font-medium text-[#0b0d13]">
              Jordan M.
            </span>
          </span>
        }
        badge="Coaching recommended"
      />
      <div className="grid gap-5 p-5 md:grid-cols-[1fr_220px]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#4a4d54]">
            Company Voice adherence
          </p>
          <AgentLabeledRadar />
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#4a4d54]">
              Avg AI CSAT
            </p>
            <p className="font-display text-[30px] leading-9 text-[#0b0d13]">
              3.9
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#4a4d54]">
              Avg resolution
            </p>
            <p className="font-display text-[30px] leading-9 text-[#0b0d13]">
              1h 12m
            </p>
          </div>
          <div className="rounded-[14px] border border-[rgba(255,179,171,0.4)] bg-[#fff5f3] p-3">
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#4a4d54]">
              Top violations
            </p>
            <ul className="mt-1.5 space-y-1 text-[11px] text-[#4a4d54]">
              {AGENT_VIOLATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DrilldownMockupShell>
  );
}
