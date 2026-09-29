'use client';

import { LpSectionHeader } from '@/components/lp/LpSectionHeader';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { DRILLDOWN_STEPS } from './drill-down/drill-down-data';
import { DrilldownStep } from './drill-down/DrilldownStep';

export function AutomatedQaDrilldown() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: DRILLDOWN_STEPS.length * 2 + 1,
    staggerDelay: 120,
    threshold: 0.12
  });

  return (
    <section id="drill-down-flow" className="bg-lp-bg py-16 lg:py-24">
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <LpSectionHeader
          className="max-w-3xl [&_h2]:text-[#0b0d13] [&_p]:text-[#4a4d54]"
          eyebrow="Drill-down flow"
          headline={
            <>
              <span className="block">From team-wide trends</span>
              <span className="block font-display italic text-[#0caee9]">
                to a single message
              </span>
              <span className="block">— without leaving the dashboard.</span>
            </>
          }
          body="There's no separate QA tab. The numbers you need live right where your team already looks."
          style={getItemStyle(0)}
        />

        <div className="mt-16 space-y-24 lg:mt-20">
          {DRILLDOWN_STEPS.map((step, i) => {
            const copyIndex = i * 2 + 1;
            const mockupIndex = i * 2 + 2;
            return (
              <DrilldownStep
                key={step.number}
                step={step}
                reverse={i % 2 === 1}
                copyStyle={getItemStyle(copyIndex)}
                mockupStyle={getItemStyle(mockupIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
