'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { ArrowRightIcon } from './icons';
import { KnowledgeBaseHeroMockup } from './KnowledgeBaseHeroMockup';

const HERO_GRADIENT: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(ellipse 80% 60% at 80% 0%, rgba(226,130,71,0.12) 0%, transparent 60%)',
    'radial-gradient(ellipse 80% 60% at 0% 30%, rgba(0,123,173,0.078) 0%, transparent 60%)'
  ].join(', ')
};

export function KnowledgeBaseHero() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 180,
    threshold: 0.15
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#e4e1db] bg-[#f8f8fb]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={HERO_GRADIENT}
      />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-[112px]"
      >
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,620px)_minmax(0,592px)] xl:justify-between xl:gap-12">
          <div
            className="flex max-w-[620px] flex-col gap-7"
            style={getItemStyle(0)}
          >
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#e4e1db] bg-white px-3 py-[5px] shadow-[0px_1px_2px_rgba(21,26,40,0.04)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#359b75]"
                aria-hidden
              />
              <span className="text-[12px] uppercase tracking-[0.18em] text-[#4f565e]">
                Knowledge Base
              </span>
            </div>

            <h1 className="text-balance font-display text-[3rem] leading-[0.97] tracking-[-0.04em] text-[#0d1218] sm:text-[4rem] lg:text-[72px] lg:leading-[70px] lg:tracking-[-1.5px]">
              Know every customer&apos;s setup{' '}
              <span className="font-display italic text-[#0caee9]">before</span>{' '}
              they explain it.
            </h1>

            <p className="max-w-[560px] text-[18px] leading-[29.25px] text-[#4f565e]">
              Upload the onboarding notes, runbooks and call transcripts you
              already have. RipeText turns them into reviewed facts about each
              customer&apos;s environment, so Ivy answers with sources and new
              agents train on the real thing.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center justify-center gap-1.5 rounded-[10px] bg-[#0f1d43] px-6 py-3.5 text-[14px] font-semibold leading-5 text-[#fcfaf6] transition-colors hover:bg-[#162754]"
              >
                Book a demo
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="text-[14px] font-medium text-[#0d1218] transition-opacity hover:opacity-70"
              >
                See how it works →
              </a>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5f636a]">
              Ask Ivy &ldquo;Which SSO provider does Northwind use?&rdquo;
              <br />
              and get the answer with the page it came from
            </p>
          </div>

          <div className="w-full xl:justify-self-end" style={getItemStyle(1)}>
            <KnowledgeBaseHeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
