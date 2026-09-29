'use client';

import { useEffect, useState } from 'react';
import { LpSectionHeader } from '@/components/lp/LpSectionHeader';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { ScoreCards } from './what-we-score/ScoreCards';

export function AutomatedQaWhatWeScore() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { containerRef, visibleCount, getItemStyle } = useStaggeredReveal({
    itemCount: 7,
    staggerDelay: 100,
    threshold: 0.12
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const animate = visibleCount > 0 && !reduceMotion;
  const cardStyles = Array.from({ length: 6 }, (_, i) => getItemStyle(i + 1));

  return (
    <section id="what-we-score" className="relative bg-lp-bg py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-lp-mesh-surface/50"
        aria-hidden
      />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-[1400px] px-5 lg:px-8"
      >
        <LpSectionHeader
          eyebrow="What we score"
          headline={
            <>
              Six signals{' '}
              <span className="font-display italic text-[#0caee9]">
                on every conversation.
              </span>
            </>
          }
          body="Every closed ticket is scored automatically across all six. No sampling. No queues."
          style={getItemStyle(0)}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          <ScoreCards
            animate={animate}
            reduceMotion={reduceMotion}
            cardStyles={cardStyles}
          />
        </div>
      </div>
    </section>
  );
}
