import { HeroAnimation } from './HeroAnimation';

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1.167L2.333 2.917v2.916c0 3.209 1.995 6.213 4.667 6.942 2.672-.73 4.667-3.733 4.667-6.942V2.917L7 1.167z"
        stroke="#0CAEE9"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 7l1.167 1.167L8.75 5.833"
        stroke="#0CAEE9"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="#fcfcfd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap text-xs text-[#636a7e]">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#239f71]" />
      {children}
    </span>
  );
}

export function FhaHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgb(252, 252, 253) 0%, rgb(246, 246, 249) 100%)'
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(227,230,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(227,230,237,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />

      {/* Cyan radial glow at top center */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(12,174,233,0.10) 0%, transparent 60%)'
        }}
      />

      {/* Purple blur accent on the right */}
      <div className="pointer-events-none absolute right-[10%] top-[110px] h-[471px] w-[686px] rounded-full bg-[#8678e0] opacity-20 blur-[75px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-[109px] lg:px-8 lg:pb-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8 xl:grid-cols-[1.15fr_1fr]">
          {/* Left - Copy */}
          <div className="max-w-[530px] xl:max-w-none">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e6ed] bg-white/70 px-3 py-1.5 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] backdrop-blur-xs">
              <ShieldCheckIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="text-xs font-medium text-[#636a7e]">
                FHA Compliance Add-on · For Property Managers
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-[54px] font-display text-[52px] leading-[52px] tracking-[-1.8px] text-[#151a28] xl:text-[72px] xl:leading-[72px]">
              FHA risk hides in{' '}
              <em className="font-display italic text-[#0caee9]">ordinary</em>{' '}
              messages. We&nbsp;find&nbsp;it.
            </h1>

            {/* Subtitle */}
            <p className="mt-[28px] max-w-[470px] text-lg leading-[29.25px] text-[#636a7e]">
              RipeText reviews every customer conversation across your leasing
              and support channels — flagging protected-class language,
              steering, and discriminatory patterns before they become
              complaints.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex items-center gap-3">
              <a
                href="https://calendly.com/tsenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-[10px] bg-[#0f1d43] px-8 py-3 text-sm font-medium text-[#fcfcfd] transition-colors hover:bg-[#0f1d43]/90"
              >
                Book a Demo
                <ArrowRightIcon />
              </a>
              <a
                href="mailto:sales@ripetext.com"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#e3e6ed] bg-[#fcfcfd] px-8 py-3 text-sm font-medium text-[#151a28] transition-colors hover:bg-[#f2f4f7]"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 xl:flex-nowrap">
              <TrustBadge>Connects to Zendesk, Intercom, Front</TrustBadge>
              <TrustBadge>SOC 2 Type II in progress</TrustBadge>
              <TrustBadge>Audit-ready exports</TrustBadge>
            </div>
          </div>

          {/* Right - Animated Card */}
          <div className="mt-[40px] lg:mt-0 lg:pt-[86px]">
            <HeroAnimation className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
