import { MOCKUP_CHROME_URL } from './conversation-mockup-data';

interface MockupBrowserChromeProps {
  style?: React.CSSProperties;
  title?: string;
}

export function MockupBrowserChrome({
  style,
  title = MOCKUP_CHROME_URL
}: MockupBrowserChromeProps) {
  return (
    <div
      className="flex h-9 items-center gap-2 border-b border-lp-mockup-hairline bg-lp-mockup-surface px-4"
      style={style}
    >
      <div className="flex shrink-0 gap-[6px]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbdb7]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6d389]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a1e4ae]" />
      </div>
      <span className="mx-auto truncate text-[11px] font-normal tracking-[0.275px] text-lp-mockup-muted">
        {title}
      </span>
    </div>
  );
}
