import { howItWorksSteps } from './data';
import { StepIcon } from './icons';

export function FhaHowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs font-normal uppercase leading-4 tracking-[2.4px] text-[#0caee9]">
              03 · How It Works
            </p>
            <h2 className="font-display text-4xl tracking-[-0.025em] text-[#151a28] lg:text-[48px] lg:leading-[48px]">
              Three steps to <em className="font-display italic">continuous</em>{' '}
              Fair Housing coverage.
            </h2>
          </div>

          {/* Steps grid + connector */}
          <div className="flex flex-col gap-0">
            <div className="hidden gap-6 sm:grid-cols-2 lg:grid lg:grid-cols-3">
              {howItWorksSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex h-auto min-h-[223px] flex-col rounded-2xl border border-[#e3e6ed] bg-white p-7 shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_-4px_rgba(21,26,40,0.1)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-normal leading-4 text-[#636a7e]">
                      {step.number}
                    </p>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2f4f7]">
                      <StepIcon icon={step.icon} />
                    </div>
                  </div>
                  <p className="mt-[19px] text-lg font-semibold leading-7 text-[#151a28]">
                    {step.title}
                  </p>
                  <p className="mt-[10.5px] text-sm font-normal leading-[22.75px] text-[#636a7e]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile: staggered cards */}
            <div className="flex flex-col gap-6 lg:hidden">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex w-[77%] flex-col rounded-xl border border-[#e3e6ed] bg-white p-5 shadow-[0px_4px_2px_0px_rgba(0,0,0,0.05)] ${
                    index % 2 === 1 ? 'self-end' : 'self-start'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[8.5px] font-normal leading-3 text-[#636a7e]">
                      {step.number}
                    </p>
                    <div className="flex h-[25px] w-[25px] items-center justify-center rounded-lg bg-[#f2f4f7] [&_svg]:h-[17px] [&_svg]:w-[17px]">
                      <StepIcon icon={step.icon} />
                    </div>
                  </div>
                  <p className="mt-[14px] text-[13px] font-semibold leading-5 text-[#151a28]">
                    {step.title}
                  </p>
                  <p className="mt-[7px] text-[10px] font-normal leading-4 text-[#636a7e]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Connector gradient line (desktop only) */}
            <div className="hidden h-px w-full bg-linear-to-r from-transparent via-[#e3e6ed] to-transparent lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
