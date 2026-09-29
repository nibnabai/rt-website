import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const CHART_FRAME_STRIPE_PERIOD_PX = 8.42;
const CHART_FRAME_STRIPE_HEIGHT_PX = 2.81;

const solutionChartFrameStripeStyle = {
  backgroundImage: `repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.5) ${CHART_FRAME_STRIPE_HEIGHT_PX}px,
    transparent ${CHART_FRAME_STRIPE_HEIGHT_PX}px,
    transparent ${CHART_FRAME_STRIPE_PERIOD_PX}px
  )`
} as const;

export type SolutionChartFrameProps = {
  children: ReactNode;
  /** Classes on the outer shell (e.g. padding). */
  className?: string;
  /** Classes on the content wrapper (`relative z-10`). */
  contentClassName?: string;
  /** Use `visible` when chart cards need to spill for shadows / overlap. */
  overflow?: 'hidden' | 'visible';
  /** Extra classes on the stripe overlay (e.g. `overflow-hidden rounded-[10px]`). */
  stripeOverlayClassName?: string;
};

export function SolutionChartFrame({
  children,
  className,
  contentClassName,
  overflow = 'hidden',
  stripeOverlayClassName
}: SolutionChartFrameProps) {
  return (
    <div
      className={cn(
        'relative rounded-[10px] bg-lp-chart-frame',
        overflow === 'visible' ? 'overflow-visible' : 'overflow-hidden',
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0',
          stripeOverlayClassName
        )}
        style={solutionChartFrameStripeStyle}
      />
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </div>
  );
}
