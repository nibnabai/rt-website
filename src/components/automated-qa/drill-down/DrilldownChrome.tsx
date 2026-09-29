type DrilldownChromeProps = {
  title: React.ReactNode;
  badge?: string;
  badgeTone?: 'neutral' | 'warning';
  meta?: React.ReactNode;
};

export function DrilldownChrome({
  title,
  badge,
  badgeTone = 'warning',
  meta
}: DrilldownChromeProps) {
  return (
    <div className="flex h-11 items-center justify-between gap-2 border-b border-[#dcdee2] bg-[#f8f7f3] px-3 sm:gap-3 sm:px-5">
      <div className="min-w-0 truncate text-[11px] font-medium text-[#4a4d54] sm:text-xs [&_span:last-child]:font-medium [&_span:last-child]:text-[#0b0d13]">
        {title}
      </div>
      {badge ? (
        <span
          className={
            badgeTone === 'neutral'
              ? 'shrink-0 rounded-full border border-[#dcdee2] bg-white px-2 py-0.5 text-[10px] text-[#777a82]'
              : 'shrink-0 rounded-full bg-[#fff0c5] px-2 py-0.5 text-[10px] text-[#6c4300]'
          }
        >
          {badge}
        </span>
      ) : null}
      {meta ? (
        <div className="flex shrink-0 items-center gap-2 text-[10px] text-[#777a82]">
          {meta}
        </div>
      ) : null}
    </div>
  );
}
