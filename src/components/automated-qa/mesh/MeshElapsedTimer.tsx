'use client';

import { cn } from '@/lib/utils';
import { MESH_TIMER_HUMAN_END_HOURS } from '../hero-mesh-data';

type MeshElapsedTimerProps = {
  timerMs: number;
  visible: boolean;
  variant: 'human' | 'ai';
  className?: string;
};

function formatElapsed(ms: number, variant: 'human' | 'ai'): string {
  if (variant === 'ai') {
    return `${Math.max(0, Math.floor(ms / (60 * 1000)))}m`;
  }

  const hours = ms / (60 * 60 * 1000);
  if (hours >= MESH_TIMER_HUMAN_END_HOURS - 0.5) {
    return `${MESH_TIMER_HUMAN_END_HOURS}h`;
  }
  return `${Math.floor(hours)}h`;
}

export function MeshElapsedTimer({
  timerMs,
  visible,
  variant,
  className
}: MeshElapsedTimerProps) {
  return (
    <div
      className={cn(
        'inline-flex shrink-0 flex-col items-center rounded-lg border border-lp-divider bg-white/95 px-2 py-1 shadow-sm transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <p className="text-[9px] font-medium uppercase tracking-wider text-lp-text-muted">
        Elapsed
      </p>
      <p className="mt-0.5 text-center font-display text-lg leading-none tabular-nums text-lp-navy">
        {formatElapsed(timerMs, variant)}
      </p>
    </div>
  );
}
