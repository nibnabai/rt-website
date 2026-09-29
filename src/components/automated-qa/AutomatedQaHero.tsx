'use client';

import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import { HeroMeshGrid } from './HeroMeshGrid';
import { ArrowRightIcon } from './icons';

const AURORA_STYLE: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(ellipse 80% 60% at 80% 0%, rgba(35,127,200,0.1) 0%, transparent 60%)',
    'radial-gradient(ellipse 80% 60% at 0% 20%, rgba(107,95,202,0.08) 0%, transparent 60%)'
  ].join(', ')
};

const BODY_COPY =
  'RipeText grades 100% of your support tickets across six dimensions — automatically. From team overview to a single message, the answer to "why did this conversation go wrong?" is two clicks away.';

export function AutomatedQaHero() {
  return (
    <section id="hero" className="relative overflow-x-hidden bg-lp-hero-canvas">
      <div
        className="pointer-events-none absolute inset-0"
        style={AURORA_STYLE}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-8 pt-24 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-[109px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-8 xl:grid-cols-[1.15fr_1fr]">
          <div className="min-w-0 max-w-[571px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-lp-divider bg-white/60 px-3 py-1 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2a9d67] animate-pulse-dot"
                aria-hidden
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-lp-text-muted">
                Automated QA
              </span>
            </div>

            {/* Mobile / tablet: cyan always starts on its own line */}
            <h1 className="mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.035em] text-[#0b0d13] sm:text-[44px] lg:hidden">
              Score every conversation.
              <span className="mt-0 block font-display italic text-[#0caee9]">
                Not just the 2% you sample.
              </span>
            </h1>

            {/* Desktop: exact Figma line breaks (7143:2506) */}
            <h1 className="mt-5 hidden font-display text-[4.4rem] leading-[69px] tracking-[-1.408px] text-[#0b0d13] lg:block">
              Score every
              <br />
              conversation.
              <br />
              <span className="font-display italic text-[#0caee9]">
                Not just the 2% you
                <br />
                sample.
              </span>
            </h1>

            <p className="mt-6 text-base leading-[1.62] text-[#4a4d54] lg:hidden">
              {BODY_COPY}
            </p>

            <p className="mt-7 hidden text-[17px] leading-[27.625px] text-[#4a4d54] lg:block">
              RipeText grades 100% of your support tickets across six dimensions
              —
              <br />
              automatically. From team overview to a single message, the answer
              to
              <br />
              &quot;why did this conversation go wrong?&quot; is two clicks
              away.
            </p>

            <div className="relative mt-8">
              <div
                className="pointer-events-none absolute -inset-x-4 top-1/2 h-24 -translate-y-1/2 blur-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(77,109,213,0.25) 0%, rgba(134,120,224,0.15) 40%, transparent 70%)'
                }}
                aria-hidden
              />
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://calendly.com/tsenkov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-lp-navy px-8 py-3 text-sm font-medium text-lp-bg transition-colors hover:bg-lp-navy/90 sm:w-auto"
                >
                  Book a Demo
                  <ArrowRightIcon className="shrink-0 text-lp-bg transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:sales@ripetext.com"
                  className="inline-flex w-full items-center justify-center rounded-[10px] border border-lp-divider bg-lp-bg px-8 py-3 text-sm font-medium text-lp-text-dark transition-colors hover:bg-[#f2f4f7] sm:w-auto"
                >
                  Talk to Sales
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 sm:items-center">
              <Image
                src={cdnUrl(
                  '/images/features/automated-qa/integration-swatches.png'
                )}
                alt=""
                width={59}
                height={20}
                unoptimized
                className="mt-0.5 h-5 w-[59px] shrink-0 object-contain object-left sm:mt-0"
                aria-hidden
              />
              <p className="min-w-0 text-xs leading-4 text-lp-number-label">
                Works with Zendesk, Intercom, Front, Crisp, HubSpot and more.
              </p>
            </div>
          </div>

          <div className="flex w-full min-w-0 justify-center lg:justify-end">
            <HeroMeshGrid className="min-w-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
