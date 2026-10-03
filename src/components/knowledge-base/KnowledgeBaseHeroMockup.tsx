'use client';

import { useEffect, useState } from 'react';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import { FileIcon } from './icons';

const DOCUMENTS = [
  { title: 'Onboarding notes', type: 'PDF', size: '2.4 MB' },
  { title: 'VPN runbook', type: 'DOCX', size: '880 KB' },
  { title: 'Kickoff call transcript', type: 'VTT', size: '312 KB' }
] as const;

const FACTS = [
  {
    category: 'Setup',
    statement:
      'Agents sign in through Okta SSO. Password resets go to Northwind IT.'
  },
  {
    category: 'Integrations',
    statement:
      'Orders sync from NetSuite to the carrier portal every 15 minutes.'
  },
  {
    category: 'Known issues',
    statement: 'Label printing fails on Zebra ZD420 firmware older than v8.2.'
  }
] as const;

/** Facts verified before the demo starts, so the counter never reads 0. */
const PRE_VERIFIED_COUNT = 9;

const PROCESSING_DONE_MS = 1500;
const FACT_APPEAR_START_MS = 1800;
const FACT_APPEAR_STEP_MS = 320;
const FACT_VERIFY_START_MS = 3300;
const FACT_VERIFY_STEP_MS = 650;

function useHeroSequence(active: boolean) {
  const [processingDone, setProcessingDone] = useState(false);
  const [visibleFacts, setVisibleFacts] = useState(0);
  const [verifiedFacts, setVerifiedFacts] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProcessingDone(true);
      setVisibleFacts(FACTS.length);
      setVerifiedFacts(FACTS.length);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setProcessingDone(true), PROCESSING_DONE_MS));

    FACTS.forEach((_, index) => {
      timers.push(
        setTimeout(
          () => setVisibleFacts((count) => Math.max(count, index + 1)),
          FACT_APPEAR_START_MS + index * FACT_APPEAR_STEP_MS
        )
      );
      timers.push(
        setTimeout(
          () => setVerifiedFacts((count) => Math.max(count, index + 1)),
          FACT_VERIFY_START_MS + index * FACT_VERIFY_STEP_MS
        )
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [active]);

  return { processingDone, visibleFacts, verifiedFacts };
}

function MockupTitleBar() {
  return (
    <div className="flex h-9 shrink-0 items-center justify-between border-b border-[#dcdee2] bg-[rgba(247,246,242,0.6)] px-4">
      <div className="flex shrink-0 gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbdb7]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6d389]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a1e4ae]" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-[#60636c]">
        ripetext · knowledge
      </p>
      <div className="flex shrink-0 items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#359b75]" />
        <span className="text-[10px] text-[#5f636a]">Live</span>
      </div>
    </div>
  );
}

function DocumentStatus({ processing }: { processing: boolean }) {
  if (processing) {
    return (
      <div className="flex w-[84px] flex-col items-end gap-1">
        <span className="text-[9.5px] font-medium text-[#0caee9]">
          Processing
        </span>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-[#e6f6fc]">
          <div className="ivy-progress-bar h-full rounded-full bg-[#0caee9]" />
        </div>
      </div>
    );
  }

  return (
    <span className="rounded-full bg-[#e9f5f0] px-2 py-0.5 text-[9.5px] font-medium text-[#2f8a66]">
      Ready
    </span>
  );
}

function FactStatus({ verified }: { verified: boolean }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium transition-colors duration-300 ${
        verified ? 'bg-[#e9f5f0] text-[#2f8a66]' : 'bg-[#fdf3e2] text-[#a86b0c]'
      }`}
    >
      {verified ? 'Verified' : 'Pending review'}
    </span>
  );
}

export function KnowledgeBaseHeroMockup() {
  const { ref, inView } = useInViewOnce(0.25);
  const { processingDone, visibleFacts, verifiedFacts } =
    useHeroSequence(inView);

  const pendingCount = visibleFacts - verifiedFacts;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[592px] xl:mx-0">
      <div className="overflow-hidden rounded-[20px] border border-[#e2e4e9] bg-white shadow-[0px_6px_28px_rgba(23,35,76,0.08)]">
        <MockupTitleBar />

        <div className="flex items-start justify-between gap-4 border-b border-[#e2e4e9] bg-[#faf9f7] px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-[18px] font-semibold leading-none text-[#17234c]">
              Northwind Freight
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] leading-none text-[rgba(84,96,135,0.8)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#359b75]" />
              Linked to customer · 3 documents
            </p>
          </div>
          <span className="shrink-0 rounded-[8px] bg-[#0f1d43] px-3 py-1.5 text-[10.5px] font-semibold text-white">
            Ask Ivy
          </span>
        </div>

        <div className="px-5 pb-5 pt-4 sm:px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[1.4px] text-[#60636c]">
            Documents
          </p>
          <ul className="mt-2 divide-y divide-[#eef0f3] rounded-[10px] border border-[#e5e7eb]">
            {DOCUMENTS.map((document, index) => {
              const processing =
                index === DOCUMENTS.length - 1 && !processingDone;
              const showRedactions =
                index === DOCUMENTS.length - 1 && processingDone;

              return (
                <li
                  key={document.title}
                  className="flex items-center gap-2.5 px-3 py-2"
                >
                  <FileIcon className="h-4 w-4 shrink-0 text-[#636a7e]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium text-[#17234c]">
                      {document.title}
                    </p>
                    <p className="text-[9.5px] text-[#9ca3af]">
                      {document.type} · {document.size}
                    </p>
                  </div>
                  {showRedactions ? (
                    <span className="ivy-message-in hidden rounded-[4px] bg-[#f1f2f5] px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.6px] text-[#60636c] sm:inline">
                      2 secrets redacted
                    </span>
                  ) : null}
                  <DocumentStatus processing={processing} />
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[1.4px] text-[#60636c]">
              Facts
            </p>
            <p className="text-[10px] text-[#9ca3af]">
              {pendingCount} pending review ·{' '}
              {PRE_VERIFIED_COUNT + verifiedFacts} verified
            </p>
          </div>

          <ul className="mt-2 flex min-h-[171px] flex-col gap-2">
            {FACTS.slice(0, visibleFacts).map((fact, index) => (
              <li
                key={fact.statement}
                className="ivy-message-in rounded-[10px] border border-[#e5e7eb] bg-white px-3 py-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[1.2px] text-[#0caee9]">
                      {fact.category}
                    </p>
                    <p className="mt-1 text-[11px] leading-[1.45] text-[#17234c]">
                      {fact.statement}
                    </p>
                  </div>
                  <FactStatus verified={index < verifiedFacts} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
