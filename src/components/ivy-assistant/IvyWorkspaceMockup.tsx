'use client';

import Image from 'next/image';
import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import { useIvyProactiveDemoSequence } from '@/hooks/use-ivy-proactive-demo-sequence';
import { cdnUrl } from '@/util/cdn';

const NAV_ITEMS = [
  'Issue Radar',
  'Topics',
  'Analytics',
  'Conversations',
  'Training',
  'Compliance',
  'Reports'
] as const;

const BOTTOM_NAV = [
  'Notifications',
  'Company Voice',
  'Settings',
  'Profile'
] as const;

const CHAT_HISTORY = [
  { title: 'Last week team performance', date: 'Today', isNew: true },
  { title: 'Coaching recommendations', date: 'Today' },
  { title: 'Refund objections — pricing', date: 'Yesterday' },
  { title: 'Tuesday escalations review', date: 'Apr 23' },
  { title: 'CSAT dip · onboarding flow', date: 'Apr 21' }
] as const;

/** Figma 7876:4225 / 7876:4236 */
const WORKSPACE_CONTENT_HEIGHT = 671;

function WorkspaceTitleBar() {
  return (
    <div className="flex h-9 shrink-0 items-center justify-between border-b border-[#dcdee2] bg-[rgba(247,246,242,0.6)] px-4 pb-[11px] pt-2.5">
      <div className="flex shrink-0 gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbdb7]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6d389]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a1e4ae]" />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[1.8px] text-[#60636c]">
        ripetext · ivy workspace
      </p>
      <div className="flex shrink-0 items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#359b75]" />
        <span className="text-[10px] text-[#5f636a]">Live</span>
      </div>
    </div>
  );
}

function WorkspaceLeftNav() {
  return (
    <aside
      className="hidden w-[149px] shrink-0 flex-col border-r border-[#dcdee2] bg-white px-4 pb-4 pt-4 md:flex"
      style={{ height: WORKSPACE_CONTENT_HEIGHT }}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-[10px] bg-[#0a0d12] text-[10px] font-bold text-white">
          I
        </div>
        <span className="text-[15px] tracking-[-0.275px] text-[#0a0d12]">
          Ivy
        </span>
      </div>

      <nav className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between rounded-[10px] bg-[rgba(10,13,18,0.05)] px-2 py-1.5">
          <span className="text-[11px] text-[#0a0d12]">Ask Ivy</span>
        </div>
        {NAV_ITEMS.map((item) => (
          <div
            key={item}
            className="rounded-[10px] px-2 py-1.5 text-[11px] text-[#5f636a]"
          >
            {item}
          </div>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#dcdee2] pt-6">
        <div className="flex flex-col gap-1.5">
          {BOTTOM_NAV.map((item) => (
            <span key={item} className="text-[11px] text-[#3f4349]">
              · {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

function WorkspaceChatSidebar({
  showNewThread,
  showThread
}: {
  showNewThread: boolean;
  showThread: boolean;
}) {
  return (
    <aside
      className="hidden w-[199px] shrink-0 flex-col border-r border-[#dcdee2] bg-[rgba(247,246,242,0.2)] px-3 pb-4 pt-3 lg:flex"
      style={{ height: WORKSPACE_CONTENT_HEIGHT }}
    >
      <div className="px-1">
        <p className="text-[12px] font-bold tracking-[-0.3px] text-[#0a0d12]">
          Ask Ivy
        </p>
        <p className="text-[10px] text-[#5f636a]">
          Your AI analyst for support
        </p>
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-[10px] bg-[#0f1d43] px-3 py-1.5 text-[10.5px] font-semibold text-white"
      >
        Start new chat
      </button>

      <div className="mt-3 flex flex-col gap-1.5">
        {CHAT_HISTORY.map((chat) => {
          const isNewThread = 'isNew' in chat && chat.isNew;

          if (isNewThread && !showNewThread) return null;

          const isActive = showThread && isNewThread;
          const showBadge = showNewThread && isNewThread && !isActive;

          return (
            <div
              key={chat.title}
              className={`rounded-xl px-[11px] py-[9px] transition-all duration-300 ${
                isNewThread && showNewThread && !isActive
                  ? 'ivy-message-in'
                  : ''
              } ${
                isActive
                  ? 'border border-[#dcdee2] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]'
                  : 'border border-transparent'
              }`}
            >
              <div className="flex items-start justify-between gap-1">
                <p
                  className={`truncate text-[11px] leading-[16.5px] ${
                    isActive ? 'text-[#0a0d12]' : 'text-[#3f4349]'
                  }`}
                >
                  {chat.title}
                </p>
                {showBadge ? (
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0caee9] text-[8px] font-bold text-white">
                    1
                  </span>
                ) : null}
              </div>
              <p className="font-mono text-[9px] text-[#5f636a]">{chat.date}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

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

function WorkspaceProactiveResponse() {
  return (
    <div className="ivy-message-in flex items-start gap-2.5">
      <div className="size-7 shrink-0 overflow-hidden rounded-full border border-[#dcdee2]">
        <Image
          src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
          alt="Ivy"
          width={56}
          height={56}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full max-w-[549px] flex-col gap-2">
        <div
          className="ivy-stagger-up rounded-bl-[20px] rounded-br-[20px] rounded-tl-[10px] rounded-tr-[20px] border border-[#dcdee2] bg-white px-[15px] py-[11px]"
          style={{ ['--ivy-delay' as string]: '0ms' } as React.CSSProperties}
        >
          <p className="text-[12.5px] leading-[20.31px] text-[#0a0d12]">
            Hey! My report for last week&apos;s team performance is ready. I
            made a PDF for you.
          </p>
        </div>

        <div
          className="ivy-stagger-up inline-flex items-center gap-2 self-start rounded-bl-[20px] rounded-br-[20px] rounded-tl-[10px] rounded-tr-[20px] border border-[#dcdee2] bg-white px-[15px] py-[11px]"
          style={{ ['--ivy-delay' as string]: '400ms' } as React.CSSProperties}
        >
          <PaperclipIcon className="h-4 w-4 shrink-0 text-[#5f636a]" />
          <span className="text-[12.5px] font-medium leading-[20.31px] text-[#0f1d43]">
            View Report
          </span>
        </div>
      </div>
    </div>
  );
}

function WorkspaceChatEmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f2f7]">
        <div className="size-6 overflow-hidden rounded-full border border-[#dcdee2]">
          <Image
            src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
            alt="Ivy"
            width={48}
            height={48}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <p className="text-[13px] font-semibold text-[#0a0d12]">
          Ask Ivy anything
        </p>
        <p className="mt-1 text-[11px] leading-[16.5px] text-[#5f636a]">
          Your AI analyst is ready to help.
          <br />
          Ask about performance, trends, or insights.
        </p>
      </div>
    </div>
  );
}

function AnimatedCursor({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute z-20"
      style={{
        /* Positioned at the thread target (left-nav 149px + 16px padding + ~8px into thread text).
           The cursor starts far bottom-right via the CSS translate, then animates to translate(0,0). */
        top: 112,
        left: 173,
        animation: 'ivy-cursor-move 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <path
          d="M4 2L16.5 10.5L10 11.5L7 17.5L4 2Z"
          fill="white"
          stroke="#0a0d12"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function WorkspaceToast({ visible }: { visible: boolean }) {
  return (
    <div
      className={`absolute right-3 top-3 z-20 flex max-w-[220px] items-start gap-2.5 rounded-xl border border-[#dcdee2] bg-white px-3 py-2.5 shadow-[0px_8px_24px_-4px_rgba(13,18,24,0.18)] transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-3 opacity-0 pointer-events-none'
      }`}
    >
      <div className="mt-0.5 size-5 shrink-0 overflow-hidden rounded-full border border-[#dcdee2]">
        <Image
          src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
          alt="Ivy"
          width={40}
          height={40}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-[#0a0d12]">Ivy</p>
        <p className="mt-0.5 text-[10px] leading-[14px] text-[#3f4349]">
          New report ready: Last week&apos;s team performance
        </p>
      </div>
    </div>
  );
}

function WorkspaceChatFooter() {
  return (
    <div className="flex h-[152px] shrink-0 flex-col border-t border-[#dcdee2] px-4 pb-4 pt-4 lg:h-[116px] lg:pb-[17px]">
      <div className="relative rounded-2xl border border-[#dcdee2] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3 px-[15px] py-[13px]">
          <p className="min-w-0 flex-1 truncate text-[13px] leading-[19.5px] text-[rgba(84,96,135,0.5)]">
            Ask Ivy anything about your support data...
          </p>
          <p className="hidden shrink-0 font-mono text-[10px] text-[#5f636a] sm:block">
            last 30 days · all channels
          </p>
          <button
            type="button"
            className="shrink-0 rounded-[10px] bg-[#0f1d43] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.5px] text-white opacity-80"
          >
            Ask
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {[
          'Why did CSAT drop?',
          'Top refund objections',
          'Agents to coach',
          'Pricing sentiment'
        ].map((suggestion) => (
          <span
            key={suggestion}
            className="rounded-full border border-[#dcdee2] bg-[#f7f6f2] px-[11px] py-[3px] text-[10.5px] leading-[15.75px] text-[#3f4349]"
          >
            {suggestion}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkspaceChatArea({
  showThread,
  containerRef
}: {
  showThread: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={containerRef}
      className="flex min-w-0 flex-1 flex-col bg-white"
      style={{ height: WORKSPACE_CONTENT_HEIGHT }}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 pt-8 lg:px-5 lg:pt-[99px]">
        {showThread ? (
          <WorkspaceProactiveResponse />
        ) : (
          <WorkspaceChatEmptyState />
        )}
      </div>

      <WorkspaceChatFooter />
    </div>
  );
}

export function IvyWorkspaceMockup() {
  const { containerRef: revealRef, getItemStyle } = useStaggeredReveal({
    itemCount: 1,
    staggerDelay: 0,
    threshold: 0.15
  });

  const demo = useIvyProactiveDemoSequence();

  return (
    <section className="bg-[#f8f8fb] pb-[112px] pt-[96px]">
      <div ref={revealRef} className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div
          className="mx-auto w-full max-w-[1138px] overflow-hidden rounded-[20px] border border-[#dcdee2] bg-white shadow-[0px_30px_80px_-30px_rgba(13,18,24,0.18),0px_12px_32px_-12px_rgba(13,18,24,0.12)]"
          style={getItemStyle(0)}
        >
          <WorkspaceTitleBar />
          <div
            className="relative flex overflow-hidden lg:overflow-x-auto"
            style={{ height: WORKSPACE_CONTENT_HEIGHT }}
          >
            <WorkspaceToast visible={demo.showToast} />
            <AnimatedCursor visible={demo.showCursor} />

            <div className="flex w-full min-w-0 flex-1 lg:min-w-[720px]">
              <WorkspaceLeftNav />
              <WorkspaceChatSidebar
                showNewThread={demo.showUnreadBadge}
                showThread={demo.showThread}
              />
              <WorkspaceChatArea
                showThread={demo.showThread}
                containerRef={demo.containerRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
