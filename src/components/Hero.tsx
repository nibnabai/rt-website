import RoiCalculator from './RoiCalculator';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full scroll-mt-20 overflow-hidden bg-linear-to-b from-[#fcfcfd] to-[#f6f6f9]"
    >
      {/* spotlight blobs */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-[1000px] md:-top-48 md:h-[600px] md:w-[603px]"
        style={{
          opacity: 0.04,
          background: '#6F63D8',
          boxShadow: '150px 150px 150px rgba(0, 0, 0, 0.25)',
          filter: 'blur(75px)'
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-28 hidden h-[360px] w-[360px] rounded-[1000px] md:block"
        style={{
          opacity: 0.05,
          background: '#6F63D8',
          boxShadow: '150px 150px 150px rgba(0, 0, 0, 0.25)',
          filter: 'blur(75px)'
        }}
      />
      <div
        className="pointer-events-none absolute bottom-2 -left-24 hidden h-[560px] w-[560px] rounded-[1000px] md:block"
        style={{
          opacity: 0.1,
          background: '#6F63D8',
          boxShadow: '150px 150px 150px rgba(0, 0, 0, 0.25)',
          filter: 'blur(75px)'
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-[109px] lg:px-8 lg:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8 xl:grid-cols-[1.15fr_1fr]">
          <div className="max-w-[530px] text-center lg:text-left xl:max-w-none">
            <h1 className="font-['Instrument_Serif'] text-[40px] md:text-[52px] lg:text-[72px] leading-none tracking-tight text-lp-text-dark">
              Analyze support
              <br />
              communications for
              <br />
              <em className="font-display italic text-lp-accent-blue">
                Actionable Insights
              </em>
            </h1>

            <p className="mt-8 mb-12 font-sans text-lg leading-normal text-lp-number-label max-w-[404px] mx-auto lg:mx-0">
              We deliver intelligence on agent performance and automation
              opportunities while detecting emerging issues - helping you meet
              the growing demand for excellence in customer experience.
            </p>

            <a
              href="https://calendly.com/tsenkov"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-[52px] w-full max-w-[339px] items-center justify-center rounded-sm bg-lp-navy text-[17px] font-bold font-sans text-white shadow-[0px_3px_2px_rgba(0,0,0,0.25)] transition-opacity hover:opacity-90 lg:mt-16"
            >
              Book a Demo
            </a>
          </div>

          <div className="mt-[40px] lg:mt-0">
            <RoiCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
