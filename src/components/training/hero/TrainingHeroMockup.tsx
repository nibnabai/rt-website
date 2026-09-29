'use client';

import { useEffect, useState } from 'react';
import {
  AgentChatAvatarIcon,
  CoachingAnalysisIcon,
  MetricDeEscalationIcon,
  MetricEmpathyIcon,
  MetricResolutionIcon,
  WeakSpotTrendIcon
} from '../icons';
import { useTrainingHeroMockupAnimation } from './useTrainingHeroMockupAnimation';

const METRIC_ICONS = [
  MetricEmpathyIcon,
  MetricDeEscalationIcon,
  MetricResolutionIcon
] as const;

export function TrainingHeroMockup() {
  const {
    mock,
    showMain,
    showWeakSpot,
    visibleMessages,
    showCoaching,
    showTyping,
    animateMetricBars,
    reduceMotion
  } = useTrainingHeroMockupAnimation();

  const panelEnter = (visible: boolean, fromTop = false) =>
    visible
      ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
      : fromTop
      ? 'pointer-events-none -translate-x-2 -translate-y-2 scale-[0.96] opacity-0'
      : 'pointer-events-none translate-y-3 scale-[0.98] opacity-0';

  const [barsReady, setBarsReady] = useState(reduceMotion);

  useEffect(() => {
    if (!animateMetricBars || !showCoaching) {
      if (!animateMetricBars) setBarsReady(false);
      return;
    }
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) setBarsReady(true);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [animateMetricBars, showCoaching]);

  useEffect(() => {
    if (reduceMotion) setBarsReady(true);
  }, [reduceMotion]);

  return (
    <div className="relative mx-auto flex w-full max-w-[600px] flex-col gap-4 md:block md:pb-28 lg:max-w-none">
      <div
        className={`order-2 z-10 w-full rounded-2xl border border-[#e4e1db] bg-white px-[13px] py-3 shadow-[0px_6px_18px_-8px_rgba(13,18,24,0.1)] transition-all duration-500 ease-out md:order-0 md:absolute md:-left-4 md:-top-6 md:w-56 ${panelEnter(
          reduceMotion || showWeakSpot,
          true
        )}`}
      >
        <div className="flex items-center gap-2">
          <WeakSpotTrendIcon className="shrink-0 text-[#49a46e]" />
          <p className="text-[11px] uppercase tracking-[1.1px] text-[#4f565e]">
            {mock.weakSpotEyebrow}
          </p>
        </div>
        <p className="mt-1 text-[14px] text-[#0d1218]">{mock.weakSpotTitle}</p>
        <p className="mt-0.5 text-[11px] text-[#4f565e]">{mock.weakSpotMeta}</p>
      </div>

      <div
        className={`order-1 overflow-hidden rounded-[20px] border border-[#e4e1db] bg-white shadow-[0px_30px_80px_-30px_rgba(13,18,24,0.18),0px_12px_32px_-12px_rgba(13,18,24,0.12)] transition-all duration-500 ease-out md:order-0 ${panelEnter(
          reduceMotion || showMain
        )}`}
      >
        <div className="flex items-center justify-between border-b border-[#e4e1db] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[rgba(223,34,37,0.7)]" />
            <span className="h-2 w-2 rounded-full bg-[#e1a035]" />
            <span className="h-2 w-2 rounded-full bg-[rgba(73,164,110,0.7)]" />
            <p className="ml-1 text-[12px] font-medium text-[#0d1218]">
              {mock.scenarioLabel}
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[1px] text-[#4f565e]">
            {mock.personaLabel}
          </p>
        </div>

        <div className="px-5 pt-5">
          <div className="flex flex-col gap-3">
            {mock.messages.map((message, index) => {
              const isVisible = reduceMotion || index < visibleMessages;

              return (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div
                    className={`flex gap-3 transition-transform duration-500 ease-out ${
                      isVisible ? 'translate-y-0' : 'translate-y-2'
                    } ${
                      message.role === 'agent'
                        ? 'ml-auto max-w-full justify-end'
                        : ''
                    }`}
                  >
                    {message.role === 'persona' && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#e28247] to-[rgba(223,34,37,0.7)] text-[11px] font-medium text-[#0d1218]">
                        P
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-[22.75px] ${
                        message.role === 'persona'
                          ? 'rounded-tl-sm border border-[#e4e1db] bg-[rgba(226,130,71,0.08)] text-[#0d1218]'
                          : 'rounded-tr-sm bg-[#0d1218] text-[#fcfaf6]'
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.role === 'agent' && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d1218] text-[#fcfaf6]">
                        <AgentChatAvatarIcon className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-5 pb-5 pt-4">
          <div
            className={`flex min-h-4 items-center gap-2 transition-opacity duration-500 ease-out ${
              showTyping ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#007bad]/75" />
            <p className="text-[12px] leading-4 text-[#4f565e]">
              {mock.typingLabel}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`order-3 z-10 w-full rounded-[20px] border border-[#e4e1db] bg-white p-5 shadow-[0px_30px_80px_-30px_rgba(13,18,24,0.18)] transition-all duration-500 ease-out md:order-0 md:absolute md:-bottom-10 md:-right-10 md:w-80 ${panelEnter(
          reduceMotion || showCoaching
        )}`}
      >
        <div className="flex items-center gap-2">
          <CoachingAnalysisIcon className="shrink-0 text-[#e28247]" />
          <p className="text-[12px] uppercase tracking-[1.2px] text-[#4f565e]">
            {mock.coaching.eyebrow}
          </p>
        </div>
        <p className="mt-2 text-[14px] font-medium text-[#0d1218]">
          {mock.coaching.title}
        </p>
        <div className="mt-4 space-y-3">
          {mock.coaching.metrics.map((metric, index) => {
            const MetricIcon = METRIC_ICONS[index] ?? MetricEmpathyIcon;

            return (
              <div key={metric.label}>
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1.5 text-[#4f565e]">
                    <MetricIcon className="shrink-0 text-[#4f565e]" />
                    {metric.label}
                  </span>
                  <span className="font-medium text-[#0d1218]">
                    {metric.value}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#f3f0ea]">
                  <div
                    className={`h-full rounded-full ${metric.barClass} transition-[width] duration-700 ease-out`}
                    style={{
                      width: barsReady ? metric.width : '0%',
                      transitionDelay: `${index * 120}ms`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 rounded-xl bg-[#f3f0ea] p-3 text-[12px] leading-relaxed text-[#4f565e]">
          <span className="font-medium text-[#0d1218]">Suggestion · </span>
          {mock.coaching.suggestion}
        </div>
      </div>
    </div>
  );
}
