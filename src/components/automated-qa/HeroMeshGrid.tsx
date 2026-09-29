'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  MESH_AI_CELL_MS,
  MESH_CARD_WIDTH,
  MESH_EMBED_WIDTH,
  MESH_HUMAN_MOVE_MS,
  MESH_TIMER_AI_END_MINUTES,
  MESH_TIMER_HUMAN_END_HOURS,
  cellKey
} from './hero-mesh-data';
import {
  useHeroMeshAnimation,
  type MeshTraversingAgent
} from './useHeroMeshAnimation';
import { MeshDiscoveryScale } from './mesh/MeshDiscoveryScale';
import { MeshElapsedTimer } from './mesh/MeshElapsedTimer';
import { MeshGridCells } from './mesh/MeshGridCells';
import { MeshPhaseLabel } from './mesh/MeshPhaseLabel';
import { MeshTraversingAvatar } from './mesh/MeshTraversingAvatar';

type HeroMeshGridProps = {
  className?: string;
  /** Show phase label + elapsed timer above the card (hero default). */
  showPhaseLabel?: boolean;
  /** Show John/Tally/AI discovery scales below the card (hero default). */
  showDiscoveryScales?: boolean;
  /** Override max width of the mesh card (defaults to hero width). */
  maxWidth?: number;
  /** Compact 350×160 embed for status-quo card (Figma `7143:2692`). */
  variant?: 'hero' | 'embed';
};

export function HeroMeshGrid({
  className,
  showPhaseLabel = true,
  showDiscoveryScales = true,
  maxWidth,
  variant = 'hero'
}: HeroMeshGridProps) {
  const isEmbed = variant === 'embed';
  const resolvedMaxWidth =
    maxWidth ?? (isEmbed ? MESH_EMBED_WIDTH : MESH_CARD_WIDTH);
  const {
    phase,
    cellColors,
    traversingAgents,
    timerMs,
    showJohnScale,
    showTallyScale,
    showAiScale,
    canPreviewScales,
    scalePreview,
    setScalePreview,
    reduceMotion,
    onEntryComplete,
    staticSampling,
    meshCycleKey
  } = useHeroMeshAnimation({
    mode: isEmbed ? 'staticSampling' : 'animated'
  });

  const gridAreaRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const avatarPositionedRef = useRef<Record<string, boolean>>({});
  const prevAvatarCellsRef = useRef<
    Record<string, { col: number; row: number } | null>
  >({});
  const [avatarStyles, setAvatarStyles] = useState<
    Record<string, React.CSSProperties>
  >({});
  const rootRef = useRef<HTMLDivElement>(null);

  const onCellRef = useCallback((key: string, el: HTMLDivElement | null) => {
    if (el) cellRefs.current.set(key, el);
    else cellRefs.current.delete(key);
  }, []);

  const updateAvatarPositions = useCallback(() => {
    const gridEl = gridAreaRef.current;
    if (!gridEl) return;

    const nextStyles: Record<string, React.CSSProperties> = {};

    for (const agent of traversingAgents) {
      const key = cellKey(agent.cell.col, agent.cell.row);
      const cellEl = cellRefs.current.get(key);
      if (!cellEl) {
        nextStyles[agent.id] = { opacity: 0, visibility: 'hidden' };
        continue;
      }

      const prev = prevAvatarCellsRef.current[agent.id] ?? null;
      const isFirstPosition = !avatarPositionedRef.current[agent.id];
      const isAiRowStart =
        agent.kind === 'ai' &&
        prev !== null &&
        (agent.cell.row > prev.row || agent.cell.col < prev.col);
      const snapPosition = isFirstPosition || isAiRowStart;

      const cellRect = cellEl.getBoundingClientRect();
      const gridRect = gridEl.getBoundingClientRect();
      const left = cellRect.left - gridRect.left + cellRect.width / 2;
      const top = cellRect.top - gridRect.top + cellRect.height / 2;

      avatarPositionedRef.current[agent.id] = true;
      prevAvatarCellsRef.current[agent.id] = {
        col: agent.cell.col,
        row: agent.cell.row
      };

      const moveMs = agent.kind === 'ai' ? MESH_AI_CELL_MS : MESH_HUMAN_MOVE_MS;

      nextStyles[agent.id] = {
        left,
        top,
        transform: 'translate(-50%, -50%)',
        visibility: 'visible',
        opacity: isFirstPosition ? 0 : 1,
        transition: snapPosition
          ? 'opacity 350ms ease-out'
          : `left ${moveMs}ms linear, top ${moveMs}ms linear, opacity 350ms ease-out`
      };
    }

    setAvatarStyles(nextStyles);

    for (const agent of traversingAgents) {
      if (!avatarPositionedRef.current[agent.id]) continue;
      const style = nextStyles[agent.id];
      if (style?.opacity !== 0) continue;
      requestAnimationFrame(() => {
        setAvatarStyles((current) => {
          const existing = current[agent.id];
          if (!existing || existing.opacity === 1) return current;
          return {
            ...current,
            [agent.id]: { ...existing, opacity: 1 }
          };
        });
      });
    }
  }, [traversingAgents]);

  useEffect(() => {
    const activeIds = new Set(traversingAgents.map((agent) => agent.id));
    for (const id of Object.keys(avatarPositionedRef.current)) {
      if (!activeIds.has(id as MeshTraversingAgent['id'])) {
        delete avatarPositionedRef.current[id];
        delete prevAvatarCellsRef.current[id];
      }
    }
  }, [traversingAgents]);

  useEffect(() => {
    avatarPositionedRef.current = {};
    prevAvatarCellsRef.current = {};
    setAvatarStyles({});
  }, [meshCycleKey]);

  useEffect(() => {
    updateAvatarPositions();
  }, [updateAvatarPositions, cellColors, phase]);

  useEffect(() => {
    const gridEl = gridAreaRef.current;
    if (!gridEl) return;

    const ro = new ResizeObserver(() => updateAvatarPositions());
    ro.observe(gridEl);
    return () => ro.disconnect();
  }, [updateAvatarPositions]);

  const showTimer =
    phase === 'humanTraverse' ||
    phase === 'aiTraverse' ||
    phase === 'humanSummary' ||
    phase === 'aiSummary' ||
    phase === 'done';

  const timerVariant =
    phase === 'humanTraverse' || phase === 'humanSummary' ? 'human' : 'ai';

  const chromeVariant: 'human' | 'ai' = canPreviewScales
    ? scalePreview === 'john' || scalePreview === 'tally'
      ? 'human'
      : 'ai'
    : timerVariant;

  const chromeTimerMs = canPreviewScales
    ? chromeVariant === 'human'
      ? MESH_TIMER_HUMAN_END_HOURS * 60 * 60 * 1000
      : MESH_TIMER_AI_END_MINUTES * 60 * 1000
    : timerMs;

  return (
    <div
      ref={rootRef}
      className={cn('w-full', className)}
      aria-label="QA mesh comparison"
    >
      <div
        className={cn('mx-auto w-full', isEmbed && 'max-w-[350px]')}
        style={isEmbed ? undefined : { maxWidth: resolvedMaxWidth }}
      >
        {showPhaseLabel ? (
          <div className="mb-1 flex items-start justify-between gap-3">
            <MeshPhaseLabel
              phase={phase}
              variantOverride={canPreviewScales ? chromeVariant : null}
            />
            <MeshElapsedTimer
              timerMs={chromeTimerMs}
              visible={showTimer}
              variant={chromeVariant}
            />
          </div>
        ) : null}

        <div
          className={cn(
            'relative box-border overflow-visible rounded-[18px] border border-lp-mesh-border bg-lp-mesh-surface',
            isEmbed
              ? 'flex h-[160px] flex-col overflow-visible border-[#e4e4e4] bg-[#fbfaf8] px-3 pb-3 pt-2.5 shadow-none'
              : 'px-[clamp(10px,3.5vw,15px)] py-[clamp(12px,4vw,18px)] shadow-card-light'
          )}
        >
          <div
            ref={gridAreaRef}
            className={cn('relative w-full', isEmbed && 'min-h-0 flex-1')}
          >
            <MeshGridCells
              key={meshCycleKey}
              cellColors={cellColors}
              onCellRef={onCellRef}
              onEntryComplete={onEntryComplete}
              skipEntryAnimation={reduceMotion || staticSampling}
              fillContainer={isEmbed}
            />
            {traversingAgents.map((agent) => (
              <MeshTraversingAvatar
                key={agent.id}
                kind={agent.kind}
                label={agent.label}
                size={isEmbed ? 'embed' : 'default'}
                style={avatarStyles[agent.id]}
              />
            ))}
          </div>
        </div>

        {showDiscoveryScales ? (
          <div
            className="mt-3 min-h-29 space-y-2.5"
            onMouseLeave={
              canPreviewScales ? () => setScalePreview(null) : undefined
            }
            onBlur={
              canPreviewScales
                ? (e) => {
                    if (
                      !e.currentTarget.contains(e.relatedTarget as Node | null)
                    ) {
                      setScalePreview(null);
                    }
                  }
                : undefined
            }
          >
            <MeshDiscoveryScale
              variant="john"
              visible={showJohnScale}
              interactive={canPreviewScales}
              onPreviewStart={() => setScalePreview('john')}
            />
            <MeshDiscoveryScale
              variant="tally"
              visible={showTallyScale}
              interactive={canPreviewScales}
              onPreviewStart={() => setScalePreview('tally')}
            />
            <MeshDiscoveryScale
              variant="ai"
              visible={showAiScale}
              interactive={canPreviewScales}
              onPreviewStart={() => setScalePreview('ai')}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
