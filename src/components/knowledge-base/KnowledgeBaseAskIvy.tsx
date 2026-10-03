'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IvyChatProgressIndicator } from '@/components/ivy-assistant/IvyChatProgressIndicator';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { cdnUrl } from '@/util/cdn';
import { FileIcon, SendIcon } from './icons';

const USER_QUESTION =
  "An agent at Northwind can't reach the scanner admin panel from home. What should they check?";

const CITATIONS = [
  'VPN runbook',
  'VPN runbook',
  'Kickoff call transcript'
] as const;

const RUNBOOK_PASSAGES = [
  {
    citation: null,
    text: 'Remote access for Northwind staff is provided through a GlobalProtect VPN. Office networks are segmented by function.'
  },
  {
    citation: 0,
    text: 'Warehouse scanners live on VLAN 40 (10.40.0.0/16), fully isolated from the internet. The admin panel is only reachable from inside the corporate network.'
  },
  {
    citation: 1,
    text: 'Remote users must connect to the vpn.northwind.io gateway before opening any internal tool. Split tunneling is disabled.'
  },
  {
    citation: null,
    text: 'Certificates rotate every 90 days. Expired certificates show a generic connection error in the client.'
  }
] as const;

const ASK_IVY_POINTS = [
  {
    title: 'Cites every technical claim',
    body: 'Each answer links to the document or verified fact behind it. Click a citation and the passage opens highlighted.'
  },
  {
    title: "Says what it doesn't know",
    body: "When the knowledge base doesn't cover something, Ivy tells you so instead of guessing."
  },
  {
    title: 'Never mixes up customers',
    body: 'Answers come only from the knowledge base you are asking about, scoped to your organization.'
  },
  {
    title: 'Starts with a brief',
    body: 'Open Ivy from a knowledge base and she starts with what it holds: documents, verified facts and what still needs review.'
  }
] as const;

type Phase = 'idle' | 'typing' | 'sent' | 'searching' | 'answered';

const TYPING_MS_PER_CHAR = 22;
const CITATION_CYCLE_MS = 2400;

function useAskIvySequence(active: boolean) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [typedChars, setTypedChars] = useState(0);
  const [activeCitation, setActiveCitation] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedChars(USER_QUESTION.length);
      setPhase('answered');
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let charCount = 0;
    setPhase('typing');

    const typing = setInterval(() => {
      charCount += 1;
      setTypedChars(charCount);

      if (charCount < USER_QUESTION.length) return;

      clearInterval(typing);
      timers.push(setTimeout(() => setPhase('sent'), 350));
      timers.push(setTimeout(() => setPhase('searching'), 750));
      timers.push(setTimeout(() => setPhase('answered'), 2600));
    }, TYPING_MS_PER_CHAR);

    return () => {
      clearInterval(typing);
      timers.forEach(clearTimeout);
    };
  }, [active]);

  useEffect(() => {
    if (phase !== 'answered') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cycle = setInterval(
      () => setActiveCitation((index) => (index + 1) % CITATIONS.length),
      CITATION_CYCLE_MS
    );
    return () => clearInterval(cycle);
  }, [phase]);

  return { phase, typedChars, activeCitation };
}

function IvyAvatar() {
  return (
    <div className="h-[33px] w-[33px] shrink-0 overflow-hidden rounded-full shadow-[0px_0px_0px_2px_#e8eaff]">
      <Image
        src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
        alt="Ivy avatar"
        width={66}
        height={66}
        unoptimized
        className="h-full w-full scale-[1.04] object-cover"
        style={{ objectPosition: '-3% -1%' }}
      />
    </div>
  );
}

function CitationMark({
  index,
  activeCitation
}: {
  index: number;
  activeCitation: number;
}) {
  return (
    <sup
      className={`mx-0.5 inline-flex h-[15px] min-w-[15px] items-center justify-center rounded-[4px] px-1 text-[9px] font-semibold not-italic transition-colors duration-300 ${
        index === activeCitation
          ? 'bg-[#0caee9] text-white'
          : 'bg-[#e6f6fc] text-[#0b8fc0]'
      }`}
    >
      {index + 1}
    </sup>
  );
}

function KnowledgeBrief() {
  return (
    <div className="flex items-start gap-[7px]">
      <IvyAvatar />
      <div className="min-w-0 flex-1 rounded-[9px] border border-[#e5e7eb] bg-white px-3 py-2.5 sm:max-w-[420px]">
        <p className="text-[12px] leading-[1.45] text-[#17234c]">
          I&apos;m ready to answer questions about{' '}
          <span className="font-semibold">Northwind Freight</span>.
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[
            { value: '3', label: 'Documents' },
            { value: '12', label: 'Verified facts' },
            { value: '1', label: 'Pending review' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[6px] bg-[#f8f9fb] px-2 py-1.5"
            >
              <p className="text-[15px] font-semibold leading-none text-[#17234c]">
                {stat.value}
              </p>
              <p className="mt-1 text-[9.5px] leading-none text-[#6b7280]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IvyAnswer({ activeCitation }: { activeCitation: number }) {
  return (
    <div className="ivy-message-in flex items-start gap-[7px]">
      <IvyAvatar />
      <div className="min-w-0 flex-1 rounded-[9px] border border-[#e5e7eb] bg-white px-3.5 py-3 sm:max-w-[560px]">
        <p className="text-[12px] leading-[1.65] text-[#17234c]">
          The scanner admin panel sits on an isolated VLAN with no internet
          access, so it&apos;s only reachable from inside Northwind&apos;s
          network
          <CitationMark index={0} activeCitation={activeCitation} />. Have the
          agent connect to the{' '}
          <span className="font-mono text-[11px]">vpn.northwind.io</span>{' '}
          gateway first
          <CitationMark index={1} activeCitation={activeCitation} />. If it
          still fails, ping Dana Ortiz in Slack rather than email
          <CitationMark index={2} activeCitation={activeCitation} />.
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5 border-t border-[#f0f1f4] pt-2">
          {CITATIONS.map((citation, index) => (
            <span
              key={index}
              className={`inline-flex items-center gap-1 rounded-[6px] border px-1.5 py-1 text-[10px] transition-colors duration-300 ${
                index === activeCitation
                  ? 'border-[#0caee9] bg-[#f0fafe] text-[#17234c]'
                  : 'border-[#e5e7eb] bg-white text-[#636a7e]'
              }`}
            >
              <span className="font-semibold text-[#0b8fc0]">{index + 1}</span>
              <FileIcon className="h-2.5 w-2.5" />
              {citation}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentPane({
  activeCitation,
  answered
}: {
  activeCitation: number;
  answered: boolean;
}) {
  const transcriptActive = answered && activeCitation === 2;

  return (
    <aside className="flex flex-col border-t border-[#dcdee2] bg-[#faf9f7] lg:w-[400px] lg:shrink-0 lg:border-l lg:border-t-0">
      <div className="flex items-center gap-2 border-b border-[#e2e4e9] px-4 py-3">
        <FileIcon className="h-3.5 w-3.5 text-[#636a7e]" />
        <p className="truncate text-[12px] font-semibold text-[#17234c]">
          {transcriptActive ? 'Kickoff call transcript' : 'VPN runbook'}
        </p>
        <span className="ml-auto text-[9.5px] uppercase text-[#9ca3af]">
          {transcriptActive ? 'VTT' : 'DOCX'}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 py-5">
        {transcriptActive ? (
          <>
            <p className="font-mono text-[10px] text-[#9ca3af]">00:14:05</p>
            <p className="text-[12px] leading-[1.65] text-[#4f565e]">
              <span className="font-semibold text-[#17234c]">Sam:</span> Who
              should we contact first when something is down on your side?
            </p>
            <p className="font-mono text-[10px] text-[#9ca3af]">00:14:32</p>
            <p className="rounded-[4px] bg-[rgba(12,174,233,0.14)] px-1.5 text-[12px] leading-[1.65] text-[#17234c] shadow-[inset_2px_0_0_#0caee9]">
              <span className="font-semibold">Dana:</span> Slack for anything
              urgent, I don&apos;t read email during incidents.
            </p>
          </>
        ) : (
          RUNBOOK_PASSAGES.map((passage) => {
            const highlighted = answered && passage.citation === activeCitation;

            return (
              <p
                key={passage.text}
                className={`rounded-[4px] px-1.5 text-[12px] leading-[1.65] transition-colors duration-300 ${
                  highlighted
                    ? 'bg-[rgba(12,174,233,0.14)] text-[#17234c] shadow-[inset_2px_0_0_#0caee9]'
                    : 'text-[#4f565e]'
                }`}
              >
                {passage.text}
              </p>
            );
          })
        )}
      </div>
    </aside>
  );
}

function AskIvyMockup() {
  const { ref, inView } = useInViewOnce(0.3);
  const { phase, typedChars, activeCitation } = useAskIvySequence(inView);

  const isTyping = phase === 'typing';
  const userMessageSent =
    phase === 'sent' || phase === 'searching' || phase === 'answered';
  const answered = phase === 'answered';

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[20px] border border-[#e2e4e9] bg-white shadow-[0px_6px_28px_rgba(23,35,76,0.08)]"
    >
      <div className="flex h-9 items-center justify-between border-b border-[#dcdee2] bg-[rgba(247,246,242,0.6)] px-4">
        <div className="flex shrink-0 gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbdb7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f6d389]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#a1e4ae]" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-[#60636c]">
          ripetext · ask ivy
        </p>
        <span className="w-[42px]" />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="border-b border-[#e2e4e9] bg-[#faf9f7] px-5 py-3">
            <p className="text-[14px] font-semibold leading-none text-[#17234c]">
              Northwind Freight
            </p>
            <p className="mt-1 text-[10.5px] leading-none text-[rgba(84,96,135,0.7)]">
              Knowledge base conversation
            </p>
          </div>

          <div className="flex min-h-[360px] flex-col gap-3.5 px-4 py-5 sm:px-6">
            <KnowledgeBrief />

            {userMessageSent ? (
              <div className="ivy-message-in flex items-start justify-end gap-1.5">
                <div className="max-w-[calc(100%-2rem)] rounded-[9px] bg-[#303851] px-3 py-2 text-[12px] leading-[1.45] text-white sm:max-w-[420px]">
                  {USER_QUESTION}
                </div>
                <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-[#303851] text-[9px] font-semibold text-white">
                  You
                </div>
              </div>
            ) : null}

            {phase === 'searching' ? (
              <IvyChatProgressIndicator
                compact
                status="searching"
                label="Searching the Northwind Freight knowledge base..."
              />
            ) : null}

            {answered ? <IvyAnswer activeCitation={activeCitation} /> : null}
          </div>

          <div className="mt-auto border-t border-[#e2e4e9] bg-[#faf9f7] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-1.5">
              <div
                className={`min-w-0 flex-1 truncate rounded-[6px] border border-[#e2e4e9] bg-white px-2.5 py-2 text-[11px] leading-none ${
                  isTyping ? 'text-[#17234c]' : 'text-[rgba(84,96,135,0.5)]'
                }`}
              >
                {isTyping
                  ? USER_QUESTION.slice(0, typedChars)
                  : 'Ask about Northwind Freight...'}
                {isTyping ? (
                  <span className="ivy-input-caret ml-px inline-block h-[11px] w-px bg-[#17234c]" />
                ) : null}
              </div>
              <div
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] bg-[#0f1d43] text-white ${
                  isTyping ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <SendIcon className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>

        <DocumentPane activeCitation={activeCitation} answered={answered} />
      </div>
    </div>
  );
}

export function KnowledgeBaseAskIvy() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 3,
    staggerDelay: 140,
    threshold: 0.1
  });

  return (
    <section
      id="ask-ivy"
      className="border-t border-[#e3e4e9] bg-white scroll-mt-16"
    >
      <div
        ref={containerRef}
        className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-32"
      >
        <div
          className="grid gap-6 lg:grid-cols-[minmax(0,640px)_minmax(0,460px)] lg:items-end lg:justify-between"
          style={getItemStyle(0)}
        >
          <div>
            <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
              Ask Ivy
            </p>
            <h2 className="mt-[19px] font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
              Answers with{' '}
              <span className="font-display italic text-[#0caee9]">
                receipts
              </span>
              .
            </h2>
          </div>
          <p className="text-[17px] leading-[28px] text-[#60636c]">
            Ask Ivy about any customer by name, or open her straight from a
            knowledge base. She answers from verified facts and the documents
            themselves, and shows you exactly where each answer came from.
          </p>
        </div>

        <div className="mt-12" style={getItemStyle(1)}>
          <AskIvyMockup />
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-[#e3e4e9] bg-[#e3e4e9] sm:grid-cols-2 lg:grid-cols-4"
          style={getItemStyle(2)}
        >
          {ASK_IVY_POINTS.map((point) => (
            <div
              key={point.title}
              className="flex flex-col gap-2 bg-white px-6 py-7"
            >
              <h3 className="font-display text-[22px] leading-[1.1] text-[#101116]">
                {point.title}
              </h3>
              <p className="text-[13.5px] leading-[21.94px] text-[#60636c]">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
