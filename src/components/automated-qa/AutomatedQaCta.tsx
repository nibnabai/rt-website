import { ArrowRightIcon } from './icons';

/** Figma 7627:1407 — navy base + cyan radial wash top-left */
const CTA_GRADIENT_STYLE: React.CSSProperties = {
  backgroundColor: 'rgb(28, 44, 87)',
  backgroundImage: [
    'radial-gradient(ellipse 120% 85% at 20% 10%, rgba(0, 123, 173, 0.251) 0%, rgba(0, 61, 87, 0.1255) 30%, transparent 60%)'
  ].join(', ')
};

const SUBHEAD_COPY =
  'See RipeText score your real conversations in a 20-minute demo.';

export function AutomatedQaCta() {
  return (
    <section id="get-started" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={CTA_GRADIENT_STYLE}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-28 text-center md:py-40">
        <div className="flex w-full flex-col items-center gap-[70px]">
          <div className="flex w-full flex-col items-center gap-[50px]">
            <p className="text-[12px] uppercase tracking-[2.64px] text-[#0caee9]">
              Ready when you are
            </p>

            <div className="flex w-full flex-col items-center gap-[15px]">
              {/* Mobile — Figma 7143:3374–3376 */}
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-[#fcfaf6] md:hidden">
                Stop sampling.{' '}
                <span className="font-display italic text-[#0caee9]">
                  Start seeing everything
                </span>
                <span className="block">— down to the message.</span>
              </h2>

              {/* Desktop — Figma 7627:1414 line break after "— down" */}
              <h2 className="hidden max-w-[961px] font-display text-[60px] leading-[63px] tracking-[-1.5px] text-[#fcfaf6] md:block">
                Stop sampling.{' '}
                <span className="font-display italic text-[#0caee9]">
                  Start seeing everything
                </span>{' '}
                — down
                <br />
                to the message.
              </h2>

              <p className="max-w-[576px] text-[18px] leading-[28px] text-[rgba(252,250,246,0.7)]">
                {SUBHEAD_COPY}
              </p>
            </div>
          </div>

          <a
            href="https://calendly.com/tsenkov"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-[10px] bg-[#fcfaf6] px-7 text-sm font-semibold text-[#0d1218] transition-opacity hover:opacity-95"
          >
            Book a demo
            <ArrowRightIcon className="shrink-0 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="text-xs leading-4 text-[rgba(251,250,248,0.5)]">
          Works with Zendesk · Intercom · Front
        </p>
      </div>
    </section>
  );
}
