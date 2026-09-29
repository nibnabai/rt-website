'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatedNumber } from '@/components/lp/AnimatedNumber';

function ClusterVisualization({ animate }: { animate: boolean }) {
  const centroid = { cx: 466, cy: 189 };

  const grayDots = [
    { cx: 67, cy: 67, r: 3.3 },
    { cx: 133, cy: 44, r: 3.3 },
    { cx: 89, cy: 133, r: 3.3 },
    { cx: 44, cy: 222, r: 3.3 },
    { cx: 122, cy: 266, r: 3.3 },
    { cx: 67, cy: 322, r: 3.3 },
    { cx: 244, cy: 78, r: 3.3 },
    { cx: 288, cy: 144, r: 3.3 },
    { cx: 222, cy: 200, r: 3.3 },
    { cx: 266, cy: 277, r: 3.3 },
    { cx: 200, cy: 333, r: 3.3 }
  ];

  const orangeDots = [
    { cx: 621, cy: 89, r: 3.9 },
    { cx: 688, cy: 144, r: 3.9 },
    { cx: 643, cy: 222, r: 3.9 },
    { cx: 710, cy: 277, r: 3.9 },
    { cx: 621, cy: 322, r: 3.9 }
  ];

  return (
    <svg
      viewBox="0 0 887 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <radialGradient
          id="clusterCoreGlow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(${centroid.cx} ${centroid.cy}) scale(133.093)`}
        >
          <stop stopColor="#DE3A46" stopOpacity="0.18" />
          <stop offset="1" stopColor="#DE3A46" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g
        style={{
          opacity: animate ? 1 : 0,
          transition: 'opacity 1s ease-out 0.3s'
        }}
      >
        {grayDots.map((dot, i) => (
          <line
            key={`gray-line-${i}`}
            x1={centroid.cx}
            y1={centroid.cy}
            x2={dot.cx}
            y2={dot.cy}
            stroke="#636a7e"
            strokeWidth="0.8"
            opacity="0.35"
          />
        ))}
        {orangeDots.map((dot, i) => (
          <line
            key={`orange-line-${i}`}
            x1={centroid.cx}
            y1={centroid.cy}
            x2={dot.cx}
            y2={dot.cy}
            stroke="#636a7e"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            opacity="0.35"
          />
        ))}
      </g>

      {/* Figma 7079:5892 — large soft radial glow behind cluster core */}
      <circle
        cx={centroid.cx}
        cy={centroid.cy}
        r="133.093"
        fill="url(#clusterCoreGlow)"
        style={{
          opacity: animate ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.5s'
        }}
      />

      <g>
        {grayDots.map((dot, i) => (
          <circle
            key={`gray-dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#8b93a8"
            style={{
              opacity: animate ? 1 : 0,
              transition: `opacity 0.5s ease-out ${0.4 + i * 0.05}s`
            }}
          />
        ))}
      </g>

      <g>
        {orangeDots.map((dot, i) => (
          <circle
            key={`orange-dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#e8a045"
            style={{
              opacity: animate ? 1 : 0,
              transition: `opacity 0.5s ease-out ${0.55 + i * 0.05}s`
            }}
          />
        ))}
      </g>

      <g
        style={{
          opacity: animate ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.6s'
        }}
      >
        <circle
          cx={centroid.cx}
          cy={centroid.cy}
          r="31"
          fill="white"
          stroke="#de3a46"
          strokeWidth="1.5"
        />
        <circle cx={centroid.cx} cy={centroid.cy} r="6.5" fill="#de3a46" />
      </g>
    </svg>
  );
}

function TrajectoryChart({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 320 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M0 58 C20 56, 40 55, 60 54 C80 53, 100 52, 120 50 C140 48, 160 46, 180 42 C200 38, 220 32, 240 24 C260 16, 280 8, 300 3 L320 0"
        stroke="#de3a46"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="400"
        strokeDashoffset={animate ? '0' : '400'}
        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
      />
      <path
        d="M0 58 C20 56, 40 55, 60 54 C80 53, 100 52, 120 50 C140 48, 160 46, 180 42 C200 38, 220 32, 240 24 C260 16, 280 8, 300 3 L320 0 L320 65 L0 65 Z"
        fill="url(#trajectoryGradient)"
        style={{
          opacity: animate ? 1 : 0,
          transition: 'opacity 1s ease-out 0.8s'
        }}
      />
      <defs>
        <linearGradient id="trajectoryGradient" x1="0" y1="0" x2="0" y2="65">
          <stop offset="0%" stopColor="#de3a46" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#de3a46" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const FEED_ROWS = [
  {
    rank: '01',
    issue: 'Checkout — card declined on Stripe',
    tickets: '47',
    ltv: '$184,200',
    velocity: '+340%',
    bgColor: 'bg-[#f6d5d5]'
  },
  {
    rank: '02',
    issue: 'Mobile app crash after 4.2 update',
    tickets: '31',
    ltv: '$96,400',
    velocity: '+128%',
    bgColor: 'bg-[#fff6e5]'
  },
  {
    rank: '03',
    issue: 'SSO redirect loop · enterprise tenants',
    tickets: '18',
    ltv: '$71,800',
    velocity: '+44%',
    bgColor: 'bg-[#fff6e5]'
  },
  {
    rank: '04',
    issue: 'Refund policy confusion · EU region',
    tickets: '22',
    ltv: '$28,300',
    velocity: '+12%',
    bgColor: 'bg-[#fff6e5]'
  }
];

export function IssueRadarDemo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative hidden py-16 md:block lg:py-24" id="demo">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div
          ref={cardRef}
          className="rounded-[20px] border border-[#d9dfed] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white bg-[#f3f5f9] px-5 py-3">
            <div className="flex items-center gap-6">
              <div className="flex gap-[7px]">
                <span className="h-[11px] w-[11px] rounded-full bg-[#e36725]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#f5c43b]" />
                <span className="h-[11px] w-[11px] rounded-full bg-[#19ae57]" />
              </div>
              <span className="text-[13px] font-medium text-[#636a7e]">
                Issue Radar — Live inbox
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-white px-[9px] py-[2px] text-[12px] font-medium text-[#747cc5]">
                <span className="h-[7px] w-[7px] rounded-[3px] bg-[#00009b]" />
                Connected · Zendesk
              </span>
              <span className="flex items-center gap-[7px] rounded-full bg-[#daf7e3] px-[9px] py-[2px] text-[12px] font-medium text-[#00009b]">
                <span className="h-[7px] w-[7px] rounded-[3px] bg-[#00009b]" />
                Live
              </span>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex">
            {/* Left panel - Cluster visualization */}
            <div className="relative flex-1 border-r border-white">
              <div className="flex items-center justify-between px-6 pt-4 pb-2">
                <div>
                  <p className="text-[12px] font-medium text-[#6b7280]">
                    Inbound
                  </p>
                  <p className="text-[16px] font-bold text-[#6b7280]">
                    Tickets clustering in real time
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#fff6e5] px-[9px] py-[2px] text-[12px] font-medium text-[#b24d4f]">
                    <span className="h-[7px] w-[7px] rounded-[3px] bg-[#de3a46]" />
                    Velocity spike detected
                  </span>
                  <span className="rounded-full bg-[#e0e4fe] px-[9px] py-[2px] text-[12px] font-medium text-[#464bc4]">
                    Last 24h
                  </span>
                </div>
              </div>

              <div className="relative aspect-887/394 w-full min-h-[394px]">
                <div className="absolute inset-x-0 bottom-0 top-[14.84%] overflow-hidden">
                  <ClusterVisualization animate={isVisible} />
                </div>

                {/* Main cluster label — Figma 7079:5922 / 7089:8040 */}
                <div
                  className="absolute rounded-[12px] border border-[#e3e3e3] bg-white px-[13px] py-[8px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
                  style={{
                    left: '44.01%',
                    top: '40.69%',
                    width: '25.65%',
                    maxWidth: '228px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                    transition:
                      'opacity 0.6s ease-out 0.8s, transform 0.6s ease-out 0.8s'
                  }}
                >
                  <div className="flex flex-col gap-[5px]">
                    <span className="inline-flex w-fit items-center gap-[7px] rounded-[12px] bg-[#f6d5d5] px-[9px] py-[2px] text-[12.6px] font-medium leading-[18.5px] text-[#a20222]">
                      <span className="h-[7px] w-[7px] rounded-[3px] bg-[#de3a46]" />
                      Cluster · 94%
                    </span>
                    <div className="text-[#6b7280]">
                      <p className="text-[13.9px] font-bold leading-[21px]">
                        Checkout — card declined
                      </p>
                      <p className="text-[12.7px] font-normal leading-[18.5px]">
                        47 tickets · 38 customers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emerging cluster label — Figma 7079:5928 */}
                <div
                  className="absolute w-[206px] rounded-[12px] border border-[#dbd9d9] bg-white px-[13px] py-[9px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
                  style={{
                    left: '73.7%',
                    top: '19.8%',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                    transition:
                      'opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s'
                  }}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="inline-flex w-full items-center gap-[7px] rounded-[10px] bg-[#fff6e5] px-[9px] py-[2px] text-[12px] font-medium text-[#546087]">
                      <span className="h-[7px] w-[7px] rounded-[3px] bg-[#de3a46]" />
                      Emerging · mobile crash
                    </span>
                    <p className="text-[12px] leading-tight text-[#546087]">
                      31 tickets · +128% / 24h
                    </p>
                  </div>
                </div>

                {/* Inbound stream label */}
                <div
                  className="absolute bottom-4 left-4 rounded-xl border border-[#dbd9d9] bg-white px-[13px] py-2 shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.6s ease-out 1.2s'
                  }}
                >
                  <p className="text-[11px] font-normal uppercase text-[#6b7280]">
                    Inbound stream
                  </p>
                  <p className="text-[12px] text-[#6b7280]">
                    142 tickets / hour
                  </p>
                </div>
              </div>
            </div>

            {/* Right panel - Issue details */}
            <div className="flex w-[340px] shrink-0 flex-col items-center gap-[23px] pt-0 xl:w-[444px]">
              {/* Top issue header */}
              <div
                className="w-full border-b border-white px-6 py-[14px]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(12px)',
                  transition:
                    'opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s'
                }}
              >
                <p className="text-[12px] font-medium text-[#7e8db2]">
                  Top issue
                </p>
                <div className="mt-[5px] flex items-center justify-between">
                  <p className="text-[16px] font-bold text-[#151a28]">
                    Checkout — card declined
                  </p>
                  <span className="flex items-center gap-[7px] rounded-full bg-[rgba(255,165,0,0.1)] px-[9px] py-[2px] text-[12px] font-medium text-[#a20222]">
                    <span className="h-[7px] w-[7px] rounded-[3px] bg-[#de3a46]" />
                    Emerging
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="flex w-full flex-col gap-[19px] px-6">
                {/* Exposed LTV */}
                <div
                  className="rounded-[14px] border border-[rgba(126,141,178,0.2)] bg-[#f3f5f9] p-[15px]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition:
                      'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s'
                  }}
                >
                  <p className="text-[12px] font-medium text-[#636a7e]">
                    Exposed LTV
                  </p>
                  <div className="mt-[5px] flex items-center justify-between">
                    <span className="text-[28px] font-semibold leading-tight text-[#151a28]">
                      <AnimatedNumber
                        value={184200}
                        animate={isVisible}
                        prefix="$"
                      />
                    </span>
                    <span className="text-[12px] font-medium text-[#cc2538]">
                      +$42.1k / 24h
                    </span>
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-[14px]">
                  {[
                    { label: 'Tickets', value: '47', sub: '2h', delay: '0.7s' },
                    {
                      label: 'Customers',
                      value: '38',
                      sub: 'unique',
                      delay: '0.8s'
                    },
                    {
                      label: 'Confidence',
                      value: '94%',
                      sub: 'cluster',
                      delay: '0.9s'
                    },
                    {
                      label: 'Velocity',
                      value: '+340%',
                      sub: 'vs. 24h',
                      delay: '1s',
                      valueColor: 'text-[#cc2538]'
                    }
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-[rgba(126,141,178,0.2)] bg-white px-[15px] py-[10px]"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? 'translateY(0)'
                          : 'translateY(8px)',
                        transition: `opacity 0.5s ease-out ${metric.delay}, transform 0.5s ease-out ${metric.delay}`
                      }}
                    >
                      <p className="text-[11px] font-medium text-[#7e8db2]">
                        {metric.label}
                      </p>
                      <div className="mt-[2px] flex items-center gap-[7px]">
                        <span
                          className={`text-[18px] font-bold ${
                            metric.valueColor ?? 'text-[#151a28]'
                          }`}
                        >
                          {metric.value}
                        </span>
                        <span className="text-[11px] font-normal text-[#7e8db2]">
                          {metric.sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trajectory */}
                <div
                  className="rounded-[14px] border border-[rgba(126,141,178,0.2)] bg-[#f3f5f9] p-[15px]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition:
                      'opacity 0.6s ease-out 1.1s, transform 0.6s ease-out 1.1s'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-medium text-[#636a7e]">
                      Trajectory
                    </p>
                    <span className="rounded-[3px] bg-white px-[9px] py-[2px] text-[12px] font-medium text-[#7e8db2]">
                      +340% / 24h
                    </span>
                  </div>
                  <div className="mt-[10px] h-[65px]">
                    <TrajectoryChart animate={isVisible} />
                  </div>
                </div>
              </div>

              {/* Escalate button */}
              <div
                className="w-full px-6 pb-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                  transition:
                    'opacity 0.5s ease-out 1.3s, transform 0.5s ease-out 1.3s'
                }}
              >
                <button className="w-full rounded-xl bg-[#151a28] py-[10px] text-[13px] font-medium text-white">
                  Escalate to engineering
                </button>
              </div>
            </div>
          </div>

          {/* Bottom - Issue feed */}
          <div className="border-t border-[rgba(126,141,178,0.2)] bg-[rgba(207,211,221,0.2)]">
            <div className="flex items-center justify-between px-6 py-[14px]">
              <p className="text-[12px] font-medium text-[#636a7e]">
                Issue feed · ranked by exposed LTV
              </p>
              <p className="text-[12px] font-normal text-[#636a7e]">
                12 active clusters
              </p>
            </div>
            <div>
              {FEED_ROWS.map((row, index) => (
                <div
                  key={row.rank}
                  className="flex items-center gap-9 border-b border-white px-6 py-[14px] last:border-b-0"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 0.5s ease-out ${
                      1.4 + index * 0.15
                    }s, transform 0.5s ease-out ${1.4 + index * 0.15}s`
                  }}
                >
                  <span className="w-[72px] text-[12px] font-normal text-[#636a7e]">
                    {row.rank}
                  </span>
                  <span className="flex flex-1 items-center gap-[9px] text-[13px] font-medium text-[#636a7e]">
                    <span className="h-[7px] w-[7px] rounded-[3px] bg-[#000016]" />
                    {row.issue}
                  </span>
                  <span className="w-[72px] text-[13px] font-normal text-[#636a7e]">
                    {row.tickets}
                  </span>
                  <span className="w-[155px] text-[13px] font-medium text-[#636a7e]">
                    {row.ltv}
                  </span>
                  <span
                    className={`flex items-center gap-[3px] rounded-full ${row.bgColor} px-[9px] py-[2px] text-[12px] font-medium text-[#a20222]`}
                  >
                    <span className="h-[7px] w-[7px] rounded-[3px] bg-[#de3a46]" />
                    {row.velocity}
                    <span className="ml-0">/ 24h</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
