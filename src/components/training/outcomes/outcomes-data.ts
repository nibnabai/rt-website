import type { OutcomeIconId } from '../icons';

export type TrainingOutcomeMetric = {
  title: string;
  description: string;
  value: string;
  valueLabel: string;
  icon: OutcomeIconId;
  animate?: {
    numeric: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  };
};

export const OUTCOME_METRICS: TrainingOutcomeMetric[] = [
  {
    title: 'Personalized coaching at scale',
    description:
      'Every agent gets a curriculum built from their own tickets — not a shared deck.',
    value: '1:1',
    valueLabel: 'coaching ratio',
    icon: 'coaching'
  },
  {
    title: 'Faster agent improvement',
    description:
      'Targeted reps on the exact skills that move QA scores, not generic practice.',
    value: '2.4×',
    valueLabel: 'ramp speed',
    icon: 'ramp-speed',
    animate: { numeric: 2.4, suffix: '×', decimals: 1 }
  },
  {
    title: 'More consistent interactions',
    description:
      'Hard conversations get rehearsed before they reach the customer.',
    value: '94%',
    valueLabel: 'tone consistency',
    icon: 'consistency',
    animate: { numeric: 94, suffix: '%' }
  },
  {
    title: 'Better QA performance',
    description:
      'Coaching tied directly to your performance as identified by QA. Fresh recruits get up-to-speed FAST.',
    value: '+50%',
    valueLabel: '1st month QA score',
    icon: 'qa-score',
    animate: { numeric: 50, prefix: '+', suffix: '%' }
  },
  {
    title: 'Reduced escalation risk',
    description:
      'De-escalation drilled with realistic, high-intensity personas.',
    value: '−31%',
    valueLabel: 'escalations',
    icon: 'escalation',
    animate: { numeric: 31, prefix: '−', suffix: '%' }
  },
  {
    title: 'Scalable onboarding',
    description:
      'New hires reach live-queue readiness with measurable proof of competence.',
    value: 'Day 1',
    valueLabel: 'ready scenarios',
    icon: 'onboarding'
  }
];
