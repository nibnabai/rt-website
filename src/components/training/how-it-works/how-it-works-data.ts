export type TrainingScenarioCard = {
  title: string;
  badge: string;
  scenarioGoal: string;
  personaState: string;
  discussionTopic: string;
  behavior: string;
  recommendation: string;
  cta: string;
};

export const HOW_IT_WORKS_CARDS: TrainingScenarioCard[] = [
  {
    title: 'Handling Frustrated Customer Complaints',
    badge: 'Recommended for immediate training',
    scenarioGoal:
      'Practice empathetic responses to angry customers before offering solutions',
    personaState: 'Frustrated and upset',
    discussionTopic: 'Product malfunction causing business disruption',
    behavior:
      'Confrontational, demanding immediate resolution, expressing dissatisfaction',
    recommendation: `Scott's empathy score (70%) is 15% below team average. Recent violations show dismissive responses and lack of emotional acknowledgment. This scenario will help practice validation before problem-solving.`,
    cta: 'Start Session'
  },
  {
    title: 'Quick Acknowledgment & Research',
    badge: 'Recommended for this week',
    scenarioGoal:
      'Practice quick acknowledgment while researching complex issues',
    personaState: 'Impatient and time-sensitive',
    discussionTopic: 'Complex technical issue requiring investigation',
    behavior: 'Expects immediate response, will get frustrated by silence',
    recommendation:
      'Average first response time of 47 minutes exceeds 15-minute target by 213%. This scenario teaches balancing quick acknowledgment with thorough investigation using templates and status updates.',
    cta: 'Start Session'
  },
  {
    title: 'Maintaining Professional Communication',
    badge: 'Recommended for immediate training',
    scenarioGoal:
      'Practice professional language while maintaining friendly rapport',
    personaState: 'Casual and chatty',
    discussionTopic: 'General support inquiry about system issues',
    behavior: 'Friendly but informal, may encourage casual conversation',
    recommendation: `5 violations for informal language detected (e.g., "lol", "gimme"). This scenario practices maintaining professionalism while still being warm and approachable with friendly customers.`,
    cta: 'Start Session'
  },
  {
    title: 'Explaining Technical Issues Simply',
    badge: 'Optional improvement',
    scenarioGoal: 'Simplify technical explanations for non-technical customers',
    personaState: 'Confused and overwhelmed',
    discussionTopic: 'Server configuration and API integration issues',
    behavior:
      'Non-technical, asks clarifying questions, easily confused by jargon',
    recommendation:
      '2 low-severity violations for unexplained technical jargon (SSH, daemon, systemctl). Practice assessing customer technical level and using analogies to explain complex concepts clearly.',
    cta: 'Start Session'
  }
];
