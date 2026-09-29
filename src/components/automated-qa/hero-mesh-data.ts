export const MESH_COLS = 20;
export const MESH_ROWS = 10;

export const MESH_CELL_PX = 21;
export const MESH_GAP_PX = 5;
export const MESH_CARD_PAD_X = 15;
export const MESH_CARD_PAD_Y = 18;

export const MESH_GRID_WIDTH =
  MESH_COLS * MESH_CELL_PX + (MESH_COLS - 1) * MESH_GAP_PX;
export const MESH_GRID_HEIGHT =
  MESH_ROWS * MESH_CELL_PX + (MESH_ROWS - 1) * MESH_GAP_PX;
export const MESH_CARD_WIDTH = MESH_GRID_WIDTH + MESH_CARD_PAD_X * 2;
export const MESH_CARD_HEIGHT = MESH_GRID_HEIGHT + MESH_CARD_PAD_Y * 2;

/** Status-quo card mesh window (Figma `7143:2692`). */
export const MESH_EMBED_WIDTH = 350;
export const MESH_EMBED_HEIGHT = 160;
export const MESH_EMBED_PAD = 12;

export const MESH_CELL_COUNT = MESH_COLS * MESH_ROWS;

/**
 * Agent performance tiers on a ticket (display order: Good → Average → Bad).
 * Cell keys: green = Good, orange = Average, red = Bad.
 */
export const MESH_SEVERITY_LABEL = {
  low: 'Good',
  medium: 'Average',
  critical: 'Bad'
} as const;

export type MeshScoreTier = keyof typeof MESH_SEVERITY_LABEL;

/** Human sampling: sparse severe findings (mesh paints red/green only). */
export const MESH_HUMAN_DISCOVERIES = { red: 2, green: 4 } as const;
export const MESH_HUMAN_PATH_STOPS = 10;

/** Playback speed multiplier for manual QA traverse (higher = faster). */
export const MESH_HUMAN_SPEED = 2.5;

export const MESH_HUMAN_PAUSE_MS = Math.round(1800 / MESH_HUMAN_SPEED);
export const MESH_HUMAN_MOVE_MS = Math.round(1100 / MESH_HUMAN_SPEED);

export const MESH_AI_SCORE_MIX = {
  red: 0.3,
  orange: 0.25,
  green: 0.45
} as const;

/** John's discovery bar (Good → Bad). */
export const MESH_JOHN_DISCOVERY_SEGMENTS = [
  { severity: 'low' as const, count: 4 },
  { severity: 'critical' as const, count: 2 }
] as const;

/** Tally's combined sample after disagreeing on one of John's Bad tickets. */
export const MESH_TALLY_DISCOVERY_SEGMENTS = [
  { severity: 'low' as const, count: 5 },
  { severity: 'critical' as const, count: 1 }
] as const;

/** Legend segments for the AI discovery bar (Good → Average → Bad). */
export const MESH_AI_DISCOVERY_SEGMENTS = [
  { severity: 'low' as const, share: MESH_AI_SCORE_MIX.green },
  { severity: 'medium' as const, share: MESH_AI_SCORE_MIX.orange },
  { severity: 'critical' as const, share: MESH_AI_SCORE_MIX.red }
] as const;
/** Playback speed multiplier for AI traverse (higher = faster). */
export const MESH_AI_SPEED = 2.5;

/** Per-cell delay during AI row scan (higher = slower walk, easier to read). */
export const MESH_AI_CELL_MS = Math.round(104 / MESH_AI_SPEED);

export const MESH_TRAVERSER_JOHN_LABEL = 'John';
export const MESH_TRAVERSER_TALLY_LABEL = 'Tally';
export const MESH_TRAVERSER_AI_LABEL = 'RipeText';

/** Same path length as John; Tally paints on each stop like John. */
export const MESH_TALLY_PATH_STOPS = MESH_HUMAN_PATH_STOPS;

/** Extra dwell when Tally overrides one of John's scored tickets. */
export const MESH_TALLY_CORRECTION_PAUSE_MS = Math.round(
  2600 / MESH_HUMAN_SPEED
);

/** Tally begins while John is still traversing (after this John stop index). */
export const MESH_TALLY_START_AFTER_JOHN_STOPS = 2;

/**
 * Preferred Manhattan distance from Tally's spawn to John's first Bad.
 * 4 steps = 5 cells on a straight line; we need 7 cells for 6 paints + correction,
 * so path search picks the shortest valid route (often with one short detour).
 */
export const MESH_TALLY_START_MANHATTAN = 4;

/** Route includes John's cell; Tally stops on the adjacent cell before it. */
export const MESH_TALLY_APPROACH_CELLS =
  MESH_HUMAN_DISCOVERIES.red + MESH_HUMAN_DISCOVERIES.green + 1;

export const MESH_TIMER_HUMAN_END_HOURS = 26;
export const MESH_TIMER_AI_END_MINUTES = 5;

export const MESH_RESET_MS = Math.round(900 / MESH_HUMAN_SPEED);
export const MESH_SUMMARY_HOLD_MS = Math.round(2400 / MESH_HUMAN_SPEED);
/** Pause on final AI screen before the hero loop restarts. */
export const MESH_DONE_HOLD_MS = 10_000;
export const MESH_COLOR_TRANSITION_MS = Math.round(560 / MESH_HUMAN_SPEED);

export const MESH_ENTRY_STAGGER_MS = 24;

/** Dwell on last AI cell before summary (scales with MESH_AI_CELL_MS). */
export const MESH_AI_TRAVERSE_END_MS = Math.round(400 / MESH_AI_SPEED);

export type CellColor = 'grey' | 'red' | 'orange' | 'green';

export type GridCoord = { col: number; row: number };

export type HumanPathStop = GridCoord & {
  paint: 'none' | 'red' | 'green';
  /** Second reviewer overwrites an existing cell color. */
  correct?: 'red' | 'green';
};

export function cellKey(col: number, row: number): string {
  return `${col},${row}`;
}

export function cellIndex(col: number, row: number): number {
  return row * MESH_COLS + col;
}

export function indexToCoord(index: number): GridCoord {
  return { col: index % MESH_COLS, row: Math.floor(index / MESH_COLS) };
}

function createSeededRandom(seed: number) {
  let s = seed | 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) | 0;
    return (s >>> 0) / 0x100000000;
  };
}

function shuffleInPlace<T>(items: T[], rnd: () => number) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
}

const NEIGHBORS: readonly GridCoord[] = [
  { col: 0, row: -1 },
  { col: 1, row: 0 },
  { col: 0, row: 1 },
  { col: -1, row: 0 }
];

/** Seeded random walk with discovery paint order: red stops first, then green. */
export function buildHumanPath(seed = 42): HumanPathStop[] {
  const rnd = createSeededRandom(seed);
  const totalPaint = MESH_HUMAN_DISCOVERIES.red + MESH_HUMAN_DISCOVERIES.green;
  const stops: HumanPathStop[] = [];

  let col = Math.floor(rnd() * MESH_COLS);
  let row = Math.floor(rnd() * MESH_ROWS);
  let prev: GridCoord | null = null;

  for (let i = 0; i < MESH_HUMAN_PATH_STOPS; i++) {
    const paint: HumanPathStop['paint'] =
      i < MESH_HUMAN_DISCOVERIES.red
        ? 'red'
        : i < totalPaint
        ? 'green'
        : 'none';

    stops.push({ col, row, paint });

    if (i >= totalPaint - 1) break;

    const options = NEIGHBORS.map((d) => ({
      col: col + d.col,
      row: row + d.row
    })).filter(
      (c) =>
        c.col >= 0 &&
        c.col < MESH_COLS &&
        c.row >= 0 &&
        c.row < MESH_ROWS &&
        !(prev && c.col === prev.col && c.row === prev.row)
    );

    if (options.length === 0) break;

    prev = { col, row };
    const next = options[Math.floor(rnd() * options.length)];
    col = next.col;
    row = next.row;
  }

  return stops;
}

function isInBounds(coord: GridCoord): boolean {
  return (
    coord.col >= 0 &&
    coord.col < MESH_COLS &&
    coord.row >= 0 &&
    coord.row < MESH_ROWS
  );
}

function manhattanDistance(a: GridCoord, b: GridCoord): number {
  return Math.abs(a.col - b.col) + Math.abs(a.row - b.row);
}

/** Adjacent-only path between two cells (includes start and end). */
function shortestCoordPath(
  from: GridCoord,
  to: GridCoord,
  blockedKeys: Set<string> = new Set()
): GridCoord[] {
  if (from.col === to.col && from.row === to.row) return [from];

  const goalKey = cellKey(to.col, to.row);
  const queue: GridCoord[] = [from];
  const parent = new Map<string, GridCoord | null>();
  parent.set(cellKey(from.col, from.row), null);

  while (queue.length > 0) {
    const coord = queue.shift()!;
    if (coord.col === to.col && coord.row === to.row) {
      const path: GridCoord[] = [];
      let current: GridCoord | null = coord;
      while (current) {
        path.unshift(current);
        current = parent.get(cellKey(current.col, current.row)) ?? null;
      }
      return path;
    }

    for (const delta of NEIGHBORS) {
      const next = {
        col: coord.col + delta.col,
        row: coord.row + delta.row
      };
      if (!isInBounds(next)) continue;
      const key = cellKey(next.col, next.row);
      if (parent.has(key)) continue;
      if (blockedKeys.has(key) && key !== goalKey) continue;
      parent.set(key, coord);
      queue.push(next);
    }
  }

  return [from];
}

/** Offsets with |dc| + |dr| === distance; prefer below, same column. */
function tallyStartOffsetsForDistance(distance: number): GridCoord[] {
  const offsets: GridCoord[] = [];
  for (let dr = -distance; dr <= distance; dr++) {
    for (let dc = -distance; dc <= distance; dc++) {
      if (Math.abs(dc) + Math.abs(dr) !== distance) continue;
      offsets.push({ col: dc, row: dr });
    }
  }
  return offsets.sort((a, b) => {
    if (b.row !== a.row) return b.row - a.row;
    if (Math.abs(a.col) !== Math.abs(b.col))
      return Math.abs(a.col) - Math.abs(b.col);
    return a.col - b.col;
  });
}

/** Shortest walk to John; may pass his other cells (paint:none) to avoid long detours. */
function resolveTallyApproach(
  johnFirstRed: GridCoord,
  johnFindingKeys: Set<string>
): GridCoord[] {
  const candidates: { approach: GridCoord[]; distance: number }[] = [];

  for (let distance = MESH_TALLY_START_MANHATTAN; distance <= 6; distance++) {
    for (const offset of tallyStartOffsetsForDistance(distance)) {
      const start = {
        col: johnFirstRed.col + offset.col,
        row: johnFirstRed.row + offset.row
      };
      if (!isInBounds(start)) continue;
      if (johnFindingKeys.has(cellKey(start.col, start.row))) continue;
      if (manhattanDistance(start, johnFirstRed) !== distance) continue;

      const approach = shortestCoordPath(start, johnFirstRed);
      if (approach.length < MESH_TALLY_APPROACH_CELLS) continue;

      candidates.push({ approach, distance });
    }
  }

  if (candidates.length === 0) {
    const fallback = {
      col: johnFirstRed.col,
      row: Math.min(
        MESH_ROWS - 1,
        johnFirstRed.row + MESH_TALLY_START_MANHATTAN
      )
    };
    return shortestCoordPath(fallback, johnFirstRed);
  }

  candidates.sort((a, b) => {
    const aExact = a.approach.length === MESH_TALLY_APPROACH_CELLS ? 0 : 1;
    const bExact = b.approach.length === MESH_TALLY_APPROACH_CELLS ? 0 : 1;
    if (aExact !== bExact) return aExact - bExact;
    const lenDiff = a.approach.length - b.approach.length;
    if (lenDiff !== 0) return lenDiff;
    return a.distance - b.distance;
  });

  return candidates[0].approach;
}

/** John Bad on Tally's route with the lowest screen position (largest row index). */
function tallyCorrectionCell(
  approach: GridCoord[],
  johnPath: HumanPathStop[]
): GridCoord {
  const johnFirstRed = johnPath.find((stop) => stop.paint === 'red');
  if (!johnFirstRed) return approach[approach.length - 1];

  const johnRedKeys = new Set(
    johnPath
      .filter((stop) => stop.paint === 'red')
      .map((stop) => cellKey(stop.col, stop.row))
  );

  let pick: GridCoord | null = null;
  for (const coord of approach) {
    if (!johnRedKeys.has(cellKey(coord.col, coord.row))) continue;
    if (!pick || coord.row > pick.row) pick = coord;
  }

  return pick ?? johnFirstRed;
}

/**
 * Start 4+ steps from John's first Bad on the shortest route (~7 cells), paint
 * Bad/Good along the way, then correct his Bad → Good on the John cell she reaches
 * (not an extra step onto a higher row).
 */
export function buildTallyPath(
  johnPath: HumanPathStop[],
  _seed = 77
): HumanPathStop[] {
  const johnFirstRed = johnPath.find((stop) => stop.paint === 'red');
  if (!johnFirstRed) return [];

  const johnFindingKeys = new Set(
    johnPath
      .filter((stop) => stop.paint === 'red' || stop.paint === 'green')
      .map((stop) => cellKey(stop.col, stop.row))
  );

  const fullApproach = resolveTallyApproach(johnFirstRed, johnFindingKeys);
  const correctionCell = tallyCorrectionCell(fullApproach, johnPath);
  const correctionIdx = fullApproach.findIndex(
    (coord) =>
      coord.col === correctionCell.col && coord.row === correctionCell.row
  );
  const approach =
    correctionIdx >= 0
      ? fullApproach.slice(0, correctionIdx + 1)
      : fullApproach;

  const stops: HumanPathStop[] = [];

  for (let i = 0; i < approach.length; i++) {
    const { col, row } = approach[i];
    const isLast = i === approach.length - 1;
    const onJohnFinding = johnFindingKeys.has(cellKey(col, row)) && !isLast;

    if (isLast) {
      stops.push({
        col,
        row,
        paint: 'none',
        correct: 'green'
      });
      continue;
    }

    const paint: HumanPathStop['paint'] = onJohnFinding
      ? 'none'
      : i < MESH_HUMAN_DISCOVERIES.red
      ? 'red'
      : 'green';

    stops.push({ col, row, paint });
  }

  return stops;
}

/** Row-major scan order for AI traversal. */
export function buildAiScanOrder(): GridCoord[] {
  const order: GridCoord[] = [];
  for (let row = 0; row < MESH_ROWS; row++) {
    for (let col = 0; col < MESH_COLS; col++) {
      order.push({ col, row });
    }
  }
  return order;
}

/** Precompute per-cell colors matching MESH_AI_SCORE_MIX counts, shuffled for variety. */
export function buildAiColorMap(seed = 137): CellColor[] {
  const rnd = createSeededRandom(seed);
  const counts = {
    red: Math.floor(MESH_CELL_COUNT * MESH_AI_SCORE_MIX.red),
    orange: Math.floor(MESH_CELL_COUNT * MESH_AI_SCORE_MIX.orange),
    green: 0
  };
  counts.green = MESH_CELL_COUNT - counts.red - counts.orange;

  const palette: CellColor[] = [
    ...Array(counts.red).fill('red' as const),
    ...Array(counts.orange).fill('orange' as const),
    ...Array(counts.green).fill('green' as const)
  ];
  shuffleInPlace(palette, rnd);
  return palette;
}

export function humanTraverseDurationMs(
  path: HumanPathStop[],
  correctionPauseMs = MESH_TALLY_CORRECTION_PAUSE_MS
): number {
  if (path.length === 0) return 0;
  let ms = 0;
  for (let i = 0; i < path.length; i++) {
    const isLast = i >= path.length - 1;
    ms += path[i].correct ? correctionPauseMs : MESH_HUMAN_PAUSE_MS;
    if (!isLast) ms += MESH_HUMAN_MOVE_MS;
  }
  return ms;
}

export function humanTraverseDurationThroughStop(
  path: HumanPathStop[],
  throughIndex: number
): number {
  if (throughIndex < 0 || path.length === 0) return 0;
  return humanTraverseDurationMs(
    path.slice(0, Math.min(throughIndex + 1, path.length))
  );
}

/** Wall-clock time when both humans finish with partial overlap. */
export function parallelHumanTraverseDurationMs(
  johnPath: HumanPathStop[],
  tallyPath: HumanPathStop[],
  tallyStartsAfterJohnStop = MESH_TALLY_START_AFTER_JOHN_STOPS
): number {
  const tallyStartMs = humanTraverseDurationThroughStop(
    johnPath,
    tallyStartsAfterJohnStop
  );
  return Math.max(
    humanTraverseDurationMs(johnPath),
    tallyStartMs + humanTraverseDurationMs(tallyPath)
  );
}

/** Matches tick(): one delay per cell, then dwell on the last cell. */
export function aiTraverseDurationMs(): number {
  return MESH_CELL_COUNT * MESH_AI_CELL_MS + MESH_AI_TRAVERSE_END_MS;
}

export function aiTraverseTimerMs(scanIndex: number): number {
  const endMs = MESH_TIMER_AI_END_MINUTES * 60 * 1000;
  if (MESH_CELL_COUNT <= 1) return endMs;
  return Math.round((scanIndex / (MESH_CELL_COUNT - 1)) * endMs);
}

export function emptyGreyGrid(): CellColor[] {
  return Array(MESH_CELL_COUNT).fill('grey');
}

export function applyHumanStop(
  colors: CellColor[],
  stop: HumanPathStop
): CellColor[] {
  const applied = stop.correct ?? (stop.paint === 'none' ? null : stop.paint);
  if (!applied) return colors;
  const next = [...colors];
  const idx = cellIndex(stop.col, stop.row);
  next[idx] = applied;
  return next;
}

/** John's grid after his traverse only. */
export function buildJohnColorMap(johnPath: HumanPathStop[]): CellColor[] {
  return johnPath.reduce(
    (colors, stop) => applyHumanStop(colors, stop),
    emptyGreyGrid()
  );
}

/** Tally's grid after her traverse only (hover preview). */
export function buildTallyColorMap(tallyPath: HumanPathStop[]): CellColor[] {
  return tallyPath.reduce(
    (colors, stop) => applyHumanStop(colors, stop),
    emptyGreyGrid()
  );
}

export function applyAiScanIndex(
  colors: CellColor[],
  aiPalette: CellColor[],
  scanIndex: number
): CellColor[] {
  const next = [...colors];
  for (let i = 0; i <= scanIndex && i < MESH_CELL_COUNT; i++) {
    next[i] = aiPalette[i];
  }
  return next;
}
