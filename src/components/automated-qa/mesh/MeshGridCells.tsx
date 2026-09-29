'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import {
  MESH_CELL_COUNT,
  MESH_COLS,
  MESH_COLOR_TRANSITION_MS,
  MESH_ENTRY_STAGGER_MS,
  MESH_ROWS,
  cellKey,
  type CellColor
} from '../hero-mesh-data';

/** green = Good, orange = Average, red = Bad */
const CELL_BG: Record<CellColor, string> = {
  grey: 'bg-lp-mesh-cell',
  green: 'bg-lp-mesh-pass',
  orange: 'bg-lp-mesh-warn',
  red: 'bg-lp-mesh-alert'
};

type MeshGridCellsProps = {
  cellColors: CellColor[];
  onCellRef: (key: string, el: HTMLDivElement | null) => void;
  onEntryComplete: () => void;
  skipEntryAnimation?: boolean;
  /** Stretch cells to fill a fixed-height embed frame (status-quo card). */
  fillContainer?: boolean;
};

export function MeshGridCells({
  cellColors,
  onCellRef,
  onEntryComplete,
  skipEntryAnimation = false,
  fillContainer = false
}: MeshGridCellsProps) {
  const { containerRef, visibleCount, getItemStyle } = useStaggeredReveal({
    itemCount: MESH_CELL_COUNT,
    staggerDelay: MESH_ENTRY_STAGGER_MS,
    threshold: 0.2
  });

  useEffect(() => {
    if (skipEntryAnimation) {
      onEntryComplete();
      return;
    }
    if (visibleCount >= MESH_CELL_COUNT) {
      onEntryComplete();
    }
  }, [visibleCount, onEntryComplete, skipEntryAnimation]);

  let cellIndex = 0;

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid w-full',
        fillContainer ? 'h-full gap-[3px]' : 'gap-[clamp(3px,0.95vw,5px)]'
      )}
      style={{
        gridTemplateColumns: `repeat(${MESH_COLS}, minmax(0, 1fr))`,
        ...(fillContainer
          ? { gridTemplateRows: `repeat(${MESH_ROWS}, minmax(0, 1fr))` }
          : {})
      }}
    >
      {Array.from({ length: MESH_ROWS }, (_, row) =>
        Array.from({ length: MESH_COLS }, (_, col) => {
          const index = cellIndex++;
          const key = cellKey(col, row);
          const revealStyle = getItemStyle(index);
          const showCell = skipEntryAnimation || index < visibleCount;

          return (
            <div
              key={key}
              ref={(el) => onCellRef(key, el)}
              className={cn(
                'min-w-0 rounded-[2px] transition-colors',
                fillContainer ? 'h-full w-full' : 'aspect-square w-full',
                CELL_BG[cellColors[index] ?? 'grey']
              )}
              style={{
                opacity: showCell ? 1 : 0,
                transform: showCell
                  ? 'translateY(0) scale(1)'
                  : revealStyle.transform,
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color ${MESH_COLOR_TRANSITION_MS}ms ease-out`
              }}
            />
          );
        })
      )}
    </div>
  );
}
