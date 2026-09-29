export function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 7H21"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseCircleIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15.5002 28.4167C22.6043 28.4167 28.4168 22.6042 28.4168 15.5C28.4168 8.39584 22.6043 2.58334 15.5002 2.58334C8.396 2.58334 2.5835 8.39584 2.5835 15.5C2.5835 22.6042 8.396 28.4167 15.5002 28.4167Z"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8447 19.1554L19.1556 11.8446"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1556 19.1554L11.8447 11.8446"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LaunchArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 10L10 4M5.5 4H10V8.5"
        stroke="#8E93A1"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M2.333 9.333 5.167 6.5l2.166 2.167L11.667 4.333M8.75 4.333h2.917V7.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 1.5V6L8.75 7.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 6A4.5 4.5 0 1 1 6 1.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 2V12H12M4 9.5V6.5M7 9.5V3.5M10 9.5V5"
        stroke="#8E93A1"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparklineIcon({ positive }: { positive: boolean }) {
  const stroke = positive ? '#43a047' : '#ef5350';
  const d = positive
    ? 'M2 22 L14 18 L24 20 L35 12 L46 14 L58 6 L70 8 L82 2'
    : 'M2 6 L14 10 L24 9 L35 16 L46 14 L58 20 L70 21 L82 24';

  return (
    <svg width="84" height="26" viewBox="0 0 84 26" fill="none" aria-hidden>
      <path
        d={d}
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClusterNetworkIcon() {
  return (
    <>
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="h-full w-full sm:hidden"
      >
        <g stroke="#D8DCE5" strokeWidth="1.5" strokeDasharray="4 4">
          <path d="M160 128L66 62" />
          <path d="M160 128L146 34" />
          <path d="M160 128L258 62" />
          <path d="M160 128L60 158" />
          <path d="M160 128L160 228" />
          <path d="M160 132L264 188" />
        </g>
      </svg>

      <svg
        viewBox="0 0 460 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="hidden h-full w-full sm:block"
      >
        <g stroke="#D8DCE5" strokeWidth="1.5" strokeDasharray="4 4">
          <path d="M230 146L94 82" />
          <path d="M230 146L182 63" />
          <path d="M230 146L366 86" />
          <path d="M230 146L108 194" />
          <path d="M230 146L234 214" />
          <path d="M230 146L384 188" />
        </g>
      </svg>
    </>
  );
}

export function InboxStackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6693 8H10.6693L9.33594 10H6.66927L5.33594 8H1.33594"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.63594 3.40675L1.33594 8.00008V12.0001C1.33594 12.3537 1.47641 12.6928 1.72646 12.9429C1.97651 13.1929 2.31565 13.3334 2.66927 13.3334H13.3359C13.6896 13.3334 14.0287 13.1929 14.2787 12.9429C14.5288 12.6928 14.6693 12.3537 14.6693 12.0001V8.00008L12.3693 3.40675C12.2589 3.18461 12.0887 2.99766 11.8779 2.86693C11.6671 2.73621 11.424 2.66688 11.1759 2.66675H4.82927C4.58121 2.66688 4.33811 2.73621 4.1273 2.86693C3.91649 2.99766 3.74632 3.18461 3.63594 3.40675Z"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClusterNodesIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.55363 1.45325C8.37993 1.37401 8.19123 1.33301 8.0003 1.33301C7.80938 1.33301 7.62068 1.37401 7.44697 1.45325L1.73363 4.05325C1.61533 4.10541 1.51475 4.19085 1.44414 4.29915C1.37353 4.40746 1.33594 4.53396 1.33594 4.66325C1.33594 4.79254 1.37353 4.91904 1.44414 5.02734C1.51475 5.13565 1.61533 5.22108 1.73363 5.27325L7.45364 7.87991C7.62734 7.95915 7.81604 8.00015 8.00697 8.00015C8.19789 8.00015 8.38659 7.95915 8.5603 7.87991L14.2803 5.27991C14.3986 5.22775 14.4992 5.14231 14.5698 5.03401C14.6404 4.9257 14.678 4.7992 14.678 4.66991C14.678 4.54062 14.6404 4.41412 14.5698 4.30582C14.4992 4.19751 14.3986 4.11208 14.2803 4.05991L8.55363 1.45325Z"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33594 8C1.33562 8.12751 1.37188 8.25244 1.44042 8.35997C1.50895 8.46749 1.60689 8.55311 1.72261 8.60667L7.45594 11.2133C7.62874 11.2916 7.81625 11.3321 8.00594 11.3321C8.19563 11.3321 8.38314 11.2916 8.55594 11.2133L14.2759 8.61333C14.3939 8.56029 14.494 8.47406 14.5638 8.36516C14.6337 8.25625 14.6703 8.12937 14.6693 8"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33594 11.3333C1.33562 11.4608 1.37188 11.5857 1.44042 11.6932C1.50895 11.8007 1.60689 11.8864 1.72261 11.9399L7.45594 14.5466C7.62874 14.6248 7.81625 14.6653 8.00594 14.6653C8.19563 14.6653 8.38314 14.6248 8.55594 14.5466L14.2759 11.9466C14.3939 11.8935 14.494 11.8073 14.5638 11.6984C14.6337 11.5895 14.6703 11.4626 14.6693 11.3333"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RankingTrendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6641 4.66675H14.6641V8.66675"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6693 4.66675L9.0026 10.3334L5.66927 7.00008L1.33594 11.3334"
        stroke="#101116"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuestionBubbleIcon() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.632812 7.36843C0.632812 6.71935 0.64415 6.08573 0.665733 5.47395C0.736243 3.47524 0.771499 2.47588 1.58445 1.65682C2.3974 0.837749 3.42498 0.793785 5.48014 0.705855C6.60769 0.657613 7.8083 0.631592 9.05387 0.631592C10.2994 0.631592 11.5 0.657613 12.6276 0.705855C14.6828 0.793785 15.7103 0.837749 16.5233 1.65682C17.3362 2.47588 17.3715 3.47524 17.442 5.47395C17.4636 6.08573 17.4749 6.71935 17.4749 7.36843C17.4749 8.01752 17.4636 8.65114 17.442 9.26291C17.3715 11.2616 17.3362 12.261 16.5233 13.0801C15.7103 13.8991 14.6827 13.9431 12.6275 14.031C12.0095 14.0575 11.3695 14.0772 10.7122 14.0897C10.0881 14.1015 9.77603 14.1074 9.50186 14.2119C9.22769 14.3163 8.99699 14.5141 8.53558 14.9097L6.70021 16.4835C6.58879 16.5791 6.44687 16.6316 6.3001 16.6316C5.96064 16.6316 5.68544 16.3564 5.68544 16.0169V14.0395C5.61674 14.0368 5.5483 14.0339 5.48013 14.031C3.42498 13.9431 2.3974 13.8991 1.58445 13.0801C0.771499 12.261 0.736243 11.2616 0.665733 9.26291C0.64415 8.65114 0.632812 8.01752 0.632812 7.36843Z"
        stroke="#101116"
        strokeWidth="1.26316"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04692 11.158H9.05448"
        stroke="#101116"
        strokeWidth="1.51579"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.95312 5.68412C6.95312 4.52142 7.89568 3.57886 9.05839 3.57886C10.2211 3.57886 11.1637 4.52142 11.1637 5.68412C11.1637 6.55595 10.6337 7.304 9.87838 7.62372C9.45009 7.80501 9.05839 8.16641 9.05839 8.63149"
        stroke="#101116"
        strokeWidth="1.26316"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ModalCloseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M3 3L12 12M12 3L3 12"
        stroke="#8E93A1"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckBadgeIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 6.25L5 8.5L9.5 3.75"
        stroke="#151A28"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CtaArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3.5 8H12.5"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.75 4.25L12.5 8L8.75 11.75"
        stroke="#151A28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
