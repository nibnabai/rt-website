'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AutomationCta() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 1,
    staggerDelay: 0,
    threshold: 0.2
  });

  return (
    <section className="bg-[#fcfcfd]">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 lg:px-8 lg:py-50"
      >
        <div
          className="mx-auto w-full max-w-[1271px] overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#0f1d43_0%,#1f2f5c_100%)] shadow-[0px_8px_16px_-8px_rgba(21,26,40,0.06),0px_24px_48px_-12px_rgba(21,26,40,0.12)]"
          style={getItemStyle(0)}
        >
          <div className="relative overflow-hidden px-8 py-12 lg:px-[78px] lg:py-[108px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[rgba(12,174,233,0.2)] blur-[32px]"
            />

            <div className="relative">
              <p className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
                20-minute demo
              </p>

              <h2 className="mt-[7px] max-w-[768px] font-['Instrument_Serif'] text-[42px] leading-none tracking-[-0.04em] text-[#fcfcfd] sm:text-[52px] lg:max-w-none lg:whitespace-nowrap lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
                Turn insights into action.{' '}
                <span className="italic text-[#0caee9]">Automatically.</span>
              </h2>

              <p className="mt-[30px] max-w-[718px] text-[18px] leading-7 text-[rgba(252,252,253,0.75)]">
                Book a 20-minute demo and we&apos;ll build your first automation
                live — using your events, your team, your tools.
              </p>

              <div className="mt-[33px] flex flex-col gap-[13px] sm:flex-row sm:items-center">
                <a
                  href="https://calendly.com/tsenkov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-[10px] rounded-[10px] bg-[#fcfcfd] px-8 py-3 text-[14px] font-medium leading-5 text-[#151a28] transition-colors hover:bg-[#fcfcfd]/90"
                >
                  Book a Demo
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#action-types"
                  className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(252,252,253,0.25)] bg-[#1f2f5c] px-8 py-3 text-[14px] font-medium leading-5 text-[#fcfcfd] transition-colors hover:bg-[#2a3d6e]"
                >
                  Explore actions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
