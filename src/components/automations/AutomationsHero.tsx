'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

type ActionResult = {
  action: 'Webhook' | 'Slack' | 'Email';
  tone: {
    badge: string;
    dot: string;
  };
  lines: string[];
  cta?: string;
};

const ACTION_RESULTS: ActionResult[] = [
  {
    action: 'Webhook',
    tone: {
      badge: 'bg-[#dbeafe]',
      dot: 'bg-[#3b82f6]'
    },
    lines: ['URL: https://example.com/webhook', 'Method: POST'],
    cta: 'Request Body'
  },
  {
    action: 'Slack',
    tone: {
      badge: 'bg-[#fef3c7]',
      dot: 'bg-[#f59e0b]'
    },
    lines: [
      'Webhook URL: https://hooks.slack.com/services/T05V01QRXGWB08SC...'
    ],
    cta: 'Message Payload'
  },
  {
    action: 'Email',
    tone: {
      badge: 'bg-[#fce7f3]',
      dot: 'bg-[#ec4899]'
    },
    lines: [
      'To: admin@example.com',
      'Subject: Historical Import Complete - 1543 conversations',
      'Email sent successfully ✓'
    ]
  }
];

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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-[#10b981]"
      aria-hidden
    >
      <path
        d="M3.5 8.25 6.5 11.25 12.5 4.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuccessBadgeIcon() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10b981]">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-white"
        aria-hidden
      >
        <path
          d="M3.5 8.25 6.5 11.25 12.5 4.75"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-[#9ca3af]"
      aria-hidden
    >
      <path
        d="M6 6 14 14M14 6 6 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DisclosureIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-[#6b7280]"
      aria-hidden
    >
      <path
        d="M4.5 2.5 8 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ActionResultCardInner({
  result,
  visible,
  active
}: {
  result: ActionResult;
  visible: boolean;
  active: boolean;
}) {
  return (
    <div
      className={`rounded-[8px] border border-[#a7f3d0] bg-[#ecfdf5] px-4 py-4 transition-all duration-500 ease-out ${
        active
          ? 'shadow-[0px_10px_25px_rgba(16,185,129,0.12)] ring-1 ring-[rgba(16,185,129,0.25)]'
          : 'shadow-none ring-0'
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? active
            ? 'translateY(0) scale(1.01)'
            : 'translateY(0) scale(1)'
          : 'translateY(12px) scale(0.98)'
      }}
    >
      <div className="flex items-start gap-2.5">
        <div className="pt-0.5">
          <CheckIcon />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-[4px] ${result.tone.badge}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${result.tone.dot}`}
                aria-hidden
              />
            </span>
            <p className="text-[15px] font-semibold leading-[19.5px] text-[#1f2937]">
              {result.action}
            </p>
          </div>

          <div className="mt-3 space-y-1">
            {result.lines.map((line) => (
              <p
                key={line}
                className="text-[12px] leading-[18px] text-[#6b7280]"
              >
                {line}
              </p>
            ))}
          </div>

          {result.cta ? (
            <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium leading-[18px] text-[#6b7280]">
              <DisclosureIcon />
              {result.cta}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function AutomationsMockup() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(motionMq.matches);
    update();
    motionMq.addEventListener('change', update);
    return () => motionMq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(ACTION_RESULTS.length);
      return;
    }

    setVisibleCount(0);
    const timers = ACTION_RESULTS.map((_, index) =>
      window.setTimeout(() => {
        setVisibleCount(index + 1);
      }, 220 + index * 180)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    if (visibleCount < ACTION_RESULTS.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ACTION_RESULTS.length);
    }, 1650);

    return () => clearInterval(interval);
  }, [reduceMotion, visibleCount]);

  return (
    <div
      id="automation-example"
      className="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_1px_0px_rgba(18,22,31,0.04),0px_12px_40px_rgba(18,22,31,0.08)] transition-transform duration-700 ease-out hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#e5e7eb] bg-[#faf9f7] px-6 py-5">
        <div className="flex items-center gap-3">
          <SuccessBadgeIcon />
          <h2 className="font-['Instrument_Serif'] text-[26px] leading-none text-[#1f2937] sm:text-[30px]">
            Automation Created
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#f3f4f6]"
          aria-label="Close preview"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="bg-white px-6 py-5">
        <h3 className="text-[16px] font-medium leading-5 text-[#1f2937]">
          Action Results
        </h3>
        <div className="mt-4 space-y-3">
          {ACTION_RESULTS.map((result, index) => (
            <ActionResultCardInner
              key={result.action}
              result={result}
              visible={reduceMotion || index < visibleCount}
              active={
                (reduceMotion && index === 0) ||
                (!reduceMotion && index === activeIndex)
              }
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end border-t border-[#e5e7eb] bg-[#faf9f7] px-6 py-4">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[6px] bg-[#303851] px-5 py-2.5 text-[13px] font-semibold leading-[19.5px] text-white transition-colors hover:bg-[#252c3f]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function AutomationsHero() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 180,
    threshold: 0.15
  });

  return (
    <section id="hero" className="relative overflow-x-hidden bg-[#fcfcfd]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 70% 55% at 85% 10%, rgba(12,174,233,0.08) 0%, transparent 62%)',
            'radial-gradient(ellipse 65% 50% at 0% 0%, rgba(15,29,67,0.04) 0%, transparent 60%)'
          ].join(', ')
        }}
        aria-hidden
      />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-24 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-[112px]"
      >
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,695px)_minmax(0,540px)] xl:justify-between xl:gap-12">
          <div className="max-w-[695px]" style={getItemStyle(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e4e0] bg-white px-[13px] py-[5px] shadow-[0px_1px_2px_rgba(21,26,40,0.04)]">
              <span
                className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#0caee9]"
                aria-hidden
              />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#69625d]">
                Automations
              </span>
            </div>

            <h1 className="mt-6 max-w-[671px] font-['Instrument_Serif'] text-[3.15rem] leading-[0.96] tracking-[-0.04em] text-[#15110d] sm:text-[4.1rem] lg:text-[72px] lg:leading-[73.44px] lg:tracking-[-1.8px]">
              When RipeText sees
              <br />
              something important,{' '}
              <span className="italic text-[#0caee9]">
                do something about it.
              </span>
              <br />
              Instantly.
            </h1>

            <p className="mt-7 max-w-[504px] text-[18px] leading-[29.25px] text-[#69625d]">
              Send a Slack ping when a ticket fails QA. Email the team lead when
              a topic spikes. Fire a webhook into your own systems when an
              agent&apos;s score drops. Up to 10 automations per workspace, no
              engineering required.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#0f1d43] px-6 py-3 text-[14px] font-semibold leading-5 text-[#fbfaf7] transition-colors hover:bg-[#152752]"
              >
                Book a Demo
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#automation-example"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#e7e4e0] bg-white px-6 py-3 text-[14px] leading-5 text-[#15110d] transition-colors hover:bg-[#f2f4f7]"
              >
                See Example Automations
              </a>
            </div>
          </div>

          <div className="w-full xl:justify-self-end" style={getItemStyle(1)}>
            <AutomationsMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
