import { DRILLDOWN_MESSAGES } from './drill-down-data';
import { DrilldownConversationMessage } from './DrilldownConversationMessage';
import { DrilldownChrome } from './DrilldownChrome';
import { DrilldownMockupShell } from './DrilldownMockupShell';

type ConversationDrilldownMockupProps = {
  style?: React.CSSProperties;
};

export function ConversationDrilldownMockup({
  style
}: ConversationDrilldownMockupProps) {
  const [m1, m2, m3, m4, m5] = DRILLDOWN_MESSAGES;

  return (
    <DrilldownMockupShell style={style}>
      <DrilldownChrome
        title={
          <span className="flex items-center gap-2 text-[11px]">
            <span className="text-[#777a82]">Jordan M.</span>
            <span className="text-[#777a82]">›</span>
            <span className="text-xs font-medium text-[#0b0d13]">
              Ticket #48217
            </span>
          </span>
        }
        meta={
          <>
            <span>Score 72</span>
            <span>·</span>
            <span>1h 42m</span>
            <span>·</span>
            <span>14 msgs</span>
          </>
        }
      />
      <div className="space-y-3 p-5">
        {m1 ? <DrilldownConversationMessage message={m1} /> : null}
        {m2 ? <DrilldownConversationMessage message={m2} /> : null}
        {m3 ? <DrilldownConversationMessage message={m3} /> : null}
        {m4 ? <DrilldownConversationMessage message={m4} /> : null}
        <p className="ml-10 text-[10px] text-[#777a82]">
          <span className="rounded-full border border-[#dcdee2] bg-[#f8f7f3] px-2 py-0.5">
            Handoff · 13m wait
          </span>
        </p>
        {m5 ? <DrilldownConversationMessage message={m5} /> : null}
      </div>
    </DrilldownMockupShell>
  );
}
