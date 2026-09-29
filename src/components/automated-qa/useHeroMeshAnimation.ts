'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  MESH_AI_CELL_MS,
  MESH_AI_TRAVERSE_END_MS,
  MESH_CELL_COUNT,
  MESH_COLS,
  MESH_HUMAN_MOVE_MS,
  MESH_HUMAN_PAUSE_MS,
  MESH_TALLY_CORRECTION_PAUSE_MS,
  MESH_TALLY_START_AFTER_JOHN_STOPS,
  MESH_DONE_HOLD_MS,
  MESH_TIMER_AI_END_MINUTES,
  MESH_TIMER_HUMAN_END_HOURS,
  applyAiScanIndex,
  applyHumanStop,
  aiTraverseTimerMs,
  buildAiColorMap,
  MESH_TRAVERSER_AI_LABEL,
  MESH_TRAVERSER_JOHN_LABEL,
  MESH_TRAVERSER_TALLY_LABEL,
  buildJohnColorMap,
  buildTallyColorMap,
  buildHumanPath,
  buildTallyPath,
  emptyGreyGrid,
  parallelHumanTraverseDurationMs,
  type CellColor,
  type GridCoord,
  type HumanPathStop
} from './hero-mesh-data';
import {
  getNextPhase,
  getPhaseDuration,
  type MeshAnimationPhase
} from './hero-mesh-animation';

export type ScalePreview = 'john' | 'tally' | 'ai' | null;

export type MeshTraversingAgent = {
  id: 'john' | 'tally' | 'ai';
  label: string;
  kind: 'human' | 'ai';
  cell: GridCoord;
};

export type HeroMeshAnimationState = {
  phase: MeshAnimationPhase;
  cellColors: CellColor[];
  traversingAgents: MeshTraversingAgent[];
  timerMs: number;
  showJohnScale: boolean;
  showTallyScale: boolean;
  showAiScale: boolean;
  canPreviewScales: boolean;
  scalePreview: ScalePreview;
  setScalePreview: (preview: ScalePreview) => void;
  reduceMotion: boolean;
  staticSampling: boolean;
  entryComplete: boolean;
  onEntryComplete: () => void;
  /** Bumps when the hero loop restarts (remount grid entry). */
  meshCycleKey: number;
};

export type HeroMeshAnimationMode = 'animated' | 'staticSampling';

export type HeroMeshAnimationOptions = {
  mode?: HeroMeshAnimationMode;
};

export function useHeroMeshAnimation(
  options: HeroMeshAnimationOptions = {}
): HeroMeshAnimationState {
  const staticSampling = options.mode === 'staticSampling';
  const johnPath = useMemo(() => buildHumanPath(42), []);
  const tallyPath = useMemo(() => buildTallyPath(johnPath), [johnPath]);
  const aiPalette = useMemo(() => buildAiColorMap(137), []);
  const johnColorMap = useMemo(() => buildJohnColorMap(johnPath), [johnPath]);
  const tallyColorMap = useMemo(
    () => buildTallyColorMap(tallyPath),
    [tallyPath]
  );

  const [phase, setPhase] = useState<MeshAnimationPhase>(
    staticSampling ? 'done' : 'entryReveal'
  );
  const [cellColors, setCellColors] = useState<CellColor[]>(() =>
    staticSampling ? buildJohnColorMap(buildHumanPath(42)) : emptyGreyGrid()
  );
  const [traversingAgents, setTraversingAgents] = useState<
    MeshTraversingAgent[]
  >([]);
  const [timerMs, setTimerMs] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [entryComplete, setEntryComplete] = useState(staticSampling);
  const [scalePreview, setScalePreview] = useState<ScalePreview>(null);
  const [meshCycleKey, setMeshCycleKey] = useState(0);

  const aiScanRef = useRef(-1);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const onEntryComplete = useCallback(() => {
    setEntryComplete(true);
  }, []);

  const restartAnimation = useCallback(() => {
    aiScanRef.current = -1;
    setPhase('entryReveal');
    setCellColors(emptyGreyGrid());
    setTraversingAgents([]);
    setTimerMs(0);
    setScalePreview(null);
    setEntryComplete(false);
    setMeshCycleKey((key) => key + 1);
  }, []);

  useEffect(() => {
    if (staticSampling) return;
    if (!entryComplete || reduceMotion) return;
    if (phaseRef.current === 'entryReveal') {
      setPhase('humanTraverse');
    }
  }, [entryComplete, reduceMotion, staticSampling]);

  useEffect(() => {
    if (staticSampling) return;
    if (!reduceMotion) return;
    if (!entryComplete) return;

    setCellColors(aiPalette);
    setPhase('done');
    setTraversingAgents([]);
    setTimerMs(MESH_TIMER_AI_END_MINUTES * 60 * 1000);
  }, [reduceMotion, entryComplete, aiPalette, staticSampling]);

  useEffect(() => {
    if (
      staticSampling ||
      reduceMotion ||
      phase === 'done' ||
      phase === 'entryReveal' ||
      phase === 'aiTraverse'
    ) {
      return;
    }

    const duration = getPhaseDuration(phase, johnPath, tallyPath);
    if (!Number.isFinite(duration)) return;

    const id = window.setTimeout(() => {
      const next = getNextPhase(phase);
      if (next) setPhase(next);
    }, duration);

    return () => window.clearTimeout(id);
  }, [phase, johnPath, tallyPath, reduceMotion, staticSampling]);

  useEffect(() => {
    if (staticSampling || reduceMotion || phase !== 'done') return;

    const id = window.setTimeout(restartAnimation, MESH_DONE_HOLD_MS);
    return () => window.clearTimeout(id);
  }, [phase, staticSampling, reduceMotion, restartAnimation]);

  useEffect(() => {
    if (staticSampling || reduceMotion) return;

    const setJohnCell = (cell: GridCoord | null) => {
      setTraversingAgents((prev) => {
        const rest = prev.filter((agent) => agent.id !== 'john');
        if (!cell) return rest;
        return [
          ...rest,
          {
            id: 'john',
            label: MESH_TRAVERSER_JOHN_LABEL,
            kind: 'human',
            cell
          }
        ];
      });
    };

    const setTallyCell = (cell: GridCoord | null) => {
      setTraversingAgents((prev) => {
        const rest = prev.filter((agent) => agent.id !== 'tally');
        if (!cell) return rest;
        return [
          ...rest,
          {
            id: 'tally',
            label: MESH_TRAVERSER_TALLY_LABEL,
            kind: 'human',
            cell
          }
        ];
      });
    };

    const setAiCell = (cell: GridCoord | null) => {
      setTraversingAgents((prev) => {
        const rest = prev.filter((agent) => agent.id !== 'ai');
        if (!cell) return rest;
        return [
          ...rest,
          {
            id: 'ai',
            label: MESH_TRAVERSER_AI_LABEL,
            kind: 'ai',
            cell
          }
        ];
      });
    };

    const runHumanPath = (
      path: HumanPathStop[],
      setAgentCell: (cell: GridCoord | null) => void,
      onStop: (stop: HumanPathStop) => void,
      onComplete: () => void,
      options?: {
        lastStopPauseMs?: number;
        correctionPauseMs?: number;
        hideAgentOnComplete?: boolean;
      }
    ) => {
      const lastPause = options?.lastStopPauseMs ?? MESH_HUMAN_PAUSE_MS;
      const hideOnComplete = options?.hideAgentOnComplete ?? true;

      const runStop = (index: number) => {
        if (phaseRef.current !== 'humanTraverse') return;
        const stop = path[index];
        if (!stop) return;

        setAgentCell({ col: stop.col, row: stop.row });
        onStop(stop);

        const isLast = index >= path.length - 1;
        const dwell = stop.correct
          ? options?.correctionPauseMs ?? MESH_HUMAN_PAUSE_MS
          : isLast
          ? lastPause
          : MESH_HUMAN_PAUSE_MS;
        const delay = isLast ? dwell : dwell + MESH_HUMAN_MOVE_MS;

        window.setTimeout(() => {
          if (phaseRef.current !== 'humanTraverse') return;
          if (isLast) {
            if (hideOnComplete) setAgentCell(null);
            onComplete();
            return;
          }
          runStop(index + 1);
        }, delay);
      };

      runStop(0);
    };

    if (phase === 'humanTraverse') {
      setTraversingAgents([]);
      setCellColors(emptyGreyGrid());

      let johnDone = false;
      let tallyDone = tallyPath.length === 0;
      let tallyStarted = false;

      const maybeBothDone = () => {
        if (johnDone && tallyDone && phaseRef.current === 'humanTraverse') {
          setTraversingAgents([]);
        }
      };

      const startTally = () => {
        if (tallyStarted || tallyPath.length === 0) return;
        tallyStarted = true;
        runHumanPath(
          tallyPath,
          setTallyCell,
          (stop) => setCellColors((prev) => applyHumanStop(prev, stop)),
          () => {
            tallyDone = true;
            maybeBothDone();
          },
          {
            correctionPauseMs: MESH_TALLY_CORRECTION_PAUSE_MS,
            hideAgentOnComplete: false
          }
        );
      };

      const runJohnStop = (index: number) => {
        if (phaseRef.current !== 'humanTraverse') return;
        const stop = johnPath[index];
        if (!stop) return;

        setJohnCell({ col: stop.col, row: stop.row });
        setCellColors((prev) => applyHumanStop(prev, stop));

        if (index === MESH_TALLY_START_AFTER_JOHN_STOPS) {
          startTally();
        }

        const isLast = index >= johnPath.length - 1;
        const delay = isLast
          ? MESH_HUMAN_PAUSE_MS
          : MESH_HUMAN_PAUSE_MS + MESH_HUMAN_MOVE_MS;

        window.setTimeout(() => {
          if (phaseRef.current !== 'humanTraverse') return;
          if (isLast) {
            setJohnCell(null);
            johnDone = true;
            if (!tallyStarted) startTally();
            maybeBothDone();
            return;
          }
          runJohnStop(index + 1);
        }, delay);
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (phaseRef.current === 'humanTraverse') runJohnStop(0);
        });
      });

      return;
    }

    if (phase === 'resetGrey') {
      setTraversingAgents([]);
      setCellColors(emptyGreyGrid());
      return;
    }

    if (phase === 'aiTraverse') {
      aiScanRef.current = -1;

      const tick = (scanIndex: number) => {
        if (phaseRef.current !== 'aiTraverse') return;
        aiScanRef.current = scanIndex;
        const col = scanIndex % MESH_COLS;
        const row = Math.floor(scanIndex / MESH_COLS);
        setAiCell({ col, row });
        setCellColors((prev) => applyAiScanIndex(prev, aiPalette, scanIndex));
        setTimerMs(aiTraverseTimerMs(scanIndex));

        if (scanIndex >= MESH_CELL_COUNT - 1) {
          window.setTimeout(() => {
            if (phaseRef.current !== 'aiTraverse') return;
            setAiCell(null);
            setPhase('aiSummary');
          }, MESH_AI_TRAVERSE_END_MS);
          return;
        }

        window.setTimeout(() => tick(scanIndex + 1), MESH_AI_CELL_MS);
      };

      tick(0);
      return;
    }

    if (phase === 'humanSummary') {
      setTraversingAgents([]);
    }

    if (phase === 'aiSummary') {
      setTraversingAgents([]);
    }

    if (phase === 'aiSummary' || phase === 'done') {
      setCellColors(aiPalette);
    }
  }, [
    phase,
    johnPath,
    tallyPath,
    johnColorMap,
    tallyColorMap,
    aiPalette,
    reduceMotion,
    staticSampling
  ]);

  useEffect(() => {
    if (phase === 'humanSummary') {
      setTimerMs(MESH_TIMER_HUMAN_END_HOURS * 60 * 60 * 1000);
    } else if (phase === 'aiTraverse') {
      setTimerMs(0);
    } else if (phase === 'aiSummary' || phase === 'done') {
      setTimerMs(MESH_TIMER_AI_END_MINUTES * 60 * 1000);
    }
  }, [phase]);

  useEffect(() => {
    if (staticSampling || reduceMotion || phase !== 'humanTraverse') return;

    const endMs = MESH_TIMER_HUMAN_END_HOURS * 60 * 60 * 1000;
    const duration = parallelHumanTraverseDurationMs(johnPath, tallyPath);
    let raf = 0;
    let start: number | null = null;
    let cancelled = false;

    setTimerMs(0);

    const step = (now: number) => {
      if (cancelled || phaseRef.current !== 'humanTraverse') return;
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / duration);
      setTimerMs(endMs * t);
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setTimerMs(endMs);
      }
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [phase, johnPath, tallyPath, reduceMotion, staticSampling]);

  const showJohnScale =
    !staticSampling &&
    (phase === 'humanSummary' ||
      phase === 'resetGrey' ||
      phase === 'aiTraverse' ||
      phase === 'aiSummary' ||
      phase === 'done');

  const showTallyScale = showJohnScale;

  const showAiScale =
    !staticSampling && (phase === 'aiSummary' || phase === 'done');

  const canPreviewScales =
    !staticSampling && (phase === 'aiSummary' || phase === 'done');

  const cellColorsForGrid = canPreviewScales
    ? scalePreview === 'john'
      ? johnColorMap
      : scalePreview === 'tally'
      ? tallyColorMap
      : aiPalette
    : cellColors;

  useEffect(() => {
    if (!canPreviewScales) setScalePreview(null);
  }, [canPreviewScales]);

  return {
    phase,
    cellColors: cellColorsForGrid,
    traversingAgents,
    timerMs,
    showJohnScale,
    showTallyScale,
    showAiScale,
    canPreviewScales,
    scalePreview,
    setScalePreview,
    reduceMotion,
    staticSampling,
    entryComplete,
    onEntryComplete,
    meshCycleKey
  };
}
