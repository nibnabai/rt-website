'use client';

import { useEffect, useState } from 'react';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';
import { CheckBadgeIcon, CheckIcon, CrossIcon, FileIcon } from './icons';

type FactState = 'pending' | 'verified' | 'rejected';

const REVIEW_FACTS = [
  {
    category: 'Setup',
    statement:
      'Warehouse scanners run on an isolated VLAN (10.40.0.0/16) with no internet access.',
    excerpt:
      'scanners live on VLAN 40 (10.40.0.0/16), fully isolated from the internet',
    source: 'VPN runbook',
    outcome: 'verified'
  },
  {
    category: 'Integrations',
    statement:
      'Shipment webhooks retry 3 times over 10 minutes before an alert fires.',
    excerpt:
      'we retry the webhook three times, spaced over ten minutes, before alerting',
    source: 'Kickoff call transcript',
    outcome: 'verified'
  },
  {
    category: 'Integrations',
    statement: 'Orders are exported to the ERP once a day.',
    excerpt: 'we used to export orders to the ERP once a day',
    source: 'Onboarding notes',
    outcome: 'rejected'
  },
  {
    category: 'People & preferences',
    statement: 'Dana Ortiz (IT lead) wants outage updates in Slack, not email.',
    excerpt: "Slack for anything urgent, I don't read email during incidents",
    source: 'Kickoff call transcript',
    outcome: 'verified'
  }
] as const satisfies readonly {
  category: string;
  statement: string;
  excerpt: string;
  source: string;
  outcome: Exclude<FactState, 'pending'>;
}[];

const STATUS_TABS = ['All', 'Pending review', 'Verified', 'Rejected'] as const;

const REVIEW_START_MS = 700;
const REVIEW_STEP_MS = 900;

const REVIEW_POINTS = [
  'The source excerpt sits next to every extracted fact',
  'Categories are yours to define, per organization',
  'Add a category and existing documents are rescanned for it',
  'Facts already in the knowledge base are never extracted twice'
] as const;

function useReviewSequence(active: boolean) {
  const [reviewedCount, setReviewedCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReviewedCount(REVIEW_FACTS.length);
      return;
    }

    const timers = REVIEW_FACTS.map((_, index) =>
      setTimeout(
        () => setReviewedCount((count) => Math.max(count, index + 1)),
        REVIEW_START_MS + index * REVIEW_STEP_MS
      )
    );

    return () => timers.forEach(clearTimeout);
  }, [active]);

  return reviewedCount;
}

function FactActions({ state }: { state: FactState }) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-[6px] border transition-colors duration-300 ${
          state === 'verified'
            ? 'border-[#2f8a66] bg-[#2f8a66] text-white'
            : 'border-[#e5e7eb] bg-white text-[#636a7e]'
        }`}
      >
        <CheckIcon className="h-3 w-3" />
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-[6px] border transition-colors duration-300 ${
          state === 'rejected'
            ? 'border-[#636a7e] bg-[#636a7e] text-white'
            : 'border-[#e5e7eb] bg-white text-[#636a7e]'
        }`}
      >
        <CrossIcon className="h-3 w-3" />
      </span>
    </div>
  );
}

const STATUS_LABEL: Record<FactState, string> = {
  pending: 'Pending review',
  verified: 'Verified',
  rejected: 'Rejected'
};

const STATUS_CLASS: Record<FactState, string> = {
  pending: 'bg-[#fdf3e2] text-[#a86b0c]',
  verified: 'bg-[#e9f5f0] text-[#2f8a66]',
  rejected: 'bg-[#f1f2f5] text-[#8a8f9c]'
};

function FactReviewMockup() {
  const { ref, inView } = useInViewOnce(0.3);
  const reviewedCount = useReviewSequence(inView);

  const states: FactState[] = REVIEW_FACTS.map((fact, index) =>
    index < reviewedCount ? fact.outcome : 'pending'
  );
  const counts = {
    'Pending review': states.filter((state) => state === 'pending').length,
    Verified: states.filter((state) => state === 'verified').length,
    Rejected: states.filter((state) => state === 'rejected').length
  };

  return (
    <div
      ref={ref}
      className="w-full rounded-[20px] border border-[#e2e4e9] bg-white px-5 py-6 shadow-[0px_4px_40px_rgba(0,0,0,0.08)] sm:px-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[16px] font-semibold text-[#17234c]">Facts</p>
          <p className="mt-1 text-[12px] leading-[1.45] text-[#636a7e]">
            Extracted from the documents. Verified facts are used by Ivy and for
            training.
          </p>
        </div>
        <span className="shrink-0 rounded-[8px] border border-[#e5e7eb] px-3 py-1.5 text-[11px] font-semibold text-[#17234c]">
          Add fact
        </span>
      </div>

      <div className="mt-4 flex w-fit max-w-full flex-wrap gap-1 rounded-[10px] bg-[#f4f5f8] p-1">
        {STATUS_TABS.map((tab) => (
          <span
            key={tab}
            className={`rounded-[7px] px-2.5 py-1 text-[11px] ${
              tab === 'All'
                ? 'bg-white font-semibold text-[#17234c] shadow-[0px_1px_2px_rgba(21,26,40,0.08)]'
                : 'text-[#636a7e]'
            }`}
          >
            {tab}
            {tab === 'All' ? null : (
              <span className="ml-1 text-[#9ca3af]">{counts[tab]}</span>
            )}
          </span>
        ))}
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {REVIEW_FACTS.map((fact, index) => {
          const state = states[index];

          return (
            <li
              key={fact.statement}
              className={`rounded-[12px] border border-[#e5e7eb] px-4 py-3 transition-opacity duration-500 ${
                state === 'rejected' ? 'opacity-55' : 'opacity-100'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[9.5px] font-semibold uppercase tracking-[1.2px] text-[#0caee9]">
                      {fact.category}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-medium transition-colors duration-300 ${STATUS_CLASS[state]}`}
                    >
                      {STATUS_LABEL[state]}
                    </span>
                  </div>
                  <p
                    className={`mt-1.5 text-[12.5px] leading-[1.45] text-[#17234c] ${
                      state === 'rejected'
                        ? 'line-through decoration-[#9ca3af]'
                        : ''
                    }`}
                  >
                    {fact.statement}
                  </p>
                  <p className="mt-2 border-l-2 border-[#e3e4e9] pl-2.5 text-[11px] italic leading-[1.45] text-[#636a7e]">
                    &ldquo;&hellip;{fact.excerpt}&hellip;&rdquo;
                  </p>
                  <p className="mt-1.5 flex items-center gap-1 text-[10px] text-[#9ca3af]">
                    <FileIcon className="h-3 w-3" />
                    {fact.source}
                  </p>
                </div>
                <FactActions state={state} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function KnowledgeBaseFactReview() {
  const { ref: mockupRef, revealStyle } = useRevealOnScroll(0.15);

  return (
    <section
      id="fact-review"
      className="border-t border-[#e3e4e9] bg-[#f8f8fa] scroll-mt-16"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 lg:grid-cols-[minmax(0,520px)_minmax(0,620px)] lg:justify-between lg:gap-16 lg:px-8 lg:py-32">
        <div className="max-w-[520px]">
          <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            Fact review
          </p>
          <h2 className="mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
            AI does the reading.{' '}
            <span className="font-display italic text-[#0caee9]">
              Your team
            </span>{' '}
            has the final word.
          </h2>
          <p className="mt-8 text-[18px] leading-[29.25px] text-[#60636c]">
            Every fact starts as pending review, next to the exact excerpt it
            came from. Outdated or wrong facts get rejected in one click, and
            only verified facts are used to build training scenarios.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {REVIEW_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e3e4e9] bg-white">
                  <CheckBadgeIcon className="h-3 w-3" />
                </span>
                <p className="text-[14px] leading-5 text-[#60636c]">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <div ref={mockupRef} className="w-full" style={revealStyle}>
          <FactReviewMockup />
        </div>
      </div>
    </section>
  );
}
