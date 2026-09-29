'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

const DESTINATIONS = [
  'Slack',
  'Gmail',
  'Outlook',
  'Zapier',
  'PagerDuty',
  'Custom Webhooks'
] as const;

export function AutomationsDestinations() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: DESTINATIONS.length + 1,
    staggerDelay: 90,
    threshold: 0.2
  });

  return (
    <section>
      <div className="h-[65px] bg-[#fcfcfd]" aria-hidden />
      <div className="bg-[#1c2c57]">
        <div
          ref={containerRef}
          className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-[41px]"
        >
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-white/95 lg:text-[12px] lg:tracking-[0.6px]"
            style={getItemStyle(0)}
          >
            Routes signals into the tools your team already uses
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:gap-x-10">
            {DESTINATIONS.map((item, index) => (
              <span
                key={item}
                className="font-['Instrument_Serif'] text-[22px] leading-[1.15] tracking-[-0.2px] text-white lg:text-[20px] lg:leading-[28px]"
                style={getItemStyle(index + 1)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
