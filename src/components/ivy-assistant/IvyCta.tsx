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
        d="M3.33333 8H12.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.33333L12.6667 8L8 12.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IvyCta() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 3,
    staggerDelay: 120,
    threshold: 0.2
  });

  return (
    <section className="relative overflow-hidden border-b border-[#dcdee2]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[#1c2c57]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 960px 293px at 384px 59px, rgba(0,123,173,0.251) 0%, rgba(0,61,87,0.1255) 30%, transparent 60%), linear-gradient(90deg, #1c2c57 0%, #1c2c57 100%)'
        }}
      />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-40 lg:py-[160px]"
      >
        <div className="flex flex-col items-center gap-[37px]">
          <div
            className="flex flex-col items-center gap-[21px]"
            style={getItemStyle(0)}
          >
            <p className="text-[12px] uppercase tracking-[2.64px] text-[#0caee9]">
              Demo
            </p>

            <div className="flex flex-col items-center gap-[27px]">
              <h2 className="max-w-[675px] text-balance font-display text-[42px] leading-[1.05] tracking-[-1.5px] text-[#fcfaf6] sm:text-[60px] sm:leading-[63px]">
                Your next support analyst{' '}
                <span className="font-display italic text-[#0caee9]">
                  doesn&apos;t need onboarding.
                </span>
              </h2>
            </div>
          </div>

          <p
            className="max-w-[576px] text-[18px] leading-7 text-[rgba(252,250,246,0.7)]"
            style={getItemStyle(1)}
          >
            Book a 20-minute demo and ask Ivy your hardest question live.
          </p>

          <a
            href="https://calendly.com/tsenkov"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-[10px] bg-[#fcfaf6] px-[71px] py-3.5 text-[14px] font-semibold leading-5 text-[#0d1218] transition-opacity hover:opacity-95"
            style={getItemStyle(2)}
          >
            Book a demo
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
