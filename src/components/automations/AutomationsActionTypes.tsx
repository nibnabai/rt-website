'use client';

import Image from 'next/image';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { cdnUrl } from '@/util/cdn';

const ACTION_TYPE_CARDS = [
  {
    pill: 'Slack',
    title: ['Drop into any channel, the', 'moment it matters'],
    body: 'One-line setup. Perfect for QA alerts, escalation flags, and topic spikes.',
    kind: 'slack'
  },
  {
    pill: 'Email',
    title: ['Templated emails with full event', 'payload variables'],
    body: 'Use event variables to personalize subjects, messages, and recipients, ensuring notifications include context and reach the right audience.',
    kind: 'email'
  },
  {
    pill: 'Custom Webhook',
    title: ['Fire any HTTP request — full', 'control'],
    body: 'Configure the request method, headers, and payload to fit your workflow. Template variables can be applied anywhere to inject event-specific data automatically.',
    kind: 'webhook'
  }
] as const;

function ActionTypePill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-[6px] rounded-full border border-[#e7e4e0] bg-white px-[11px] py-[5px]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#0caee9]" />
      <span className="text-[10px] uppercase tracking-[0.5px] text-[#15110d]">
        {label}
      </span>
    </div>
  );
}

function SlackPreviewCard({
  ticket,
  score,
  metric,
  assignee
}: {
  ticket: string;
  score: string;
  metric: string;
  assignee: string;
}) {
  return (
    <div className="rounded-[16px] border border-[#e7e4e0] bg-[#fbfaf7] p-[17px]">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#f7f0eb]">
          <Image
            src={cdnUrl('/images/features/automation/alarm.webp')}
            alt=""
            width={18}
            height={18}
            unoptimized
            className="h-[28px] w-[18px] object-contain"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[14px] font-bold leading-5 text-[#15110d]">
              RipeText
            </span>
            <span className="rounded-[4px] bg-[#f3f2ed] px-1 py-[2px] text-[9px] uppercase text-[#69625d]">
              App
            </span>
            <span className="text-[11px] leading-[16.5px] text-[#69625d]">
              9:42 AM
            </span>
          </div>
          <p className="mt-1 text-[14px] leading-5 text-[#15110d]">
            Ticket{' '}
            <span className="rounded-[4px] bg-[#f3f2ed] px-1">#{ticket}</span>{' '}
            failed QA — {metric}
          </p>
          <p className="text-[14px] leading-5">
            <span className="font-bold text-[#e62b34]">{score}</span>
            <span className="text-[#15110d]">. Assigned to </span>
            <span className="text-[#0caee9]">@{assignee}</span>
            <span className="text-[#15110d]">.</span>
          </p>
          <p className="mt-1 text-[12px] leading-4 text-[#0caee9]">Review →</p>
        </div>
      </div>
    </div>
  );
}

function EmailPreview() {
  return (
    <div className="rounded-[16px] border border-[#e7e4e0] bg-[#fbfaf7] p-px">
      <div className="border-b border-[#e7e4e0] px-4 pb-[11px] pt-[10px]">
        <p className="text-[11px] uppercase tracking-[0.55px] text-[#69625d]">
          New message
        </p>
      </div>
      <div className="space-y-2 px-4 py-3">
        <div className="flex gap-2">
          <div className="w-14 text-[12px] leading-4 text-[#69625d]">
            Subject
          </div>
          <div className="text-[14px] leading-5 text-[#15110d]">
            Topic spike: &quot;refund delayed&quot; up 340% today
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-14 text-[12px] leading-4 text-[#69625d]">To</div>
          <div className="text-[12px] leading-[17.14px] text-[#69625d]">
            {'{{recipient.email}}'}
          </div>
        </div>
        <div className="rounded-[10px] bg-[rgba(243,242,237,0.6)] px-3 py-3">
          <p className="text-[13px] leading-[21.13px] text-[#15110d]">
            Hi{' '}
            <span className="rounded-[4px] bg-[rgba(246,98,61,0.15)] px-1 text-[11px] text-[#0caee9]">
              {'{{recipient.first_name}}'}
            </span>
            ,
          </p>
          <p className="text-[13px] leading-[21.13px] text-[#15110d]">
            The topic &quot;refund delayed&quot; just crossed your alert
            threshold...
          </p>
        </div>
      </div>
    </div>
  );
}

function WebhookPreview() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[#e7e4e0] bg-[#110c08]">
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] px-4 pb-[9px] pt-[8px]">
        <span className="text-[9.5px] uppercase tracking-[0.5px] text-[rgba(255,255,255,0.5)]">
          Request
        </span>
        <span className="text-[10px] uppercase tracking-[0.5px] text-[rgba(255,255,255,0.5)]">
          application/json
        </span>
      </div>
      <div className="space-y-5 px-4 py-3 font-mono text-[12px] leading-[19.5px]">
        <div className="text-[#e6e5dd]">
          <p>
            POST{' '}
            <span className="text-[#eebc4a]">
              https://api.yourapp.com/incidents
            </span>
          </p>
          <p>
            <span className="text-[rgba(255,255,255,0.6)]">Authorization:</span>{' '}
            Bearer{' '}
            <span className="text-[#67d283]">{'{{secrets.api_key}}'}</span>
          </p>
        </div>
        <div className="text-[rgba(255,255,255,0.5)]">
          <p>{'{'}</p>
          <p>
            <span className="text-[#e6e5dd]"> </span>
            <span className="text-[#4ac9ec]">&quot;ticket_id&quot;</span>
            <span className="text-[#e6e5dd]">: </span>
            <span className="text-[#67d283]">
              &quot;{'{{event.ticket.id}}'}&quot;
            </span>
            <span className="text-[#e6e5dd]">,</span>
          </p>
          <p>
            <span className="text-[#e6e5dd]"> </span>
            <span className="text-[#4ac9ec]">&quot;agent&quot;</span>
            <span className="text-[#e6e5dd]">: </span>
            <span className="text-[#67d283]">
              &quot;{'{{event.agent.email}}'}&quot;
            </span>
            <span className="text-[#e6e5dd]">,</span>
          </p>
          <p>
            <span className="text-[#e6e5dd]"> </span>
            <span className="text-[#4ac9ec]">&quot;score&quot;</span>
            <span className="text-[#e6e5dd]">: </span>
            <span className="text-[#eebc4a]">{'{{event.qa.score}}'}</span>
          </p>
          <p>{'}'}</p>
        </div>
      </div>
    </div>
  );
}

function ActionTypeCard({
  pill,
  title,
  body,
  kind
}: {
  pill: string;
  title: readonly string[];
  body: string;
  kind: 'slack' | 'email' | 'webhook';
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-[20px] border border-[#e7e4e0] bg-linear-to-b from-white to-[#fbfaf8] p-[25px] shadow-[0px_4px_2.5px_rgba(0,0,0,0.05)]">
      <div>
        <ActionTypePill label={pill} />
        <h3 className="mt-2 font-['Instrument_Serif'] text-[30px] leading-[30px] tracking-[-0.24px] text-[#15110d]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-5 text-[14px] leading-5 text-[#69625d]">{body}</p>
      </div>

      <div className="mt-8">
        {kind === 'slack' ? (
          <div className="space-y-[5px]">
            <SlackPreviewCard
              ticket="35841"
              score="3/10"
              metric="resolution score"
              assignee="john"
            />
            <SlackPreviewCard
              ticket="48213"
              score="2/10"
              metric="empathy score"
              assignee="maria"
            />
          </div>
        ) : null}

        {kind === 'email' ? <EmailPreview /> : null}
        {kind === 'webhook' ? <WebhookPreview /> : null}
      </div>
    </div>
  );
}

export function AutomationsActionTypes() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: ACTION_TYPE_CARDS.length + 1,
    staggerDelay: 120,
    threshold: 0.2
  });

  return (
    <section id="action-types" className="scroll-mt-16 bg-[#fcfcfd]">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-32"
      >
        <div className="max-w-[768px]" style={getItemStyle(0)}>
          <p className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
            Action types
          </p>
          <h2 className="mt-5 font-['Instrument_Serif'] text-[42px] leading-[1.02] tracking-[-0.04em] text-[#15110d] sm:text-[52px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.5px]">
            Three ways to{' '}
            <span className="italic text-[#0caee9]">act on an event.</span>
          </h2>
          <p className="mt-5 max-w-[672px] text-[18px] leading-[29.25px] text-[#69625d]">
            Every automation pairs a RipeText event with one of three
            primitives. Mix and match across your workspace.
          </p>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {ACTION_TYPE_CARDS.map((card, index) => (
            <div key={card.pill} style={getItemStyle(index + 1)}>
              <ActionTypeCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
