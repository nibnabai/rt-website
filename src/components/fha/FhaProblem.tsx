import { problemStats } from './data';

function ProblemIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    chat: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <path
          d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'eye-off': (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <g clipPath="url(#eyeoff)">
          <path
            d="M8.94417 4.23C10.8853 3.99867 12.8488 4.40901 14.5349 5.39837C16.2209 6.38773 17.5368 7.90173 18.2817 9.70917C18.3511 9.89626 18.3511 10.1021 18.2817 10.2892C17.9754 11.0317 17.5707 11.7296 17.0783 12.3642"
            stroke="#E94135"
            strokeWidth="1.667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7367 11.7983C11.2652 12.2537 10.6337 12.5057 9.97816 12.5C9.32267 12.4943 8.69564 12.2314 8.23212 11.7679C7.7686 11.3044 7.50568 10.6773 7.49998 10.0218C7.49429 9.36634 7.74627 8.73484 8.20167 8.26333"
            stroke="#E94135"
            strokeWidth="1.667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5658 14.5825C13.4604 15.2373 12.2271 15.6467 10.9495 15.7828C9.67188 15.919 8.37996 15.7787 7.16136 15.3716C5.94276 14.9644 4.82599 14.2999 3.88684 13.4231C2.94769 12.5463 2.20813 11.4778 1.71833 10.29C1.64888 10.1029 1.64888 9.8971 1.71833 9.71C2.45719 7.91821 3.75723 6.41437 5.42333 5.42417"
            stroke="#E94135"
            strokeWidth="1.667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66667 1.66667L18.3333 18.3333"
            stroke="#E94135"
            strokeWidth="1.667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="eyeoff">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    'file-alert': (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <path
          d="M12.5 1.66667H5C4.55797 1.66667 4.13405 1.84226 3.82149 2.15482C3.50893 2.46738 3.33333 2.89131 3.33333 3.33333V16.6667C3.33333 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V5.83333L12.5 1.66667Z"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 7.5V10.8333"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14.1667H10.0083"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    scales: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        <path
          d="M13.3333 13.3333L15.8333 6.66667L18.3333 13.3333C17.6083 13.875 16.7333 14.1667 15.8333 14.1667C14.9333 14.1667 14.0583 13.875 13.3333 13.3333Z"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66667 13.3333L4.16667 6.66667L6.66667 13.3333C5.94167 13.875 5.06667 14.1667 4.16667 14.1667C3.26667 14.1667 2.39167 13.875 1.66667 13.3333Z"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 17.5H14.1667"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 2.5V17.5"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 5.83333H4.16667C5.83333 5.83333 8.33333 5 10 4.16667C11.6667 5 14.1667 5.83333 15.8333 5.83333H17.5"
          stroke="#E94135"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  };

  return <>{iconMap[icon] ?? null}</>;
}

export function FhaProblem() {
  return (
    <section id="problem" className="bg-white px-8 py-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-14">
        {/* Header */}
        <div className="flex max-w-[672px] flex-col gap-[23px]">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase leading-4 tracking-[2.4px] text-[#0caee9]">
              01 · The Problem
            </p>
            <h2 className="font-display text-[48px] leading-[48px] tracking-[-1.2px] text-[#151a28]">
              Fair Housing risk hides in{' '}
              <em className="font-display italic">ordinary</em> messages.
            </h2>
          </div>
          <p className="text-lg leading-7 text-[#636a7e]">
            Most violations don&apos;t come from policy gaps. They come from a
            single friendly sentence no one reviewed.
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#e3e6ed] bg-[#e3e6ed] sm:grid-cols-2 lg:grid-cols-4">
          {problemStats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col bg-white px-7 pb-7 pt-7 transition-colors hover:bg-[#f2f4f7]/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f9cbc8] bg-[#feedeb]">
                <ProblemIcon icon={stat.icon} />
              </div>
              <p className="mt-[20px] text-base font-semibold leading-6 text-[#151a28]">
                {stat.title}
              </p>
              <p className="mt-[10px] text-sm leading-[22.75px] text-[#636a7e]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
