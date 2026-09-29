import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

function ClusterVisualization() {
  const cx = 200;
  const cy = 125;

  const outerNodes = [
    { x: 80, y: 50 },
    { x: 60, y: 100 },
    { x: 90, y: 155 },
    { x: 310, y: 40 },
    { x: 340, y: 90 },
    { x: 320, y: 155 },
    { x: 130, y: 30 }
  ];

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 388 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        {/* Lines from outer nodes to center */}
        {outerNodes.map((node, i) => (
          <line
            key={i}
            x1={node.x}
            y1={node.y}
            x2={cx}
            y2={cy}
            stroke="#c8cfe0"
            strokeWidth="1"
          />
        ))}

        {/* Concentric circles around center */}
        <circle
          cx={cx}
          cy={cy}
          r="42"
          fill="none"
          stroke="#d9e4f5"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx={cx}
          cy={cy}
          r="28"
          fill="none"
          stroke="#c5d8f0"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle cx={cx} cy={cy} r="14" fill="#cfe0f7" />

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="8" fill="#1d60bc" />

        {/* Outer node dots */}
        {outerNodes.map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="3.5" fill="#9ca3b4" />
        ))}
      </svg>

      {/* Cluster confidence badge */}
      <div className="absolute right-[20px] top-[16px] flex items-center gap-1.5 rounded-full bg-[#ecedfd] px-2.5 py-0.5">
        <span className="h-1.5 w-1.5 rounded-sm bg-[#1f6dd8]" />
        <span className="text-[11px] font-medium text-[#000102]">
          Cluster confidence: 94%
        </span>
      </div>

      {/* Tooltip card */}
      <div className="absolute bottom-[24px] left-[14px] flex w-[166px] flex-col gap-px rounded-xl border border-[#d9dfed] bg-white px-3 py-2 shadow-[0px_4px_2px_rgba(0,0,0,0.05)]">
        <p className="text-[11px] font-medium leading-[17px] text-[#151a28]">
          Checkout — card declined
        </p>
        <p className="text-[10px] leading-[16px] text-[#636a7e]">
          47 tickets · 38 customers
        </p>
      </div>
    </div>
  );
}

function VelocityVisualization() {
  return (
    <div className="flex h-full w-full flex-col p-[17px]">
      <div className="flex w-full flex-col items-center gap-[11px]">
        <div className="flex w-full flex-col gap-[18px]">
          {/* Header row */}
          <div className="flex w-full items-center justify-between">
            <span className="text-[11px] font-medium leading-[17px] text-[#636a7e]">
              Trajectory · 24h
            </span>
            <div className="flex items-center gap-[7px] rounded-full bg-[#fffae5] px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-sm bg-[#de3a46]" />
              <span className="text-[11px] font-medium leading-[17px] text-[#b24d4f]">
                +340% / 24h
              </span>
            </div>
          </div>

          {/* Chart area */}
          <div className="h-[130px] w-full">
            <svg
              viewBox="0 0 324 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e5a30d" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#e5a30d" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {/* Fill area */}
              <path
                d="M0 128 C40 126 80 124 120 118 C160 112 200 100 240 72 C270 50 295 22 310 10 L310 130 L0 130 Z"
                fill="url(#chartGradient)"
              />
              {/* Line */}
              <path
                d="M0 128 C40 126 80 124 120 118 C160 112 200 100 240 72 C270 50 295 22 310 10"
                stroke="#d4930d"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* End dot */}
              <circle cx="310" cy="10" r="5" fill="#d4930d" />
              <circle cx="310" cy="10" r="2.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="relative flex w-full items-center justify-between">
          <span className="text-[11px] text-[#9ca3b4]">Mon 9:00</span>
          <span className="text-[11px] text-[#636a7e]">Now</span>
        </div>
      </div>
    </div>
  );
}

function ExposedLtvVisualization() {
  return (
    <div className="relative h-full w-full p-[21px]">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium leading-[17px] text-[#636a7e]">
          Exposed revenue
        </span>
        <div className="flex items-center gap-1.5 rounded-full bg-[#ffe6e4] px-2.5 py-0.5">
          <span className="h-1.5 w-1.5 rounded-sm bg-[#de3a46]" />
          <span className="text-[11px] font-medium leading-[17px] text-[#a20222]">
            $184,200 exposed
          </span>
        </div>
      </div>

      {/* Large number */}
      <div className="mt-[26px] flex flex-col items-start">
        <p className="text-[48px] font-semibold leading-[1.1] text-[#151a28]">
          $184,200
        </p>
        <p className="mt-1 text-[13px] leading-[19px] text-[#636a7e]">
          Sum of LTV across 38 affected customers
        </p>
      </div>

      {/* Avatar circles */}
      <div className="mt-[24px] flex items-center">
        <div className="flex items-center -space-x-[8px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-[30px] w-[30px] rounded-full border border-white bg-[#636a7e]"
            />
          ))}
        </div>
        <span className="ml-3 text-[11px] font-medium text-[#151a28]">
          +30 more
        </span>
      </div>
    </div>
  );
}

const SOLUTION_CARDS = [
  {
    number: '01',
    label: 'The cluster',
    title: 'Tickets grouped by what customers mean',
    description:
      "Tickets are grouped by what the customer actually means, not by the words they used. 'Card declined,' 'payment won't go through,' and 'checkout broken' land in the same issue.",
    Visual: ClusterVisualization
  },
  {
    number: '02',
    label: 'Velocity & growth',
    title: "Acceleration before it's obvious",
    description:
      'See how fast an issue is growing — new tickets per hour, percent change vs. yesterday, and a trajectory line that flags acceleration before it becomes obvious.',
    Visual: VelocityVisualization
  },
  {
    number: '03',
    label: 'Exposed LTV',
    title: 'Revenue at risk, not ticket count',
    description:
      'The total lifetime value of the customers affected by this issue, so you can prioritize what to fix first by revenue at risk — not ticket count.',
    Visual: ExposedLtvVisualization
  }
];

export function IssueRadarSolution() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: SOLUTION_CARDS.length,
    staggerDelay: 200,
    threshold: 0.2
  });

  return (
    <section id="solution" className="py-24 lg:py-32 bg-[#f8f8fa]">
      <div className="mx-auto max-w-[1336px] px-5 lg:px-8">
        {/* Section header */}
        <div className="max-w-[768px]">
          <p className="font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            02 · What Issue Radar shows you
          </p>
          <h2 className="mt-4 font-display text-[36px] leading-[1.15] tracking-[-0.5px] text-[#151a28] sm:text-[44px] lg:text-[48px] lg:leading-[46px]">
            Three signals on every emerging issue
          </h2>
          <p className="mt-5 max-w-[672px] text-[18px] leading-[26px] text-[#151a28]">
            Every ticket gets clustered automatically into the issue it&apos;s
            really about. Then we tell you what matters.
          </p>
        </div>

        {/* Solution cards */}
        <div ref={containerRef} className="mt-16 grid gap-6 lg:grid-cols-3">
          {SOLUTION_CARDS.map((card, i) => (
            <article
              key={card.number}
              className="flex flex-col rounded-[22px] border border-[#d9dfed] bg-white shadow-[0px_4px_2px_rgba(0,0,0,0.1)] overflow-hidden"
              style={getItemStyle(i)}
            >
              {/* Visual area */}
              <div className="h-[238px] border-b border-[#d9dfed] overflow-hidden">
                <card.Visual />
              </div>

              {/* Content area */}
              <div className="flex flex-col gap-3 px-[26px] py-[25px]">
                <div className="flex items-center gap-[9px] text-[12px] leading-[17px]">
                  <span className="font-medium text-[#151a28]">
                    {card.number}
                  </span>
                  <span className="text-[#d9dfed]">·</span>
                  <span className="font-medium text-[#1d60bc]">
                    {card.label}
                  </span>
                </div>
                <div className="flex flex-col gap-[9px]">
                  <h3 className="text-[20px] font-semibold leading-[30px] text-[#151a28]">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-[25px] text-[#636a7e]">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
