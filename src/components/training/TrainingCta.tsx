'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

const CTA_AURORA_STYLE: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(ellipse 120% 85% at 20% 10%, rgba(0,123,173,0.251) 0%, rgba(0,61,87,0.1255) 30%, transparent 60%)',
    'linear-gradient(rgb(28, 44, 87), rgb(28, 44, 87))'
  ].join(', ')
};

export function TrainingCta() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#e4e1db] bg-[#1c2c57]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={CTA_AURORA_STYLE}
        aria-hidden
      />

      <div
        className="relative mx-auto max-w-[1400px] px-5 py-28 text-center sm:px-6 sm:py-32 md:py-40 lg:px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition:
            'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <p className="text-[12px] uppercase tracking-[2.64px] text-[#0caee9]">
          Get started
        </p>

        <h2 className="mx-auto mt-5 max-w-[900px] font-display text-[40px] leading-[1.05] tracking-[-1.5px] text-[#fcfaf6] sm:text-[52px] sm:leading-[63px]">
          Train for the tickets your agents will{' '}
          <span className="font-display italic text-[#0caee9]">actually</span>{' '}
          get.
        </h2>

        <p className="mx-auto mt-6 max-w-[576px] text-[18px] leading-7 text-[rgba(252,250,246,0.7)]">
          Book a 20-minute demo and we&apos;ll run a live persona session with
          your team.
        </p>

        <a
          href="https://calendly.com/tsenkov"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-9 inline-flex items-center gap-2 rounded-[10px] bg-[#fcfaf6] px-[71px] py-3.5 text-[14px] font-semibold text-[#0d1218] transition-colors hover:bg-[#fcfaf6]/95"
        >
          Book a demo
          <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
