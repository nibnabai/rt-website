export const HERO_MOCKUP = {
  scenarioLabel: 'Live scenario · Refund dispute',
  personaLabel: 'Persona · Frustrated subscriber',
  weakSpotEyebrow: 'Weak spot · this agent',
  weakSpotTitle: 'Refund de-escalation',
  weakSpotMeta: '3 missed QA flags · last 30 days',
  messages: [
    {
      role: 'persona' as const,
      text: `I've been a customer for 4 years and this is the second time you've billed me wrong. I want this fixed today or I'm done.`
    },
    {
      role: 'agent' as const,
      text: 'I completely understand — let me pull up your account right now and look at the last two billing cycles.'
    },
    {
      role: 'persona' as const,
      text: `I don't need you to "look at it." I need a refund and an explanation. Now.`
    }
  ],
  typingLabel: 'Persona typing…',
  coaching: {
    eyebrow: 'Coaching analysis',
    title: 'Scenario generated from QA gaps',
    metrics: [
      { label: 'Empathy', value: 62, barClass: 'bg-[#e1a035]', width: '62%' },
      {
        label: 'De-escalation',
        value: 48,
        barClass: 'bg-[rgba(223,34,37,0.8)]',
        width: '48%'
      },
      {
        label: 'Resolution clarity',
        value: 81,
        barClass: 'bg-[#49a46e]',
        width: '81%'
      }
    ],
    suggestion:
      'Acknowledge tenure before pivoting to account details. Reduces hostility 38% in similar tickets.'
  }
} as const;
