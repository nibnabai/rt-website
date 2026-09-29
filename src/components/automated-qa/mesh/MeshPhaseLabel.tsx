'use client';

import { cn } from '@/lib/utils';
import { isAiPhase, isHumanPhase } from '../hero-mesh-animation';
import type { MeshAnimationPhase } from '../hero-mesh-animation';

type MeshPhaseLabelProps = {
  phase: MeshAnimationPhase;
  /** When set (e.g. scale hover preview), overrides phase-derived mode. */
  variantOverride?: 'human' | 'ai' | null;
  className?: string;
};

export function MeshPhaseLabel({
  phase,
  variantOverride = null,
  className
}: MeshPhaseLabelProps) {
  const showHuman =
    variantOverride === 'human' ||
    (variantOverride === null && isHumanPhase(phase));
  const showAi =
    variantOverride === 'ai' || (variantOverride === null && isAiPhase(phase));
  const visible = showHuman || showAi;

  return (
    <div
      className={cn(
        'inline-flex flex-col items-center rounded-lg border border-lp-divider bg-white/95 px-2 py-1 shadow-sm transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <p className="text-[9px] font-medium uppercase tracking-wider text-lp-text-muted">
        Mode
      </p>
      <p
        className={cn(
          'mt-0.5 font-display text-lg uppercase leading-none text-lp-navy transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0'
        )}
      >
        {showAi ? 'AI' : 'Human'}
      </p>
    </div>
  );
}
