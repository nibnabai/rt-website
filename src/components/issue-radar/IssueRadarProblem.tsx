import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

const TAGS = [
  '#checkout-error',
  '#payment-failed',
  '#card-issue',
  '#stripe-bug',
  '#cant-pay',
  '#billing',
  '#declined'
];

function Card1Visual() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center justify-center rounded-full border border-[#c1c7d7] bg-white px-2.5 py-0.5 text-xs font-medium text-[#636a7e]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2.5 rounded-lg border border-dashed border-white bg-white px-3 py-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#de3a46]" />
        <span className="text-xs text-[#636a7e]">
          One underlying issue · invisible to dashboards
        </span>
      </div>
    </div>
  );
}

function Card2Visual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute left-[10%] top-[4px] text-[11px] text-[#5d646f]">
        Hour 0
      </div>
      <div className="absolute right-[14%] top-[4px] text-[11px] text-[#5d646f]">
        Alert fires
      </div>

      <svg
        viewBox="0 0 345 130"
        fill="none"
        className="absolute bottom-0 left-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Horizontal baseline */}
        <line
          x1="0"
          y1="108"
          x2="345"
          y2="108"
          stroke="#e3e6ed"
          strokeWidth="1"
        />

        {/* Dashed vertical line at ~68% */}
        <line
          x1="238"
          y1="20"
          x2="238"
          y2="108"
          stroke="#5d646f"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* The curve (gradient fill) */}
        <path
          d="M0 108 C40 107, 80 106, 120 104 C160 100, 180 95, 200 85 C220 72, 230 55, 238 38 C248 18, 260 10, 280 8 C300 6, 320 5, 345 3"
          stroke="#e53e51"
          strokeWidth="2"
          fill="none"
        />

        {/* Fill under the curve */}
        <path
          d="M0 108 C40 107, 80 106, 120 104 C160 100, 180 95, 200 85 C220 72, 230 55, 238 38 C248 18, 260 10, 280 8 C300 6, 320 5, 345 3 L345 108 Z"
          fill="url(#redGradient)"
        />

        <defs>
          <linearGradient
            id="redGradient"
            x1="172"
            y1="3"
            x2="172"
            y2="108"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e53e51" stopOpacity="0.15" />
            <stop offset="1" stopColor="#e53e51" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Card3Visual() {
  return (
    <div className="flex flex-col gap-2.5">
      {['Affected customers', 'Revenue at risk', 'Growth rate'].map((label) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-lg border border-white bg-white px-3.5 py-2.5"
        >
          <span className="text-[13px] text-[#636a7e]">{label}</span>
          <span className="text-sm font-medium text-[#151a28]">?</span>
        </div>
      ))}
    </div>
  );
}

const PROBLEM_CARDS = [
  {
    number: '01',
    title: 'Five agents, five different tags',
    description:
      "The same bug gets logged as 'checkout error,' 'payment failed,' and 'card issue' — and nobody sees it's one problem.",
    Visual: Card1Visual
  },
  {
    number: '02',
    title: 'Volume alerts come too late',
    description:
      'Tag-based dashboards spike after the issue has already hit hundreds of customers.',
    Visual: Card2Visual
  },
  {
    number: '03',
    title: "Engineering asks 'how big is this?' You don't know",
    description:
      'Without exposed LTV, prioritization is a guessing game between support and product.',
    Visual: Card3Visual
  }
];

export function IssueRadarProblem() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: PROBLEM_CARDS.length,
    staggerDelay: 180,
    threshold: 0.2
  });

  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1336px] px-5 lg:px-8">
        <div className="max-w-[695px]">
          <p className="text-xs font-medium uppercase tracking-[2.4px] text-[#0caee9]">
            01 · The problem
          </p>
          <h2 className="mt-4 font-display text-[36px] leading-[1.15] tracking-[-0.5px] text-[#151a28] sm:text-[44px] lg:text-[48px] lg:leading-[46px]">
            By the time you see the pattern, it&apos;s already a backlog
          </h2>
        </div>

        <div ref={containerRef} className="mt-16 grid gap-5 lg:grid-cols-3">
          {PROBLEM_CARDS.map((card, i) => (
            <article
              key={card.number}
              className="overflow-hidden rounded-[20px] border border-[#d9dfed] bg-white"
              style={getItemStyle(i)}
            >
              <div className="h-[173px] bg-[#f3f5f9] p-[22px]">
                <card.Visual />
              </div>

              <div className="px-[26px] pb-[26px] pt-[26px]">
                <p className="text-xs font-medium text-[#b4b9c6]">
                  {card.number}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <h3 className="text-[19px] font-semibold leading-[29px] text-[#151a28]">
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
