'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

import { AlertIcon } from './icons';

const SIGNALS = [
  'QA failures',
  'Topic spikes',
  'Coaching opportunities',
  'Sentiment drops',
  'Escalation risks'
] as const;

const GAPS = [
  {
    title: 'Slow response times',
    body: 'Critical events sit in dashboards for hours.'
  },
  {
    title: 'Missed coaching',
    body: 'Patterns surface too late to course-correct.'
  },
  {
    title: 'Late escalations',
    body: 'By the time a human notices, the customer has churned.'
  },
  {
    title: 'Manual follow-up',
    body: 'Teams burn hours stitching alerts together by hand.'
  }
] as const;

function GapAlertIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-[rgba(230,43,52,0.2)] bg-[rgba(230,43,52,0.1)]">
      <AlertIcon className="h-4 w-4" />
    </span>
  );
}

function SignalsCard() {
  return (
    <div className="rounded-[20px] border border-[#e7e4e0] bg-linear-to-b from-white to-[#fbfaf8] p-[33px] shadow-[0px_4px_2.5px_rgba(0,0,0,0.05)]">
      <p className="text-[12px] uppercase tracking-[0.6px] text-[#69625d]">
        Signals RipeText already sees
      </p>

      <div className="mt-6 space-y-3">
        {SIGNALS.map((signal) => (
          <div
            key={signal}
            className="flex items-center justify-between rounded-[16px] border border-[#e7e4e0] bg-[#fbfaf7] px-[17px] py-[13px]"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0caee9]" />
              <span className="text-[14px] leading-5 text-[#15110d]">
                {signal}
              </span>
            </div>
            <span className="rounded-full bg-[#f3f2ed] px-2 py-0.5 text-[10px] uppercase tracking-[0.5px] text-[#69625d]">
              Detected
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[12px] leading-4 text-[#69625d]">
        <span aria-hidden>↓</span>
        <span>Then what?</span>
        <span aria-hidden>↓</span>
      </div>
    </div>
  );
}

function GapCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col rounded-[20px] border border-[#e7e4e0] bg-white px-[25px] pb-[26px] pt-[25px] shadow-[0px_4px_2.5px_rgba(0,0,0,0.05)]">
      <GapAlertIcon />
      <h3 className="pt-2 font-['Instrument_Serif'] text-[24px] leading-[32px] tracking-[-0.24px] text-[#15110d]">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-[22.75px] text-[#69625d]">
        {body}
      </p>
    </div>
  );
}

export function AutomationsGap() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: GAPS.length + 2,
    staggerDelay: 120,
    threshold: 0.2
  });

  return (
    <section className="border-y border-[#dcdee2] bg-[#f8f8fb]">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-32"
      >
        <div className="max-w-[768px]" style={getItemStyle(0)}>
          <p className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
            The gap
          </p>

          <h2 className="mt-5 font-['Instrument_Serif'] text-[42px] leading-[1.02] tracking-[-0.04em] text-[#15110d] sm:text-[52px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.5px]">
            Insights don&apos;t{' '}
            <span className="italic text-[#0caee9]">create</span> action.
          </h2>

          <p className="mt-5 max-w-[672px] text-[18px] leading-[29.25px] text-[#69625d]">
            Teams receive valuable signals every day, but discovering an issue
            and acting on it are often disconnected workflows. Important events
            get buried inside dashboards, reports, and inboxes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] xl:gap-16">
          <div style={getItemStyle(1)}>
            <SignalsCard />
          </div>

          <div className="grid gap-[25px] md:auto-rows-fr md:grid-cols-2">
            {GAPS.map((gap, index) => (
              <div
                key={gap.title}
                className="h-full"
                style={getItemStyle(index + 2)}
              >
                <GapCard title={gap.title} body={gap.body} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
