'use client';

import { useEffect, useRef, useState } from 'react';

const PHASE_DELAYS = {
  window: '0s',
  chrome: '0.2s',
  messageBase: 0.35,
  messageStagger: 0.12,
  panel: '0.5s',
  score: '0.7s',
  metricBase: 0.85,
  metricStagger: 0.05,
  flagged: '1.15s',
  teamAvg: '1.3s',
  aiCsat: '1.5s',
  violation: '0.85s'
} as const;

export function useConversationMockupAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = isVisible && !reduceMotion;

  const reveal = (
    visible: boolean,
    delay: string,
    hidden: { opacity: number; transform: string } = {
      opacity: 0,
      transform: 'translateY(8px)'
    }
  ): React.CSSProperties => {
    if (reduceMotion || visible) {
      return {
        opacity: 1,
        transform: 'none',
        transition: reduceMotion
          ? 'none'
          : `opacity 0.5s ease-out ${delay}, transform 0.5s ease-out ${delay}`
      };
    }
    return {
      opacity: hidden.opacity,
      transform: hidden.transform,
      transition: `opacity 0.5s ease-out ${delay}, transform 0.5s ease-out ${delay}`
    };
  };

  const messageDelay = (index: number) =>
    `${PHASE_DELAYS.messageBase + index * PHASE_DELAYS.messageStagger}s`;

  const metricDelay = (index: number) =>
    `${PHASE_DELAYS.metricBase + index * PHASE_DELAYS.metricStagger}s`;

  return {
    containerRef,
    isVisible,
    animate,
    reduceMotion,
    delays: PHASE_DELAYS,
    reveal,
    messageDelay,
    metricDelay
  };
}
