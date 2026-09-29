import { cn } from '@/lib/utils';

export type LpSectionHeaderProps = {
  eyebrow: string;
  headline: React.ReactNode;
  body?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function LpSectionHeader({
  eyebrow,
  headline,
  body,
  className,
  style
}: LpSectionHeaderProps) {
  return (
    <header className={cn('max-w-[695px]', className)} style={style}>
      <p className="text-xs font-medium uppercase tracking-[2.4px] text-[#0caee9]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[36px] font-normal leading-[1.15] tracking-[-0.5px] text-[#151a28] sm:text-[44px] lg:text-[48px] lg:leading-[46px]">
        {headline}
      </h2>
      {body ? (
        <p className="mt-4 text-[17px] leading-[28px] text-[#636a7e]">{body}</p>
      ) : null}
    </header>
  );
}
