'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { useInViewOnce } from '@/hooks/use-in-view-once';

const SHIFT_ITEMS = [
  {
    number: '01',
    title: (
      <>
        Searches across every
        <br />
        conversation
      </>
    ),
    description:
      'Ivy reads your full ticket history — chats, emails, voice transcripts — and keeps the context fresh as new ones arrive.'
  },
  {
    number: '02',
    title: 'Identifies patterns automatically',
    description:
      'Clustering and topic modeling run continuously, so emerging issues surface before they hit the dashboard.'
  },
  {
    number: '03',
    title: 'Explains why metrics changed',
    description:
      'Every answer connects a metric movement to the tickets, agents, releases, or topics responsible for it.'
  },
  {
    number: '04',
    title: 'Surfaces evidence instantly',
    description:
      'Citations open straight to the source conversation, with the relevant snippet highlighted in place.'
  },
  {
    number: '05',
    title: 'Reduces manual investigation',
    description:
      'What used to be an afternoon of filtering and exports is now a single question and a one-paragraph answer.'
  },
  {
    number: '06',
    title: 'Helps leaders decide faster',
    description:
      'Ship the coaching plan, the bug ticket, or the policy change in the same hour you noticed the problem.'
  }
] as const;

function ShiftCell({
  number,
  title,
  description,
  animate,
  delayMs
}: {
  number: string;
  title: React.ReactNode;
  description: string;
  animate?: boolean;
  delayMs?: number;
}) {
  return (
    <div
      className={`flex flex-col gap-[6.9px] px-[29px] py-7 ${
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
      <p className="font-mono text-[10.5px] uppercase tracking-[1.89px] text-[#5f636a]">
        {number}
      </p>
      <h3 className="pt-[5.1px] font-display text-[25px] leading-[25px] tracking-[-0.5px] text-[#0a0d12]">
        {title}
      </h3>
      <p className="text-[13.5px] leading-[21.94px] text-[#3f4349]">
        {description}
      </p>
    </div>
  );
}

export function IvyTheShift() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 100,
    threshold: 0.12
  });
  const { ref: gridRef, inView: gridInView } = useInViewOnce(0.15);

  return (
    <section className="bg-white">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1496px] px-5 py-16 xl:px-[128px] xl:py-[128px]"
      >
        <div className="mx-auto grid max-w-[1270px] gap-10 lg:grid-cols-12 lg:gap-10">
          <div
            className="flex flex-col gap-[19px] lg:col-span-5"
            style={getItemStyle(0)}
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[2.31px] text-[#0caee9]">
              The shift
            </p>
            <h2 className="font-display text-[42px] leading-[1.05] tracking-[-1.04px] text-[#0a0d12] sm:text-[52px] sm:leading-[55px]">
              From dashboards to{' '}
              <span className="font-display italic text-[#0caee9]">
                understanding
              </span>
              .
            </h2>
            <p className="max-w-[448px] text-[15px] leading-[24.38px] text-[#3f4349]">
              Ivy sits on top of your conversation data and operates like a
              senior analyst on your team — one who has read every ticket, knows
              your tags, and can show her work.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 divide-y divide-[#dcdee2] border-x border-y border-[#dcdee2] sm:grid-cols-2 sm:divide-x lg:col-span-7 lg:grid-rows-[207.56px_183.56px_183.56px]"
            style={getItemStyle(1)}
          >
            {SHIFT_ITEMS.map((item, index) => (
              <ShiftCell
                key={item.number}
                {...item}
                animate={gridInView}
                delayMs={index * 90}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
