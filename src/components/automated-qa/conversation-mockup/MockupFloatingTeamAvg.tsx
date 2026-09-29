import { AnimatedNumber } from '@/components/lp/AnimatedNumber';
import { TEAM_AVG_CARD } from './conversation-mockup-data';

interface MockupFloatingTeamAvgProps {
  animate: boolean;
  immediate?: boolean;
  style?: React.CSSProperties;
  getBarStyle: (index: number) => React.CSSProperties;
}

export function MockupFloatingTeamAvg({
  animate,
  immediate = false,
  style,
  getBarStyle
}: MockupFloatingTeamAvgProps) {
  return (
    <div
      className="absolute -left-8 top-[95px] z-10 hidden w-44 rounded-[18px] border border-lp-mockup-hairline bg-white p-3 shadow-mockup-float lg:block"
      style={style}
    >
      <p className="text-[11.5px] font-medium uppercase leading-snug tracking-[2.07px] text-lp-mockup-label">
        {TEAM_AVG_CARD.title}
      </p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="font-display text-2xl leading-8 text-lp-mockup-ink">
          <AnimatedNumber
            value={TEAM_AVG_CARD.value}
            animate={animate}
            decimals={1}
            immediate={immediate}
          />
        </span>
        <span className="text-[10px] font-normal text-[#21763c]">
          {TEAM_AVG_CARD.delta}
        </span>
      </div>
      <div className="mt-2 flex h-8 items-end gap-0.5">
        {TEAM_AVG_CARD.barHeights.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-[10px] bg-lp-mockup-bar"
            style={{
              height: `${Math.max(height * 100, 8)}%`,
              ...getBarStyle(index)
            }}
          />
        ))}
      </div>
    </div>
  );
}
