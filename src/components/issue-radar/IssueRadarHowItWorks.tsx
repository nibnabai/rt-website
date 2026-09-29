import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

const STEPS = [
  {
    number: '01',
    title: 'We read every ticket',
    description:
      'RipeText connects to Zendesk, Intercom, or Front and ingests every conversation as it happens.'
  },
  {
    number: '02',
    title: 'Tickets cluster themselves',
    description:
      'Conversations are grouped by meaning, in real time. New issues appear on the radar the moment the second ticket lands.'
  },
  {
    number: '03',
    title: "You see what's growing and what it's costing you",
    description:
      'Every cluster ranks by velocity and exposed LTV. Click in to see the underlying tickets, the affected customers, and a draft summary you can send to engineering.'
  }
];

const SOURCES = [
  { name: 'Zendesk', volume: '1284 tickets / day' },
  { name: 'Intercom', volume: '962 tickets / day' },
  { name: 'Front', volume: '411 tickets / day' }
];

const RANKED_ISSUES = [
  {
    rank: '01',
    label: 'Checkout — card declined',
    change: '+340%',
    severity: 'high' as const
  },
  {
    rank: '02',
    label: 'Mobile crash · v4.2',
    change: '+128%',
    severity: 'medium' as const
  },
  {
    rank: '03',
    label: 'SSO redirect loop',
    change: '+44%',
    severity: 'medium' as const
  }
];

function StepHeader({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-3 px-[26px] py-[17px] border-b border-white">
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded border border-[#d9dfed] bg-white text-[13px] font-bold text-[#151a28]">
        {number}
      </span>
      <span className="text-[14px] font-medium text-[#151a28]">
        Step {number}
      </span>
    </div>
  );
}

function SourceRow({ name, volume }: { name: string; volume: string }) {
  return (
    <div className="flex items-center justify-between rounded-[11px] border border-white bg-white px-[14px] py-[10px]">
      <div className="flex items-center gap-[9px]">
        <span className="h-[9px] w-[9px] rounded bg-[#19ae57]" />
        <span className="text-[13px] font-medium text-[#151a28]">{name}</span>
      </div>
      <span className="text-[12px] text-[#151a28]">{volume}</span>
    </div>
  );
}

function Step01Visual() {
  return (
    <div className="flex h-[227px] w-full flex-col bg-[#f3f5f9] border-b border-white">
      <div className="flex flex-1 flex-col gap-[7px] p-[22px]">
        {SOURCES.map((source) => (
          <SourceRow
            key={source.name}
            name={source.name}
            volume={source.volume}
          />
        ))}
        <div className="flex items-center rounded-[11px] border border-dashed border-[#6b7280] bg-[#f2f5fb] px-[14px] py-[9px]">
          <span className="text-[12px] text-[#636a7e]">
            Streaming · &lt;30s ingestion latency
          </span>
        </div>
      </div>
    </div>
  );
}

function Step02Visual() {
  return (
    <div className="flex h-[227px] w-full items-center justify-center bg-[#f3f5f9] border-b border-white">
      <div className="relative h-[152px] w-[347px]">
        <svg
          viewBox="0 0 347 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
        >
          <line
            x1="90"
            y1="28"
            x2="220"
            y2="62"
            stroke="#c4ccd8"
            strokeWidth="1"
          />
          <line
            x1="90"
            y1="52"
            x2="220"
            y2="68"
            stroke="#c4ccd8"
            strokeWidth="1"
          />
          <line
            x1="90"
            y1="76"
            x2="220"
            y2="72"
            stroke="#c4ccd8"
            strokeWidth="1"
          />
          <line
            x1="90"
            y1="100"
            x2="220"
            y2="78"
            stroke="#c4ccd8"
            strokeWidth="1"
          />
          <line
            x1="90"
            y1="124"
            x2="220"
            y2="82"
            stroke="#c4ccd8"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute left-[6%] top-[14%] flex flex-col gap-[8px]">
          <div className="h-[16px] w-[60px] rounded-[4px] border border-[#d9dfed] bg-white" />
          <div className="h-[16px] w-[60px] rounded-[4px] border border-[#d9dfed] bg-white" />
          <div className="h-[16px] w-[60px] rounded-[4px] border border-[#d9dfed] bg-white" />
          <div className="h-[16px] w-[60px] rounded-[4px] border border-[#d9dfed] bg-white" />
          <div className="h-[16px] w-[60px] rounded-[4px] border border-[#d9dfed] bg-white" />
        </div>

        <div className="absolute right-[8%] top-[35%] flex flex-col items-center rounded-[12px] border border-[#003b95]/30 bg-[#eef4ff] px-[16px] py-[10px]">
          <p className="text-[11px] font-bold text-[#003b95]">Issue cluster</p>
          <p className="text-[10px] text-[#5d646f]">5 tickets · 4 customers</p>
        </div>
      </div>
    </div>
  );
}

function RankedIssueRow({
  rank,
  label,
  change,
  severity
}: {
  rank: string;
  label: string;
  change: string;
  severity: 'high' | 'medium';
}) {
  const badgeBg = severity === 'high' ? 'bg-[#ffe6e4]' : 'bg-[#fff1c9]';
  const badgeText = severity === 'high' ? 'text-[#a20222]' : 'text-[#b24d4f]';

  return (
    <div className="flex items-center justify-between rounded-[11px] border border-white bg-white px-[13px] py-[10px]">
      <div className="flex items-baseline gap-[9px]">
        <span className="text-[11px] text-[#151a28]">{rank}</span>
        <span className="text-[13px] font-medium text-[#151a28]">{label}</span>
      </div>
      <div
        className={`flex items-center gap-[7px] rounded-[11px] ${badgeBg} px-[9px] py-[2px]`}
      >
        <span className="h-[6.5px] w-[6.5px] rounded bg-[#de3a46]" />
        <span className={`text-[12px] font-medium ${badgeText}`}>{change}</span>
      </div>
    </div>
  );
}

function Step03Visual() {
  return (
    <div className="flex h-[227px] w-full flex-col bg-[#f3f5f9] border-b border-white">
      <div className="flex flex-1 flex-col gap-[20px] p-[22px]">
        <div className="flex flex-col gap-[7px]">
          {RANKED_ISSUES.map((issue) => (
            <RankedIssueRow
              key={issue.rank}
              rank={issue.rank}
              label={issue.label}
              change={issue.change}
              severity={issue.severity}
            />
          ))}
        </div>
        <p className="text-[12px] text-[#383838]">
          Ranked by exposed LTV · updated live
        </p>
      </div>
    </div>
  );
}

function StepContent({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-[206px] flex-col justify-center px-[26px]">
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-[19.5px] font-semibold leading-[29px] text-[#151a28]">
          {title}
        </h3>
        <p className="text-[15px] leading-[25px] text-[#636a7e]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function IssueRadarHowItWorks() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: STEPS.length,
    staggerDelay: 200,
    threshold: 0.15
  });

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="max-w-[768px]">
          <p className="font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            03 · How it works
          </p>
          <h2 className="mt-4 font-display text-[36px] leading-[1.15] tracking-[-0.5px] text-[#151a28] sm:text-[44px] lg:text-[48px] lg:leading-[46px]">
            From scattered tickets to a ranked issue feed
          </h2>
        </div>

        <div ref={containerRef} className="mt-16 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#d9dfed] bg-white"
              style={getItemStyle(idx)}
            >
              <StepHeader number={step.number} />
              {idx === 0 && <Step01Visual />}
              {idx === 1 && <Step02Visual />}
              {idx === 2 && <Step03Visual />}
              <StepContent title={step.title} description={step.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
