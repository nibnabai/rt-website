'use client';

import { useEffect, useRef, useState } from 'react';

const DEFAULT_INTEGRATIONS = [
  'Zendesk',
  'Intercom',
  'Front',
  'Crisp',
  'HubSpot',
  'Salesforce'
];

type LpIntegrationsBannerProps = {
  integrations?: readonly string[];
};

export function LpIntegrationsBanner({
  integrations = DEFAULT_INTEGRATIONS
}: LpIntegrationsBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        integrations.forEach((_, i) => {
          setTimeout(() => setVisibleCount((c) => c + 1), i * 120);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [integrations]);

  return (
    <section className="border-b border-white/10 bg-[#1c2c57]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[54px] px-8 py-10 lg:py-12">
        <p className="font-display text-center text-[32px] leading-none text-white sm:text-[40px] lg:text-[48px]">
          Connects to the support stack you already use
        </p>
        <div
          ref={containerRef}
          className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 sm:justify-between lg:px-12"
        >
          {integrations.map((name, i) => (
            <span
              key={name}
              className="text-[17px] font-bold leading-[22px] text-white transition-all duration-500 ease-out"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform:
                  i < visibleCount ? 'translateY(0)' : 'translateY(8px)'
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
