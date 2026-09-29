import { cn } from '@/lib/utils';
import type { DrilldownStepData } from './drill-down-data';

type DrilldownStepProps = {
  step: DrilldownStepData;
  reverse?: boolean;
  copyStyle?: React.CSSProperties;
  mockupStyle?: React.CSSProperties;
};

export function DrilldownStep({
  step,
  reverse = false,
  copyStyle,
  mockupStyle
}: DrilldownStepProps) {
  const { number, stepLabel, title, body, Mockup } = step;

  return (
    <div
      className={cn(
        'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
        reverse && 'lg:[&>*:first-child]:order-2'
      )}
    >
      <div className="max-w-[477px]" style={copyStyle}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            {number}
          </span>
          <span className="h-px w-10 bg-[#0caee9]" aria-hidden />
          <span className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            {stepLabel}
          </span>
        </div>
        <h3 className="mt-2.5 font-display text-[30px] leading-9 tracking-[-0.6px] text-[#0b0d13] sm:text-[36px] sm:tracking-[-0.72px]">
          {title}
        </h3>
        <p className="mt-5 text-[15px] leading-[24px] text-[#4a4d54]">{body}</p>
      </div>

      <div
        className={cn(
          'w-full lg:max-w-[683px]',
          reverse ? 'lg:justify-self-start' : 'lg:justify-self-end'
        )}
      >
        <Mockup style={mockupStyle} />
      </div>
    </div>
  );
}
