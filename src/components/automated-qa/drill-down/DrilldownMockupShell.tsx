import { cn } from '@/lib/utils';

type DrilldownMockupShellProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/** Figma drill-down mockup frame with mesh glow (7143:3171). */
export function DrilldownMockupShell({
  children,
  className,
  style
}: DrilldownMockupShellProps) {
  return (
    <div className={cn('relative w-full', className)} style={style}>
      <div
        className="pointer-events-none absolute -inset-3 rounded-[28px] bg-lp-mesh-surface/80 opacity-50 blur-2xl sm:-inset-6"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[22px] border border-[#dcdee2] bg-white shadow-[0px_12px_40px_0px_rgba(15,17,23,0.08),0px_1px_0px_0px_rgba(15,17,23,0.04)]">
        {children}
      </div>
    </div>
  );
}
