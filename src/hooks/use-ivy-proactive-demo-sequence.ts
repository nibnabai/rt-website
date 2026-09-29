'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type IvyProactiveDemoPhase =
  | 'empty'
  | 'toast-in'
  | 'cursor-moving'
  | 'thread-loaded';

export function useIvyProactiveDemoSequence({
  toastDelayMs = 1200,
  cursorMoveDelayMs = 2400,
  threadLoadDelayMs = 1700,
  loopDelayMs = 7000,
  enabled = true
}: {
  toastDelayMs?: number;
  cursorMoveDelayMs?: number;
  threadLoadDelayMs?: number;
  loopDelayMs?: number;
  enabled?: boolean;
} = {}) {
  const [phase, setPhase] = useState<IvyProactiveDemoPhase>('empty');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, delayMs: number) => {
    const id = setTimeout(fn, delayMs);
    timersRef.current.push(id);
  }, []);

  const resetDemo = useCallback(() => {
    clearTimers();
    setPhase('empty');
  }, [clearTimers]);

  const runSequence = useCallback(() => {
    clearTimers();
    setPhase('empty');

    schedule(() => {
      setPhase('toast-in');

      schedule(() => {
        setPhase('cursor-moving');

        schedule(() => {
          setPhase('thread-loaded');

          schedule(() => {
            runSequence();
          }, loopDelayMs);
        }, threadLoadDelayMs);
      }, cursorMoveDelayMs);
    }, toastDelayMs);
  }, [
    clearTimers,
    cursorMoveDelayMs,
    loopDelayMs,
    schedule,
    threadLoadDelayMs,
    toastDelayMs
  ]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !isVisible) {
      resetDemo();
      return;
    }

    runSequence();
    return clearTimers;
  }, [clearTimers, enabled, isVisible, resetDemo, runSequence]);

  return {
    containerRef,
    phase,
    showToast: phase === 'toast-in' || phase === 'cursor-moving',
    showCursor: phase === 'cursor-moving',
    showThread: phase === 'thread-loaded',
    showUnreadBadge:
      phase === 'toast-in' ||
      phase === 'cursor-moving' ||
      phase === 'thread-loaded'
  };
}
