'use client';

import { useInViewOnce } from '@/hooks/use-in-view-once';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

const TRUST_STATS = [
  { value: '5', label: 'File formats: PDF, DOCX, TXT, Markdown and VTT' },
  { value: '20 MB', label: 'Per document' },
  { value: 'AES-256', label: 'Encryption at rest, in private storage' },
  { value: '1:1', label: 'One knowledge base per customer, never mixed' }
] as const;

function StatCell({
  value,
  label,
  animate,
  delayMs
}: {
  value: string;
  label: string;
  animate: boolean;
  delayMs: number;
}) {
  return (
    <div
      className={`flex flex-col gap-2 bg-white px-8 pb-[33px] pt-[31px] ${
        animate ? 'ivy-stat-pop' : 'opacity-0'
      }`}
      style={
        { ['--ivy-delay' as string]: `${delayMs}ms` } as React.CSSProperties
      }
    >
      <p className="font-display text-[48px] leading-[1.1] tracking-[-1.12px] text-[#0a0d12] sm:text-[56px]">
        {value}
      </p>
      <p className="text-[12px] leading-[18px] text-[#3f4349]">{label}</p>
    </div>
  );
}

export function KnowledgeBaseTrust() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 100,
    threshold: 0.12
  });
  const { ref: statsRef, inView: statsInView } = useInViewOnce(0.2);

  return (
    <section className="border-t border-[#dcdee2] bg-white">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1496px] px-5 py-24 xl:px-[128px]"
      >
        <div className="mx-auto grid max-w-[1270px] gap-10 lg:grid-cols-12">
          <div
            className="flex flex-col gap-[17px] lg:col-span-5"
            style={getItemStyle(0)}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
              Security
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="font-display text-[42px] leading-[1.15] tracking-[-0.88px] text-[#0a0d12] sm:text-[52px] sm:leading-[55px]">
                  Private by default.
                </h2>
                <p className="font-display text-[36px] italic leading-[1.15] tracking-[-0.88px] text-[#0caee9] sm:text-[52px] sm:leading-[55px]">
                  Scrubbed before it&apos;s read.
                </p>
              </div>

              <p className="max-w-[448px] text-[14.5px] leading-[23.56px] text-[#3f4349]">
                Customer documents hold sensitive details, so secrets are
                redacted before anything is indexed or sent to AI. Files stay in
                your organization&apos;s private storage, and every fact, search
                and answer is scoped to one knowledge base.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" style={getItemStyle(1)}>
            <div
              ref={statsRef}
              className="grid grid-cols-1 gap-px border border-[#dcdee2] bg-[#dcdee2] sm:grid-cols-2"
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
