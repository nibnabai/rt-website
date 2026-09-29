'use client';

import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { HERO_MOCKUP } from './hero-mockup-data';

type Phase =
  | 'idle'
  | 'main'
  | 'weakSpot'
  | 'messages'
  | 'typing'
  | 'coaching'
  | 'hold';

const PHASE_ORDER: Phase[] = [
  'idle',
  'main',
  'weakSpot',
  'messages',
  'typing',
  'coaching',
  'hold'
];

const MESSAGE_INITIAL_DELAY_MS = 500;
const MESSAGE_STAGGER_MS = 800;
/** Brief beat after the last message before the typing indicator appears. */
const PAUSE_AFTER_MESSAGES_MS = 250;

const desktopMessagesPhaseDuration =
  MESSAGE_INITIAL_DELAY_MS +
  (HERO_MOCKUP.messages.length - 1) * MESSAGE_STAGGER_MS +
  PAUSE_AFTER_MESSAGES_MS;

const getMessagesPhaseDuration = (isMobileLayout: boolean) =>
  (isMobileLayout ? 0 : MESSAGE_INITIAL_DELAY_MS) +
  (HERO_MOCKUP.messages.length - 1) * MESSAGE_STAGGER_MS +
  PAUSE_AFTER_MESSAGES_MS;

const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 300,
  main: 600,
  weakSpot: 550,
  messages: desktopMessagesPhaseDuration,
  typing: 2800,
  coaching: 900,
  hold: 7000
};

/** Matches Tailwind `md` — stacked layout below this breakpoint. */
const MOBILE_LAYOUT_MQ = '(max-width: 767px)';

export function useTrainingHeroMockupAnimation() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [showMain, setShowMain] = useState(false);
  const [showWeakSpot, setShowWeakSpot] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showCoaching, setShowCoaching] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [animateMetricBars, setAnimateMetricBars] = useState(false);

  useLayoutEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layoutMq = window.matchMedia(MOBILE_LAYOUT_MQ);
    const update = () => {
      setReduceMotion(motionMq.matches);
      setIsMobileLayout(layoutMq.matches);
    };
    update();
    motionMq.addEventListener('change', update);
    layoutMq.addEventListener('change', update);
    return () => {
      motionMq.removeEventListener('change', update);
      layoutMq.removeEventListener('change', update);
    };
  }, []);

  const resetAnimation = useCallback(() => {
    setPhase('idle');
    setShowMain(false);
    setShowWeakSpot(false);
    setVisibleMessages(0);
    setShowCoaching(false);
    setShowTyping(false);
    setAnimateMetricBars(false);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setShowMain(true);
      setShowWeakSpot(true);
      setVisibleMessages(HERO_MOCKUP.messages.length);
      setShowCoaching(true);
      setShowTyping(true);
      setAnimateMetricBars(true);
      setPhase('hold');
      return;
    }

    resetAnimation();
  }, [reduceMotion, resetAnimation]);

  const advancePhase = useCallback(() => {
    setPhase((prev) => {
      const idx = PHASE_ORDER.indexOf(prev);
      if (idx < PHASE_ORDER.length - 1) {
        return PHASE_ORDER[idx + 1];
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    if (phase === 'main') {
      setShowMain(true);
      if (isMobileLayout) {
        setShowWeakSpot(true);
        setShowCoaching(true);
        setAnimateMetricBars(true);
      }
      const mainDuration = isMobileLayout ? 0 : PHASE_DURATIONS.main;
      const timer = window.setTimeout(advancePhase, mainDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'weakSpot') {
      if (!isMobileLayout) {
        setShowWeakSpot(true);
      }
      const weakSpotDuration = isMobileLayout ? 0 : PHASE_DURATIONS.weakSpot;
      const timer = window.setTimeout(advancePhase, weakSpotDuration);
      return () => clearTimeout(timer);
    }

    if (phase === 'messages') {
      setVisibleMessages(0);
      setShowTyping(false);
      const messageInitialDelay = isMobileLayout ? 0 : MESSAGE_INITIAL_DELAY_MS;
      const timers = HERO_MOCKUP.messages.map((_, i) =>
        window.setTimeout(
          () => setVisibleMessages(i + 1),
          messageInitialDelay + i * MESSAGE_STAGGER_MS
        )
      );
      const done = window.setTimeout(
        advancePhase,
        getMessagesPhaseDuration(isMobileLayout)
      );
      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(done);
      };
    }

    if (phase === 'typing') {
      setShowTyping(true);
      const timer = window.setTimeout(advancePhase, PHASE_DURATIONS.typing);
      return () => clearTimeout(timer);
    }

    if (phase === 'coaching') {
      const timers: number[] = [];
      if (!isMobileLayout) {
        setShowCoaching(true);
        timers.push(window.setTimeout(() => setAnimateMetricBars(true), 80));
      }
      timers.push(window.setTimeout(advancePhase, PHASE_DURATIONS.coaching));
      return () => timers.forEach(clearTimeout);
    }

    if (phase === 'hold') {
      const timer = window.setTimeout(() => {
        setShowCoaching(false);
        setShowWeakSpot(false);
        setShowMain(false);
        setAnimateMetricBars(false);
        setVisibleMessages(0);
        setShowTyping(false);
        setPhase('idle');
      }, PHASE_DURATIONS.hold);
      return () => clearTimeout(timer);
    }

    const timer = window.setTimeout(advancePhase, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase, advancePhase, reduceMotion, isMobileLayout]);

  return {
    mock: HERO_MOCKUP,
    showMain,
    showWeakSpot,
    visibleMessages,
    showCoaching,
    showTyping,
    animateMetricBars,
    reduceMotion
  };
}
