export interface ConversationMessageData {
  id: string;
  initial: string;
  author: string;
  time: string;
  body: string;
  csat?: string;
  isViolation?: boolean;
  violationLabel?: string;
  avatarClass: string;
  statusDotClass?: string;
}

export interface MetricRowData {
  id: string;
  label: string;
  value: string;
  valueSuffix?: string;
  dotColor: string;
}

export const MOCKUP_CHROME_URL = 'ripetext.app / conversations / #48217';

export const TICKET_HEADER = {
  label: 'Ticket · #48217',
  title: 'Refund not received after 7 days',
  statusPills: [
    {
      label: 'Closed',
      className: 'border border-lp-mockup-hairline text-[#363747]'
    },
    {
      label: 'Resolved',
      className: 'border-0 bg-[#e0fae4] text-[#085023]'
    }
  ] as const
};

export const MESSAGES: ConversationMessageData[] = [
  {
    id: 'm1',
    initial: 'A',
    author: 'Amelia C.',
    time: '09:14',
    body: "Hi — I was promised a refund last week and still haven't seen it. This is the third time I've had to chase.",
    avatarClass: 'bg-[#e4e5ff] text-[#433a85]',
    statusDotClass: 'bg-[#e8ab3e]'
  },
  {
    id: 'm2',
    initial: 'J',
    author: 'Jordan (Tier 1)',
    time: '09:21',
    body: 'Apologies for the delay, Amelia. Let me pull up your order now and confirm the status.',
    csat: '4.6',
    avatarClass: 'bg-[#d3f1de] text-[#00009e]',
    statusDotClass: 'bg-[#2a9d67]'
  },
  {
    id: 'm3',
    initial: 'J',
    author: 'Jordan (Tier 1)',
    time: '09:24',
    body: 'Unfortunately our policy is policy on these — refunds can take up to 10 business days regardless of the situation.',
    isViolation: true,
    violationLabel: 'Guideline violation',
    avatarClass: 'bg-[#d3f1de] text-[#00009e]',
    statusDotClass: 'bg-[#000019]'
  },
  {
    id: 'm4',
    initial: 'A',
    author: 'Amelia C.',
    time: '09:26',
    body: "That isn't acceptable. I'd like to speak to someone else.",
    avatarClass: 'bg-[#e4e5ff] text-[#433a85]',
    statusDotClass: 'bg-[#de3b3d]'
  },
  {
    id: 'm5',
    initial: 'P',
    author: 'Priya (Tier 2)',
    time: '09:41',
    body: "Amelia — I've expedited your refund manually. It will land in your account today. I'm sorry for how this was handled.",
    csat: '4.9',
    avatarClass: 'bg-[#d3f1de] text-[#00009e]',
    statusDotClass: 'bg-[#2a9d67]'
  }
];

export const SCORE_PANEL = {
  title: 'Conversation score',
  score: 72,
  maxScore: 100,
  riskLabel: 'at risk',
  subtitle: 'Below team average (84)',
  flaggedTitle: 'Flagged',
  flaggedHeading: 'Forbidden phrase used',
  flaggedDetail: '"policy is policy" — rule #07, escalation tone'
};

export const METRIC_ROWS: MetricRowData[] = [
  {
    id: 'ai-csat',
    label: 'AI CSAT',
    value: '3.4 / 5',
    valueSuffix: '↓',
    dotColor: 'bg-[#e8ab3e]'
  },
  {
    id: 'sentiment',
    label: 'Sentiment shift',
    value: '+1 → −2 → +2',
    dotColor: 'bg-[#e8ab3e]'
  },
  {
    id: 'agents',
    label: 'Agents involved',
    value: '2 agents',
    dotColor: 'bg-[#999eab]'
  },
  {
    id: 'ttr',
    label: 'Time to resolution',
    value: '1h 42m',
    dotColor: 'bg-[#999eab]'
  },
  {
    id: 'messages',
    label: 'Messages',
    value: '14 messages',
    dotColor: 'bg-[#999eab]'
  },
  {
    id: 'voice',
    label: 'Voice adherence',
    value: '9 / 15 rules',
    dotColor: 'bg-[#de3b3d]'
  }
];

export const TEAM_AVG_CARD = {
  title: 'Team avg · this week',
  value: 84.6,
  delta: '+2.1',
  barHeights: [0.48, 0.66, 0.58, 0.75, 0.84, 0.78, 0.93, 1]
};

export const AI_CSAT_CARD = {
  title: 'AI CSAT · last 24h',
  value: 4.31,
  maxLabel: '/ 5.00'
};

/** Sparkline stroke (viewBox 0 0 105 28) */
export const SPARKLINE_LINE =
  'M0,22 L12,18 L24,20 L36,14 L48,16 L60,10 L72,12 L84,6 L96,8 L105,4';

export const SPARKLINE_AREA = `${SPARKLINE_LINE} L105,28 L0,28 Z`;
