'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type IvyChatDemoPhase =
  | 'idle'
  | 'typing-input'
  | 'user-sent'
  | 'ivy-loading'
  | 'ivy-response'
  | 'ivy-proactive';

export type IvyChatDemoVariant = 'ask' | 'proactive';

export const IVY_DEMO_PROGRESS_STEPS = [
  { status: 'thinking', label: 'Thinking...' },
  { status: 'searching', label: 'Searching...' },
  { status: 'querying', label: 'Querying data...' },
  { status: 'analyzing', label: 'Analyzing...' },
  { status: 'generating', label: 'Generating response...' }
] as const;

export type IvyDemoProgressStatus =
  (typeof IVY_DEMO_PROGRESS_STEPS)[number]['status'];

function prefersReducedMotion() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useIvyChatDemoSequence({
  userMessage,
  typingMsPerChar = 38,
  pauseBeforeSendMs = 450,
  pauseBeforeThinkingMs = 400,
  progressStepMs = 850,
  pauseBeforeResponseMs = 500,
  loopDelayMs = 7000,
  enabled = true
}: {
  userMessage: string;
  typingMsPerChar?: number;
  pauseBeforeSendMs?: number;
  pauseBeforeThinkingMs?: number;
  progressStepMs?: number;
  pauseBeforeResponseMs?: number;
  loopDelayMs?: number;
  enabled?: boolean;
}) {
  const [phase, setPhase] = useState<IvyChatDemoPhase>('idle');
  const [variant, setVariant] = useState<IvyChatDemoVariant>('ask');
  const [inputText, setInputText] = useState('');
  const [progressIndex, setProgressIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);
  const nextVariantRef = useRef<IvyChatDemoVariant>('ask');

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    intervalsRef.current.forEach(clearInterval);
    timersRef.current = [];
    intervalsRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, delayMs: number) => {
    const id = setTimeout(fn, delayMs);
    timersRef.current.push(id);
  }, []);

  const resetDemo = useCallback(() => {
    clearTimers();
    setPhase('idle');
    setInputText('');
    setProgressIndex(0);
  }, [clearTimers]);

  const runSequence = useCallback(() => {
    clearTimers();

    const currentVariant = nextVariantRef.current;
    nextVariantRef.current = currentVariant === 'ask' ? 'proactive' : 'ask';
    setVariant(currentVariant);

    if (prefersReducedMotion()) {
      if (currentVariant === 'proactive') {
        setPhase('ivy-proactive');
      } else {
        setInputText('');
        setProgressIndex(IVY_DEMO_PROGRESS_STEPS.length - 1);
        setPhase('ivy-response');
      }
      schedule(() => runSequence(), loopDelayMs);
      return;
    }

    if (currentVariant === 'proactive') {
      setPhase('idle');
      setInputText('');
      setProgressIndex(0);

      schedule(() => {
        setPhase('ivy-proactive');
        schedule(() => runSequence(), loopDelayMs);
      }, pauseBeforeThinkingMs);
      return;
    }

    setPhase('typing-input');
    setInputText('');
    setProgressIndex(0);

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      charIndex += 1;
      setInputText(userMessage.slice(0, charIndex));

      if (charIndex >= userMessage.length) {
        clearInterval(typingInterval);

        schedule(() => {
          setPhase('user-sent');
          setInputText('');

          schedule(() => {
            setPhase('ivy-loading');
            let step = 0;

            const progressInterval = setInterval(() => {
              step += 1;
              setProgressIndex(step);

              if (step >= IVY_DEMO_PROGRESS_STEPS.length - 1) {
                clearInterval(progressInterval);

                schedule(() => {
                  setPhase('ivy-response');

                  schedule(() => {
                    runSequence();
                  }, loopDelayMs);
                }, pauseBeforeResponseMs);
              }
            }, progressStepMs);

            intervalsRef.current.push(progressInterval);
          }, pauseBeforeThinkingMs);
        }, pauseBeforeSendMs);
      }
    }, typingMsPerChar);

    intervalsRef.current.push(typingInterval);
  }, [
    clearTimers,
    loopDelayMs,
    pauseBeforeResponseMs,
    pauseBeforeSendMs,
    pauseBeforeThinkingMs,
    progressStepMs,
    schedule,
    typingMsPerChar,
    userMessage
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
      { threshold: 0.35 }
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

  const progress = IVY_DEMO_PROGRESS_STEPS[progressIndex];

  return {
    containerRef,
    phase,
    variant,
    inputText,
    progress,
    showUserMessage:
      phase === 'user-sent' ||
      phase === 'ivy-loading' ||
      phase === 'ivy-response',
    showProgress: phase === 'ivy-loading',
    showResponse: phase === 'ivy-response',
    showProactive: phase === 'ivy-proactive',
    animateCharts: phase === 'ivy-response'
  };
}

export const IVY_DEMO_USER_MESSAGE = 'Show me team performance analysis';
