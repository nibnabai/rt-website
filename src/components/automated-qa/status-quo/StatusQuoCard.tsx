import { cn } from '@/lib/utils';
import type { StatusQuoCardData } from './status-quo-data';

type StatusQuoCardProps = {
  card: StatusQuoCardData;
  style?: React.CSSProperties;
};

export function StatusQuoCard({ card, style }: StatusQuoCardProps) {
  const { stat, title, body, Visual, visualLayout } = card;

  return (
    <article
      className={cn(
        'flex flex-col rounded-[22px] border border-[#dcdee2] bg-white shadow-[0px_8px_24px_0px_rgba(15,17,23,0.06),0px_1px_2px_0px_rgba(15,17,23,0.04)]',
        visualLayout === 'mesh' ? 'overflow-visible' : 'overflow-hidden'
      )}
      style={style}
    >
      <div
        className={cn(
          'flex justify-center px-4',
          visualLayout === 'mesh'
            ? 'overflow-visible pb-0 pt-4'
            : 'pb-1 pt-[13px]'
        )}
      >
        <Visual />
      </div>
      <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
        <p className="font-display text-[30px] leading-9 tracking-[-0.5px] text-[#0b0d13]">
          {stat}
        </p>
        <h3 className="mt-3 text-lg font-medium leading-[25px] text-[#0b0d13]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-[23px] text-[#4a4d54]">{body}</p>
      </div>
    </article>
  );
}
