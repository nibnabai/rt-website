'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  children: React.ReactNode;
}

export function ExpandableImage({ src, alt, children }: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="cursor-zoom-in inline-block"
        style={{ display: 'contents' }}
      >
        {children}
      </span>

      {mounted &&
        open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Expanded image'}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={close}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
