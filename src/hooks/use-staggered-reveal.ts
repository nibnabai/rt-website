import { useEffect, useRef, useState } from 'react';

interface UseStaggeredRevealOptions {
  /** Number of items to reveal sequentially */
  itemCount: number;
  /** Delay between each item appearing (ms) */
  staggerDelay?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
}

export function useStaggeredReveal({
  itemCount,
  staggerDelay = 150,
  threshold = 0.3
}: UseStaggeredRevealOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        Array.from({ length: itemCount }).forEach((_, i) => {
          setTimeout(() => setVisibleCount((c) => c + 1), i * staggerDelay);
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [itemCount, staggerDelay, threshold]);

  const getItemStyle = (index: number): React.CSSProperties => ({
    opacity: index < visibleCount ? 1 : 0,
    transform:
      index < visibleCount
        ? 'translateY(0) scale(1)'
        : 'translateY(24px) scale(0.97)',
    transition:
      'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  return { containerRef, visibleCount, getItemStyle };
}
