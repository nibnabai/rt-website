import SolutionStep1 from './solution/SolutionStep1';
import SolutionStep2 from './solution/SolutionStep2';
import SolutionStep3 from './solution/SolutionStep3';
import SolutionStep4 from './solution/SolutionStep4';
import SolutionStep5 from './solution/SolutionStep5';
import SolutionStep6 from './solution/SolutionStep6';
import SolutionStep7 from './solution/SolutionStep7';

const Solution = () => {
  return (
    <section id="solution" className="w-full scroll-mt-20 pt-16 pb-0 lg:pt-36">
      {/* Section header: left-aligned to match Figma and feature rows */}
      <div className="mx-auto max-w-[1400px] px-5 text-left lg:px-8">
        <p className="mb-4 font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
          Our Solution
        </p>
        <h2 className="mb-5 max-w-none font-['Instrument_Serif'] text-6xl font-normal leading-[1.15] tracking-[-0.5px] text-gray-900 sm:whitespace-nowrap lg:mb-6 lg:max-w-[894px]">
          Smarter Support Management
        </h2>
        <p className="max-w-[1100px] font-sans text-base leading-normal text-lp-text-muted lg:text-lg">
          Track issues, view analytics, create topics, and train your support
          team to improve performance and reduce support workload.
        </p>
      </div>

      <SolutionStep1 />
      <SolutionStep2 />
      <SolutionStep3 />
      <SolutionStep4 />
      <SolutionStep5 />
      <SolutionStep6 />
      <SolutionStep7 />
    </section>
  );
};

export default Solution;
