import { DrilldownVoiceRadarChart } from './DrilldownVoiceRadarChart';

const LABELS = [
  { text: 'Tone', className: 'left-1/2 top-0 -translate-x-1/2' },
  { text: 'Empathy', className: 'right-0 top-[22%]' },
  { text: 'Closing', className: 'right-0 bottom-[22%]' },
  { text: 'Escalation', className: 'left-1/2 bottom-0 -translate-x-1/2' },
  { text: 'Forbidden', className: 'left-0 bottom-[22%]' },
  { text: 'Brand', className: 'left-0 top-[22%]' }
] as const;

export function AgentLabeledRadar() {
  return (
    <div className="relative mx-auto h-[280px] w-[280px] shrink-0">
      <DrilldownVoiceRadarChart />
      {LABELS.map((label) => (
        <span
          key={label.text}
          className={`absolute text-[9px] text-[#4a4d54] ${label.className}`}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
