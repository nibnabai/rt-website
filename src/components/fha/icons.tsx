import React from 'react';

const stepIcons: Record<string, React.ReactNode> = {
  connect: (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.125 11.9594C8.29318 12.2349 8.49275 12.4955 8.72369 12.7359C10.1576 14.2282 12.3432 14.4615 14.0121 13.4357C14.3214 13.2457 14.6128 13.0124 14.8785 12.7359L18.7253 8.73232C20.4249 6.96345 20.4249 4.09553 18.7253 2.32666C17.0257 0.55778 14.2701 0.557782 12.5705 2.32666L11.7232 3.2085"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.27724 17.7912L8.42963 18.6734C6.73 20.4422 3.97435 20.4422 2.27472 18.6734C0.575093 16.9045 0.575092 14.0366 2.27472 12.2677L6.12154 8.26416C7.82117 6.49528 10.5768 6.49528 12.2764 8.26416C12.5073 8.50445 12.7069 8.76503 12.875 9.04038"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  scan: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.07 4.93C17.51 3.37 15.48 2.37 13.3 2.08C11.12 1.8 8.9 2.24 6.99 3.34"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6H4.01"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.29 9.62C1.92 11.15 1.91 12.74 2.26 14.27C2.62 15.8 3.33 17.23 4.34 18.43C5.35 19.64 6.63 20.59 8.08 21.2C9.53 21.82 11.1 22.09 12.67 21.98C14.24 21.88 15.76 21.4 17.11 20.6C18.46 19.8 19.61 18.69 20.45 17.36C21.29 16.03 21.81 14.52 21.96 12.96C22.11 11.39 21.88 9.81 21.31 8.35"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.24 7.76C15.66 7.18 14.98 6.73 14.22 6.42C13.46 6.12 12.65 5.97 11.83 5.99C11.02 6.01 10.22 6.2 9.47 6.54C8.73 6.88 8.07 7.37 7.52 7.98C6.98 8.59 6.56 9.3 6.3 10.07C6.04 10.84 5.94 11.66 6 12.48C6.07 13.29 6.3 14.08 6.69 14.8C7.07 15.52 7.59 16.16 8.23 16.67"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H12.01"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.99 11.66C18.04 12.61 17.87 13.56 17.49 14.43C17.1 15.3 16.51 16.07 15.77 16.67"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.41 10.59L19.07 4.93"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  review: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="2"
        width="8"
        height="4"
        rx="1"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4H18C18.53 4 19.04 4.21 19.41 4.59C19.79 4.96 20 5.47 20 6V20C20 20.53 19.79 21.04 19.41 21.41C19.04 21.79 18.53 22 18 22H6C5.47 22 4.96 21.79 4.59 21.41C4.21 21.04 4 20.53 4 20V6C4 5.47 4.21 4.96 4.59 4.59C4.96 4.21 5.47 4 6 4H8"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14L11 16L15 12"
        stroke="#151A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export function StepIcon({ icon }: { icon: string }) {
  return <>{stepIcons[icon] ?? null}</>;
}

export function TagCheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="#0CAEE9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6L5.5 7L7.5 5"
        stroke="#0CAEE9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExportIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75"
        stroke="#0CAEE9"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.08333 5.83333L7 8.75L9.91667 5.83333"
        stroke="#0CAEE9"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.75V1.75"
        stroke="#0CAEE9"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
