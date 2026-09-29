'use client';

import { useEffect, useMemo, useState } from 'react';

function RadarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="5.5" stroke="#636a7e" strokeWidth="1" />
      <circle
        cx="7"
        cy="7"
        r="2.5"
        stroke="#636a7e"
        strokeWidth="0.8"
        strokeDasharray="1.5 1.5"
      />
      <circle cx="7" cy="7" r="1.5" fill="#636a7e" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="#fcfcfd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap text-xs text-[#636a7e]">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#239f71]" />
      {children}
    </span>
  );
}

interface Dot {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}

interface Cluster {
  dots: Dot[];
  centroid: { x: number; y: number };
  labels: { x: number; y: number; text: string; underline?: boolean }[];
  labelColor: string;
  lineColor: string;
  primaryLabel: { text: string; x: number; y: number };
}

const clusters: Cluster[] = [
  {
    centroid: { x: 400, y: 145 },
    lineColor: '#c8cdd8',
    labelColor: '#7e8db2',
    primaryLabel: { text: 'LOGIN ERROR', x: 380, y: 230 },
    dots: [
      { cx: 380, cy: 150, r: 10, fill: '#3d4a6b' },
      { cx: 420, cy: 110, r: 10, fill: '#3d4a6b' },
      { cx: 460, cy: 90, r: 10, fill: '#4a5578' },
      { cx: 340, cy: 180, r: 10, fill: '#4a5578' },
      { cx: 430, cy: 160, r: 8, fill: '#5c6788' },
      { cx: 410, cy: 200, r: 8, fill: '#5c6788' },
      { cx: 350, cy: 130, r: 5, fill: '#7e8db2' },
      { cx: 440, cy: 130, r: 5, fill: '#7e8db2' },
      { cx: 310, cy: 200, r: 5, fill: '#7e8db2' },
      { cx: 450, cy: 145, r: 6.5, fill: '#5c6788' },
      { cx: 360, cy: 100, r: 6.5, fill: '#5c6788' },
      { cx: 490, cy: 120, r: 4, fill: '#9aa4c0' },
      { cx: 470, cy: 170, r: 4, fill: '#9aa4c0' },
      { cx: 305, cy: 165, r: 5, fill: '#7e8db2' },
      { cx: 500, cy: 55, r: 6.5, fill: '#5c6788' },
      { cx: 335, cy: 60, r: 9, fill: '#4a5578' }
    ],
    labels: [
      { x: 350, y: 42, text: 'LOGIN ERROR', underline: true },
      { x: 440, y: 50, text: 'LOGIN ERROR' },
      { x: 310, y: 222, text: 'LOGIN ERROR' },
      { x: 445, y: 188, text: 'LOGIN ERROR' }
    ]
  },
  {
    centroid: { x: 190, y: 385 },
    lineColor: '#c8cdd8',
    labelColor: '#596485',
    primaryLabel: { text: 'CARD DECLINED', x: 150, y: 500 },
    dots: [
      { cx: 190, cy: 380, r: 10, fill: '#596485' },
      { cx: 220, cy: 340, r: 10, fill: '#596485' },
      { cx: 150, cy: 360, r: 8, fill: '#6b7694' },
      { cx: 230, cy: 400, r: 5, fill: '#8692ad' },
      { cx: 160, cy: 420, r: 10, fill: '#596485' },
      { cx: 210, cy: 430, r: 5, fill: '#8692ad' },
      { cx: 140, cy: 395, r: 4, fill: '#9aa4be' },
      { cx: 250, cy: 310, r: 6.5, fill: '#6b7694' },
      { cx: 120, cy: 340, r: 5, fill: '#8692ad' },
      { cx: 130, cy: 450, r: 4, fill: '#9aa4be' },
      { cx: 270, cy: 370, r: 4, fill: '#9aa4be' },
      { cx: 100, cy: 410, r: 6, fill: '#6b7694' },
      { cx: 280, cy: 430, r: 5, fill: '#8692ad' },
      { cx: 120, cy: 460, r: 4, fill: '#9aa4be' }
    ],
    labels: [
      { x: 135, y: 300, text: 'CARD DECLINED', underline: true },
      { x: 215, y: 460, text: 'CARD DECLINED' },
      { x: 95, y: 480, text: 'CARD DECLINED' }
    ]
  },
  {
    centroid: { x: 520, y: 390 },
    lineColor: '#c8cdd8',
    labelColor: '#747cc5',
    primaryLabel: { text: 'PAYMENT FAILS', x: 490, y: 500 },
    dots: [
      { cx: 500, cy: 390, r: 10, fill: '#5a5cb8' },
      { cx: 530, cy: 350, r: 10, fill: '#5a5cb8' },
      { cx: 460, cy: 370, r: 8, fill: '#6b6dc5' },
      { cx: 540, cy: 410, r: 10, fill: '#5a5cb8' },
      { cx: 470, cy: 430, r: 5, fill: '#8284d0' },
      { cx: 550, cy: 380, r: 8, fill: '#6b6dc5' },
      { cx: 560, cy: 320, r: 6.5, fill: '#6b6dc5' },
      { cx: 570, cy: 360, r: 5, fill: '#8284d0' },
      { cx: 440, cy: 460, r: 5, fill: '#8284d0' },
      { cx: 580, cy: 440, r: 6, fill: '#6b6dc5' },
      { cx: 610, cy: 380, r: 4, fill: '#9a9bdb' },
      { cx: 590, cy: 470, r: 5, fill: '#8284d0' },
      { cx: 620, cy: 310, r: 6.5, fill: '#6b6dc5' },
      { cx: 490, cy: 460, r: 4, fill: '#9a9bdb' },
      { cx: 575, cy: 295, r: 4, fill: '#9a9bdb' }
    ],
    labels: [
      { x: 450, y: 308, text: 'PAYMENT FAILS' },
      { x: 545, y: 300, text: 'PAYMENT FAILS', underline: true },
      { x: 420, y: 490, text: 'PAYMENT FAILS' }
    ]
  }
];

interface TicketCardData {
  x: number;
  y: number;
  title: string;
  label: string;
  highlightDot: { cx: number; cy: number };
  clusterIndex: number;
}

const ticketCards: TicketCardData[] = [
  {
    x: 230,
    y: 55,
    title: 'Sarah Mitchell',
    label: 'Login error',
    highlightDot: { cx: 380, cy: 150 },
    clusterIndex: 0
  },
  {
    x: 0,
    y: 310,
    title: 'David Chen',
    label: 'Card declined',
    highlightDot: { cx: 190, cy: 380 },
    clusterIndex: 1
  },
  {
    x: 560,
    y: 340,
    title: 'Emma Johnson',
    label: 'Payment fails',
    highlightDot: { cx: 540, cy: 410 },
    clusterIndex: 2
  }
];

type AnimationPhase = 'dots' | 'cards' | 'clustering' | 'done' | 'settled';

const totalDotCount = clusters.reduce((sum, c) => sum + c.dots.length, 0);

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generateShuffledOrder(count: number): number[] {
  const arr = Array.from({ length: count }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(i + 42) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateWrongCentroids(seed: number): { x: number; y: number }[] {
  return Array.from({ length: clusters.length }, (_, i) => {
    const x = 80 + seededRandom(seed * 31 + i * 17) * 500;
    const y = 80 + seededRandom(seed * 43 + i * 23 + 7) * 400;
    return { x, y };
  });
}

function findNearestCentroid(
  dot: { cx: number; cy: number },
  centroids: { x: number; y: number }[]
): { x: number; y: number } {
  let nearest = centroids[0];
  let minDist = Infinity;
  for (const c of centroids) {
    const dx = dot.cx - c.x;
    const dy = dot.cy - c.y;
    const dist = dx * dx + dy * dy;
    if (dist < minDist) {
      minDist = dist;
      nearest = c;
    }
  }
  return nearest;
}

function TicketCard({
  x,
  y,
  title,
  label,
  visible
}: {
  x: number;
  y: number;
  title: string;
  label: string;
  visible: boolean;
}) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease-in-out'
      }}
    >
      <rect
        width="94"
        height="100"
        rx="7"
        fill="white"
        stroke="#dedede"
        strokeWidth="0.73"
        filter="url(#cardShadow)"
      />
      <text
        x="7.4"
        y="11"
        fontSize="6.7"
        fontWeight="500"
        fill="#0f1729"
        fontFamily="Inter, sans-serif"
      >
        Documentation Request
      </text>
      <text
        x="7.4"
        y="21"
        fontSize="5.9"
        fill="#9ca3af"
        fontFamily="Inter, sans-serif"
      >
        Jan 18, 2026
      </text>
      <text
        x="7.4"
        y="50"
        fontSize="12"
        fill="#0f1729"
        fontFamily="Inter, sans-serif"
      >
        {label}
      </text>
      <text
        x="7.4"
        y="82"
        fontSize="5.9"
        fill="#9ca3af"
        fontFamily="Inter, sans-serif"
      >
        Assigned To:
      </text>
      <text
        x="7.4"
        y="92"
        fontSize="5.9"
        fontWeight="600"
        fill="#0f1729"
        fontFamily="Inter, sans-serif"
      >
        {title}
      </text>
      <circle cx="62" cy="85" r="9" fill="#c4c9d4" />
    </g>
  );
}

function FloatingDot({
  cx,
  cy,
  r,
  fill,
  visible,
  isHighlighted,
  showClusterColor,
  index
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  visible: boolean;
  isHighlighted: boolean;
  showClusterColor: boolean;
  index: number;
}) {
  const amplitude = 2 + (index % 5) * 0.6;
  const duration = 3 + (index % 7) * 0.4;
  const delay = (index % 11) * 0.3;
  const angle = (index * 137.5) % 360;

  const animName = `float-${index}`;
  const keyframes = `
    @keyframes ${animName} {
      0%, 100% { transform: translate(0px, 0px); }
      25% { transform: translate(${
        amplitude * Math.cos((angle * Math.PI) / 180)
      }px, ${amplitude * Math.sin((angle * Math.PI) / 180)}px); }
      50% { transform: translate(${
        -amplitude * 0.7 * Math.cos(((angle + 60) * Math.PI) / 180)
      }px, ${amplitude * 0.8 * Math.sin(((angle + 90) * Math.PI) / 180)}px); }
      75% { transform: translate(${
        amplitude * 0.5 * Math.cos(((angle + 120) * Math.PI) / 180)
      }px, ${-amplitude * 0.6 * Math.sin(((angle + 45) * Math.PI) / 180)}px); }
    }
  `;

  return (
    <g
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <style>{keyframes}</style>
      <circle
        cx={cx}
        cy={cy}
        r={isHighlighted ? r * 1.2 : r}
        fill={showClusterColor ? fill : '#8692ad'}
        stroke={isHighlighted ? '#0f1729' : 'none'}
        strokeWidth={isHighlighted ? 2 : 0}
        style={{
          animation: `${animName} ${duration}s ease-in-out ${delay}s infinite`,
          transition:
            'fill 0.8s ease-in-out, r 0.3s ease-in-out, stroke 0.3s ease-in-out'
        }}
      />
    </g>
  );
}

function ClusterVisualization() {
  const [phase, setPhase] = useState<AnimationPhase>('dots');
  const [visibleDots, setVisibleDots] = useState<Set<number>>(new Set());
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [clusteringIteration, setClusteringIteration] = useState(0);
  const [linesVisible, setLinesVisible] = useState(false);
  const [cycle, setCycle] = useState(0);

  const shuffledOrder = useMemo(() => generateShuffledOrder(totalDotCount), []);

  const wrongCentroidSets = useMemo(() => {
    return [
      generateWrongCentroids(1),
      generateWrongCentroids(2),
      generateWrongCentroids(3)
    ];
  }, []);

  const CLUSTERING_ITERATIONS = wrongCentroidSets.length + 1;

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    if (cycle === 0) {
      shuffledOrder.forEach((dotIdx, i) => {
        const t = setTimeout(() => {
          setVisibleDots((prev) => new Set(prev).add(dotIdx));
        }, 100 + i * 60);
        timers.push(t);
      });
    }

    const allDotsVisibleAt = cycle === 0 ? 100 + totalDotCount * 60 : 0;

    const cardPhaseTimer = setTimeout(() => {
      setPhase('cards');
      ticketCards.forEach((_, i) => {
        const t = setTimeout(() => {
          setVisibleCards((prev) => [...prev, i]);
        }, i * 800);
        timers.push(t);
      });
    }, allDotsVisibleAt + 400);

    timers.push(cardPhaseTimer);

    const clusteringStart =
      allDotsVisibleAt + 400 + ticketCards.length * 800 + 600;

    const clusteringTimer = setTimeout(() => {
      setPhase('clustering');
      setClusteringIteration(1);
      setLinesVisible(true);
    }, clusteringStart);
    timers.push(clusteringTimer);

    for (let i = 1; i < CLUSTERING_ITERATIONS; i++) {
      const hideT = setTimeout(() => {
        setLinesVisible(false);
      }, clusteringStart + i * 1200 - 200);
      timers.push(hideT);

      const t = setTimeout(() => {
        setClusteringIteration(i + 1);
        setLinesVisible(true);
      }, clusteringStart + i * 1200);
      timers.push(t);
    }

    const doneTimer = setTimeout(() => {
      setPhase('done');
      setLinesVisible(true);
    }, clusteringStart + CLUSTERING_ITERATIONS * 1200 + 400);
    timers.push(doneTimer);

    const settledTimer = setTimeout(() => {
      setPhase('settled');
    }, clusteringStart + CLUSTERING_ITERATIONS * 1200 + 2200);
    timers.push(settledTimer);

    const restartTimer = setTimeout(() => {
      setPhase('dots');
      setVisibleCards([]);
      setClusteringIteration(0);
      setLinesVisible(false);
      setCycle((c) => c + 1);
    }, clusteringStart + CLUSTERING_ITERATIONS * 1200 + 2200 + 15000);
    timers.push(restartTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [cycle, shuffledOrder, wrongCentroidSets, CLUSTERING_ITERATIONS]);

  const showLabels = phase === 'done';
  const showClusteringLabel = phase === 'clustering';
  const isSettled = phase === 'settled';

  const currentCentroids = useMemo(() => {
    if (
      phase === 'done' ||
      phase === 'settled' ||
      clusteringIteration >= CLUSTERING_ITERATIONS
    ) {
      return clusters.map((c) => c.centroid);
    }
    if (clusteringIteration === 0) {
      return clusters.map((c) => c.centroid);
    }
    return (
      wrongCentroidSets[clusteringIteration - 1] ??
      clusters.map((c) => c.centroid)
    );
  }, [phase, clusteringIteration, wrongCentroidSets, CLUSTERING_ITERATIONS]);

  const isDone = phase === 'done' || phase === 'settled';

  const clusterDotOffsets = useMemo(() => {
    let offset = 0;
    return clusters.map((c) => {
      const start = offset;
      offset += c.dots.length;
      return start;
    });
  }, []);

  return (
    <svg
      viewBox="0 0 660 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow
            dx="0"
            dy="4.4"
            stdDeviation="2.2"
            floodColor="rgba(0,0,0,0.1)"
          />
        </filter>
      </defs>

      {clusters.map((cluster, ci) => {
        const dotOffset = clusterDotOffsets[ci];
        return (
          <g key={ci} opacity="0.85">
            {cluster.dots.map((dot, di) => {
              const targetCentroid = isDone
                ? cluster.centroid
                : findNearestCentroid(dot, currentCentroids);
              return (
                <line
                  key={`line-${ci}-${di}`}
                  x1={targetCentroid.x}
                  y1={targetCentroid.y}
                  x2={dot.cx}
                  y2={dot.cy}
                  stroke={cluster.lineColor}
                  strokeWidth="0.8"
                  style={{
                    opacity: linesVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              );
            })}

            {cluster.dots.map((dot, di) => {
              const dotGlobalIdx = dotOffset + di;
              const isHighlighted =
                !isSettled &&
                ticketCards.some(
                  (tc) =>
                    tc.clusterIndex === ci &&
                    tc.highlightDot.cx === dot.cx &&
                    tc.highlightDot.cy === dot.cy &&
                    visibleCards.includes(ticketCards.indexOf(tc))
                );

              return (
                <FloatingDot
                  key={`dot-${ci}-${di}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  fill={dot.fill}
                  visible={visibleDots.has(dotGlobalIdx)}
                  isHighlighted={isHighlighted}
                  showClusterColor={isDone}
                  index={dotGlobalIdx}
                />
              );
            })}

            {cluster.labels.map((label, li) => (
              <text
                key={`label-${ci}-${li}`}
                x={label.x}
                y={label.y}
                fontSize="8"
                fill={cluster.labelColor}
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="2.4"
                textDecoration={label.underline ? 'underline' : undefined}
                style={{
                  opacity: showLabels && !isSettled ? 1 : 0,
                  transition: `opacity 0.6s ease-in-out ${0.2 + li * 0.1}s`
                }}
              >
                {label.text}
              </text>
            ))}

            <text
              x={cluster.primaryLabel.x}
              y={cluster.primaryLabel.y}
              fontSize="11"
              fontWeight="600"
              fill={cluster.labelColor}
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="2.4"
              textAnchor="middle"
              style={{
                opacity: isSettled ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out 0.3s'
              }}
            >
              {cluster.primaryLabel.text}
            </text>
          </g>
        );
      })}

      {ticketCards.map((card, i) => (
        <TicketCard
          key={`card-${i}`}
          x={card.x}
          y={card.y}
          title={card.title}
          label={card.label}
          visible={visibleCards.includes(i) && !isSettled}
        />
      ))}

      <text
        x="360"
        y="540"
        fontSize="23"
        fill="#596485"
        fontFamily="JetBrains Mono, monospace"
        letterSpacing="2.4"
        style={{
          opacity: showClusteringLabel ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}
      >
        CLUSTERING...
      </text>
    </svg>
  );
}

export function IssueRadarHero() {
  return (
    <section
      className="relative overflow-hidden"
      id="hero"
      style={{
        backgroundImage:
          'linear-gradient(rgb(252, 252, 253) 0%, rgb(246, 246, 249) 100%)'
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(227,230,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(227,230,237,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />

      {/* Subtle radial glow at top center */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(12,174,233,0.08) 0%, transparent 60%)'
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-[109px] lg:px-8 lg:pb-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8 xl:grid-cols-[1.15fr_1fr]">
          {/* Left - Copy */}
          <div className="max-w-[660px]">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e6ed] bg-white/70 px-3 py-1.5 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] backdrop-blur-xs">
              <RadarIcon />
              <span className="text-xs font-medium text-[#636a7e]">
                Issue Radar &middot; For Support &amp; Product Teams
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-[54px] font-display text-[44px] leading-[1.02] tracking-[-1.5px] text-[#151a28] sm:text-[56px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.8px]">
              Discover groups of tickets about the{' '}
              <span className="text-[#0caee9]">same problem</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-[573px] text-lg leading-[29.25px] text-[#636a7e]">
              We cluster tickets based on the underlying problem they report.
              Then we measure how do those clusters grow and what is the impact
              to your revenue.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex items-center gap-3">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-[10px] bg-[#0f1d43] px-8 py-3 text-sm font-medium text-[#fcfcfd] transition-colors hover:bg-[#0f1d43]/90"
              >
                Book a Demo
                <ArrowRightIcon />
              </a>
              <a
                href="mailto:sales@ripetext.com"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#e3e6ed] bg-[#fcfcfd] px-8 py-3 text-sm font-medium text-[#151a28] transition-colors hover:bg-[#f2f4f7]"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <TrustBadge>Cluster-based detection</TrustBadge>
              <TrustBadge>Trend &amp; growth tracking</TrustBadge>
              <TrustBadge>Audit-ready exports</TrustBadge>
            </div>
          </div>

          {/* Right - Cluster visualization */}
          <div className="hidden lg:block relative mt-4">
            <div className="w-full h-[520px]">
              <ClusterVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
