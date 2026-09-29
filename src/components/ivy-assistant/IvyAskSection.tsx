'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import { IvyCsatSparkline } from '@/components/ivy-assistant/IvyCsatSparkline';

function CapabilityCardShell({
  number,
  question,
  description,
  children,
  mockupPadding = 'standard'
}: {
  number: string;
  question: React.ReactNode;
  description: string;
  children: React.ReactNode;
  mockupPadding?: 'standard' | 'compact';
}) {
  const mockupPaddingClass =
    mockupPadding === 'compact' ? 'p-[17px]' : 'px-[17px] pb-[17px] pt-[34px]';

  return (
    <article className="flex w-full flex-col gap-[11px] overflow-visible rounded-[20px] border border-white/10 bg-[#23335c] px-5 pb-6 pt-6 lg:aspect-625/442 lg:overflow-hidden lg:px-[33px] lg:pb-[33px] lg:pt-[33px]">
      <div className="flex shrink-0 items-start justify-between font-mono text-[10.5px] uppercase tracking-[2.31px] text-white/40">
        <span>{number}</span>
        <span>Ask Ivy</span>
      </div>

      <h3 className="shrink-0 pt-1 font-display text-[22px] leading-[26px] tracking-[-0.55px] text-white lg:text-[28px] lg:leading-[32.2px] lg:tracking-[-0.7px]">
        {question}
      </h3>

      <p className="max-w-[448px] shrink-0 text-[13.5px] leading-[21.94px] text-white/60">
        {description}
      </p>

      <div
        className={`w-full shrink-0 rounded-2xl border border-white/10 bg-white ${mockupPaddingClass}`}
      >
        {children}
      </div>
    </article>
  );
}

function CsatDropCard() {
  const { ref, inView } = useInViewOnce(0.35);

  return (
    <CapabilityCardShell
      number="01"
      question="“Why did CSAT drop in the last 7 days?”"
      description="Ivy returns the top contributing topics, the agents involved, and links to the five tickets that best illustrate the drop."
    >
      <div ref={ref} className="flex flex-col gap-2">
        <div
          className={`relative flex items-start justify-between ${
            inView ? 'ivy-stagger-up' : ''
          }`}
          style={
            inView
              ? ({ ['--ivy-delay' as string]: '0ms' } as React.CSSProperties)
              : undefined
          }
        >
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[1.71px] text-[#5f636a]">
              CSAT · 7d
            </p>
            <p className="font-display text-[26px] leading-[26px] tracking-[-0.65px] text-[#0a0d12]">
              4.21
            </p>
          </div>
          <span className="rounded-[10px] bg-[rgba(223,95,105,0.12)] px-1.5 py-0.5 font-mono text-[10px] text-[#df5f69]">
            −0.49
          </span>
        </div>

        <IvyCsatSparkline animate={inView} />

        <div className="flex flex-col gap-1">
          {[
            { label: 'Refunds · weekend cohort', ticket: '#48211' },
            { label: 'Slow first response', ticket: '#48259' }
          ].map((row, index) => (
            <div
              key={row.ticket}
              className={`flex items-center justify-between text-[11px] ${
                inView ? 'ivy-stagger-up' : ''
              }`}
              style={
                inView
                  ? ({
                      ['--ivy-delay' as string]: `${1200 + index * 100}ms`
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <span className="text-[#3f4349]">{row.label}</span>
              <span className="font-mono text-[#5f636a]">{row.ticket}</span>
            </div>
          ))}
        </div>
      </div>
    </CapabilityCardShell>
  );
}

function AgentScoreRow({
  initial,
  name,
  score,
  barWidth,
  barColor,
  badge,
  animate,
  delayMs
}: {
  initial: string;
  name: string;
  score: number;
  barWidth: string;
  barColor: string;
  badge?: string;
  animate?: boolean;
  delayMs?: number;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${animate ? 'ivy-stagger-up' : ''}`}
      style={
        animate
          ? ({
              ['--ivy-delay' as string]: `${delayMs ?? 0}ms`
            } as React.CSSProperties)
          : undefined
      }
    >
      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(10,13,18,0.06)] font-mono text-[10px] text-[#3f4349]">
        {initial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between text-[11.5px]">
          <span className="text-[#0a0d12]">{name}</span>
          <span className="font-mono text-[#5f636a]">{score}</span>
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[rgba(10,13,18,0.06)]">
          <div
            className={`h-full rounded-full ${animate ? 'ivy-grow-width' : ''}`}
            style={{
              width: animate ? undefined : barWidth,
              backgroundColor: barColor,
              ...(animate
                ? ({
                    ['--ivy-target-width' as string]: barWidth,
                    ['--ivy-delay' as string]: `${(delayMs ?? 0) + 120}ms`
                  } as React.CSSProperties)
                : {})
            }}
          />
        </div>
      </div>
      {badge ? (
        <span className="shrink-0 rounded bg-[rgba(232,170,78,0.2)] px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.475px] text-[#0a0d12]">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

function RefundAgentsCard() {
  const { ref, inView } = useInViewOnce(0.35);

  const agents = [
    {
      initial: 'S',
      name: 'Sara M.',
      score: 72,
      barWidth: '72%',
      barColor: '#e8aa4e',
      badge: 'Coach'
    },
    {
      initial: 'D',
      name: 'Devon K.',
      score: 68,
      barWidth: '68%',
      barColor: '#e8aa4e',
      badge: 'Coach'
    },
    {
      initial: 'P',
      name: 'Priya S.',
      score: 84,
      barWidth: '84%',
      barColor: '#0a0d12'
    },
    {
      initial: 'M',
      name: 'Marcus L.',
      score: 91,
      barWidth: '91%',
      barColor: '#0a0d12'
    }
  ] as const;

  return (
    <CapabilityCardShell
      number="02"
      question={
        <>
          “Which agents are struggling with refund
          <br className="hidden lg:inline" />
          conversations?”
        </>
      }
      description="Ivy ranks agents by QA score on refund-tagged tickets and surfaces specific coaching moments."
    >
      <div ref={ref} className="flex flex-col gap-2">
        <div
          className={`flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[1.71px] text-[#5f636a] ${
            inView ? 'ivy-stagger-up' : ''
          }`}
        >
          <span>Agent · QA score on refunds</span>
          <span>n=128</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {agents.map((agent, index) => (
            <AgentScoreRow
              key={agent.name}
              {...agent}
              animate={inView}
              delayMs={index * 100}
            />
          ))}
        </div>
      </div>
    </CapabilityCardShell>
  );
}

function PricingSentimentCard() {
  const { ref, inView } = useInViewOnce(0.35);

  const segments = [
    { width: '28%', color: '#359b75', delay: '150ms' },
    { width: '41%', color: 'rgba(10,13,18,0.35)', delay: '350ms' },
    { width: '31%', color: '#df5f69', delay: '550ms' }
  ] as const;

  return (
    <CapabilityCardShell
      number="03"
      mockupPadding="compact"
      question={
        <>
          “What are customers saying about the new
          <br className="hidden lg:inline" />
          pricing page?”
        </>
      }
      description="Ivy pulls every conversation mentioning pricing since the change, with sentiment breakdown."
    >
      <div ref={ref} className="flex flex-col gap-[7.5px]">
        <div
          className={`flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[1.71px] text-[#5f636a] ${
            inView ? 'ivy-stagger-up' : ''
          }`}
        >
          <span>Pricing page · sentiment</span>
          <span>312 mentions</span>
        </div>

        <div className="flex h-2 overflow-hidden rounded-full">
          {segments.map((segment) => (
            <div
              key={segment.width}
              className={`h-full ${inView ? 'ivy-sentiment-segment' : ''}`}
              style={{
                width: segment.width,
                backgroundColor: segment.color,
                animationDelay: inView ? segment.delay : undefined
              }}
            />
          ))}
        </div>

        <div
          className={`flex flex-wrap items-center justify-between gap-x-2 gap-y-1 pb-[4.5px] text-[10.5px] text-[#3f4349] ${
            inView ? 'ivy-stagger-up' : ''
          }`}
          style={
            inView
              ? ({ ['--ivy-delay' as string]: '700ms' } as React.CSSProperties)
              : undefined
          }
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#359b75]" />
            Positive
            <span className="font-mono text-[#5f636a]">28%</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[rgba(10,13,18,0.35)]" />
            Neutral
            <span className="font-mono text-[#5f636a]">41%</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#df5f69]" />
            Negative
            <span className="font-mono text-[#5f636a]">31%</span>
          </span>
        </div>

        <div
          className={`rounded-[10px] bg-[rgba(10,13,18,0.04)] p-[10px] text-[11px] leading-[16.5px] text-[#3f4349] ${
            inView ? 'ivy-stagger-up' : ''
          }`}
          style={
            inView
              ? ({ ['--ivy-delay' as string]: '850ms' } as React.CSSProperties)
              : undefined
          }
        >
          “The new tiers are confusing — what counts as a seat?”
        </div>
      </div>
    </CapabilityCardShell>
  );
}

function RiskFlagRow({
  severity,
  severityColor,
  severityBg,
  text,
  ticket,
  animate,
  delayMs
}: {
  severity: string;
  severityColor: string;
  severityBg: string;
  text: string;
  ticket: string;
  animate?: boolean;
  delayMs?: number;
}) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-[10px] border border-[#dcdee2] bg-[rgba(247,246,242,0.4)] p-[11px] sm:flex-row sm:items-start sm:gap-2.5 ${
        animate ? 'ivy-stagger-up' : ''
      }`}
      style={
        animate
          ? ({
              ['--ivy-delay' as string]: `${delayMs ?? 0}ms`
            } as React.CSSProperties)
          : undefined
      }
    >
      <span
        className="mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.475px]"
        style={{ color: severityColor, backgroundColor: severityBg }}
      >
        {severity}
      </span>
      <p className="min-w-0 flex-1 text-[11.5px] leading-[17.25px] text-[#0a0d12]">
        {text}
      </p>
      <span className="shrink-0 font-mono text-[10px] text-[#5f636a]">
        {ticket}
      </span>
    </div>
  );
}

function RiskyCommitmentsCard() {
  const { ref, inView } = useInViewOnce(0.35);

  const flags = [
    {
      severity: 'High',
      severityColor: '#df5f69',
      severityBg: 'rgba(223,95,105,0.14)',
      text: 'Promised refund in 24h, policy is 5–7 days.',
      ticket: '#48402'
    },
    {
      severity: 'Med',
      severityColor: '#e8aa4e',
      severityBg: 'rgba(232,170,78,0.14)',
      text: 'Committed to a feature ETA not on roadmap.',
      ticket: '#48388'
    },
    {
      severity: 'Med',
      severityColor: '#e8aa4e',
      severityBg: 'rgba(232,170,78,0.14)',
      text: 'Guaranteed discount renewal beyond Q3.',
      ticket: '#48312'
    }
  ] as const;

  return (
    <CapabilityCardShell
      number="04"
      question={
        <>
          “Show me tickets where we promised
          <br className="hidden lg:inline" />
          something we can&apos;t deliver.”
        </>
      }
      description="Ivy flags conversations with risky commitments, sorted by severity."
    >
      <div ref={ref} className="flex flex-col gap-2">
        <div
          className={`flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[1.71px] text-[#5f636a] ${
            inView ? 'ivy-stagger-up' : ''
          }`}
        >
          <span>Risky commitments · this week</span>
          <span>14 flagged</span>
        </div>

        <div className="flex flex-col gap-2">
          {flags.map((flag, index) => (
            <RiskFlagRow
              key={flag.ticket}
              {...flag}
              animate={inView}
              delayMs={120 + index * 120}
            />
          ))}
        </div>
      </div>
    </CapabilityCardShell>
  );
}

export function IvyAskSection() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 5,
    staggerDelay: 100,
    threshold: 0.12
  });

  return (
    <section className="border-y border-[#dcdee2] bg-[#f8f8fb]">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1496px] px-5 py-16 xl:px-[128px] xl:py-[128px]"
      >
        <div className="mx-auto flex max-w-[1270px] flex-col gap-12">
          <div
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            style={getItemStyle(0)}
          >
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
                Capabilities
              </p>
              <h2 className="mt-4 font-display text-[42px] leading-[1.02] tracking-[-1.08px] text-[#0a0d12] sm:text-[54px] sm:leading-[55px]">
                Things support leaders ask
                <br />
                Ivy{' '}
                <span className="font-display italic text-[#0caee9]">
                  every day
                </span>
                .
              </h2>
            </div>

            <p className="max-w-[384px] text-[14px] leading-[22.75px] text-[rgba(10,13,18,0.6)]">
              Each answer is generated from your live ticket data and grounded
              in specific conversations — never summarized away from the source.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex w-full" style={getItemStyle(1)}>
              <CsatDropCard />
            </div>
            <div className="flex w-full" style={getItemStyle(2)}>
              <RefundAgentsCard />
            </div>
            <div className="flex w-full" style={getItemStyle(3)}>
              <PricingSentimentCard />
            </div>
            <div className="flex w-full" style={getItemStyle(4)}>
              <RiskyCommitmentsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
