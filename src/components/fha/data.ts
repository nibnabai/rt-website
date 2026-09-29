export interface ComplianceScenario {
  id: string;
  customerInitials: string;
  customerName: string;
  reviewDate: string;
  customerMessage: string;
  replyBefore: string;
  flaggedPhrase: string;
  replyAfter: string;
  violationTitle: string;
  violationLabel: string;
  violationDescription: string;
  citation: string;
  estimatedCost: string;
  riskLevel: 'High' | 'Medium' | 'Low';
}

export const complianceScenarios: ComplianceScenario[] = [
  {
    id: 'familial-children',
    customerInitials: 'AJ',
    customerName: 'Ann J. — Customer',
    reviewDate: 'Reviewed Mar 14, 2025 · 10:42 AM',
    customerMessage:
      'I am interested in renting a property but I have children?',
    replyBefore: 'The property listing indicates that it ',
    flaggedPhrase: 'is not suitable for children',
    replyAfter:
      ' between 2–12 years old. Let me steer you to listings that accept children.',
    violationTitle: 'FHA — Familial & Religious Status',
    violationLabel: 'Compliance Review',
    violationDescription:
      "The support agent communicated/enforced a host's age-based restriction on children, making housing unavailable based on familial status.",
    citation: 'FHA §3604(c)',
    estimatedCost: '$15,000',
    riskLevel: 'High'
  },
  {
    id: 'familial-religious',
    customerInitials: 'JM',
    customerName: 'Jordan M. — Customer',
    reviewDate: 'Reviewed Mar 14, 2025 · 10:42 AM',
    customerMessage:
      'Hi! Looking at the 2BR. Is this a good area for families with young kids?',
    replyBefore: "Yes! It's perfect for families. The neighborhood is mostly ",
    flaggedPhrase: 'young Christian families',
    replyAfter: ", so you'll fit right in.",
    violationTitle: 'FHA — Familial & Religious Status',
    violationLabel: 'Compliance Review',
    violationDescription:
      'Language references protected classes (familial status, religion). May indicate steering under the Fair Housing Act.',
    citation: 'FHA §3604(c)',
    estimatedCost: '$25,000',
    riskLevel: 'High'
  },
  {
    id: 'disability-accommodation',
    customerInitials: 'MJ',
    customerName: 'Mary J. — Customer',
    reviewDate: 'Reviewed Mar 14, 2025 · 10:42 AM',
    customerMessage:
      'I am interested in renting a property, and I have a service dog.',
    replyBefore: "I'm sorry, ",
    flaggedPhrase: 'but we cannot allow your service dog in the housing',
    replyAfter:
      '. University Heights has a no-pets policy, and we do not make exceptions for service animals.',
    violationTitle:
      'FHA — Assistance-animal / disability accommodation refusal',
    violationLabel: 'Compliance Review',
    violationDescription:
      'Blanket "no-pets" policy applied to an assistance animal = refusal to make a reasonable accommodation.',
    citation: 'FHA §3604(c)',
    estimatedCost: '$13,000',
    riskLevel: 'High'
  }
];

export interface ProblemStat {
  title: string;
  description: string;
  icon: 'chat' | 'eye-off' | 'file-alert' | 'scales';
}

export const problemStats: ProblemStat[] = [
  {
    title: 'Thousands of messages a week',
    description:
      'Your leasing team writes more than any compliance officer can read. Most of it never gets a second look.',
    icon: 'chat'
  },
  {
    title: 'Casual language, real exposure',
    description:
      'An offhand comment about families, religion, or neighborhood demographics can trigger an FHA claim.',
    icon: 'eye-off'
  },
  {
    title: 'No defensible record',
    description:
      "Without systematic review, you can't prove your team communicates within Fair Housing standards.",
    icon: 'file-alert'
  },
  {
    title: 'One message, a full investigation',
    description:
      'HUD complaints and private FHA lawsuits routinely trace back to a single conversation.',
    icon: 'scales'
  }
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: 'connect' | 'scan' | 'review';
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Connect your channels',
    description:
      'One-click integrations with Zendesk, Intercom, and Front. Need another system? Tell us — we add new integrations fast.',
    icon: 'connect'
  },
  {
    number: '02',
    title: 'RipeText reviews every conversation',
    description:
      'As threads complete, we scan them for FHA risk, categorize violations, and surface the highest-priority issues first.',
    icon: 'scan'
  },
  {
    number: '03',
    title: 'Your team reviews, rewrites, improves',
    description:
      'Compliance leads triage flags, share safer rewrites, and track team progress over time.',
    icon: 'review'
  }
];

export interface OutcomeFeature {
  title: string;
  description: string;
  icon: 'shield' | 'rewrite' | 'chart' | 'audit';
}

export const outcomeFeatures: OutcomeFeature[] = [
  {
    title: 'Reduce legal exposure',
    description:
      'Catch FHA risks across your communication before they show up in a complaint.',
    icon: 'shield'
  },
  {
    title: 'Raise communication standards',
    description:
      'Turn flagged messages into coaching moments, backed by concrete rewrite examples.',
    icon: 'rewrite'
  },
  {
    title: 'See team performance',
    description:
      'Track compliance trends by agent, property, and violation category.',
    icon: 'chart'
  },
  {
    title: 'Ready for audits',
    description:
      'Export documented reviews, citations, and remediation steps in formats auditors accept.',
    icon: 'audit'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const reportTags = [
  'Executive summary',
  'Risk breakdown',
  'Citations',
  'Evidence trail'
];

export const faqItems: FaqItem[] = [
  {
    question: 'Does RipeText monitor live conversations in real time?',
    answer:
      "Today, we review each conversation once it's complete. This keeps your agents fast and avoids false flags on mid-sentence context. Real-time monitoring is a straightforward extension of our pipeline — if you need it, we can turn it on for your deployment."
  },
  {
    question: 'Which systems do you connect to?',
    answer:
      "We integrate directly with Zendesk Support, Intercom, and Front. New integrations take us days, not months — tell us what you use and we'll add it."
  },
  {
    question: 'How do you flag potential FHA violations?',
    answer:
      'We combine protected-class detection, steering pattern recognition, and FHA citation matching. Every flag includes the specific phrase, the full conversation, and the relevant statute.'
  },
  {
    question: 'Is this a substitute for legal counsel?',
    answer:
      'No. RipeText is a review and monitoring tool. It surfaces risk and evidence — your legal team decides what to do with it.'
  },
  {
    question: 'How is our data protected?',
    answer:
      "Data is encrypted in transit and at rest. We're actively completing SOC 2 Type II certification; full details and our current security posture are available on request."
  }
];
