'use client';

import { useEffect, useState } from 'react';

export interface AnimatedNumberProps {
  value: number;
  animate: boolean;
  prefix?: string;
  suffix?: string;
  /** Decimal places when value is fractional (e.g. 4.31 with decimals=2) */
  decimals?: number;
  duration?: number;
  /** Skip count-up and show final value immediately */
  immediate?: boolean;
}

export function AnimatedNumber({
  value,
  animate,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
  immediate = false
}: AnimatedNumberProps) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (immediate) {
      setDisplayed(value);
      return;
    }
    if (!animate) {
      setDisplayed(0);
      return;
    }

    const startTime = performance.now();
    const multiplier = Math.pow(10, decimals);

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = eased * value;
      const next =
        decimals > 0
          ? Math.round(raw * multiplier) / multiplier
          : Math.round(raw);
      setDisplayed(next);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [animate, value, decimals, duration, immediate]);

  const formatted =
    decimals > 0 ? displayed.toFixed(decimals) : displayed.toLocaleString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
