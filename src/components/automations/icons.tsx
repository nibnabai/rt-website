import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';

type IconProps = {
  className?: string;
};

function AutomationImageIcon({
  className,
  src,
  alt,
  width,
  height
}: IconProps & {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={cdnUrl(src)}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={className}
      aria-hidden={alt === ''}
    />
  );
}

export function RespondFasterIcon({ className }: IconProps) {
  return (
    <AutomationImageIcon
      className={className ?? 'h-[28px] w-[20px] object-contain'}
      src="/images/features/automation/thunder-icon.webp"
      alt=""
      width={20}
      height={28}
    />
  );
}

export function ReduceManualWorkIcon({ className }: IconProps) {
  return (
    <AutomationImageIcon
      className={className ?? 'h-[28px] w-[24px] object-contain'}
      src="/images/features/automation/cycle.webp"
      alt=""
      width={24}
      height={28}
    />
  );
}

export function ConnectExistingWorkflowsIcon({ className }: IconProps) {
  return (
    <AutomationImageIcon
      className={className ?? 'h-[28px] w-[21px] object-contain'}
      src="/images/features/automation/arrow.webp"
      alt=""
      width={21}
      height={28}
    />
  );
}

export function StayInControlIcon({ className }: IconProps) {
  return (
    <AutomationImageIcon
      className={className ?? 'h-[24px] w-[18px] object-contain'}
      src="/images/features/automation/circle.webp"
      alt=""
      width={18}
      height={24}
    />
  );
}

export function AlertIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g clipPath="url(#clip0_7913_1475)">
        <path
          d="M8 4V8M8 11H8.01"
          stroke="#E62B34"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
          stroke="#E62B34"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_7913_1475">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
