'use client';

import Image from 'next/image';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import {
  IvyChartBar,
  scaleBarHeight
} from '@/components/ivy-assistant/ivy-chart-bar';
import { IvyChatProgressIndicator } from '@/components/ivy-assistant/IvyChatProgressIndicator';
import {
  IVY_DEMO_USER_MESSAGE,
  useIvyChatDemoSequence
} from '@/hooks/use-ivy-chat-demo-sequence';
import { cdnUrl } from '@/util/cdn';

function PaperclipIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M13.5 7.5 7.833 13.167a3.5 3.5 0 0 1-4.95-4.95l5.834-5.834a2.333 2.333 0 0 1 3.3 3.3L6.177 11.52a1.167 1.167 0 0 1-1.65-1.65L9.5 4.893"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IvyProactiveResponseBlock() {
  return (
    <div className="ivy-message-in flex flex-col gap-[3px]">
      <div className="flex items-start gap-[7px]">
        <div className="h-[33px] w-[33px] shrink-0 overflow-hidden rounded-full shadow-[0px_0px_0px_2px_#e8eaff]">
          <Image
            src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
            alt="Ivy avatar"
            width={66}
            height={66}
            unoptimized
            className="h-full w-full scale-[1.04] object-cover"
            style={{ objectPosition: '-3% -1%' }}
          />
        </div>

        <div className="min-w-0 flex-1 rounded-[9px] border border-[#e5e7eb] bg-white px-3 pb-3 pt-[7px] sm:w-[min(100%,400px)]">
          <p className="text-[10px] leading-[1.45] text-[#17234c]">
            Hey! My report for last week&apos;s team performance is ready. I
            made a PDF for you.
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mt-2 inline-flex items-center gap-1.5 rounded-[6px] border border-[#e5e7eb] bg-[#f8f9fb] px-2.5 py-1.5 text-[9.5px] font-medium text-[#0f1d43] transition-colors hover:bg-[#f0f2f7]"
          >
            <PaperclipIcon className="h-3 w-3 text-[#6b7280]" />
            View Report
          </a>
        </div>
      </div>
      <p className="pl-[28px] text-[8px] leading-none text-[#9ca3af]">
        10:39 AM
      </p>
    </div>
  );
}

const MAX_TRAINING_HEIGHT = 97.2615;

const TEAM_PERFORMANCE = [
  {
    name: 'Sarah Chen',
    trainingH: 97.2615,
    sessionsH: 35.9445
  },
  {
    name: 'Mike Johnson',
    trainingH: 82.4609,
    sessionsH: 29.6014
  },
  {
    name: 'Emma Davis',
    trainingH: 89.8612,
    sessionsH: 32.7729
  },
  {
    name: 'Alex Kim',
    trainingH: 75.0605,
    sessionsH: 23.2582
  },
  {
    name: 'Lisa Wang',
    trainingH: 93.0328,
    sessionsH: 30.6585
  }
] as const;

const PLOT_HEIGHT = 97;

function scaleHeroBarHeight(figmaHeight: number) {
  return scaleBarHeight(figmaHeight, MAX_TRAINING_HEIGHT, PLOT_HEIGHT);
}

const HERO_GRADIENT: React.CSSProperties = {
  backgroundImage: [
    'radial-gradient(ellipse 80% 60% at 80% 0%, rgba(226,130,71,0.12) 0%, transparent 60%)',
    'radial-gradient(ellipse 80% 60% at 0% 30%, rgba(0,123,173,0.078) 0%, transparent 60%)'
  ].join(', ')
};

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="m3.333 8 9-4-3 8-2.333-2.333L3.333 8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TeamPerformanceChart({ animate }: { animate: boolean }) {
  return (
    <div
      className={`h-[173px] rounded-[7px] bg-[#f9fafb] px-[9px] pt-[9px] ${
        animate ? 'ivy-animate-bars' : ''
      }`}
    >
      <p className="text-[11px] font-semibold leading-none text-[#17234c]">
        Team Performance Scores
      </p>

      <div className="relative mt-1.5 h-[138px]">
        <div className="absolute left-0 top-0 flex h-[97px] w-[14px] flex-col justify-between text-right text-[8px] leading-none text-[#6b7280]">
          {[100, 75, 50, 25, 0].map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        <div className="absolute left-[14px] right-0 top-0 h-[97px]">
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((line) => (
              <div
                key={line}
                className="border-t border-dashed border-[#e5e7eb]"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-end justify-between px-1">
            {TEAM_PERFORMANCE.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-1 items-end justify-center gap-0.5"
              >
                <IvyChartBar
                  heightPx={scaleHeroBarHeight(member.trainingH)}
                  fill="#303851"
                  className="ivy-bar-primary shrink-0"
                  style={{ animationDelay: `${index * 120}ms` }}
                />
                <IvyChartBar
                  heightPx={scaleHeroBarHeight(member.sessionsH)}
                  fill="#94A3B8"
                  className="ivy-bar-secondary shrink-0"
                  style={{ animationDelay: `${index * 120 + 120}ms` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[14px] right-0 top-[97px] border-t border-[#e5e7eb]" />

        <div className="absolute left-[14px] right-0 top-[99px] flex justify-between px-1">
          {TEAM_PERFORMANCE.map((member) => (
            <div
              key={member.name}
              className="flex min-w-0 flex-1 flex-col items-center px-0.5"
            >
              <div className="h-[3px] w-px bg-[#d1d5db]" />
              <span className="mt-0.5 text-center text-[8px] leading-[1.1] text-[#6b7280]">
                {member.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 text-[9px] leading-none">
          <span className="inline-flex items-center gap-1 text-[#303851]">
            <span className="h-2 w-2 rounded-[1px] bg-[#303851]" />
            Training Score
          </span>
          <span className="inline-flex items-center gap-1 text-[#94a3b8]">
            <span className="h-2 w-2 rounded-[1px] bg-[#94a3b8]" />
            Sessions Completed
          </span>
        </div>
      </div>
    </div>
  );
}

function IvyResponseBlock({ animateCharts }: { animateCharts: boolean }) {
  return (
    <div className="ivy-message-in flex flex-col gap-[3px]">
      <div className="flex items-start gap-[7px]">
        <div className="h-[33px] w-[33px] shrink-0 overflow-hidden rounded-full shadow-[0px_0px_0px_2px_#e8eaff]">
          <Image
            src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
            alt="Ivy avatar"
            width={66}
            height={66}
            unoptimized
            className="h-full w-full scale-[1.04] object-cover"
            style={{ objectPosition: '-3% -1%' }}
          />
        </div>

        <div className="min-w-0 flex-1 rounded-[9px] border border-[#e5e7eb] bg-white px-3 pb-2 pt-[7px] sm:min-h-[233px] sm:w-[min(100%,400px)]">
          <p className="text-[10px] leading-[1.35] text-[#17234c]">
            Great! Let me pull up your team&apos;s performance data. Here&apos;s
            an overview of how each team member is performing based on their
            training scores and session completions:
          </p>
          <div className="mt-2">
            <TeamPerformanceChart animate={animateCharts} />
          </div>
        </div>
      </div>
      <p className="pl-[28px] text-[8px] leading-none text-[#9ca3af]">
        10:39 AM
      </p>
    </div>
  );
}

function IvyChatMockup() {
  const demo = useIvyChatDemoSequence({
    userMessage: IVY_DEMO_USER_MESSAGE
  });

  const isProactive = demo.variant === 'proactive';

  const inputValue =
    demo.phase === 'typing-input'
      ? demo.inputText
      : demo.phase === 'idle'
      ? ''
      : '';

  const inputPlaceholder =
    demo.phase === 'idle' || demo.phase === 'typing-input'
      ? demo.phase === 'typing-input' && demo.inputText
        ? ''
        : 'Ask me anything about the platform...'
      : 'Ask me anything about the platform...';

  return (
    <div
      ref={demo.containerRef}
      className="relative mx-auto w-full max-w-[592px] xl:mx-0"
    >
      <div className="relative z-10 w-full overflow-hidden rounded-[20px] border border-[#e2e4e9] bg-white shadow-[0px_6px_28px_rgba(23,35,76,0.08)]">
        <div className="border-b border-[#e2e4e9] bg-[#faf9f7] px-[18px] pb-2.5 pt-[11px]">
          <p className="text-[18px] font-semibold leading-none text-[#17234c]">
            AI Teammate Ivy
          </p>
          <p className="mt-1 text-[12px] leading-none text-[rgba(84,96,135,0.7)]">
            Your AI-powered personal agent
          </p>
        </div>

        <div className="h-[400px] overflow-y-auto bg-white px-4 pb-4 pt-[13px] sm:px-6 lg:h-[318px] lg:px-7">
          {!isProactive && demo.showUserMessage ? (
            <div className="ivy-message-in">
              <div className="flex items-start justify-end gap-1.5">
                <div className="max-w-[calc(100%-2rem)] rounded-[9px] bg-[#303851] px-[11px] py-[6px] text-[10px] leading-[1.35] text-white sm:max-w-none sm:whitespace-nowrap sm:leading-none">
                  {IVY_DEMO_USER_MESSAGE}
                </div>
                <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-[#303851] text-[10px] font-semibold text-white">
                  You
                </div>
              </div>
              <p className="mt-0.5 pr-7 text-right text-[8px] leading-none text-[#9ca3af]">
                10:39 AM
              </p>
            </div>
          ) : null}

          {!isProactive && demo.showProgress ? (
            <div className="mt-3">
              <IvyChatProgressIndicator
                compact
                label={demo.progress.label}
                status={demo.progress.status}
              />
            </div>
          ) : null}

          {!isProactive && demo.showResponse ? (
            <div className="mt-3 pb-1">
              <IvyResponseBlock animateCharts={demo.animateCharts} />
            </div>
          ) : null}

          {isProactive && demo.showProactive ? (
            <div className="pb-1">
              <IvyProactiveResponseBlock />
            </div>
          ) : null}
        </div>

        <div className="border-t border-[#e2e4e9] bg-[#faf9f7] px-6 pb-2 pt-3.5 sm:px-7">
          <div className="flex items-center gap-1.5">
            <div
              className={`min-w-0 flex-1 rounded-[6px] border border-[#e2e4e9] bg-white px-2.5 py-1.5 text-[10px] leading-none ${
                inputValue ? 'text-[#17234c]' : 'text-[rgba(84,96,135,0.5)]'
              }`}
            >
              {inputValue || inputPlaceholder}
              {demo.phase === 'typing-input' ? (
                <span className="ivy-input-caret ml-px inline-block h-[10px] w-px bg-[#17234c]" />
              ) : null}
            </div>
            <div
              className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] bg-[#0f1d43] text-white ${
                demo.phase === 'typing-input' ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <SendIcon className="h-3 w-3" />
            </div>
          </div>
          <p className="mt-1.5 text-center text-[8px] leading-none text-[rgba(84,96,135,0.5)]">
            AI Agent can provide information and create links to relevant pages
          </p>
        </div>
      </div>
    </div>
  );
}

export function IvyHero() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: 2,
    staggerDelay: 180,
    threshold: 0.15
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#e4e1db] bg-[#f8f8fb]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={HERO_GRADIENT}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-full w-[726px] max-w-[min(726px,52vw)] -translate-x-1/2"
      >
        <Image
          src={cdnUrl('/images/ivy-the-ai-asisstant/ivy.webp')}
          alt=""
          fill
          priority
          unoptimized
          className="object-contain object-bottom"
          sizes="(min-width: 1280px) 726px, 52vw"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-[1400px] px-5 pb-8 pt-24 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-[112px]"
      >
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,640px)_minmax(0,592px)] xl:justify-between xl:gap-12">
          <div
            className="flex max-w-[640px] flex-col gap-[21px]"
            style={getItemStyle(0)}
          >
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#e4e1db] bg-white px-3 py-[5px] shadow-[0px_1px_2px_rgba(21,26,40,0.04)]">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#359b75]"
                  aria-hidden
                />
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#4f565e]">
                  Meet Ivy
                </span>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7">
                  <h1 className="font-display text-[3rem] leading-[0.97] tracking-[-0.04em] text-[#0d1218] sm:text-[4rem] lg:text-[72px] lg:leading-[70px] lg:tracking-[-1.5px]">
                    Your AI teammate.
                    <br />
                    Knowledgeable, skilled,
                    <br />
                    <span className="font-display italic text-[#0caee9]">
                      proactive
                    </span>
                    .
                  </h1>

                  <p className="max-w-[560px] text-[18px] leading-[29.25px] text-[#4f565e]">
                    Ivy is your AI CX Data Scientist. She is{' '}
                    <strong className="font-semibold text-[#0d1218]">
                      NOT
                    </strong>{' '}
                    just an assistant. An AI assistant may answer all the
                    questions you can think of asking and Ivy does that very
                    well. But she will identify your blind spots too and will
                    let you know about them. 24/7, she keeps an eye on every
                    detail of how your customer conversations develop.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <a
                    href="https://calendly.com/tsenkov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center justify-center gap-1.5 rounded-[10px] bg-[#0f1d43] px-6 py-3.5 text-[14px] font-semibold leading-5 text-[#fcfaf6] transition-colors hover:bg-[#162754]"
                  >
                    Book a demo
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#ivy-capabilities"
                    className="text-[14px] font-medium text-[#0d1218] transition-opacity hover:opacity-70"
                  >
                    See Ivy in action →
                  </a>
                </div>
              </div>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#5f636a]">
              Ask Ivy &ldquo;Why did escalations spike on Tuesday?&rdquo;
              <br />
              or wait for her weekly report — it will likely be there
            </p>
          </div>

          <div className="w-full xl:justify-self-end" style={getItemStyle(1)}>
            <IvyChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
