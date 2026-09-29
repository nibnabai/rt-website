'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { THE_GAP } from './the-gap/the-gap-data';
import {
  CoachingAnalysisIcon,
  StaticTrainingDocumentIcon,
  TrainingSessionsQueuedIcon
} from './icons';

const copy = THE_GAP;

function ComparisonCard({
  variant,
  style
}: {
  variant: 'static' | 'adaptive';
  style?: React.CSSProperties;
}) {
  const isAdaptive = variant === 'adaptive';
  const card = isAdaptive ? copy.adaptiveCard : copy.staticCard;

  return (
    <div
      className={`relative overflow-hidden rounded-[20px] border p-8 ${
        isAdaptive
          ? 'border-[#e4e1db] bg-[#1c2c57] text-[#fcfaf6] shadow-[0px_30px_80px_-30px_rgba(13,18,24,0.18),0px_12px_32px_-12px_rgba(13,18,24,0.12)]'
          : 'border-[#e4e1db] bg-white shadow-[0px_6px_18px_-8px_rgba(13,18,24,0.1)]'
      }`}
      style={style}
    >
      {isAdaptive && (
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[rgba(12,174,233,0.2)] blur-3xl"
          aria-hidden
        />
      )}

      <div className="relative">
        <div className="flex items-center gap-2">
          {isAdaptive ? (
            <CoachingAnalysisIcon className="shrink-0 text-[#e28247]" />
          ) : (
            <StaticTrainingDocumentIcon className="shrink-0 text-[#4f565e]" />
          )}
          <p
            className={`text-[12px] uppercase tracking-[1.2px] ${
              isAdaptive ? 'text-[rgba(252,250,246,0.6)]' : 'text-[#4f565e]'
            }`}
          >
            {card.label}
          </p>
        </div>

        <p
          className={`mt-4 font-display text-[32px] leading-8 tracking-[-0.24px] sm:text-[35px] ${
            isAdaptive ? 'text-[#fcfaf6]' : 'text-[#0d1218]'
          }`}
        >
          {card.title}
        </p>

        <ul className="mt-5 space-y-2.5">
          {card.bullets.map((bullet, index) => {
            const isLast = index === card.bullets.length - 1;
            const isItalic =
              !isAdaptive &&
              isLast &&
              'lastBulletItalic' in copy.staticCard &&
              copy.staticCard.lastBulletItalic;

            return (
              <li key={bullet} className="flex items-start gap-2.5">
                <span
                  className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                    isAdaptive ? 'bg-[#e28247]' : 'bg-[#4f565e]'
                  } ${isItalic ? 'opacity-40' : ''}`}
                />
                <span
                  className={`text-[14px] leading-5 ${
                    isAdaptive
                      ? 'text-[rgba(252,250,246,0.8)]'
                      : isItalic
                      ? 'italic text-[#4f565e]'
                      : 'text-[#4f565e]'
                  }`}
                >
                  {bullet}
                </span>
              </li>
            );
          })}
        </ul>

        {isAdaptive && 'footer' in card && (
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-[rgba(252,250,246,0.08)] px-3 py-2">
            <TrainingSessionsQueuedIcon className="shrink-0 text-[rgba(252,250,246,0.8)]" />
            <p className="text-[12px] text-[rgba(252,250,246,0.8)]">
              {card.footer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function TrainingTheGap() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 3,
    staggerDelay: 120,
    threshold: 0.15
  });

  return (
    <section
      id="the-gap"
      className="border-b border-[#e4e1db] bg-[#fcfcfd] py-16 lg:py-24"
    >
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div
          className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16"
          style={getItemStyle(0)}
        >
          <div>
            <p className="text-[12px] uppercase tracking-[2.4px] text-[#0caee9]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[40px] leading-[1.1] tracking-[-1.5px] text-[#0d1218] sm:text-[52px] sm:leading-[63px]">
              {copy.headline}
            </h2>
          </div>
          <p className="text-pretty text-[18px] leading-[29.25px] text-[#4f565e]">
            {copy.body}{' '}
            <span className="font-medium text-[#0d1218]">{copy.emphasis}</span>
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          <ComparisonCard variant="static" style={getItemStyle(1)} />
          <ComparisonCard variant="adaptive" style={getItemStyle(2)} />
        </div>
      </div>
    </section>
  );
}
