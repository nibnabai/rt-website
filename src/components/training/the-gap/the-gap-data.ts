export const THE_GAP = {
  eyebrow: 'The gap',
  headline: "Generic training doesn't fix specific problems",
  body: `Onboarding decks and shared roleplay scripts treat every agent the same. But your top performer needs to practice de-escalation, your new hire needs refund policy reps, and your veteran needs empathy work. Static training can't tell the difference.`,
  emphasis:
    'RipeText can — because it has seen every conversation each agent has ever handled.',
  staticCard: {
    label: 'Static training',
    title: 'One deck. Every agent.',
    bullets: [
      'Same scripts regardless of skill level',
      'No feedback loop from real tickets',
      'Updated quarterly, at best',
      'Practice ≠ performance'
    ],
    lastBulletItalic: true
  },
  adaptiveCard: {
    label: 'RipeText adaptive training',
    title: 'Built around each agent.',
    bullets: [
      "Scenarios pulled from this agent's QA history",
      'Personas tuned to the conversations they fumble',
      'Refreshed continuously from live tickets',
      'Coaching that moves the QA score'
    ],
    footer: '14 personalized sessions queued this week'
  }
} as const;
