import type { MetricRowData } from './conversation-mockup-data';

interface MockupMetricRowProps {
  row: MetricRowData;
  style?: React.CSSProperties;
}

export function MockupMetricRow({ row, style }: MockupMetricRowProps) {
  return (
    <div className="flex items-center justify-between text-xs" style={style}>
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${row.dotColor}`} />
        <span className="text-[12px] text-lp-mockup-label">{row.label}</span>
      </div>
      <span className="text-[12px] font-medium tabular-nums text-lp-mockup-ink">
        {row.value}
        {row.valueSuffix ? (
          <span className="ml-0.5 text-[10px] text-[#de3b3d]">
            {row.valueSuffix}
          </span>
        ) : null}
      </span>
    </div>
  );
}
