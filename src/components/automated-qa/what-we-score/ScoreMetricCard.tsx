import { cn } from '@/lib/utils';

type ScoreMetricCardProps = {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function ScoreMetricCard({
  number,
  title,
  children,
  className,
  style
}: ScoreMetricCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-[22px] border border-[#dcdee2] bg-white shadow-[0px_8px_24px_0px_rgba(15,17,23,0.06),0px_1px_2px_0px_rgba(15,17,23,0.04)]',
        className
      )}
      style={style}
    >
      <header className="flex items-center justify-between px-6 pt-7">
        <h3 className="text-[11.5px] font-medium uppercase tracking-[2.07px] text-[#4a4d54]">
          {title}
        </h3>
        <span className="font-display text-sm leading-5 text-[#777a82]">
          {number}
        </span>
      </header>
      <div className="flex flex-1 flex-col px-6 pb-7">{children}</div>
    </article>
  );
}
