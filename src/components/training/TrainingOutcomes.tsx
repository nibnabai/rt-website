'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatedNumber } from '@/components/lp/AnimatedNumber';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { OUTCOME_ICONS } from './icons';
import {
  OUTCOME_METRICS,
  type TrainingOutcomeMetric
} from './outcomes/outcomes-data';

function OutcomeCard({
  metric,
  style,
  animateNumbers,
  reduceMotion
}: {
  metric: TrainingOutcomeMetric;
  style?: React.CSSProperties;
  animateNumbers: boolean;
  reduceMotion: boolean;
}) {
  const Icon = OUTCOME_ICONS[metric.icon];

  return (
    <article
      className="flex flex-col gap-5 bg-white p-7 transition-shadow hover:shadow-[0px_8px_24px_rgba(13,18,24,0.06)]"
      style={style}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3f0ea] text-[#0d1218]">
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <div className="text-right">
          {metric.animate ? (
            <p className="font-display text-[30px] leading-[30px] tracking-[-0.3px] text-[#0d1218]">
              <AnimatedNumber
                value={metric.animate.numeric}
                animate={animateNumbers}
                prefix={metric.animate.prefix}
                suffix={metric.animate.suffix}
                decimals={metric.animate.decimals ?? 0}
                immediate={reduceMotion}
              />
            </p>
          ) : (
            <p className="font-display text-[30px] leading-[30px] tracking-[-0.3px] text-[#0d1218]">
              {metric.value}
            </p>
          )}
          <p className="mt-1 text-[10px] uppercase tracking-[1px] text-[#4f565e]">
            {metric.valueLabel}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[16px] font-medium leading-6 text-[#0d1218]">
          {metric.title}
        </h3>
        <p className="mt-2 text-[14px] leading-[22.75px] text-[#4f565e]">
          {metric.description}
        </p>
      </div>
    </article>
  );
}

export function TrainingOutcomes() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [animateNumbers, setAnimateNumbers] = useState(false);

  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: OUTCOME_METRICS.length + 1,
    staggerDelay: 100,
    threshold: 0.15
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setAnimateNumbers(true);
      return;
    }

    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setAnimateNumbers(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      id="outcomes"
      className="border-b border-[#e4e1db] bg-[#f8f8fa] py-16 lg:py-24"
    >
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <header className="max-w-[755px]" style={getItemStyle(0)}>
          <p className="text-[12px] uppercase tracking-[2.4px] text-[#0caee9]">
            Outcomes
          </p>
          <h2 className="mt-2 font-display text-[40px] leading-[1.1] tracking-[-1.5px] text-[#0d1218] sm:text-[52px] sm:leading-[63px]">
            Built for support teams looking for results
          </h2>
        </header>

        <div
          ref={gridRef}
          className="mt-12 overflow-hidden rounded-[20px] border border-[#e4e1db] bg-[#e4e1db] lg:mt-16"
        >
          <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
            {OUTCOME_METRICS.map((metric, index) => (
              <OutcomeCard
                key={metric.title}
                metric={metric}
                style={getItemStyle(index + 1)}
                animateNumbers={animateNumbers}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
