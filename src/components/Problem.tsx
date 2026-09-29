import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';

const Problem = () => {
  return (
    <section
      id="problem"
      className="w-full scroll-mt-20 bg-white pt-8 pb-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1">
            <p className="font-mono text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
              The Problem
            </p>

            <h2 className="mt-4 mb-10 font-['Instrument_Serif'] text-6xl font-normal leading-[1.15] tracking-[-0.5px] text-gray-900 xl:whitespace-nowrap">
              <span>The </span>
              <span className="font-['Instrument_Serif'] font-normal italic">
                Challenge
              </span>
              <span> in Customer Service</span>
            </h2>

            <div className="max-w-[628px] space-y-6 text-[18px] leading-[1.6] text-lp-text-muted">
              <p>
                Customer service often generates endless conversations but very
                little real understanding, and this is where businesses begin to
                lose both customers and revenue.
              </p>
              <p>
                Small mistakes, missed signals, and recurring support issues
                don&apos;t just frustrate customers — they directly impact the
                bottom line.
              </p>
              <p>
                Delayed responses, inconsistent answers, and poorly trained team
                members lead to churn, missed upsell opportunities, and wasted
                resources. Without continuous monitoring, these problems build
                up silently, and by the time they are discovered, a significant
                portion of revenue is already lost.
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end mt-6">
            <div className="relative w-full max-w-[709px] aspect-709/488 overflow-hidden rounded-[41px] border border-[#c8d2eb] shadow-[0px_4px_4px_0px_rgba(112,139,227,0.25)]">
              <Image
                src={cdnUrl('/images/problem-iceberg-card.webp')}
                alt="The real cost of hidden support issues — iceberg showing visible vs hidden problems"
                fill
                sizes="(max-width: 1024px) 100vw, 709px"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
