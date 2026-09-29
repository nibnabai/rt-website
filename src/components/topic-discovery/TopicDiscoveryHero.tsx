'use client';

import { ArrowRightIcon } from '@/components/automated-qa/icons';
import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import {
  AURORA_STYLE,
  CLUSTER_QUOTES,
  METRICS,
  TRENDING_TOPICS
} from './constants';
import {
  ChartIcon,
  ClockIcon,
  ClusterNetworkIcon,
  LaunchArrowIcon,
  SparklineIcon,
  TrendingUpIcon
} from './icons';
import {
  getRevealStyle,
  TOPIC_BAR_HEIGHTS,
  useTopicDiscoveryHeroAnimation
} from './useTopicDiscoveryHeroAnimation';

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbdb7]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#f6d389]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#a1e4ae]" />
    </div>
  );
}

function TopicFeedRow({
  rank,
  title,
  meta,
  delta,
  positive,
  dot,
  visible
}: (typeof TRENDING_TOPICS)[number] & { visible: boolean }) {
  return (
    <div
      className="grid grid-cols-[28px_minmax(0,1fr)_84px_44px_14px] items-center gap-x-4 rounded-[12px] px-4 py-3"
      style={getRevealStyle(visible)}
    >
      <p className="text-[12px] leading-4 text-lp-text-muted">{rank}</p>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: dot }}
          />
          <p className="truncate text-[14px] leading-5 text-[#101116]">
            {title}
          </p>
        </div>
        <p className="mt-1 text-[12px] leading-4 text-lp-text-muted">{meta}</p>
      </div>
      <SparklineIcon positive={positive} />
      <p
        className={`text-[12px] font-bold leading-4 ${
          positive ? 'text-[#399e43]' : 'text-[#e64343]'
        }`}
      >
        {delta}
      </p>
      <LaunchArrowIcon />
    </div>
  );
}

function TicketCard({
  title,
  body,
  visible
}: {
  title: string;
  body: string;
  visible: boolean;
}) {
  return (
    <div
      className="rounded-[14px] border border-[#dedede] bg-white px-4 py-4"
      style={getRevealStyle(visible)}
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-[12px] font-bold leading-4 text-[#0f1729]">
          {title}
        </h4>
        <p className="whitespace-nowrap text-[10px] leading-[15px] text-[#9ca3af]">
          Jan 18, 2026
        </p>
      </div>
      <p className="mt-3 text-[11px] leading-[1.55] text-[#0f1729]">{body}</p>
      <div className="mt-6 flex items-center justify-end gap-2 text-[10px] leading-[15px] text-[#9ca3af]">
        <span>Assigned To:</span>
        <span className="font-semibold text-[#0f1729]">Sarah Mitchell</span>
        <Image
          src={cdnUrl('/images/sarah-jessie.webp')}
          alt="Sarah Mitchell"
          width={22}
          height={22}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}

type ClusterAnimationState = {
  visibleQuotes: number;
  showClusterHub: boolean;
  showClusterNetwork: boolean;
  visibleMetrics: number;
};

function ClusterPreviewCard({
  visibleQuotes,
  showClusterHub,
  showClusterNetwork,
  visibleMetrics
}: ClusterAnimationState) {
  return (
    <div className="rounded-[20px] border border-[#e3e4e9] bg-white p-4 shadow-[0px_1px_0px_rgba(18,22,31,0.04),0px_12px_40px_rgba(18,22,31,0.08)] sm:p-[18px]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.55px] text-[#60636c]">
            Cluster preview
          </p>
          <p className="mt-2 max-w-[180px] font-display text-[22px] leading-[0.95] text-[#101116] sm:max-w-none sm:text-[32px] sm:leading-none">
            &quot;Promo Code Stacking&quot;
          </p>
        </div>
        <div
          className="flex shrink-0 items-center gap-1.5 self-start pt-3 text-[11px] font-bold text-[#399e43] sm:-mt-1 sm:gap-2 sm:pt-[18px] sm:text-[12px]"
          style={getRevealStyle(showClusterHub)}
        >
          <TrendingUpIcon />
          Trending +38%
        </div>
      </div>

      <div className="relative mt-5 h-[244px] overflow-hidden rounded-[16px] border border-[#e3e4e9] bg-[#fbfaf8] sm:h-[292px]">
        <div
          className="absolute inset-0 rounded-[16px] bg-[radial-gradient(circle_at_center,rgba(255,190,105,0.18),transparent_42%)]"
          style={{
            opacity: showClusterNetwork ? 1 : 0,
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-[-8%] top-[14px] h-[182px] w-[116%] sm:inset-x-0 sm:top-1 sm:h-[286px] sm:w-full"
          aria-hidden
          style={{
            opacity: showClusterNetwork ? 1 : 0,
            transform: showClusterNetwork ? 'scale(1)' : 'scale(0.96)',
            transition:
              'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <ClusterNetworkIcon />
        </div>

        <div
          className="absolute left-1/2 top-[52.5%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#101116] px-3 py-[7px] text-[10px] font-bold leading-4 text-[#fefdfc] shadow-[0px_1px_1px_rgba(18,22,31,0.04),0px_8px_12px_rgba(18,22,31,0.06)] sm:top-1/2 sm:px-4 sm:py-2 sm:text-[12px]"
          style={getRevealStyle(showClusterHub)}
        >
          Topic · 184 tickets
        </div>

        {CLUSTER_QUOTES.map((quote, index) => (
          <div
            key={quote.text}
            className={`absolute rounded-[11px] border border-[#e3e4e9] bg-white px-2 py-1.5 text-[9px] leading-[13px] text-[#101116] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] sm:rounded-[12px] sm:px-3 sm:py-2 sm:text-[11px] sm:leading-[16.5px] ${quote.className}`}
            style={getRevealStyle(index < visibleQuotes)}
          >
            {quote.text}
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {METRICS.map((metric, index) => (
          <div
            key={metric.label}
            className="rounded-[12px] border border-[#e3e4e9] bg-white px-[13px] py-3"
            style={getRevealStyle(index < visibleMetrics)}
          >
            <p className="text-[12px] leading-4 text-lp-text-muted">
              {metric.label}
            </p>
            <p
              className={`mt-1 text-[12px] font-bold leading-4 ${metric.tone}`}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type FeedAnimationState = {
  visibleTopics: number;
  animateBars: boolean;
  showSideCards: boolean;
};

function TopicFeedBrowser({
  feedRef,
  visibleTopics,
  animateBars,
  showSideCards
}: FeedAnimationState & { feedRef: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={feedRef}
      id="topic-feed"
      className="scroll-mt-16 overflow-hidden rounded-[20px] border border-[#e3e4e9] bg-white shadow-[0px_2px_4px_rgba(18,22,31,0.06),0px_24px_60px_rgba(18,22,31,0.12)]"
    >
      <div className="flex h-11 items-center justify-between border-b border-[#e3e4e9] bg-[#fbfaf8] px-5">
        <div className="flex items-center gap-4">
          <BrowserDots />
          <span className="text-[12px] leading-4 text-lp-text-muted">
            ripetext.app / topics
          </span>
        </div>
        <div className="flex items-center gap-2 text-[12px] leading-4 text-lp-text-muted">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#399e43]" />
          Live
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="border-b border-[#e3e4e9] p-6 lg:border-r lg:border-b-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.55px] text-lp-text-muted">
                Topic feed
              </p>
              <h3 className="mt-2 font-display text-[42px] leading-[0.95] text-[#101116]">
                Trending today
              </h3>
            </div>

            <div className="inline-flex items-center gap-1 rounded-full border border-[#e3e4e9] px-[11px] py-[5px] text-[12px] leading-4 text-lp-text-muted">
              <ClockIcon />
              Last 24h
            </div>
          </div>

          <div className="mt-6 space-y-0.5">
            {TRENDING_TOPICS.map((topic, index) => (
              <TopicFeedRow
                key={topic.rank}
                {...topic}
                visible={index < visibleTopics}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 bg-[#fbfaf8] p-6">
          <TicketCard
            title="Documentation Request"
            body="Customer requesting updated API documentation and integration guid..."
            visible={showSideCards}
          />
          <TicketCard
            title="Automation Rule Setup"
            body="Customer needs guidance on setting up a new automation rule for smar..."
            visible={showSideCards}
          />

          <div
            className="rounded-[16px] border border-[#e3e4e9] bg-white p-4"
            style={getRevealStyle(showSideCards)}
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-[12px] font-bold leading-4 text-[#101116]">
                Topic movement · 7d
              </h4>
              <ChartIcon />
            </div>

            <div className="mt-5 flex h-[68px] items-end gap-1">
              {TOPIC_BAR_HEIGHTS.map((height, index) => (
                <div
                  key={height}
                  className={`flex-1 rounded-[8px] ${
                    index === TOPIC_BAR_HEIGHTS.length - 1
                      ? 'bg-[#ea4245]'
                      : 'bg-[#e3e4e9]'
                  }`}
                  style={{
                    height: animateBars ? height : 4,
                    transition: `height 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${
                      index * 70
                    }ms`
                  }}
                />
              ))}
            </div>

            <div className="mt-2 flex justify-between text-[10px] leading-[15px] text-lp-text-muted">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'].map(
                (day) => (
                  <span key={day}>{day}</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopicDiscoveryHero() {
  const {
    clusterRef,
    feedRef,
    visibleQuotes,
    showClusterHub,
    showClusterNetwork,
    visibleMetrics,
    visibleTopics,
    animateBars,
    showSideCards
  } = useTopicDiscoveryHeroAnimation();

  return (
    <section id="hero" className="relative overflow-x-hidden bg-[#F8F8FB]">
      <div
        className="pointer-events-none absolute inset-0"
        style={AURORA_STYLE}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-28 pb-16 lg:px-8 lg:pt-[112px] lg:pb-32">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,628px)_minmax(0,1fr)] xl:gap-[58px]">
          <div className="max-w-[628px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e4e9] bg-white px-[13px] py-[5px] shadow-[0px_1px_2px_rgba(21,26,40,0.04)]">
              <span
                className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#ef852e]"
                aria-hidden
              />
              <span className="text-[11px] uppercase tracking-[0.3px] text-[#60636c]">
                Topic discovery
              </span>
            </div>

            <h1 className="mt-6 font-display text-[3.3rem] leading-[0.95] tracking-[-0.04em] text-[#101116] sm:text-[4.25rem] lg:text-[4.5rem] lg:leading-[1.02] lg:tracking-[-1.8px]">
              Find out what your
              <br />
              customers are{' '}
              <span className="font-display italic text-[#0caee9]">really</span>
              <br />
              talking about.
              <br />
              <span className="font-display italic text-[#0caee9]">
                Before it becomes a fire.
              </span>
            </h1>

            <p className="mt-8 max-w-[556px] text-[18px] leading-[1.62] text-[#60636c]">
              RipeText reads every ticket and groups them into living topics so
              you see spikes, regressions, and new pain points the moment they
              start, not after the Monday report.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-lp-navy px-5 py-3 text-[14px] font-semibold leading-5 text-[#fefdfc] transition-colors hover:bg-lp-navy/90"
              >
                Book a demo
                <ArrowRightIcon className="text-[#fefdfc] transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#topic-feed"
                className="inline-flex items-center gap-2 text-[14px] leading-5 text-[#101116] transition-colors hover:text-[#0f1d43]"
              >
                See a live topic feed
                <ArrowRightIcon className="scale-[0.875] text-current" />
              </a>
            </div>
          </div>

          <div ref={clusterRef} className="xl:pt-[58px]">
            <ClusterPreviewCard
              visibleQuotes={visibleQuotes}
              showClusterHub={showClusterHub}
              showClusterNetwork={showClusterNetwork}
              visibleMetrics={visibleMetrics}
            />
          </div>
        </div>

        <div className="mt-16">
          <TopicFeedBrowser
            feedRef={feedRef}
            visibleTopics={visibleTopics}
            animateBars={animateBars}
            showSideCards={showSideCards}
          />
        </div>
      </div>
    </section>
  );
}
