import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import type { IvyDemoProgressStatus } from '@/hooks/use-ivy-chat-demo-sequence';

function ThinkingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="#8678e0" strokeWidth="1.5" />
      <path
        d="M10 6V10L12.5 12.5"
        stroke="#8678e0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6" stroke="#8678e0" strokeWidth="1.5" />
      <path
        d="M13.5 13.5L17 17"
        stroke="#8678e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function QueryingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="14"
        height="10"
        rx="2"
        stroke="#8678e0"
        strokeWidth="1.5"
      />
      <path
        d="M6 9H10M6 12H8"
        stroke="#8678e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="10" r="1" fill="#8678e0" />
    </svg>
  );
}

function AnalyzingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 15L7 11L10 14L17 5"
        stroke="#8678e0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GeneratingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M10 3V5M10 15V17M3 10H5M15 10H17M5.05 5.05L6.46 6.46M13.54 13.54L14.95 14.95M5.05 14.95L6.46 13.54M13.54 6.46L14.95 5.05"
        stroke="#8678e0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const STATUS_ICONS: Record<IvyDemoProgressStatus, () => JSX.Element> = {
  thinking: ThinkingIcon,
  searching: SearchingIcon,
  querying: QueryingIcon,
  analyzing: AnalyzingIcon,
  generating: GeneratingIcon
};

export function IvyChatProgressIndicator({
  label,
  status,
  compact = false
}: {
  label: string;
  status: IvyDemoProgressStatus;
  compact?: boolean;
}) {
  const Icon = STATUS_ICONS[status];

  return (
    <div className={`flex items-start ${compact ? 'gap-[7px]' : 'gap-2.5'}`}>
      <div
        className={`shrink-0 overflow-hidden rounded-full border border-[#e8eaff] shadow-[0px_0px_0px_2px_#e8eaff] ${
          compact ? 'size-[33px]' : 'size-7'
        }`}
      >
        <Image
          src={cdnUrl('/images/ivy-the-ai-asisstant/ivy-profile-image.webp')}
          alt=""
          width={66}
          height={66}
          unoptimized
          className="h-full w-full scale-[1.04] object-cover"
          style={{ objectPosition: '-3% -1%' }}
        />
      </div>

      <div
        className={`rounded-[9px] border border-[#e2e2e2] bg-white ${
          compact ? 'px-3 py-2.5' : 'px-4 py-3'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="animate-pulse">
            <Icon />
          </div>
          <span
            className={`font-medium text-[#17234c] ${
              compact ? 'text-[10px]' : 'text-[11px]'
            }`}
          >
            {label}
          </span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#f0f0f2]">
          <div className="ivy-progress-bar h-full rounded-full bg-linear-to-r from-[#8678e0] to-[#b170dd]" />
        </div>
      </div>
    </div>
  );
}
