import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

const OUTCOMES = [
  {
    title: 'Detect emerging issues earlier',
    description:
      'Surface new clusters at ticket #2, not after the dashboard catches up.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]">
        <circle cx="9" cy="9" r="3" stroke="#fff" strokeWidth="1.4" />
        <circle
          cx="9"
          cy="9"
          r="6"
          stroke="#fff"
          strokeWidth="1.4"
          strokeDasharray="2 2"
        />
        <circle
          cx="9"
          cy="9"
          r="8.5"
          stroke="#fff"
          strokeWidth="1.4"
          strokeDasharray="3 3"
        />
        <circle cx="9" cy="3" r="1" fill="#fff" />
      </svg>
    )
  },
  {
    title: 'Reduce escalation response time',
    description:
      'Hand engineering a ranked list with summaries, ticket links, and affected accounts.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]">
        <circle cx="9" cy="9" r="7.5" stroke="#fff" strokeWidth="1.4" />
        <path
          d="M9 5v4.5l3 1.5"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Align support and engineering faster',
    description:
      "One source of truth on what's growing, who it's affecting, and what it costs.",
    icon: (
      <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]">
        <circle cx="6" cy="6" r="2.5" stroke="#fff" strokeWidth="1.4" />
        <circle cx="12" cy="6" r="2.5" stroke="#fff" strokeWidth="1.4" />
        <path
          d="M3 15c0-2.5 1.5-4 3-4s3 1.5 3 4M9 15c0-2.5 1.5-4 3-4s3 1.5 3 4"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: 'Replace fragmented tagging systems',
    description:
      'Stop relying on agents to manually classify what AI already understands.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]">
        <path
          d="M2 6l7-4 7 4v1l-7 4-7-4V6z"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M2 9l7 4 7-4"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l7 4 7-4"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Prioritize by customer revenue impact',
    description:
      'Sort by exposed LTV instead of ticket count — fix the things that hurt most.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]">
        <path
          d="M9 2v14M6 5c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 2-3 2-3 .9-3 2 1.3 2 3 2 3-.9 3-2"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Surface hidden patterns automatically',
    description:
      'Catch the slow-burning regressions and policy gaps that never trip a tag-based alert.',
    icon: (
      <svg viewBox="0 0 18 18" fill="none" className="h-[17px] w-[17px]">
        <circle cx="8" cy="8" r="5.5" stroke="#fff" strokeWidth="1.4" />
        <path
          d="M12.5 12.5L16 16"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  }
];

const GRID_ORDER = [0, 1, 4, 2, 3, 5];

export function IssueRadarOutcomes() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: GRID_ORDER.length,
    staggerDelay: 120,
    threshold: 0.2
  });

  return (
    <section
      id="outcomes"
      className="relative overflow-hidden bg-[#1c2c57] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="mx-auto max-w-[1335px]">
          <div className="max-w-[768px]">
            <p className="font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
              04 · Outcomes
            </p>
            <h2 className="mt-5 font-display text-[48px] leading-[46px] text-white">
              Built for operational visibility
            </h2>
            <p className="mt-6 max-w-[672px] text-lg leading-[26px] text-white">
              A calm, analytical workspace for support and CX leaders who own
              response time, retention, and risk.
            </p>
          </div>

          <div
            ref={containerRef}
            className="mt-14 grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#2d4379] bg-[#172345] sm:grid-cols-2 lg:grid-cols-3"
          >
            {GRID_ORDER.map((idx, i) => {
              const outcome = OUTCOMES[idx];
              return (
                <div
                  key={outcome.title}
                  className="flex flex-col border border-[#2d4379] bg-[#172345] p-[26px]"
                  style={getItemStyle(i)}
                >
                  <div className="flex flex-col gap-[17px]">
                    <div className="flex h-[39px] w-[39px] items-center justify-center rounded-[11px] border border-[#636a7e] bg-black/60">
                      {outcome.icon}
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <p className="text-[17px] font-bold leading-[26px] text-white">
                        {outcome.title}
                      </p>
                      <p className="text-[15px] font-normal leading-[24px] text-[#9ca3af]">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
