'use client';

import { AnimatedNumber } from '@/components/lp/AnimatedNumber';
import { VoiceAdherenceRadarChart } from '../conversation-mockup/VoiceAdherenceRadarChart';
import { MockupSparkline } from '../conversation-mockup/MockupSparkline';
import { ScoreMetricCard } from './ScoreMetricCard';

const VOICE_TAGS = [
  'Tone',
  'Empathy',
  'Forbidden phrases',
  'Escalation',
  'Closing',
  'Brand voice'
] as const;

const SENTIMENT_BARS = [
  { label: 'Greeting', width: '85%', color: 'bg-[#2a9d67]' },
  { label: 'Policy explained', width: '55%', color: 'bg-[#e8ab3e]' },
  { label: 'Refund denied', width: '30%', color: 'bg-[#de3b3d]' },
  { label: 'Escalated', width: '60%', color: 'bg-[#e8ab3e]' },
  { label: 'Resolved', width: '90%', color: 'bg-[#2a9d67]' }
] as const;

const MESSAGE_PILL_COUNT = 14;
const MESSAGE_PILL_COLORS = ['bg-[#c3e0ce]', 'bg-[#d4d4f2]'] as const;

const AVATARS = [
  { initial: 'J', bg: 'bg-[#e4e5ff]', text: 'text-[#1b275f]' },
  { initial: 'P', bg: 'bg-[#d3f1de]', text: 'text-[#1b275f]' },
  { initial: 'M', bg: 'bg-[#f8eace]', text: 'text-[#1b275f]' }
] as const;

/** Dot centers as % of timeline width (Figma 7143:3103). */
const TIMELINE_STEPS = [
  { label: 'Opened', left: '0%' },
  { label: 'First reply', left: '22%' },
  { label: 'Escalated', left: '55%' },
  { label: 'Closed', left: '100%' }
] as const;

type ScoreCardsProps = {
  animate: boolean;
  reduceMotion: boolean;
  cardStyles: React.CSSProperties[];
};

export function ScoreCards({
  animate,
  reduceMotion,
  cardStyles
}: ScoreCardsProps) {
  const immediate = reduceMotion;

  return (
    <>
      <ScoreMetricCard
        number="01"
        title="Company Voice adherence"
        className="min-h-[334px] lg:col-span-2"
        style={cardStyles[0]}
      >
        <div className="mt-4 flex flex-1 flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="w-full max-w-[471px]">
            <p className="max-w-[323px] font-display text-[30px] leading-[37.5px] text-[#0b0d13]">
              15 rules. Every reply. Every time.
            </p>
            <p className="mt-4 max-w-[471px] text-sm leading-[22.75px] text-[#4a4d54]">
              How well the agent followed your guidelines — up to 15 rules you
              define, from tone to forbidden phrases to escalation policy.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {VOICE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dcdee2] bg-white px-2 py-0.5 text-[10px] leading-[15px] text-[#4a4d54]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-auto h-[240px] w-[240px] shrink-0 md:mx-0">
            <VoiceAdherenceRadarChart />
          </div>
        </div>
      </ScoreMetricCard>

      <ScoreMetricCard
        number="02"
        title="AI CSAT"
        className="min-h-[334px]"
        style={cardStyles[1]}
      >
        <div className="mt-4 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[60px] leading-[60px] text-[#0b0d13]">
                <AnimatedNumber
                  value={4.2}
                  animate={animate}
                  decimals={1}
                  immediate={immediate}
                />
              </span>
              <span className="pb-1 text-sm text-[#777a82]">/ 5</span>
            </div>
            <span className="mt-9 shrink-0 rounded bg-[#cbf8dc] px-1.5 py-0.5 text-[11px] leading-[16.5px] text-[#00512d]">
              +0.18
            </span>
          </div>
          <div className="mt-4 flex justify-center [&_svg]:h-10 [&_svg]:w-[200px]">
            <MockupSparkline animate={animate} reduceMotion={reduceMotion} />
          </div>
          <p className="mt-auto pt-6 text-sm leading-[23px] text-[#4a4d54]">
            A predicted satisfaction score for every conversation — including
            the silent majority who never fill out a survey.
          </p>
        </div>
      </ScoreMetricCard>

      <ScoreMetricCard
        number="03"
        title="Sentiment"
        className="min-h-[299px]"
        style={cardStyles[2]}
      >
        <div className="mt-4 flex flex-1 flex-col">
          <p className="font-display text-2xl leading-8 text-[#0b0d13]">
            Where the mood shifted.
          </p>
          <ul className="mt-5 space-y-2.5">
            {SENTIMENT_BARS.map((bar) => (
              <li
                key={bar.label}
                className="flex items-center gap-2 text-[11px]"
              >
                <span className="w-20 shrink-0 truncate text-[#777a82]">
                  {bar.label}
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#eaebef]">
                  <div
                    className={`h-full rounded-full ${bar.color}`}
                    style={{ width: bar.width }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-6 text-sm leading-[23px] text-[#4a4d54]">
            Per-message and per-conversation sentiment.
          </p>
        </div>
      </ScoreMetricCard>

      <ScoreMetricCard
        number="04"
        title="Agents involved"
        className="min-h-[299px]"
        style={cardStyles[3]}
      >
        <div className="mt-4">
          <p className="font-display text-2xl leading-8 text-[#0b0d13]">
            Every handoff, counted.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((avatar) => (
                <span
                  key={avatar.initial}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-medium ${avatar.bg} ${avatar.text}`}
                >
                  {avatar.initial}
                </span>
              ))}
            </div>
            <div>
              <p className="font-display text-[30px] leading-[30px] text-[#0b0d13]">
                3 agents
              </p>
              <p className="mt-1 text-[11px] leading-[16.5px] text-[#777a82]">
                2 handoffs
              </p>
            </div>
          </div>
          <p className="mt-[22px] text-sm leading-[23px] text-[#4a4d54]">
            How many handoffs the customer endured before resolution.
          </p>
        </div>
      </ScoreMetricCard>

      <ScoreMetricCard
        number="05"
        title="Time to resolution"
        className="min-h-[299px]"
        style={cardStyles[4]}
      >
        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[60px] leading-[60px] text-[#0b0d13]">
              1h
            </span>
            <span className="font-display text-[30px] leading-9 text-[#4a4d54]">
              42m
            </span>
          </div>
          <div className="relative mt-5 h-12">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#dcdee2]" />
            {TIMELINE_STEPS.map((step) => (
              <div
                key={step.label}
                className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: step.left }}
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#0b0d13]" />
                <span className="mt-3.5 whitespace-nowrap text-[9px] leading-[13.5px] text-[#777a82]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm leading-[23px] text-[#4a4d54]">
            Total time from first message to ticket close.
          </p>
        </div>
      </ScoreMetricCard>

      <ScoreMetricCard
        number="06"
        title="Messages to resolution"
        className="min-h-[243px]"
        style={cardStyles[5]}
      >
        <div className="mt-4 flex flex-1 flex-col">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[60px] leading-[60px] text-[#0b0d13]">
              <AnimatedNumber
                value={14}
                animate={animate}
                immediate={immediate}
              />
            </span>
            <span className="pb-1 text-sm text-[#777a82]">messages</span>
          </div>
          <div className="mt-5 grid grid-cols-7 gap-1.5">
            {Array.from({ length: MESSAGE_PILL_COUNT }, (_, i) => (
              <span
                key={i}
                className={`h-3 rounded-[10px] ${MESSAGE_PILL_COLORS[i % 2]}`}
              />
            ))}
          </div>
          <p className="mt-auto pt-6 text-sm leading-[23px] text-[#4a4d54]">
            How many back-and-forths it took.
          </p>
        </div>
      </ScoreMetricCard>
    </>
  );
}
