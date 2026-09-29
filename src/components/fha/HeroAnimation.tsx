import { useState, useEffect, useCallback } from 'react';
import { ComplianceCard } from './ComplianceCard';
import { complianceScenarios } from './data';

type Phase =
  | 'idle'
  | 'messageIn'
  | 'replyTyping'
  | 'replyIn'
  | 'flagAppear'
  | 'panelOpen'
  | 'hold';

const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 400,
  messageIn: 800,
  replyTyping: 1000,
  replyIn: 600,
  flagAppear: 800,
  panelOpen: 600,
  hold: 2500
};

const PHASE_ORDER: Phase[] = [
  'idle',
  'messageIn',
  'replyTyping',
  'replyIn',
  'flagAppear',
  'panelOpen',
  'hold'
];

export function HeroAnimation({ className = '' }: { className?: string }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [transitioning, setTransitioning] = useState(false);

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
    if (phase === 'hold') {
      const holdTimer = setTimeout(() => {
        setTransitioning(true);
        const fadeTimer = setTimeout(() => {
          setCardIndex((prev) => (prev + 1) % complianceScenarios.length);
          setPhase('idle');
          setTransitioning(false);
        }, 500);
        return () => clearTimeout(fadeTimer);
      }, PHASE_DURATIONS.hold);
      return () => clearTimeout(holdTimer);
    }

    const timer = setTimeout(advancePhase, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase, advancePhase]);

  const scenario = complianceScenarios[cardIndex];

  return (
    <div className={`relative ${className}`}>
      <div
        className={`transition-opacity duration-500 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <ComplianceCard
          key={scenario.id}
          scenario={scenario}
          animationPhase={phase}
        />
      </div>
    </div>
  );
}
