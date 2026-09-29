'use client';

import { ArrowRightIcon } from './icons';
import { TrainingHeroMockup } from './hero/TrainingHeroMockup';

const HERO_BODY =
  'RipeText generates lifelike customer personas and drops each agent into scenarios built from their own QA gaps. Practice the hard conversations before they show up in the queue.';

const HERO_GRADIENT: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(ellipse 80% 60% at 90% 0%, rgba(226,130,71,0.12) 0%, transparent 60%)',
    'radial-gradient(ellipse 80% 60% at 0% 30%, rgba(0,123,173,0.08) 0%, transparent 60%)'
  ].join(', ')
};

export function TrainingHero() {
  return (
    <section
      id="hero"
      className="relative overflow-x-hidden border-b border-[#e4e1db] bg-[#f8f8fb]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={HERO_GRADIENT}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0 max-w-[600px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e4e1db] bg-white px-3 py-1">
              <span
                className="h-1.5 w-2 shrink-0 rounded-full bg-[#e28247] animate-pulse-dot"
                aria-hidden
              />
              <span className="text-[12px] uppercase tracking-[0.18em] text-[#4f565e]">
                Agent training with AI
              </span>
            </div>

            <h1 className="mt-6 font-display text-[40px] leading-[1.05] tracking-[-0.035em] text-[#0d1218] sm:text-[52px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.5px]">
              The roleplay partner that knows{' '}
              <span className="font-display italic text-[#0caee9]">
                exactly
              </span>{' '}
              where your agent needs work.
            </h1>

            <p className="mt-6 text-[18px] leading-[29.25px] text-[#4f565e]">
              {HERO_BODY}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#0f1d43] px-6 py-3.5 text-[14px] font-semibold text-[#fcfaf6] transition-colors hover:bg-[#0f1d43]/90 sm:w-auto"
              >
                Book a demo
                <ArrowRightIcon className="shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="text-[14px] font-medium text-[#0d1218] transition-opacity hover:opacity-70"
              >
                See a sample scenario →
              </a>
            </div>
          </div>

          <TrainingHeroMockup />
        </div>
      </div>
    </section>
  );
}
