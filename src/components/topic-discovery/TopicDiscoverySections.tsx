'use client';

import { useRevealOnScroll } from '@/hooks/use-reveal-on-scroll';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import {
  CheckBadgeIcon,
  ClusterNodesIcon,
  CtaArrowIcon,
  InboxStackIcon,
  ModalCloseIcon,
  QuestionBubbleIcon,
  RankingTrendIcon
} from './icons';

const BLIND_SPOT_CARDS = [
  {
    step: '01',
    title: (
      <>
        Tags only catch what you
        <br />
        already know.
      </>
    ),
    body: "If a new issue doesn't have a tag, it's invisible until someone notices the pattern manually."
  },
  {
    step: '02',
    title: 'Agents tag inconsistently.',
    body: (
      <>
        Two agents, two different tags for the same problem.
        <br />
        Your dashboards lie.
      </>
    )
  },
  {
    step: '03',
    title: (
      <>
        By the time you spot the trend,
        <br />
        it&apos;s a backlog.
      </>
    ),
    body: (
      <>
        Weekly reports surface issues a week late.
        <br />
        RipeText surfaces them the same day.
      </>
    )
  }
] as const;

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Ingest every conversation.',
    body: (
      <>
        RipeText connects to Zendesk, Intercom, or Front and reads every
        <br />
        closed and open ticket.
      </>
    ),
    icon: <InboxStackIcon />
  },
  {
    step: '02',
    title: 'Cluster by meaning, not keywords.',
    body: (
      <>
        Conversations are grouped by what the customer actually means -
        <br />
        &quot;card declined,&quot; &quot;payment failed,&quot; and
        &quot;couldn&apos;t check out&quot; land in the
        <br />
        same topic.
      </>
    ),
    icon: <ClusterNodesIcon />
  },
  {
    step: '03',
    title: 'Watch the rankings move.',
    body: (
      <>
        Topics rise and fall in real time. Click any topic to see the underlying
        <br />
        tickets, sentiment, and which segments are affected.
      </>
    ),
    icon: <RankingTrendIcon />
  },
  {
    step: '04',
    title: 'See what customers ask most.',
    body: (
      <>
        A live feed of the most common customer questions - instantly
        <br />
        revealing what users are confused about, curious about, or trying
        <br />
        to solve most often.
      </>
    ),
    icon: <QuestionBubbleIcon />
  }
] as const;

const OUTCOME_CARDS = [
  {
    metric: '-6 days',
    title: 'Detect emerging issues earlier',
    body: (
      <>
        Surface spikes the day they start, not after the next
        <br />
        weekly review.
      </>
    )
  },
  {
    metric: '-74%',
    title: 'Reduce manual ticket auditing',
    body: (
      <>
        Stop reading sample tickets. Read the topics that
        <br />
        actually moved.
      </>
    )
  },
  {
    metric: '100%',
    title: 'Understand pain at scale',
    body: (
      <>
        Every conversation is read, grouped, and ranked -
        <br />
        not just the loudest 5%.
      </>
    )
  },
  {
    metric: 'Live',
    title: 'Prioritize by real volume',
    body: (
      <>
        Rankings reflect what customers actually contact
        <br />
        you about right now.
      </>
    )
  },
  {
    metric: '+31%',
    title: 'Improve CX responsiveness',
    body: (
      <>
        Teams ship fixes faster when they know which topic
        <br />
        is on fire.
      </>
    )
  },
  {
    metric: 'Same-day',
    title: 'Spot regressions before escalation',
    body: (
      <>
        A new cluster forming around a deploy is the
        <br />
        earliest signal you&apos;ll get.
      </>
    )
  }
] as const;

const OUTCOMES_FOOTNOTES = [
  'Native Zendesk, Intercom & Front integrations',
  'SOC 2 Type II, EU data residency available',
  'Slack & email alerts when a topic spikes',
  'Read-only access to your support data'
] as const;

export function TopicDiscoveryBlindSpot() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: BLIND_SPOT_CARDS.length,
    staggerDelay: 160,
    threshold: 0.2
  });

  return (
    <section
      id="blind-spot"
      className="border-t border-[#e3e4e9] bg-white scroll-mt-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-20 lg:px-8 lg:py-32">
        <div className="max-w-[768px]">
          <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            The blind spot
          </p>
          <h2 className="mt-[19px] font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
            Tag-based reporting is a{' '}
            <span className="font-display italic text-[#0caee9]">lagging</span>{' '}
            indicator.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-14 overflow-hidden rounded-[20px] border border-[#e3e4e9] bg-[#f8f8fb] p-px"
        >
          <div className="grid gap-px lg:grid-cols-3">
            {BLIND_SPOT_CARDS.map((card, index) => (
              <article
                key={card.step}
                className={`bg-white px-8 py-10 lg:min-h-[239px] lg:px-10 ${
                  index === 1 ? 'lg:border-x lg:border-[#e8e8e8]' : ''
                }`}
                style={getItemStyle(index)}
              >
                <p className="text-[12px] leading-4 text-[#60636c]">
                  {card.step}
                </p>
                <h3 className="pt-4 font-display text-[24px] leading-[33px] text-[#101116]">
                  {card.title}
                </h3>
                <div className="pt-[15px] text-[14px] leading-[22.75px] text-[#60636c]">
                  {card.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopicDiscoveryHowItWorks() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: HOW_IT_WORKS_STEPS.length,
    staggerDelay: 140,
    threshold: 0.15
  });

  return (
    <section
      id="how-it-works"
      className="border-t border-[#e3e4e9] bg-white scroll-mt-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[438px_minmax(0,586px)] lg:justify-between lg:gap-[232px]">
          <div className="max-w-[530px]">
            <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
              How it works
            </p>
            <h2 className="mt-[19px] font-display text-[34px] leading-[0.98] tracking-[-0.03em] text-[#101116] sm:text-[44px] sm:leading-[1.05] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
              <span className="sm:whitespace-nowrap">
                From raw tickets to{' '}
                <span className="font-display italic text-[#0caee9]">
                  ranked topics
                </span>
                ,
              </span>
              <br />
              automatically.
            </h2>
          </div>

          <div ref={containerRef} className="relative">
            <div className="space-y-10 lg:space-y-10">
              {HOW_IT_WORKS_STEPS.map((item, index) => (
                <article
                  key={item.step}
                  className="relative flex gap-5"
                  style={getItemStyle(index)}
                >
                  {index < HOW_IT_WORKS_STEPS.length - 1 ? (
                    <div className="absolute left-[19px] top-10 -bottom-10 hidden w-px bg-[#e3e4e9] lg:block" />
                  ) : null}
                  <div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e3e4e9] bg-white p-px shadow-[0px_1px_1px_rgba(18,22,31,0.04),0px_8px_12px_rgba(18,22,31,0.06)]">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1 pt-[3px]">
                    <p className="text-[11px] uppercase tracking-[0.55px] text-[#60636c]">
                      Step {item.step}
                    </p>
                    <h3 className="mt-1 font-display text-[28px] leading-[1.05] text-[#101116] lg:text-[32px] lg:leading-8">
                      {item.title}
                    </h3>
                    <div className="pt-[7px] text-[14px] leading-[22.75px] text-[#60636c]">
                      {item.body}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopicDiscoveryTailoring() {
  const { ref: mockupRef, revealStyle } = useRevealOnScroll(0.2);

  return (
    <section
      id="topic-tailoring"
      className="border-t border-[#e3e4e9] bg-[#F8F8FA] scroll-mt-16"
    >
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[556px_minmax(0,655px)] lg:justify-between lg:gap-[119px] lg:px-8 lg:py-32">
        <div className="max-w-[556px]">
          <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            Topic tailoring
          </p>
          <h2 className="mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
            Create custom topics around
            <br />
            what{' '}
            <span className="font-display italic text-[#0caee9]">
              matters most
            </span>
            .
          </h2>
          <p className="mt-8 max-w-[556px] text-[18px] leading-[29.25px] text-[#60636c]">
            Then you can setup automations to send notifications (or run
            external processes) anywhere outside of RipeText.
          </p>
        </div>

        <div
          ref={mockupRef}
          className="w-full max-w-[655px] rounded-[20px] bg-[#fbfaf8] px-5 py-[26px] shadow-[0px_4px_40px_rgba(0,0,0,0.15)] lg:px-5"
          style={revealStyle}
        >
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-[28px] leading-none text-[#0f1729] lg:text-[32px]">
                Create New Topic
              </h3>
              <ModalCloseIcon className="mt-1 h-[14.728px] w-[14.728px] opacity-60" />
            </div>

            <div className="space-y-[17px]">
              <div className="space-y-[9px]">
                <p className="text-[14px] font-semibold leading-none text-[#0b0b0b]">
                  Topic Name
                </p>
                <div className="flex h-11 items-center rounded-[10px] border border-[#dedede] bg-white px-[14px] text-[14px] text-[#6e6e6e]">
                  e.g., Battery Issues
                </div>
              </div>

              <div className="space-y-[5px]">
                <p className="text-[14px] font-semibold leading-none text-[#0b0b0b]">
                  Description
                </p>
                <div className="h-[91px] rounded-[10px] border border-[#dedede] bg-white px-[14px] pt-[14px] text-[14px] text-[#6e6e6e]">
                  Describe what this topic covers...
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="w-[118px] rounded-[7px] border border-[#dedede] bg-white p-[10px] text-[13px] font-bold text-[#585858] shadow-[0px_4px_2px_rgba(0,0,0,0.15)]"
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-[7px] bg-[#101116] px-[18px] py-[11px] text-[13px] font-bold leading-[12.75px] text-white shadow-[0px_4px_2px_rgba(0,0,0,0.15)]"
              >
                Create Topic
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopicDiscoveryOutcomes() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: OUTCOME_CARDS.length,
    staggerDelay: 100,
    threshold: 0.15
  });

  return (
    <section
      id="outcomes"
      className="border-t border-[#e3e4e9] bg-white scroll-mt-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-24 lg:px-8 lg:pt-32 lg:pb-28">
        <div className="max-w-[768px]">
          <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            Outcomes
          </p>
          <h2 className="mt-[19px] font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
            Built for support teams that need{' '}
            <span className="font-display italic text-[#0caee9]">signal</span>,
            <br />
            not noise.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-10 overflow-hidden rounded-[20px] border border-[#e3e4e9] bg-[#e3e4e9] p-px"
        >
          <div className="overflow-hidden rounded-[19px]">
            <div className="grid gap-px bg-[#e3e4e9] lg:grid-cols-3">
              {OUTCOME_CARDS.map((item, index) => (
                <article
                  key={item.title}
                  className="min-h-[200px] bg-white px-8 pt-8 pb-[34px] lg:px-8"
                  style={getItemStyle(index)}
                >
                  <p className="font-display text-[32px] leading-[1.1] tracking-[-0.025em] text-[#101116] lg:text-[36px] lg:leading-10">
                    {item.metric}
                  </p>
                  <h3 className="pt-5 text-[14px] font-bold leading-5 text-[#101116]">
                    {item.title}
                  </h3>
                  <div className="pt-[7px] text-[14px] leading-[22.75px] text-[#60636c]">
                    {item.body}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-6 lg:grid-cols-2">
          {OUTCOMES_FOOTNOTES.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e3e4e9] bg-[#f4f5f9]">
                <CheckBadgeIcon />
              </span>
              <p className="text-[14px] leading-5 text-[#60636c]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TopicDiscoveryCta() {
  const { ref: sectionRef, revealStyle } = useRevealOnScroll(0.2);

  return (
    <section
      id="live-demo"
      className="border-t border-[#e3e4e9] bg-white scroll-mt-16"
    >
      <div className="mx-auto max-w-[1960px] px-5 py-24 lg:px-8">
        <div
          ref={sectionRef}
          className="mx-auto w-full max-w-[1271px] overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#0f1d43_0%,#1f2f5c_100%)] shadow-[0px_8px_16px_-8px_rgba(21,26,40,0.06),0px_24px_48px_-12px_rgba(21,26,40,0.12)]"
          style={revealStyle}
        >
          <div className="relative overflow-hidden rounded-[24px] px-8 py-12 lg:px-20 lg:py-20">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[rgba(12,174,233,0.2)] blur-[32px]" />
            <div className="relative max-w-[768px]">
              <p className="text-xs uppercase tracking-[2.4px] text-[#0caee9]">
                Live Demo
              </p>
              <h2 className="mt-[7px] font-display text-[42px] leading-none tracking-[-0.04em] text-[#fcfcfd] sm:text-[52px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
                Stop guessing what&apos;s blowing up.
                <br />
                <span className="font-display italic text-[#0caee9]">
                  See it
                </span>
                .
              </h2>
              <p className="mt-[30px] max-w-[718px] text-[18px] leading-7 text-[rgba(252,252,253,0.75)]">
                Book a 20-minute demo and we&apos;ll show you the live topic
                feed from a
                <br />
                real support inbox.
              </p>
              <div className="mt-[33px] flex flex-col gap-[13px] sm:flex-row sm:items-center">
                <a
                  href="https://calendly.com/tsenkov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-[10px] rounded-[10px] bg-[#fcfcfd] px-8 py-3 text-[14px] font-medium leading-5 text-[#151a28] transition-colors hover:bg-[#fcfcfd]/90"
                >
                  Book a Demo
                  <CtaArrowIcon />
                </a>
                <a
                  href="mailto:sales@ripetext.com"
                  className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(252,252,253,0.25)] bg-[#1f2f5c] px-8 py-3 text-[14px] font-medium leading-5 text-[#fcfcfd] transition-colors hover:bg-[#2a3d6e]"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
