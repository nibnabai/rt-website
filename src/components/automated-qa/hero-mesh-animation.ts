import {
  MESH_RESET_MS,
  MESH_SUMMARY_HOLD_MS,
  aiTraverseDurationMs,
  parallelHumanTraverseDurationMs,
  type HumanPathStop
} from './hero-mesh-data';

export type MeshAnimationPhase =
  | 'entryReveal'
  | 'humanTraverse'
  | 'humanSummary'
  | 'resetGrey'
  | 'aiTraverse'
  | 'aiSummary'
  | 'done';

export const MESH_PHASE_ORDER: MeshAnimationPhase[] = [
  'entryReveal',
  'humanTraverse',
  'humanSummary',
  'resetGrey',
  'aiTraverse',
  'aiSummary',
  'done'
];

export function getPhaseDuration(
  phase: MeshAnimationPhase,
  johnPath: HumanPathStop[],
  tallyPath: HumanPathStop[] = []
): number {
  switch (phase) {
    case 'entryReveal':
      return 0;
    case 'humanTraverse':
      return parallelHumanTraverseDurationMs(johnPath, tallyPath);
    case 'humanSummary':
      return MESH_SUMMARY_HOLD_MS;
    case 'resetGrey':
      return MESH_RESET_MS;
    case 'aiTraverse':
      return aiTraverseDurationMs();
    case 'aiSummary':
      return MESH_SUMMARY_HOLD_MS;
    case 'done':
      return 0;
    default:
      return 0;
  }
}

export function getNextPhase(
  phase: MeshAnimationPhase
): MeshAnimationPhase | null {
  const idx = MESH_PHASE_ORDER.indexOf(phase);
  if (idx < 0 || idx >= MESH_PHASE_ORDER.length - 1) return null;
  return MESH_PHASE_ORDER[idx + 1];
}

export function isHumanPhase(phase: MeshAnimationPhase): boolean {
  return phase === 'humanTraverse' || phase === 'humanSummary';
}

export function isAiPhase(phase: MeshAnimationPhase): boolean {
  return (
    phase === 'resetGrey' ||
    phase === 'aiTraverse' ||
    phase === 'aiSummary' ||
    phase === 'done'
  );
}

export function showHumanScale(phase: MeshAnimationPhase): boolean {
  return (
    phase === 'humanSummary' ||
    phase === 'resetGrey' ||
    phase === 'aiTraverse' ||
    phase === 'aiSummary' ||
    phase === 'done'
  );
}

export function showAiScale(phase: MeshAnimationPhase): boolean {
  return phase === 'aiSummary' || phase === 'done';
}
