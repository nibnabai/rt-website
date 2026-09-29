'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { EXTRA_NEEDS } from './extra-needs/extra-needs-data';
import { PersonaBuilderMockup } from './extra-needs/PersonaBuilderMockup';

export function TrainingExtraNeeds() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 5,
    staggerDelay: 110,
    threshold: 0.15
  });

  return (
    <section
      id="extra-needs"
      className="border-b border-[#e4e1db] bg-[#fcfcfd] py-16 lg:py-24"
    >
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <header className="max-w-[1034px]" style={getItemStyle(0)}>
          <p className="text-[12px] uppercase tracking-[2.4px] text-[#0caee9]">
            {EXTRA_NEEDS.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[40px] leading-[1.1] tracking-[-1.5px] text-[#0d1218] sm:text-[52px] sm:leading-[63px]">
            {EXTRA_NEEDS.headline}
          </h2>
          <p className="mt-6 max-w-[900px] text-[18px] leading-7 text-[#4f565e]">
            {EXTRA_NEEDS.body}
          </p>
        </header>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,576px)_1fr] lg:gap-16">
          <div className="space-y-12">
            {EXTRA_NEEDS.steps.map((step, index) => (
              <div key={step.number} style={getItemStyle(index + 1)}>
                <div className="flex items-end gap-4">
                  <span className="font-display text-[48px] leading-none tracking-[-0.48px] text-[#0caee9]">
                    {step.number}
                  </span>
                  <div className="mb-2 h-px flex-1 bg-[#e4e1db]" />
                </div>
                <h3 className="mt-5 font-display text-[36px] leading-tight tracking-[-0.48px] text-[#0d1218] sm:text-[48px]">
                  {step.title}
                </h3>
                <p className="mt-5 text-[18px] leading-[29.25px] text-[#4f565e]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex min-w-0 items-start justify-center lg:justify-end lg:pt-2"
            style={getItemStyle(4)}
          >
            <div className="w-full max-w-[701px] origin-top scale-[0.94] sm:scale-100">
              <PersonaBuilderMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
