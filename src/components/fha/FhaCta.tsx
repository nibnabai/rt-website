import { ArrowRight } from 'lucide-react';

export function FhaCta() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden sm:rounded-3xl p-10 sm:p-16 lg:p-20"
        style={{
          backgroundImage:
            'linear-gradient(161deg, rgb(15, 29, 67) 0%, rgb(31, 47, 92) 100%)'
        }}
      >
        {/* Dot pattern overlay */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[464px] opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)',
            backgroundSize: '22px 22px'
          }}
        />

        {/* Cyan accent glow */}
        <div className="pointer-events-none absolute -right-[7%] -top-24 h-72 w-72 rounded-full bg-[rgba(12,174,233,0.2)] blur-[32px]" />

        {/* Content */}
        <div className="relative max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[2.4px] text-[#0caee9]">
            Get started
          </p>

          <h2 className="mt-[23px] font-display text-[36px] leading-[1.15] tracking-[-0.5px] text-[#fcfcfd] sm:text-[48px] sm:leading-[1.15] sm:tracking-[-1px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
            Find the risk you haven&apos;t seen yet.
          </h2>

          <p className="mt-[32px] max-w-[575px] text-lg leading-7 text-[rgba(252,252,253,0.75)]">
            Book a 30-minute demo. We&apos;ll connect your system, scan a sample
            of your conversations, and show you the FHA risks already sitting in
            your communications.
          </p>

          <div className="mt-[126px] flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="https://calendly.com/tsenkov"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#fcfcfd] px-8 py-3 text-sm font-medium text-[#151a28] transition-colors hover:bg-[#fcfcfd]/90"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:sales@ripetext.com"
              className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(252,252,253,0.25)] bg-[#1f2f5c] px-8 py-3 text-sm font-medium text-[#fcfcfd] transition-colors hover:bg-[#2a3d6e]"
            >
              Contact Sales
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-[5px] lg:gap-x-8 lg:gap-y-2 text-xs text-[rgba(252,252,253,0.6)]">
            <span>14-day Trial</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(252,252,253,0.3)]" />
            <span>30-minute demo</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(252,252,253,0.3)]" />
            <span>Tailored to your portfolio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
