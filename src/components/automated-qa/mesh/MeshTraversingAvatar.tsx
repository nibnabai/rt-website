'use client';

import { cn } from '@/lib/utils';

type MeshTraversingAvatarProps = {
  kind: 'human' | 'ai';
  label: string;
  /** `embed` — status-quo 350×160 card; `compact` — legacy tight layout. */
  size?: 'default' | 'compact' | 'embed';
  style?: React.CSSProperties;
  className?: string;
};

const STROKE = '#151a28';
const STROKE_ROBOT = '#0f1d43';
const STROKE_WIDTH = 1.5;

/** Pivot at (0,0) after parent translate — avoids SVG + CSS origin bugs. */
const legA = 'origin-top animate-mesh-walk-leg motion-reduce:animate-none';
const legB = 'origin-top animate-mesh-walk-leg-alt motion-reduce:animate-none';

function Limb({
  className,
  x2,
  y2,
  stroke = STROKE
}: {
  className: string;
  x2: number;
  y2: number;
  stroke?: string;
}) {
  return (
    <g
      className={className}
      style={{ transformOrigin: '0px 0px', transformBox: 'fill-box' }}
    >
      <line
        x1={0}
        y1={0}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
      />
    </g>
  );
}

function WalkHumanIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 34"
      fill="none"
      aria-hidden
      className={cn(
        'text-lp-navy',
        className ?? 'h-5 w-3.5 sm:h-[34px] sm:w-6'
      )}
    >
      <circle
        cx="12"
        cy="5.5"
        r="3"
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
      />
      <path
        d="M12 8.5v11"
        stroke={STROKE}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
      />
      <g transform="translate(12 19.5)">
        <Limb className={legA} x2={-1.5} y2={11.5} />
      </g>
      <g transform="translate(12 19.5)">
        <Limb className={legB} x2={1.5} y2={11.5} />
      </g>
      <g transform="translate(12 11)">
        <Limb className={legB} x2={-4} y2={6.5} />
      </g>
      <g transform="translate(12 11)">
        <Limb className={legA} x2={4} y2={6.5} />
      </g>
    </svg>
  );
}

function WalkRobotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 32"
      fill="none"
      aria-hidden
      className={cn(
        'text-lp-navy',
        className ?? 'h-[18px] w-[15px] sm:h-[32px] sm:w-[26px]'
      )}
    >
      <path
        d="M13 2v2.5M9 2.5h8"
        stroke={STROKE_ROBOT}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="5"
        width="14"
        height="11"
        stroke={STROKE_ROBOT}
        strokeWidth={STROKE_WIDTH}
        rx="1"
      />
      <circle cx="10" cy="10" r="1" fill={STROKE_ROBOT} />
      <circle cx="16" cy="10" r="1" fill={STROKE_ROBOT} />
      <path
        d="M13 16v3M3.5 11H6M20 11h2.5"
        stroke={STROKE_ROBOT}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
      />
      <g transform="translate(13 19)">
        <Limb className={legA} x2={-1.5} y2={10} stroke={STROKE_ROBOT} />
      </g>
      <g transform="translate(13 19)">
        <Limb className={legB} x2={1.5} y2={10} stroke={STROKE_ROBOT} />
      </g>
    </svg>
  );
}

export function MeshTraversingAvatar({
  kind,
  label,
  size = 'default',
  style,
  className
}: MeshTraversingAvatarProps) {
  const embed = size === 'embed';
  const compact = size === 'compact' || embed;

  return (
    <div
      className={cn('pointer-events-none absolute z-20', className)}
      style={style}
    >
      <div className="relative">
        <div
          className={cn(
            'absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded border border-lp-divider bg-white/95 font-medium leading-none text-lp-text-dark shadow-sm',
            embed
              ? 'bottom-full mb-0.5 px-0.5 py-px text-[6px] leading-[1.1]'
              : compact
              ? 'bottom-full mb-px px-0.5 py-px text-[6px]'
              : 'bottom-full mb-px px-1 py-px text-[7px] sm:mb-0.5 sm:px-1.5 sm:py-0.5 sm:text-[9px]'
          )}
        >
          {label}
        </div>
        <div className="flex items-end justify-center">
          {kind === 'human' ? (
            <WalkHumanIcon
              className={
                embed
                  ? 'h-[20px] w-[17px]'
                  : compact
                  ? 'h-[11px] w-2'
                  : undefined
              }
            />
          ) : (
            <WalkRobotIcon
              className={
                embed
                  ? 'h-[20px] w-[17px]'
                  : compact
                  ? 'h-[10px] w-[8px]'
                  : undefined
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
