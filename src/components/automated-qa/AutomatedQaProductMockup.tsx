'use client';

import { useEffect, useState } from 'react';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { ConversationMockup } from './conversation-mockup/ConversationMockup';

export function AutomatedQaProductMockup() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 1,
    staggerDelay: 0,
    threshold: 0.2
  });

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const revealStyle = reduceMotion
    ? { opacity: 1, transform: 'none' }
    : getItemStyle(0);

  return (
    <section id="problem" className="bg-lp-bg py-16 lg:py-24">
      <div
        ref={containerRef}
        className="mx-auto flex max-w-[1400px] justify-center px-5 lg:px-8"
      >
        <div className="relative w-full max-w-[677px]" style={revealStyle}>
          <ConversationMockup />
        </div>
      </div>
    </section>
  );
}
