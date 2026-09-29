import { outcomeFeatures } from './data';

function FeatureIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    shield: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <path
          d="M10 1.667l-6.667 3v4.666c0 4.334 2.84 8.39 6.667 9.334 3.826-.944 6.667-5 6.667-9.334V4.667L10 1.667z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10l2 2 4-4"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    rewrite: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <path
          d="M17.5 10.833v3.334a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 14.167V5.833A1.667 1.667 0 014.167 4.167h5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 2.5a1.768 1.768 0 012.5 2.5L11.25 11.25 8.333 12.083l.834-2.916L15 2.5z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <rect
          x="2.5"
          y="2.5"
          width="15"
          height="15"
          rx="1.667"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <path
          d="M6.667 13.333V10M10 13.333V6.667M13.333 13.333V8.333"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    audit: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <path
          d="M11.667 2.5H5.833A1.667 1.667 0 004.167 4.167v11.666a1.667 1.667 0 001.666 1.667h8.334a1.667 1.667 0 001.666-1.667V7.5l-4.166-5z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.667 2.5V7.5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  };
  return <>{iconMap[icon] ?? null}</>;
}

export function FhaOutcomes() {
  return (
    <section
      id="outcomes"
      className="border-y border-[#e3e6ed] bg-[#f2f4f7]/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-[5fr_3.5fr_3.5fr] lg:gap-4">
          {/* Header */}
          <div className="lg:row-span-1">
            <p className="font-mono text-xs uppercase tracking-[2.4px] text-[#0caee9]">
              04 · Outcomes
            </p>
            <h2 className="mt-4 font-display text-5xl tracking-tight text-[#151a28]">
              Built for <em className="font-display italic">defensible</em>{' '}
              compliance oversight.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#636a7e]">
              RipeText gives compliance, legal, and operations teams a
              documented record of how their organization communicates — and a
              clear path to make it better.
            </p>
          </div>

          {/* Top-right feature cards (row 1, cols 2-3) */}
          {outcomeFeatures.slice(0, 2).map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#e3e6ed] bg-white p-6 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] transition-shadow duration-300 hover:shadow-[0px_4px_12px_-4px_rgba(21,26,40,0.1)]"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #0CAEE9 0%, #0BB8CB 100%)'
                }}
              >
                <FeatureIcon icon={feature.icon} />
              </div>
              <p className="mt-5 text-base font-semibold leading-6 text-[#151a28]">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-[22.75px] text-[#636a7e]">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Stat card (row 2, col 1) */}
          <div className="self-end rounded-2xl border border-[#e3e6ed] bg-white p-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[56px] leading-none tracking-tight text-[#151a28]">
                87%
              </span>
              <span className="text-sm leading-snug text-[#636a7e]">
                of FHA violations stem from informal language*
              </span>
            </div>
            <div className="mt-4 h-[6px] w-full overflow-hidden rounded-full bg-[#e3e6ed]">
              <div
                className="h-full rounded-full"
                style={{
                  width: '87%',
                  background: 'linear-gradient(90deg, #0CAEE9 0%, #0BB8CB 100%)'
                }}
              />
            </div>
            <p className="mt-3 text-xs text-[#9ca3b4]">
              *Internal RipeText analysis across enterprise PM clients, 2026.
            </p>
          </div>

          {/* Bottom-right feature cards (row 2, cols 2-3) */}
          {outcomeFeatures.slice(2, 4).map((feature) => (
            <div
              key={feature.title}
              className="self-start rounded-2xl border border-[#e3e6ed] bg-white p-6 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] transition-shadow duration-300 hover:shadow-[0px_4px_12px_-4px_rgba(21,26,40,0.1)]"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #0CAEE9 0%, #0BB8CB 100%)'
                }}
              >
                <FeatureIcon icon={feature.icon} />
              </div>
              <p className="mt-5 text-base font-semibold leading-6 text-[#151a28]">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-[22.75px] text-[#636a7e]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Header */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[2.4px] text-[#0caee9]">
              04 · Outcomes
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-[#151a28]">
              Built for <em className="font-display italic">defensible</em>{' '}
              compliance oversight.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#636a7e]">
              RipeText gives compliance, legal, and operations teams a
              documented record of how their organization communicates — and a
              clear path to make it better.
            </p>
          </div>

          {/* Stat card */}
          <div className="rounded-2xl border border-[#e3e6ed] bg-white p-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[56px] leading-none tracking-tight text-[#151a28]">
                87%
              </span>
              <span className="text-sm leading-snug text-[#636a7e]">
                of FHA violations stem from informal language*
              </span>
            </div>
            <div className="mt-4 h-[6px] w-full overflow-hidden rounded-full bg-[#e3e6ed]">
              <div
                className="h-full rounded-full"
                style={{
                  width: '87%',
                  background: 'linear-gradient(90deg, #0CAEE9 0%, #0BB8CB 100%)'
                }}
              />
            </div>
            <p className="mt-3 text-xs text-[#9ca3b4]">
              *Internal RipeText analysis across enterprise PM clients, 2026.
            </p>
          </div>

          {/* Feature cards */}
          {outcomeFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#e3e6ed] bg-white p-6 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)]"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background:
                    'linear-gradient(135deg, #0CAEE9 0%, #0BB8CB 100%)'
                }}
              >
                <FeatureIcon icon={feature.icon} />
              </div>
              <p className="mt-5 text-base font-semibold leading-6 text-[#151a28]">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-[22.75px] text-[#636a7e]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
