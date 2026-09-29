import { AnimatedNumber } from '@/components/lp/AnimatedNumber';
import { AI_CSAT_CARD } from './conversation-mockup-data';
import { MockupSparkline } from './MockupSparkline';

interface MockupFloatingAiCsatProps {
  animate: boolean;
  immediate?: boolean;
  reduceMotion: boolean;
  style?: React.CSSProperties;
  sparklineDelay?: string;
}

export function MockupFloatingAiCsat({
  animate,
  immediate = false,
  reduceMotion,
  style,
  sparklineDelay
}: MockupFloatingAiCsatProps) {
  return (
    <div
      className="absolute bottom-[54px] right-[-24px] z-10 hidden w-48 rounded-[18px] border border-lp-mockup-hairline bg-white p-3 shadow-mockup-float lg:block"
      style={style}
    >
      <p className="text-[11.5px] font-medium uppercase tracking-[2.07px] text-lp-mockup-label">
        {AI_CSAT_CARD.title}
      </p>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="font-display text-2xl leading-8 text-lp-mockup-ink">
          <AnimatedNumber
            value={AI_CSAT_CARD.value}
            animate={animate}
            decimals={2}
            immediate={immediate}
          />
        </span>
        <span className="text-[10px] font-normal text-lp-mockup-muted">
          {AI_CSAT_CARD.maxLabel}
        </span>
      </div>
      <div className="mt-3 flex justify-center">
        <MockupSparkline
          animate={animate}
          reduceMotion={reduceMotion}
          delay={sparklineDelay}
        />
      </div>
    </div>
  );
}
