'use client';

import { LpSectionHeader } from '@/components/lp/LpSectionHeader';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import {
  HOW_IT_WORKS_CARDS,
  type TrainingScenarioCard
} from './how-it-works/how-it-works-data';
import { TrainingRecommendedClockIcon } from './icons';

function ScenarioCard({
  card,
  style
}: {
  card: TrainingScenarioCard;
  style?: React.CSSProperties;
}) {
  const fields = [
    { label: 'Scenario goal:', value: card.scenarioGoal },
    { label: 'Persona mental state:', value: card.personaState },
    { label: 'Discussion topic:', value: card.discussionTopic },
    { label: 'Behavior:', value: card.behavior }
  ];

  return (
    <article
      className="flex flex-col rounded-[14px] border border-[#e2e2e2] bg-white p-5 shadow-[0px_0px_5px_rgba(0,0,0,0.12)]"
      style={style}
    >
      <h3 className="text-[18px] font-semibold text-[#17234c]">{card.title}</h3>
      <div className="mt-1 flex items-center gap-2">
        <TrainingRecommendedClockIcon className="shrink-0 text-[#858ea9]" />
        <p className="text-[10.5px] text-[rgba(84,96,135,0.7)]">{card.badge}</p>
      </div>

      <dl className="mt-5 space-y-1 text-[12px] text-[rgba(84,96,135,0.7)]">
        {fields.map((field) => (
          <div key={field.label} className="flex flex-wrap gap-x-2.5 gap-y-0.5">
            <dt className="font-bold">{field.label}</dt>
            <dd>{field.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 rounded-2xl border border-[rgba(228,225,219,0.8)] bg-[#f9f7f5] p-3">
        <p className="text-[12px] font-bold text-[#f57c00]">
          Why This is Recommended:
        </p>
        <p className="mt-1 text-[10.7px] leading-[15.6px] text-[#0f1729]">
          {card.recommendation}
        </p>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-lg bg-[#1c2c56] py-2.5 text-[12.7px] font-semibold text-white transition-colors hover:bg-[#1c2c56]/90"
      >
        {card.cta}
      </button>
    </article>
  );
}

export function TrainingHowItWorks() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: HOW_IT_WORKS_CARDS.length + 1,
    staggerDelay: 100,
    threshold: 0.2
  });

  return (
    <section
      id="how-it-works"
      className="border-b border-[#e4e1db] bg-[#fcfcfd] py-16 lg:py-24"
    >
      <div ref={containerRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <LpSectionHeader
          eyebrow="How it works"
          headline={
            <span className="max-w-[940px] block">
              Automatic Training Suggestions in One Click
            </span>
          }
          body="Get a fully personalized training session instantly. RipeText recommends the right persona and scenario, then your agent can jump straight into practice."
          className="max-w-[940px]"
          style={getItemStyle(0)}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
          {HOW_IT_WORKS_CARDS.map((card, index) => (
            <ScenarioCard
              key={card.title}
              card={card}
              style={getItemStyle(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
