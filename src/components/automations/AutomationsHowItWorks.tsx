'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode
} from 'react';

import { AutomationsStepConnector } from './AutomationsStepConnector';

const CONNECTOR_ANIMATION_MS = 1200;
const STEP_REVEAL_DELAY_MS = 120;

const STEP_ONE_EVENTS: ReadonlyArray<{ label: string; selected?: boolean }> = [
  { label: 'QA score below threshold', selected: true },
  { label: 'Topic spike detected' },
  { label: 'Agent flagged for coaching' },
  { label: 'Sentiment crashed' }
] as const;

const STEP_TWO_ACTIONS: ReadonlyArray<{ label: string; selected?: boolean }> = [
  { label: 'Slack' },
  { label: 'Email', selected: true },
  { label: 'Webhook' }
] as const;

function SectionIntro() {
  return (
    <div className="max-w-[768px]">
      <p className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
        How it works
      </p>
      <h2 className="mt-5 font-['Instrument_Serif'] text-[42px] leading-[1.02] tracking-[-0.04em] text-[#15110d] sm:text-[52px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.5px]">
        Set one up in{' '}
        <span className="italic text-[#0caee9]">under two minutes.</span>
      </h2>
      <p className="mt-5 text-[18px] leading-[29.25px] text-[#69625d]">
        Three steps. No code. No deploys.
      </p>
    </div>
  );
}

function StepShell({
  number,
  step,
  title,
  description,
  children
}: {
  number: string;
  step: string;
  title: string;
  description: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-[#e7e4e0] bg-white px-[25px] pb-[25px] pt-[25px] shadow-[0px_1px_1px_rgba(0,0,0,0.04),0px_1px_1.5px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between text-[12px] text-[#69625d]">
        <span>{number}</span>
        <span className="uppercase tracking-[0.6px]">{step}</span>
      </div>
      <h3 className="pt-[4.7px] font-['Instrument_Serif'] text-[36px] leading-[36px] tracking-[-0.3px] text-[#15110d]">
        {title}
      </h3>
      <div className="mt-3 text-[14px] leading-[22.75px] text-[#69625d]">
        {description}
      </div>
      <div className="pt-[16.7px]">{children}</div>
    </div>
  );
}

function EventPickerCard() {
  return (
    <StepShell
      number="01"
      step="Step 1"
      title="Pick an Event"
      description={
        <>
          <p>Choose from the RipeText event catalog:</p>
          <p>
            QA score below threshold, topic spike, coaching flag, sentiment
            crash — and more.
          </p>
        </>
      }
    >
      <div className="space-y-2">
        {STEP_ONE_EVENTS.map((item) => (
          <div
            key={item.label}
            className={
              item.selected
                ? 'flex items-center justify-between rounded-[12px] border border-[rgba(246,98,61,0.4)] bg-[rgba(246,98,61,0.05)] px-[13px] py-[9px]'
                : 'flex items-center rounded-[12px] border border-[#e7e4e0] bg-[#fbfaf7] px-[13px] py-[9px]'
            }
          >
            <div className="flex items-center gap-2">
              <span
                className={
                  item.selected
                    ? 'h-1.5 w-1.5 rounded-full bg-[#0caee9]'
                    : 'h-1.5 w-1.5 rounded-full bg-[rgba(105,98,93,0.4)]'
                }
              />
              <span
                className={
                  item.selected
                    ? 'text-[12px] text-[#15110d]'
                    : 'text-[12px] text-[#69625d]'
                }
              >
                {item.label}
              </span>
            </div>
            {item.selected ? (
              <span className="text-[10px] uppercase tracking-[0.5px] text-[#0caee9]">
                Selected
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </StepShell>
  );
}

function ActionPickerCard() {
  return (
    <StepShell
      number="02"
      step="Step 2"
      title="Pick an Action"
      description={
        <>
          <p>Slack, email, or custom webhook. Use event payload</p>
          <p>variables anywhere — recipients, subject lines, headers,</p>
          <p>request bodies.</p>
        </>
      }
    >
      <div className="grid grid-cols-3 gap-2">
        {STEP_TWO_ACTIONS.map((item) => (
          <div
            key={item.label}
            className={
              item.selected
                ? 'rounded-[12px] border border-[rgba(246,98,61,0.4)] bg-[rgba(246,98,61,0.05)] p-[13px] text-center text-[12px] text-[#15110d]'
                : 'rounded-[12px] border border-[#e7e4e0] bg-[#fbfaf7] p-[13px] text-center text-[12px] text-[#69625d]'
            }
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-[12px] bg-[rgba(243,242,237,0.6)] p-3 text-[11px] text-[#69625d]">
        To:{' '}
        <span className="text-[#15110d]">
          {'{{event.agent.team_lead.email}}'}
        </span>
      </div>
    </StepShell>
  );
}

function SaveShipCard() {
  return (
    <StepShell
      number="03"
      step="Step 3"
      title="Save & Ship"
      description={
        <p>
          Your automation runs every time the event fires. Up to 10 per
          workspace. Toggle on/off anytime. No engineering required.
        </p>
      }
    >
      <div className="rounded-[12px] border border-[#e7e4e0] bg-[#fbfaf7] p-[17px]">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#15110d]">QA → Email lead</span>
          <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-[#3aa85b] px-[2px]">
            <span className="ml-auto h-4 w-4 rounded-full bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px]">
          <span className="text-[#69625d]">Last run · 2m ago</span>
          <span className="text-[#3aa85b]">3/10 used</span>
        </div>
        <div className="mt-2 h-[6px] w-full rounded-full bg-[#f3f2ed]">
          <div className="h-[6px] w-[30%] rounded-full bg-[#15110d]" />
        </div>
      </div>
    </StepShell>
  );
}

function NarrativeBlock({
  title,
  body,
  align = 'left'
}: {
  title: string;
  body: string;
  align?: 'left' | 'right';
}) {
  const copy = (
    <>
      <h3 className="font-['Instrument_Serif'] text-[36px] leading-[36px] tracking-[-0.3px] text-[#15110d]">
        {title}
      </h3>
      <p className="mt-3 text-[16px] leading-[26px] text-[#69625d]">{body}</p>
    </>
  );

  if (align === 'left') {
    return (
      <div className="xl:pt-[47.7px] xl:pl-[178px]">
        <div className="max-w-[430px]">{copy}</div>
      </div>
    );
  }

  return <div className="max-w-[430px] xl:pl-4 xl:pt-[47.7px]">{copy}</div>;
}

function getStepStyle(index: number, visibleCount: number): CSSProperties {
  const isVisible = index < visibleCount;

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateY(0) scale(1)'
      : 'translateY(28px) scale(0.975)',
    transition:
      'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
  };
}

export function AutomationsHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [introVisible, setIntroVisible] = useState(false);
  const [visibleStepCount, setVisibleStepCount] = useState(1);
  const [topConnectorProgress, setTopConnectorProgress] = useState(0);
  const [bottomConnectorProgress, setBottomConnectorProgress] = useState(0);
  const triggeredStepsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return;

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIntroVisible(true);
        introObserver.disconnect();
      },
      { threshold: 0.12 }
    );

    introObserver.observe(sectionNode);

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.getAttribute('data-step-index'));
          if (Number.isNaN(index)) return;
          if (triggeredStepsRef.current.has(index)) return;

          if (index === 0) {
            triggeredStepsRef.current.add(index);
            setVisibleStepCount(1);
            return;
          }

          if (index === 1) {
            triggeredStepsRef.current.add(index);
            setTopConnectorProgress(1);
            window.setTimeout(() => {
              setVisibleStepCount((current) => Math.max(current, 2));
            }, CONNECTOR_ANIMATION_MS + STEP_REVEAL_DELAY_MS);
            return;
          }

          if (index === 2) {
            triggeredStepsRef.current.add(index);
            setBottomConnectorProgress(1);
            window.setTimeout(() => {
              setVisibleStepCount((current) => Math.max(current, 3));
            }, CONNECTOR_ANIMATION_MS + STEP_REVEAL_DELAY_MS);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: '0px 0px -12% 0px'
      }
    );

    stepRefs.current.forEach((node) => {
      if (node) stepObserver.observe(node);
    });

    return () => {
      introObserver.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative border-y border-[#dcdee2] bg-[#f8f8fb]">
      <div className="pointer-events-none absolute left-[35%] top-[12%] hidden h-[450px] w-[410px] -rotate-63 rounded-[500px] bg-[#a1cddf]/15 blur-[75px] xl:block" />
      <div className="pointer-events-none absolute left-[10%] top-[45%] hidden h-[450px] w-[410px] -rotate-63 rounded-[500px] bg-[#a1cddf]/15 blur-[75px] xl:block" />
      <div className="pointer-events-none absolute left-[35%] top-[74%] hidden h-[450px] w-[410px] -rotate-63 rounded-[500px] bg-[#a1cddf]/15 blur-[75px] xl:block" />

      <div
        ref={sectionRef}
        className="relative mx-auto max-w-[1296px] px-5 py-20 lg:px-8 lg:py-32"
      >
        <div
          style={{
            opacity: introVisible ? 1 : 0,
            transform: introVisible ? 'translateY(0)' : 'translateY(24px)',
            transition:
              'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <SectionIntro />
        </div>

        <div className="relative mt-16 flex flex-col gap-12 xl:gap-0">
          <div
            ref={(node) => {
              stepRefs.current[0] = node;
            }}
            data-step-index="0"
            className="grid gap-10 xl:grid-cols-[372px_1fr] xl:items-start xl:gap-[84px]"
            style={getStepStyle(0, visibleStepCount)}
          >
            <div className="order-2 xl:order-1">
              <EventPickerCard />
            </div>
            <div className="order-1 xl:order-2">
              <NarrativeBlock
                title="Pick an Event"
                body="Explore a wide range of events from the RipeText catalog — from low QA performance and emerging topic trends to coaching opportunities, sentiment downturns, and other critical indicators that help teams stay informed and take action faster."
                align="right"
              />
            </div>
          </div>

          <AutomationsStepConnector progress={topConnectorProgress} />

          <div
            ref={(node) => {
              stepRefs.current[1] = node;
            }}
            data-step-index="1"
            className="grid gap-10 xl:grid-cols-[auto_372px] xl:items-start xl:justify-between xl:pt-[5px]"
            style={getStepStyle(1, visibleStepCount)}
          >
            <div className="order-1">
              <NarrativeBlock
                title="Pick an Action"
                body="Connect your workflows to Slack, email, or custom webhooks and automate communications with ease. Leverage event payload variables throughout your notification templates to personalize recipients, subject lines, headers, and request bodies, ensuring every alert contains the exact context your team needs."
              />
            </div>
            <div className="order-2">
              <ActionPickerCard />
            </div>
          </div>

          <AutomationsStepConnector
            mirrored
            progress={bottomConnectorProgress}
          />

          <div
            ref={(node) => {
              stepRefs.current[2] = node;
            }}
            data-step-index="2"
            className="grid gap-10 xl:grid-cols-[372px_1fr] xl:items-start xl:gap-[84px] xl:pt-[5px]"
            style={getStepStyle(2, visibleStepCount)}
          >
            <div className="order-2 xl:order-1">
              <SaveShipCard />
            </div>
            <div className="order-1 xl:order-2">
              <NarrativeBlock
                title="Save & Ship"
                body="Set it up once and let it run automatically whenever an event is triggered. Manage up to 10 automations per workspace, turn them on or off whenever needed, and launch powerful workflows without relying on engineering support."
                align="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
