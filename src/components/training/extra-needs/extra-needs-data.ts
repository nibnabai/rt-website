export const EXTRA_NEEDS = {
  eyebrow: 'extra needs',
  headline: 'Endless Customisation for Unique Training Needs',
  body: 'Automatically generated training gets you started fast, while endless customisation lets your team recreate complex, high-stakes support situations precisely.',
  steps: [
    {
      number: '01',
      title: 'Generate or build your customer cast',
      body: 'One-click AI personas pulled from your support data, or hand-crafted archetypes with custom temperament, knowledge level, and escalation triggers. Mix and match across your team.'
    },
    {
      number: '02',
      title: 'Auto-generated from QA gaps. Or fully your own.',
      body: 'Let RipeText spin up scenarios from real ticket history and weak-spot patterns — or write completely custom briefs with policies, objectives, and escalation conditions. No templates, no ceilings.'
    },
    {
      number: '03',
      title: 'Train on your own accord',
      body: `Launch a session whenever you're ready. The persona responds in real time like a real customer would. Get a detailed coaching breakdown the moment you close the chat.`
    }
  ],
  personaForm: {
    title: 'Create New Persona',
    subtitle: 'Define a training persona for employee scenarios',
    profilePhoto: 'Profile Photo',
    profileHint: 'Select a profile photo from the library above',
    fullName: { label: 'Full Name *', placeholder: 'e.g., Sarah Mitchell' },
    age: { label: 'Age *', placeholder: '30' },
    location: { label: 'Location *', placeholder: 'e.g., Austin, TX' },
    occupation: {
      label: 'Occupation / Role *',
      placeholder: 'e.g., Product Manager'
    },
    character: {
      label: 'Character Description *',
      placeholder:
        'Describe the personality, behavior patterns, communication style, and expectations of this persona...',
      hint: 'Include details about their personality, expectations, and typical behaviors'
    },
    temperament: {
      label: 'Temperament',
      value: 'Neutral',
      calm: 'Calm',
      neutral: 'Neutral',
      intense: 'Intense'
    },
    cancel: 'Cancel',
    submit: 'Create Persona'
  }
} as const;
