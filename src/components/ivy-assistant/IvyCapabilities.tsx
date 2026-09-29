'use client';

import type { ComponentType } from 'react';

import {
  DashboardIcon,
  FilterIcon,
  NotionDocIcon,
  SampleIcon,
  SheetIcon,
  SlackIcon,
  ZendeskIcon
} from '@/components/ivy-assistant/icons';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { useInViewOnce } from '@/hooks/use-in-view-once';

type ToolIconProps = { className?: string };

const BEFORE_TOOLS: ReadonlyArray<{
  Icon: ComponentType<ToolIconProps>;
  number: string;
  title: string;
  subtitle: string;
  rotate: string;
}> = [
  {
    Icon: DashboardIcon,
    number: '01',
    title: 'Dashboard',
    subtitle: 'csat_weekly.bi',
    rotate: '-rotate-[0.3deg]'
  },
  {
    Icon: SheetIcon,
    number: '02',
    title: 'Export.csv',
    subtitle: '12,438 rows',
    rotate: 'rotate-[0.4deg]'
  },
  {
    Icon: FilterIcon,
    number: '03',
    title: 'Filter',
    subtitle: 'tag: refund',
    rotate: '-rotate-[0.3deg]'
  },
  {
    Icon: ZendeskIcon,
    number: '04',
    title: 'Zendesk',
    subtitle: 'view: backlog',
    rotate: 'rotate-[0.4deg]'
  },
  {
    Icon: SheetIcon,
    number: '05',
    title: 'Sheet',
    subtitle: 'Pivot v3',
    rotate: '-rotate-[0.3deg]'
  },
  {
    Icon: SampleIcon,
    number: '06',
    title: 'Sample',
    subtitle: 'n=25 read',
    rotate: 'rotate-[0.4deg]'
  },
  {
    Icon: SlackIcon,
    number: '07',
    title: 'Slack thread',
    subtitle: '#cx-ops',
    rotate: '-rotate-[0.3deg]'
  },
  {
    Icon: NotionDocIcon,
    number: '08',
    title: 'Notion doc',
    subtitle: 'Hypotheses',
    rotate: 'rotate-[0.4deg]'
  }
];

const CITATIONS = [
  { id: '#48211', quote: '“Took 4 days to get my refund processed.”' },
  { id: '#48259', quote: '“Agent told me to wait, no follow up.”' },
  { id: '#48344', quote: '“Refund denied with no explanation.”' }
] as const;

function SectionLabel({
  dotColor,
  children
}: {
  dotColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <span
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      <p className="font-mono text-[10.5px] uppercase tracking-[2.1px] text-[#5f636a]">
        {children}
      </p>
    </div>
  );
}

function BeforeToolCard({
  Icon,
  number,
  title,
  subtitle,
  rotate,
  animate,
  delayMs
}: (typeof BEFORE_TOOLS)[number] & {
  animate: boolean;
  delayMs: number;
}) {
  return (
    <div
      className={`${rotate} w-full ${animate ? 'ivy-stagger-up' : ''}`}
      style={
        animate
          ? ({
              ['--ivy-delay' as string]: `${delayMs}ms`
            } as React.CSSProperties)
          : undefined
      }
    >
      <div className="rounded-xl border border-[#dcdee2] bg-[rgba(247,246,242,0.6)] p-[13px]">
        <div className="flex items-center justify-between">
          <Icon className="size-2 shrink-0 text-[#5f636a]" />
          <span className="font-mono text-[9px] text-[#5f636a]">{number}</span>
        </div>
        <p className="mt-2 text-[12px] leading-[18px] text-[#0a0d12]">
          {title}
        </p>
        <p className="text-[10.5px] leading-[15.75px] text-[#5f636a]">
          {subtitle}
        </p>
        <div className="mt-3 flex flex-col gap-1">
          <div className="h-1 w-[92px] rounded-lg bg-[rgba(10,13,18,0.06)]" />
          <div className="h-1 w-[61px] rounded-lg bg-[rgba(10,13,18,0.06)]" />
        </div>
      </div>
    </div>
  );
}

function BeforePanel() {
  const { ref, inView } = useInViewOnce(0.2);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <SectionLabel dotColor="#df5f69">Before · the hour-long dig</SectionLabel>

      <div className="rounded-[20px] border border-[#dcdee2] bg-white p-[21px]">
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {BEFORE_TOOLS.map((tool, index) => (
            <BeforeToolCard
              key={tool.number}
              {...tool}
              animate={inView}
              delayMs={index * 70}
            />
          ))}
        </div>

        <div
          className={`mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between ${
            inView ? 'ivy-stagger-up' : ''
          }`}
          style={
            inView
              ? ({ ['--ivy-delay' as string]: '560ms' } as React.CSSProperties)
              : undefined
          }
        >
          <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-[#5f636a]">
            8 tools · 47 minutes · 1 hunch
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-[#5f636a]">
            → still unsure
          </p>
        </div>
      </div>
    </div>
  );
}

function AfterPanel() {
  const { ref, inView } = useInViewOnce(0.2);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <SectionLabel dotColor="#359b75">
        After · one answer, with evidence
      </SectionLabel>

      <div
        className={`flex min-h-0 flex-col gap-2.5 overflow-visible rounded-[20px] border border-[#dcdee2] bg-[#1c2c57] p-5 lg:h-[297px] lg:overflow-hidden lg:p-[25px] ${
          inView ? 'ivy-stagger-up' : ''
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[2px] text-white/50">
          Ivy · 1.2s
        </p>

        <div className="font-display text-[20px] leading-[26px] text-white lg:text-[25px] lg:leading-[30.25px]">
          <p>CSAT dropped 0.4 pts, almost entirely in</p>
          <p
            className={
              inView
                ? 'ivy-underline-reveal'
                : 'underline decoration-[#359b75] decoration-solid'
            }
            style={
              inView
                ? ({ animationDelay: '200ms' } as React.CSSProperties)
                : undefined
            }
          >
            refund tickets handled by the weekend
          </p>
          <p
            className={
              inView
                ? 'ivy-underline-reveal'
                : 'underline decoration-[#359b75] decoration-solid'
            }
            style={
              inView
                ? ({ animationDelay: '420ms' } as React.CSSProperties)
                : undefined
            }
          >
            cohort.
          </p>
        </div>

        <div className="flex flex-col gap-2 py-2">
          {CITATIONS.map((citation, index) => (
            <div
              key={citation.id}
              className={`flex items-start gap-2 lg:items-center ${
                inView ? 'ivy-stagger-up' : ''
              }`}
              style={
                inView
                  ? ({
                      ['--ivy-delay' as string]: `${520 + index * 120}ms`
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <span className="shrink-0 font-mono text-[12px] text-white/40">
                {citation.id}
              </span>
              <span className="min-w-0 text-[12px] leading-[18px] text-white/70 lg:truncate">
                {citation.quote}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 ${
            inView ? 'ivy-stagger-up' : ''
          }`}
          style={
            inView
              ? ({ ['--ivy-delay' as string]: '900ms' } as React.CSSProperties)
              : undefined
          }
        >
          <span className="size-1.5 rounded-full bg-[#359b75]" />
          <span className="font-mono text-[10px] uppercase tracking-[1.8px] text-white/80">
            Backed by 41 cited tickets
          </span>
        </div>
      </div>
    </div>
  );
}

export function IvyCapabilities() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 4,
    staggerDelay: 120,
    threshold: 0.15
  });

  return (
    <section id="ivy-capabilities" className="scroll-mt-20 bg-white">
      <div
        ref={containerRef}
        className="mx-auto flex max-w-[1496px] flex-col gap-6 px-5 py-16 xl:px-[128px] xl:py-[127px] xl:pb-[128px]"
      >
        <p
          className="font-mono text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]"
          style={getItemStyle(0)}
        >
          The problem
        </p>

        <div
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,493px)] lg:gap-16"
          style={getItemStyle(1)}
        >
          <h2 className="font-display text-[42px] leading-[1.02] tracking-[-1.08px] text-[#0a0d12] sm:text-[54px] sm:leading-[55px]">
            Dashboards answer the
            <br />
            questions you thought to
            <br />
            build. Ivy answers the ones
            <br />
            you{' '}
            <span className="font-display italic text-[#0caee9]">
              didn&apos;t
            </span>
            <span className="font-display italic">.</span>
          </h2>

          <div className="flex flex-col gap-4 pt-0 lg:pt-3">
            <p className="text-[15.5px] leading-[25.19px] text-[#3f4349]">
              Every support leader has the same problem: the dashboard shows the
              number went up, but not why. So you start digging — filtering,
              exporting, reading sample tickets — and an hour later you have a
              hunch.
            </p>
            <p className="text-[15.5px] leading-[25.19px] text-[#0a0d12]">
              Ivy does that hour in ten seconds, with citations to the exact
              conversations that prove the answer.
            </p>
          </div>
        </div>

        <div className="grid gap-10 pt-4 xl:grid-cols-[713fr_469fr] xl:gap-14 xl:pt-10">
          <div style={getItemStyle(2)}>
            <BeforePanel />
          </div>
          <div style={getItemStyle(3)}>
            <AfterPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
