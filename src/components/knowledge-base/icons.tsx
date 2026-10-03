type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FileIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M9.333 1.667H4.667A1.333 1.333 0 0 0 3.333 3v10a1.333 1.333 0 0 0 1.334 1.333h6.666A1.333 1.333 0 0 0 12.667 13V5L9.333 1.667Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M9.333 1.667V5h3.334M5.667 8.333h4.666M5.667 10.667h3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="m3.333 8.333 3 3 6.334-6.666"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="m4.333 4.333 7.334 7.334M11.667 4.333l-7.334 7.334"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SendIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="m3.333 8 9-4-3 8-2.333-2.333L3.333 8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 6.333a4 4 0 1 1 8 0c0 4.334 1.667 5.334 1.667 5.334H2.333S4 10.667 4 6.333ZM6.867 14a1.333 1.333 0 0 0 2.266 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UploadDocsIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M11.667 2.5H5.833A1.667 1.667 0 0 0 4.167 4.167v11.666A1.667 1.667 0 0 0 5.833 17.5h8.334a1.667 1.667 0 0 0 1.666-1.667V6.667L11.667 2.5Z"
        stroke="#0F1D43"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 2.5v4.167h4.166M10 14.167V9.583M7.917 11.667 10 9.583l2.083 2.084"
        stroke="#0F1D43"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RedactIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M10 2.083 3.75 4.583v4.584c0 3.916 2.667 7.458 6.25 8.75 3.583-1.292 6.25-4.834 6.25-8.75V4.583L10 2.083Z"
        stroke="#0F1D43"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <rect
        x="6.667"
        y="8.333"
        width="6.667"
        height="2.5"
        rx="0.6"
        fill="#0CAEE9"
      />
    </svg>
  );
}

export function ExtractFactsIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M3.333 5h7.5M3.333 10h5.834M3.333 15h7.5"
        stroke="#0F1D43"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M15 7.5c.255 1.37.963 2.078 2.333 2.333-1.37.256-2.078.963-2.333 2.334-.256-1.37-.963-2.078-2.333-2.334C14.037 9.578 14.744 8.87 15 7.5Z"
        fill="#0CAEE9"
        stroke="#0CAEE9"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VerifyIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="10" cy="10" r="7.083" stroke="#0F1D43" strokeWidth="1.4" />
      <path
        d="m7.083 10.208 2.084 2.084 3.75-4.167"
        stroke="#0F1D43"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckBadgeIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="m3 6.25 2 2 4-4.5"
        stroke="#0CAEE9"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
