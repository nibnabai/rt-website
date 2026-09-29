'use client';

import { cn } from '@/lib/utils';
import {
  MESH_AI_DISCOVERY_SEGMENTS,
  MESH_JOHN_DISCOVERY_SEGMENTS,
  MESH_SEVERITY_LABEL,
  MESH_TALLY_DISCOVERY_SEGMENTS,
  MESH_TRAVERSER_AI_LABEL,
  MESH_TRAVERSER_JOHN_LABEL,
  MESH_TRAVERSER_TALLY_LABEL,
  type MeshScoreTier
} from '../hero-mesh-data';

const SEVERITY_BAR_CLASS: Record<MeshScoreTier, string> = {
  low: 'bg-lp-mesh-pass',
  medium: 'bg-lp-mesh-warn',
  critical: 'bg-lp-mesh-alert'
};

type ScaleSegment = {
  severity: MeshScoreTier;
  widthPercent: number;
  label: string;
};

type DiscoverySegment = {
  severity: MeshScoreTier;
  count?: number;
  share?: number;
};

function buildSegments(segments: readonly DiscoverySegment[]): ScaleSegment[] {
  const total = segments.reduce(
    (sum, segment) => sum + (segment.count ?? 0),
    0
  );
  return segments.map((segment) => ({
    severity: segment.severity,
    widthPercent:
      segment.share !== undefined
        ? segment.share * 100
        : total > 0
        ? ((segment.count ?? 0) / total) * 100
        : 0,
    label: MESH_SEVERITY_LABEL[segment.severity]
  }));
}

const SCALE_CONFIG = {
  john: {
    title: MESH_TRAVERSER_JOHN_LABEL,
    segments: buildSegments(MESH_JOHN_DISCOVERY_SEGMENTS)
  },
  tally: {
    title: MESH_TRAVERSER_TALLY_LABEL,
    segments: buildSegments(MESH_TALLY_DISCOVERY_SEGMENTS)
  },
  ai: {
    title: MESH_TRAVERSER_AI_LABEL,
    segments: buildSegments(MESH_AI_DISCOVERY_SEGMENTS)
  }
} as const;

export type MeshDiscoveryScaleVariant = keyof typeof SCALE_CONFIG;

type MeshDiscoveryScaleProps = {
  variant: MeshDiscoveryScaleVariant;
  visible: boolean;
  interactive?: boolean;
  onPreviewStart?: () => void;
  className?: string;
};

export function MeshDiscoveryScale({
  variant,
  visible,
  interactive = false,
  onPreviewStart,
  className
}: MeshDiscoveryScaleProps) {
  const { title, segments } = SCALE_CONFIG[variant];

  return (
    <div
      className={cn(
        'transition-all duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
        interactive && 'cursor-pointer',
        className
      )}
      onMouseEnter={interactive ? onPreviewStart : undefined}
      onFocus={interactive ? onPreviewStart : undefined}
      onTouchStart={interactive ? onPreviewStart : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? `Preview ${title} results on grid` : undefined}
    >
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-lp-text-muted">
        {title}
      </p>

      <div className="flex h-2.5 w-full overflow-hidden rounded-full">
        {segments.map((segment) => (
          <div
            key={segment.severity}
            className={cn(SEVERITY_BAR_CLASS[segment.severity], 'h-full')}
            style={{ width: `${segment.widthPercent}%` }}
          />
        ))}
      </div>

      <div className="mt-1 flex w-full">
        {segments.map((segment) => (
          <div
            key={segment.severity}
            className="min-w-0 text-center"
            style={{ width: `${segment.widthPercent}%` }}
          >
            <span className="block truncate text-[10px] leading-tight text-lp-number-label">
              {segment.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
