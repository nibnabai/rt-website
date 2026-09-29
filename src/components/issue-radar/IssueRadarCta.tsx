import { ArrowRight } from 'lucide-react';

export function IssueRadarCta() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-[1232px] overflow-hidden rounded-[24px] bg-gradient-to-b from-white to-[#f8f9fb] px-6 py-[104px] text-center sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1072px] flex-col items-center gap-[56px]">
          <div className="flex flex-col items-center gap-[56px]">
            <h2 className="font-display text-[40px] leading-[0.8] text-[#151a28] sm:text-[56px] lg:text-[72px] lg:leading-[58px]">
              Know what&apos;s blowing up{' '}
              <em className="italic text-[#0caee9]">before</em> it does.
            </h2>

            <p className="max-w-[576px] text-[18px] leading-[26px] text-[#151a28]">
              Book a 20-minute demo and we&apos;ll show you the radar on a real
              support inbox.
            </p>
          </div>

          <a
            href="https://calendly.com/tsenkov"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-[6px] rounded-[10px] bg-[#0f1d43] px-[35px] py-[11px] text-[14px] font-medium text-white transition-colors hover:bg-[#0f1d43]/90"
          >
            Book a demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
