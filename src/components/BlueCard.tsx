const STATS = [
  {
    value: '73%',
    label: 'Customers switch after just 2 bad support experiences',
    height: 'h-[201px]',
    dark: false
  },
  {
    value: '90%',
    label: 'CSAT surveys never get submitted, leaving teams blind',
    height: 'h-[250px]',
    dark: false
  },
  {
    value: '53%',
    label: 'Revenue lost to poor support is completely preventable',
    height: 'h-[158px]',
    dark: true
  }
];

const BlueCard = () => {
  return (
    <section className="w-full">
      <div className="w-full lg:mx-auto lg:max-w-[1400px] lg:px-8">
        <div className="relative overflow-hidden rounded-none bg-linear-to-br from-[#112559] via-[#0f1d43] to-[#0a1636] px-5 py-12 sm:px-8 sm:py-14 lg:rounded-3xl lg:px-8 lg:py-8">
          <div
            className="pointer-events-none absolute -top-24 -right-14 h-[220px] w-[240px] rounded-full"
            style={{
              background: 'rgba(12, 174, 233, 0.10)',
              boxShadow: '64px 64px 64px rgba(12, 174, 233, 0.16)',
              filter: 'blur(32px)'
            }}
          />

          <div className="relative z-10">
            <h2 className="font-['Instrument_Serif'] text-[36px] leading-[1.15] tracking-[-0.5px] text-[#fcfcfd] sm:text-[44px] lg:text-[48px] lg:leading-[46px]">
              Bad Support Isn&apos;t Just a Cost –{' '}
              <em className="font-display italic">It&apos;s a Revenue Risk</em>
            </h2>

            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              <p className="max-w-[635px] font-sans text-[18px] font-normal leading-normal text-[#fcfcfd]/75">
                Repeated issues, slow resolutions, and poor visibility drive
                churn and lower LTV. Most of these losses are hidden inside
                support conversations that go untracked.
              </p>

              <div className="flex flex-1 items-end justify-end gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.value}
                    className={`flex ${
                      stat.height
                    } w-full max-w-[160px] flex-col justify-end rounded-xl ${
                      stat.dark ? 'bg-[#546087]' : 'bg-[#f2f2f2]'
                    }`}
                  >
                    <div className="px-3 pb-4">
                      <p
                        className={`text-[28px] font-bold leading-none lg:text-[33px] ${
                          stat.dark ? 'text-white' : 'text-[#546087]'
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p
                        className={`mt-2 text-[12px] leading-snug lg:text-[13px] ${
                          stat.dark ? 'text-white/80' : 'text-[#424f77]'
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueCard;
