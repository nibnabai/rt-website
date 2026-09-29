'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cdnUrl } from '@/util/cdn';

const AVATAR_COUNT = 16;

const avatars = Array.from({ length: AVATAR_COUNT }, (_, i) =>
  cdnUrl(`/images/features/training/persona/${i + 1}.webp`)
);

function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="#546087"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="#546087"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PersonaAvatarSelectorProps {
  hint: string;
}

/** Mirrors apps/web AvatarSelector — clipped carousel with scroll arrows. */
export function PersonaAvatarSelector({ hint }: PersonaAvatarSelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons);

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [updateScrollButtons]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-w-0">
      <div className="relative min-w-0 w-full">
        <div
          ref={scrollContainerRef}
          className="flex w-full min-w-0 gap-3 overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {avatars.map((avatar) => (
            <button
              key={avatar}
              type="button"
              onClick={() =>
                setSelectedAvatar(selectedAvatar === avatar ? '' : avatar)
              }
              className={`size-14 shrink-0 overflow-hidden rounded-full border-[3px] transition-all sm:size-[67px] sm:border-4 ${
                selectedAvatar === avatar
                  ? 'border-[#4d6dd5]'
                  : 'border-[#e2e2e2] hover:border-[#c5c5c5]'
              }`}
            >
              <Image
                src={avatar}
                alt="Avatar option"
                width={67}
                height={67}
                className="size-full object-cover"
              />
            </button>
          ))}
        </div>

        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/75 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            aria-label="Show previous avatars"
          >
            <ChevronLeftIcon />
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/75 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            aria-label="Show more avatars"
          >
            <ChevronRightIcon />
          </button>
        )}
      </div>

      <p className="mt-4 text-[12px] text-[rgba(84,96,135,0.7)]">{hint}</p>
    </div>
  );
}
