'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

import {
  ConnectExistingWorkflowsIcon,
  ReduceManualWorkIcon,
  RespondFasterIcon,
  StayInControlIcon
} from './icons';

const BENEFITS = [
  {
    icon: RespondFasterIcon,
    title: 'Respond Faster',
    body: 'Route important events directly to the people who need them the moment they happen.'
  },
  {
    icon: ReduceManualWorkIcon,
    title: 'Reduce Manual Work',
    body: 'Eliminate repetitive monitoring, triage, and follow-up tasks across your conversation ops team.'
  },
  {
    icon: ConnectExistingWorkflowsIcon,
    title: 'Connect Existing Workflows',
    body: 'Integrate RipeText insights with Slack, email, and any internal system via webhook.'
  },
  {
    icon: StayInControlIcon,
    title: 'Stay In Control',
    body: 'Manage, enable, disable, and monitor every automation from one place with full run history.'
  }
] as const;

function BenefitCard({
  icon: Icon,
  title,
  body
}: {
  icon: ({ className }: { className?: string }) => JSX.Element;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[20px] border border-[#e7e4e0] bg-linear-to-b from-white to-[#fbfaf8] p-[33px] shadow-[0px_4px_5px_rgba(0,0,0,0.05)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#e7e4e0] bg-white">
        <Icon />
      </div>
      <h3 className="pt-[12.6px] font-['Instrument_Serif'] text-[24px] leading-8 tracking-[-0.24px] text-[#15110d]">
        {title}
      </h3>
      <p className="max-w-[448px] pt-2 text-[14px] leading-[22.75px] text-[#69625d]">
        {body}
      </p>
    </div>
  );
}

export function AutomationsWhyTeamsChooseIt() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: BENEFITS.length + 1,
    staggerDelay: 120,
    threshold: 0.2
  });

  return (
    <section className="bg-[#fcfcfd]">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:pt-32 lg:pb-0"
      >
        <div className="max-w-[768px]" style={getItemStyle(0)}>
          <p className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
            Why teams choose it
          </p>
          <h2 className="mt-5 font-['Instrument_Serif'] text-[42px] leading-[1.02] tracking-[-0.04em] text-[#15110d] sm:text-[52px] lg:text-[60px] lg:leading-[63px] lg:tracking-[-1.5px]">
            Built for teams that{' '}
            <span className="italic text-[#0caee9]">move fast.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {BENEFITS.map((item, index) => (
            <div key={item.title} style={getItemStyle(index + 1)}>
              <BenefitCard
                icon={item.icon}
                title={item.title}
                body={item.body}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
