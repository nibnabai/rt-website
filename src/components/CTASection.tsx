const CTASection = () => {
  return (
    <section
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20"
      style={{
        background: 'linear-gradient(135deg, #0f1d43 0%, #1f2f5c 100%)'
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 text-center lg:px-8">
        <h2 className="mx-auto max-w-[min(100%,1100px)] wrap-break-word text-balance font-['Instrument_Serif'] text-6xl font-normal leading-[1.15] tracking-[-0.5px]">
          <span className="text-white">Ready to Transform Your Customer</span>
          <span className="text-gray-900"> </span>
          <span className="text-indigo-500 font-normal italic">
            Intelligence
          </span>
          <span className="text-white">?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[904px] font-sans text-[18px] font-normal leading-normal text-[#e5e7eb] sm:mt-8">
          Join leading companies using RIPETEXT to turn every conversation into
          actionable insights and deliver exceptional customer experiences.
        </p>

        <div className="mx-auto mt-20 flex w-full max-w-[695px] flex-col items-stretch justify-center gap-5 sm:mt-24 lg:mt-28 sm:flex-row sm:items-center">
          <a
            href="mailto:sales@ripetext.com"
            className="inline-flex h-[45px] w-full shrink-0 items-center justify-center rounded-lg border border-white/20 bg-[#0f1d43] px-6 text-base font-bold text-white shadow-[0px_3.291px_1.646px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90 sm:w-[337.5px] sm:max-w-[337.5px]"
          >
            Contact Sales
          </a>
          <a
            href="https://calendly.com/tsenkov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[45px] w-full shrink-0 items-center justify-center rounded-[9px] border border-[#e2e2e2] bg-[#fafbff] px-6 text-[15.75px] font-bold text-[#546087] shadow-[0px_3.737px_1.868px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90 sm:w-[337.5px] sm:max-w-[337.5px]"
          >
            Book a Demo
          </a>
        </div>

        <p className="mt-16 text-center font-sans text-[16px] font-normal leading-normal text-[#848484] lg:mt-20">
          <a
            href="mailto:sales@ripetext.com"
            className="text-[#848484] underline-offset-2 hover:underline"
          >
            sales@ripetext.com
          </a>{' '}
          • See results in days, not months
        </p>
      </div>
    </section>
  );
};

export default CTASection;
