'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import type { CSSProperties } from 'react';

const LINE_COLOR = '#D2D2E4';
export const AUTOMATIONS_CARD_WIDTH = 372;
const CARD_CENTER = AUTOMATIONS_CARD_WIDTH / 2;
const CONNECTOR_HEIGHT = 162;
const MAIN_LINE_EXTENSION = 28;
const END_CAP_SHIFT_X = 27;
const RIGHT_CORNER_Y_OFFSET = 7;
const RIGHT_CORNER_DROP_X = 8;
const TRIANGLE_HALF_W = 32;

function getSegmentProgress(progress: number, start: number, end: number) {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

function getSegmentStyle({
  progress,
  axis,
  origin,
  duration = 420
}: {
  progress: number;
  axis: 'x' | 'y' | 'both';
  origin: string;
  duration?: number;
}): CSSProperties {
  const safeProgress = Math.max(progress, 0.001);
  const transform =
    axis === 'both'
      ? `scale(${safeProgress})`
      : axis === 'x'
      ? `scaleX(${safeProgress})`
      : `scaleY(${safeProgress})`;

  return {
    opacity: progress === 0 ? 0 : 1,
    transform,
    transformOrigin: origin,
    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease`
  };
}

function LineStartPoint({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      style={style}
    >
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4Z"
        fill={LINE_COLOR}
      />
    </svg>
  );
}

function LineAfterStartPoint({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="16"
      height="64"
      viewBox="0 0 16 64"
      fill="none"
      aria-hidden
      style={style}
    >
      <path d="M8 0V64" stroke={LINE_COLOR} strokeWidth="2" />
    </svg>
  );
}

function LineLeftCorner({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
      style={style}
    >
      <path
        d="M8 0V6C8 7.10457 8.89543 8 10 8H16"
        stroke={LINE_COLOR}
        strokeWidth="2"
      />
    </svg>
  );
}

function LineMainPart({
  className,
  style
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 866 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      style={style}
    >
      <path d="M0 8H866" stroke={LINE_COLOR} strokeWidth="2" />
    </svg>
  );
}

function LineRightCorner({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      aria-hidden
      className="shrink-0"
      style={style}
    >
      <path
        d="M8 9V3C8 1.89543 7.10457 1 6 1H0"
        stroke={LINE_COLOR}
        strokeWidth="2"
      />
    </svg>
  );
}

function LineBeforeBottomTriangle({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="2"
      height="64"
      viewBox="0 0 2 64"
      fill="none"
      aria-hidden
      className="shrink-0"
      style={style}
    >
      <path d="M1 0V63.9869" stroke={LINE_COLOR} strokeWidth="2" />
    </svg>
  );
}

function LineBottomTriangle({ style }: { style?: CSSProperties }) {
  return (
    <svg
      width="64"
      height="9"
      viewBox="0 0 64 9"
      fill="none"
      aria-hidden
      className="shrink-0"
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.2266 8L25.2266 0L37.2266 0L31.2266 8Z"
        fill={LINE_COLOR}
      />
    </svg>
  );
}

function LineEndCap({ progress }: { progress: number }) {
  const cornerProgress = getSegmentProgress(progress, 0, 0.3);
  const dropProgress = getSegmentProgress(progress, 0.26, 0.82);
  const triangleProgress = getSegmentProgress(progress, 0.76, 1);
  const cornerLeftInBlock = TRIANGLE_HALF_W - RIGHT_CORNER_DROP_X;

  return (
    <div
      className="relative shrink-0"
      style={{
        width: TRIANGLE_HALF_W * 2,
        marginLeft: END_CAP_SHIFT_X + RIGHT_CORNER_DROP_X - TRIANGLE_HALF_W
      }}
    >
      <LineRightCorner
        style={{
          marginTop: RIGHT_CORNER_Y_OFFSET,
          marginLeft: cornerLeftInBlock,
          ...getSegmentStyle({
            progress: cornerProgress,
            axis: 'both',
            origin: 'top right',
            duration: 280
          })
        }}
      />
      <div className="flex w-full flex-col items-center">
        <LineBeforeBottomTriangle
          style={getSegmentStyle({
            progress: dropProgress,
            axis: 'y',
            origin: 'top center'
          })}
        />
        <LineBottomTriangle
          style={{
            ...getSegmentStyle({
              progress: triangleProgress,
              axis: 'both',
              origin: 'top center',
              duration: 240
            }),
            transform:
              triangleProgress === 0
                ? 'translateY(-4px) scale(0.9)'
                : `translateY(${(1 - triangleProgress) * -4}px) scale(${
                    0.9 + triangleProgress * 0.1
                  })`
          }}
        />
      </div>
    </div>
  );
}

function FigmaConnectorAssembly({ progress }: { progress: number }) {
  const pointProgress = getSegmentProgress(progress, 0, 0.12);
  const verticalProgress = getSegmentProgress(progress, 0.08, 0.32);
  const leftCornerProgress = getSegmentProgress(progress, 0.28, 0.42);
  const horizontalProgress = getSegmentProgress(progress, 0.38, 0.82);
  const endCapProgress = getSegmentProgress(progress, 0.8, 1);

  return (
    <div className="relative h-full w-full">
      <div
        className="absolute top-0 flex flex-col items-center"
        style={{ left: CARD_CENTER, transform: 'translateX(-50%)' }}
      >
        <LineStartPoint
          style={getSegmentStyle({
            progress: pointProgress,
            axis: 'both',
            origin: 'center',
            duration: 280
          })}
        />
        <LineAfterStartPoint
          style={getSegmentStyle({
            progress: verticalProgress,
            axis: 'y',
            origin: 'top center'
          })}
        />
      </div>

      <div
        className="absolute top-[80px] flex items-start"
        style={{
          left: CARD_CENTER - 8,
          right: CARD_CENTER - 32
        }}
      >
        <LineLeftCorner
          style={getSegmentStyle({
            progress: leftCornerProgress,
            axis: 'both',
            origin: 'top left',
            duration: 280
          })}
        />
        <LineMainPart
          className="h-4 min-w-0 flex-1"
          style={{
            marginRight: -MAIN_LINE_EXTENSION,
            width: `calc(100% + ${MAIN_LINE_EXTENSION}px)`,
            ...getSegmentStyle({
              progress: horizontalProgress,
              axis: 'x',
              origin: 'left center'
            })
          }}
        />
        <LineEndCap progress={endCapProgress} />
      </div>
    </div>
  );
}

type ConnectorProps = {
  mirrored?: boolean;
  progress?: number;
};

export function AutomationsStepConnector({
  mirrored = false,
  progress = 1
}: ConnectorProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(progress);

  useLayoutEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(motionMq.matches);
    update();
    motionMq.addEventListener('change', update);
    return () => motionMq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setAnimatedProgress(progress);
      return;
    }

    if (progress <= 0) {
      setAnimatedProgress(0);
      return;
    }

    let frame = 0;
    let cancelled = false;
    const duration = 1200;
    const startedAt = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;

      const elapsed = now - startedAt;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimatedProgress(eased * progress);

      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    setAnimatedProgress(0);
    frame = window.requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [progress, reduceMotion]);

  return (
    <div
      className="pointer-events-none relative hidden w-full xl:block"
      style={{ height: CONNECTOR_HEIGHT }}
      aria-hidden
    >
      <div
        className="h-full w-full"
        style={{ transform: mirrored ? 'scaleX(-1)' : undefined }}
      >
        <FigmaConnectorAssembly progress={animatedProgress} />
      </div>
    </div>
  );
}
