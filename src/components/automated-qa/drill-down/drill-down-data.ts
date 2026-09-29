import type { ComponentType } from 'react';
import type { ConversationMessageData } from '../conversation-mockup/conversation-mockup-data';
import { TeamPerformanceMockup } from './TeamPerformanceMockup';
import { AgentDetailMockup } from './AgentDetailMockup';
import { ConversationDrilldownMockup } from './ConversationDrilldownMockup';

export type DrilldownStepData = {
  number: string;
  stepLabel: string;
  title: string;
  body: string;
  Mockup: ComponentType<{ style?: React.CSSProperties }>;
};

export const DRILLDOWN_STEPS: DrilldownStepData[] = [
  {
    number: '01',
    stepLabel: 'Step',
    title: 'Start at team performance.',
    body: "The main RipeText dashboard shows your team's averages on all six metrics, plus how they're trending week over week.",
    Mockup: TeamPerformanceMockup
  },
  {
    number: '02',
    stepLabel: 'Step',
    title: 'Drill into an agent.',
    body: "Click any agent to see their Company Voice adherence as a spider chart, every guideline they've violated, their average AI CSAT, their average time to resolution, and the rest.",
    Mockup: AgentDetailMockup
  },
  {
    number: '03',
    stepLabel: 'Step',
    title: 'Drill into a conversation.',
    body: 'Open any ticket and every metric is visible at the message level. See exactly which reply broke a guideline, when sentiment turned, and how long each handoff took.',
    Mockup: ConversationDrilldownMockup
  }
];

export const TEAM_METRIC_CARDS = [
  {
    label: 'Voice adherence',
    value: '92%',
    delta: '+1.4',
    deltaPositive: true
  },
  { label: 'AI CSAT', value: '4.31', delta: '+0.12', deltaPositive: true },
  { label: 'Sentiment', value: '+1.8', delta: '+0.3', deltaPositive: true },
  { label: 'Handoffs', value: '1.4', delta: '−0.2', deltaPositive: false },
  { label: 'Resolution', value: '47m', delta: '−6m', deltaPositive: false },
  { label: 'Messages', value: '9.2', delta: '−1.1', deltaPositive: false }
] as const;

export const TEAM_AGENT_ROWS = [
  { name: 'Priya R.', voice: '96%', csat: '4.7', ttr: '32m', score: '94' },
  { name: 'Jordan M.', voice: '75%', csat: '3.9', ttr: '1h 12m', score: '72' },
  { name: 'Marcus L.', voice: '91%', csat: '4.4', ttr: '48m', score: '88' }
] as const;

export const AGENT_VIOLATIONS = [
  '· "policy is policy" — 7×',
  '· Missing apology — 4×',
  '· No escalation offer — 3×'
] as const;

export const DRILLDOWN_MESSAGES: ConversationMessageData[] = [
  {
    id: 'd1',
    initial: 'A',
    author: 'Amelia C.',
    time: '09:14',
    body: "Hi — I was promised a refund last week and still haven't seen it.",
    avatarClass: 'bg-[#e4e5ff] text-[#433a85]',
    statusDotClass: 'bg-[#2a9d67]'
  },
  {
    id: 'd2',
    initial: 'J',
    author: 'Jordan',
    time: '09:31',
    body: 'Apologies for the delay. Let me pull up your order.',
    avatarClass: 'bg-[#d3f1de] text-[#1b275f]',
    statusDotClass: 'bg-[#2a9d67]'
  },
  {
    id: 'd3',
    initial: 'J',
    author: 'Jordan',
    time: '09:34',
    body: 'Unfortunately our policy is policy — refunds can take up to 10 business days.',
    isViolation: true,
    violationLabel: 'Rule #07',
    avatarClass: 'bg-[#d3f1de] text-[#1b275f]',
    statusDotClass: 'bg-[#de3b3d]'
  },
  {
    id: 'd4',
    initial: 'A',
    author: 'Amelia C.',
    time: '09:36',
    body: "That isn't acceptable. I'd like to speak to someone else.",
    avatarClass: 'bg-[#e4e5ff] text-[#433a85]',
    statusDotClass: 'bg-[#de3b3d]'
  },
  {
    id: 'd5',
    initial: 'P',
    author: 'Priya',
    time: '09:41',
    body: "Amelia — I've expedited your refund manually. It will land today.",
    avatarClass: 'bg-[#d3f1de] text-[#1b275f]',
    statusDotClass: 'bg-[#2a9d67]'
  }
];
