'use client';

import { AnimatedNumber } from '@/components/lp/AnimatedNumber';
import { useInViewOnce } from '@/hooks/use-in-view-once';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { BellIcon, CheckIcon, CrossIcon } from './icons';

const TRAINING_STEPS = [
  {
    step: '01',
    title: 'Describe the exercise',
    body: '"Build a scenario where their scanners go offline after a firmware update." Ivy drafts a persona and a scenario from verified facts.'
  },
  {
    step: '02',
    title: 'Refine it in plain language',
    body: '"Make the IT lead more technical." Each change updates the same draft until it is right.'
  },
  {
    step: '03',
    title: 'Assign it to the team',
    body: 'Through Ivy or the Training page. Every assignee gets an in-app and email notification.'
  },
  {
    step: '04',
    title: 'Grade technical accuracy',
    body: 'Each answer is checked against the facts. Knowledge accuracy counts for half of the session score.'
  }
] as const;

const SCORE_SPLIT = [
  { label: 'Knowledge accuracy', share: 50, color: '#0f1d43' },
  { label: 'Company voice', share: 25, color: '#0caee9' },
  { label: 'AI CSAT', share: 25, color: '#94a3b8' }
] as const;

const EVALUATION = [
  {
    kind: 'correct',
    text: 'Asked for the scanner firmware version before anything else'
  },
  {
    kind: 'correct',
    text: 'Matched the symptoms to the known ZD420 firmware issue'
  },
  {
    kind: 'missed',
    text: 'Did not check that the agent was connected to the VPN'
  },
  {
    kind: 'incorrect',
    text: 'Offered a password reset, which Northwind IT handles'
  }
] as const;

const EVALUATION_STYLE = {
  correct: {
    label: 'Correct',
    className: 'bg-[#e9f5f0] text-[#2f8a66]',
    icon: <CheckIcon className="h-2.5 w-2.5" />
  },
  missed: {
    label: 'Missed',
    className: 'bg-[#fdf3e2] text-[#a86b0c]',
    icon: <span className="h-[3px] w-2 rounded-full bg-current" />
  },
  incorrect: {
    label: 'Incorrect',
    className: 'bg-[#fbeceb] text-[#b4473f]',
    icon: <CrossIcon className="h-2.5 w-2.5" />
  }
} as const;

function AssignedNotification({ animate }: { animate: boolean }) {
  return (
    <div
      className={`absolute -right-4 -top-10 z-10 hidden w-[260px] rounded-[14px] border border-[#e2e4e9] bg-white px-4 py-3 shadow-[0px_12px_32px_rgba(23,35,76,0.12)] lg:block xl:-right-10 ${
        animate ? 'ivy-stagger-up' : 'opacity-0'
      }`}
      style={{ ['--ivy-delay' as string]: '900ms' } as React.CSSProperties}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6f6fc] text-[#0b8fc0]">
          <BellIcon className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-[#17234c]">
            New training assigned
          </p>
          <p className="mt-0.5 text-[11px] leading-[1.45] text-[#636a7e]">
            Alex assigned you &ldquo;Scanners offline after a firmware
            update&rdquo;.
          </p>
        </div>
      </div>
    </div>
  );
}

function TrainingResultMockup() {
  const { ref, inView } = useInViewOnce(0.3);

  return (
    <div
      ref={ref}
      className="relative w-full rounded-[20px] border border-[#e2e4e9] bg-white shadow-[0px_6px_28px_rgba(23,35,76,0.08)]"
    >
      <AssignedNotification animate={inView} />

      <div className="border-b border-[#e2e4e9] bg-[#faf9f7] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#e6f6fc] px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.8px] text-[#0b8fc0]">
            Knowledge
          </span>
          <span className="text-[10.5px] text-[#9ca3af]">
            Assigned by Alex · Northwind Freight
          </span>
        </div>
        <p className="mt-2 text-[15px] font-semibold leading-[1.3] text-[#17234c]">
          Scanners offline after a firmware update
        </p>
      </div>

      <div className="grid gap-6 px-5 py-6 sm:grid-cols-[150px_minmax(0,1fr)] sm:px-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[1.4px] text-[#60636c]">
            Technical accuracy
          </p>
          <p className="mt-2 font-display text-[64px] leading-none tracking-[-1.5px] text-[#0a0d12]">
            <AnimatedNumber value={78} animate={inView} />
            <span className="text-[24px] text-[#9ca3af]">/100</span>
          </p>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[1.4px] text-[#60636c]">
            Session score
          </p>
          <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full bg-[#f1f2f5]">
            {SCORE_SPLIT.map((part, index) => (
              <div
                key={part.label}
                className={inView ? 'ivy-sentiment-segment' : 'scale-x-0'}
                style={{
                  width: `${part.share}%`,
                  backgroundColor: part.color,
                  animationDelay: `${index * 160}ms`
                }}
              />
            ))}
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {SCORE_SPLIT.map((part) => (
              <li
                key={part.label}
                className="flex items-center justify-between text-[11px] text-[#4f565e]"
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-[2px]"
                    style={{ backgroundColor: part.color }}
                  />
                  {part.label}
                </span>
                <span className="font-semibold text-[#17234c]">
                  {part.share}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="flex flex-col gap-2 border-t border-[#eef0f3] px-5 py-5 sm:px-6">
        {EVALUATION.map((item, index) => {
          const style = EVALUATION_STYLE[item.kind];

          return (
            <li
              key={item.text}
              className={`flex items-start gap-2.5 ${
                inView ? 'ivy-stagger-up' : 'opacity-0'
              }`}
              style={
                {
                  ['--ivy-delay' as string]: `${400 + index * 140}ms`
                } as React.CSSProperties
              }
            >
              <span
                className={`mt-px inline-flex w-[78px] shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-medium ${style.className}`}
              >
                {style.icon}
                {style.label}
              </span>
              <p className="text-[12px] leading-[1.45] text-[#17234c]">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function KnowledgeBaseTraining() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 160,
    threshold: 0.12
  });

  return (
    <section
      id="training"
      className="border-t border-[#e3e4e9] bg-[#f8f8fa] scroll-mt-16"
    >
      <div
        ref={containerRef}
        className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 lg:grid-cols-[minmax(0,600px)_minmax(0,540px)] lg:justify-between lg:gap-16 lg:px-8 lg:py-32"
      >
        <div className="order-2 lg:order-1" style={getItemStyle(1)}>
          <TrainingResultMockup />
        </div>

        <div className="order-1 lg:order-2" style={getItemStyle(0)}>
          <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            Training
          </p>
          <h2 className="mt-5 font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
            Practice on the customers{' '}
            <span className="font-display italic text-[#0caee9]">
              you actually have
            </span>
            .
          </h2>
          <p className="mt-6 text-[17px] leading-[28px] text-[#60636c]">
            Ivy turns verified facts into roleplay: a technical contact at the
            customer, with a realistic problem from their real environment.
          </p>

          <ol className="mt-8 flex flex-col gap-5">
            {TRAINING_STEPS.map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="pt-0.5 font-mono text-[11px] tracking-[1.2px] text-[#0caee9]">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold leading-5 text-[#101116]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[22px] text-[#60636c]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
