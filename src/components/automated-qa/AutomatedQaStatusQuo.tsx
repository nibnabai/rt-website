'use client';

import { LpSectionHeader } from '@/components/lp/LpSectionHeader';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { STATUS_QUO_CARDS } from './status-quo/status-quo-data';
import { StatusQuoCard } from './status-quo/StatusQuoCard';

export function AutomatedQaStatusQuo() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: STATUS_QUO_CARDS.length + 1,
    staggerDelay: 120,
    threshold: 0.15
  });

  return (
    <section id="status-quo" className="bg-lp-bg py-16 lg:py-24">
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <LpSectionHeader
          eyebrow="The status quo"
          headline={
            <>
              Manual QA is broken{' '}
              <span className="font-display italic text-[#0caee9]">
                at scale.
              </span>
            </>
          }
          style={getItemStyle(0)}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {STATUS_QUO_CARDS.map((card, i) => (
            <StatusQuoCard
              key={card.stat}
              card={card}
              style={getItemStyle(i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
