'use client';

import { useEffect, useRef, useState } from 'react';
import { CLUSTER_QUOTES, TRENDING_TOPICS } from './constants';

const METRIC_COUNT = 3;
export const TOPIC_BAR_HEIGHTS = [14, 18, 15, 19, 24, 33, 54] as const;

const revealTransition =
  'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

export function getRevealStyle(visible: boolean): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible
      ? 'translateY(0) scale(1)'
      : 'translateY(12px) scale(0.98)',
    transition: revealTransition
  };
}

export function useTopicDiscoveryHeroAnimation() {
  const clusterRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clusterActive, setClusterActive] = useState(false);
  const [feedActive, setFeedActive] = useState(false);
  const [visibleQuotes, setVisibleQuotes] = useState(0);
  const [showClusterHub, setShowClusterHub] = useState(false);
  const [showClusterNetwork, setShowClusterNetwork] = useState(false);
  const [visibleMetrics, setVisibleMetrics] = useState(0);
  const [visibleTopics, setVisibleTopics] = useState(0);
  const [animateBars, setAnimateBars] = useState(false);
  const [showSideCards, setShowSideCards] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!reduceMotion && !isMobile) return;

    setClusterActive(true);
    setVisibleQuotes(CLUSTER_QUOTES.length);
    setShowClusterNetwork(true);
    setShowClusterHub(true);
    setVisibleMetrics(METRIC_COUNT);
  }, [reduceMotion, isMobile]);

  useEffect(() => {
    if (!reduceMotion) return;

    setFeedActive(true);
    setVisibleTopics(TRENDING_TOPICS.length);
    setAnimateBars(true);
    setShowSideCards(true);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || isMobile) return;

    const el = clusterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setClusterActive(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, isMobile]);

  useEffect(() => {
    if (reduceMotion) return;

    const el = feedRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setFeedActive(true);
        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (!clusterActive || reduceMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setShowClusterNetwork(true), 120));

    CLUSTER_QUOTES.forEach((_, index) => {
      timers.push(
        setTimeout(
          () => setVisibleQuotes((count) => Math.max(count, index + 1)),
          280 + index * 130
        )
      );
    });

    const hubDelay = 280 + CLUSTER_QUOTES.length * 130 + 180;
    timers.push(setTimeout(() => setShowClusterHub(true), hubDelay));

    for (let index = 0; index < METRIC_COUNT; index += 1) {
      timers.push(
        setTimeout(
          () => setVisibleMetrics((count) => Math.max(count, index + 1)),
          hubDelay + 120 + index * 90
        )
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [clusterActive, reduceMotion]);

  useEffect(() => {
    if (!feedActive || reduceMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setShowSideCards(true), 200));

    TRENDING_TOPICS.forEach((_, index) => {
      timers.push(
        setTimeout(
          () => setVisibleTopics((count) => Math.max(count, index + 1)),
          120 + index * 65
        )
      );
    });

    const barsDelay = 120 + TRENDING_TOPICS.length * 65 + 280;
    timers.push(setTimeout(() => setAnimateBars(true), barsDelay));

    return () => timers.forEach(clearTimeout);
  }, [feedActive, reduceMotion]);

  return {
    clusterRef,
    feedRef,
    visibleQuotes,
    showClusterHub,
    showClusterNetwork,
    visibleMetrics,
    visibleTopics,
    animateBars,
    showSideCards
  };
}
