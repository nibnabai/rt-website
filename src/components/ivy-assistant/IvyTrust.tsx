'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { useInViewOnce } from '@/hooks/use-in-view-once';

const TRUST_STATS = [
  { value: '10s', label: 'Median answer time' },
  { value: '100%', label: 'Citation coverage' },
  { value: '24/7', label: 'Availability' },
  { value: '0', label: 'Tickets leave your tenant' }
] as const;

function StatCell({
  value,
  label,
  animate,
  delayMs
}: {
  value: string;
  label: string;
  animate?: boolean;
  delayMs?: number;
}) {
  return (
    <div
      className={`flex flex-col gap-2 px-8 pb-[33px] pt-[31px] ${
        animate ? 'ivy-stat-pop' : ''
      }`}
      style={
        animate
          ? ({
              ['--ivy-delay' as string]: `${delayMs ?? 0}ms`
            } as React.CSSProperties)
          : undefined
      }
    >
      <p className="font-display text-[56px] leading-[54.88px] tracking-[-1.12px] text-[#0a0d12]">
        {value}
      </p>
      <p className="text-[12px] leading-[18px] text-[#3f4349]">{label}</p>
    </div>
  );
}

export function IvyTrust() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 100,
    threshold: 0.12
  });
  const { ref: statsRef, inView: statsInView } = useInViewOnce(0.2);

  return (
    <section className="border-y border-[#dcdee2] bg-[#f8f8fa]">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1496px] px-5 py-24 xl:px-[128px] xl:py-24"
      >
        <div className="mx-auto grid max-w-[1270px] gap-10 lg:grid-cols-12 lg:gap-10">
          <div
            className="flex flex-col gap-[17px] lg:col-span-5"
            style={getItemStyle(0)}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
              Trust
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="font-display text-[42px] leading-[55px] tracking-[-0.88px] text-[#0a0d12] sm:text-[52px]">
                  Audit-friendly by design.
                </h2>
                <p className="font-display text-[36px] italic leading-[43px] tracking-[-0.88px] text-[#0caee9] sm:text-[52px] sm:leading-[43px]">
                  Evidence on every answer.
                </p>
              </div>

              <p className="max-w-[448px] text-[14.5px] leading-[23.56px] text-[#3f4349]">
                Ivy never invents a number. Every claim links to the tickets,
                metrics, and timestamps it was derived from — so your team and
                your auditors can verify the chain in a click.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" style={getItemStyle(1)}>
            <div
              ref={statsRef}
              className="grid grid-cols-1 divide-y divide-[#dcdee2] border border-[#dcdee2] bg-white sm:grid-cols-2 sm:divide-x lg:h-[294px] lg:max-w-[720px] lg:grid-rows-[145.88px_145.88px]"
            >
              {TRUST_STATS.map((stat, index) => (
                <StatCell
                  key={stat.label}
                  {...stat}
                  animate={statsInView}
                  delayMs={index * 110}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
