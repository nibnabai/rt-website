'use client';

import { MockupBrowserChrome } from './MockupBrowserChrome';
import { ConversationThread } from './ConversationThread';
import { ConversationScorePanel } from './ConversationScorePanel';
import { MockupFloatingTeamAvg } from './MockupFloatingTeamAvg';
import { MockupFloatingAiCsat } from './MockupFloatingAiCsat';
import { TEAM_AVG_CARD } from './conversation-mockup-data';
import { useConversationMockupAnimation } from './useConversationMockupAnimation';

export function ConversationMockup() {
  const {
    containerRef,
    isVisible,
    animate,
    reduceMotion,
    delays,
    reveal,
    messageDelay,
    metricDelay
  } = useConversationMockupAnimation();

  const show = isVisible || reduceMotion;

  const windowStyle: React.CSSProperties = show
    ? {
        opacity: 1,
        transform: 'translateY(0)',
        transition: reduceMotion
          ? 'none'
          : 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }
    : {
        opacity: 0,
        transform: 'translateY(24px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      };

  const panelHidden = { opacity: 0, transform: 'translateX(12px)' };
  const floatLeftHidden = { opacity: 0, transform: 'translateX(-16px)' };
  const floatRightHidden = { opacity: 0, transform: 'translateX(16px)' };

  const violationIndex = 2;

  return (
    <div ref={containerRef} className="relative w-full max-w-[677px]">
      <div
        className="overflow-hidden rounded-[22px] border border-lp-mockup-hairline bg-white shadow-mockup-window"
        style={windowStyle}
      >
        <MockupBrowserChrome style={reveal(show, delays.chrome)} />

        <div className="flex flex-col md:flex-row">
          <ConversationThread
            headerStyle={reveal(show, delays.chrome)}
            getMessageStyle={(index) => reveal(show, messageDelay(index))}
            getViolationStyles={(index) => {
              if (index !== violationIndex) return {};
              return {
                bubble: reveal(show, delays.violation),
                pill: reveal(show, delays.violation, {
                  opacity: 0,
                  transform: 'scale(0.92)'
                })
              };
            }}
          />

          <ConversationScorePanel
            animate={animate}
            immediate={reduceMotion}
            panelStyle={reveal(show, delays.panel, panelHidden)}
            scoreStyle={reveal(show, delays.score)}
            getMetricStyle={(index) => reveal(show, metricDelay(index))}
            flaggedStyle={reveal(show, delays.flagged)}
          />
        </div>
      </div>

      <MockupFloatingTeamAvg
        animate={animate}
        immediate={reduceMotion}
        style={reveal(show, delays.teamAvg, floatLeftHidden)}
        getBarStyle={(index) => {
          const barDelay = `${parseFloat(delays.teamAvg) + index * 0.04}s`;
          if (!show) {
            return {
              height: '0%',
              transition: reduceMotion
                ? 'none'
                : `height 0.5s ease-out ${barDelay}`
            };
          }
          const height = Math.max(
            (TEAM_AVG_CARD.barHeights[index] ?? 0) * 100,
            8
          );
          return {
            height: `${height}%`,
            transition: reduceMotion
              ? 'none'
              : `height 0.5s ease-out ${barDelay}`
          };
        }}
      />

      <MockupFloatingAiCsat
        animate={animate}
        immediate={reduceMotion}
        reduceMotion={reduceMotion}
        style={reveal(show, delays.aiCsat, floatRightHidden)}
        sparklineDelay={delays.aiCsat}
      />
    </div>
  );
}
