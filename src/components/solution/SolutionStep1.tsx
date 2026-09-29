import Image from 'next/image';
import Link from 'next/link';
import { cdnUrl } from '@/util/cdn';
import { SolutionChartFrame } from '@/components/solution/SolutionChartFrame';

const SolutionStep1 = () => {
  return (
    <div className="w-full relative">
      {/* Mobile View */}
      <div className="block lg:hidden w-full relative overflow-hidden">
        {/* Text Content */}
        <div className="relative z-10 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none text-lp-number-label lg:text-2xl">
            01
          </span>
          <h3 className="mx-auto mb-4 max-w-[20rem] font-display text-[20px] font-normal leading-[1.2] text-lp-text-dark lg:mx-0 lg:mb-6 lg:max-w-none lg:text-[40px]">
            Early Issue Detection
          </h3>
          <p className="font-geist text-base font-normal leading-normal text-lp-text-muted lg:text-[18px]">
            Detect fast-growing customer issues in real time using statistical
            anomaly tracking. Instantly alert your team via Slack or email
            before problems escalate.
          </p>
          <Link
            href="/features/issue-radar"
            className="mt-4 inline-flex items-center gap-1 font-geist text-base font-medium text-lp-accent-blue hover:underline"
          >
            Learn more
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Images Overlay - use same images with responsive sizing */}
        <div className="relative z-10 flex w-full flex-col items-end justify-center pb-2">
          <div className="relative w-full max-w-[393px] px-5">
            <SolutionChartFrame
              className="px-4 py-5 sm:px-5 sm:py-6"
              contentClassName="flex flex-col items-end"
            >
              <Image
                src={cdnUrl('/images/our-solution-top-image.webp')}
                alt="Early Issue Detection - Mobile Graph 1"
                width={1492}
                height={431}
                unoptimized
                className="w-[95%] h-auto object-contain"
                sizes="95vw"
              />
              <Image
                src={cdnUrl('/images/our-solution-bottom-image.webp')}
                alt="Early Issue Detection - Mobile Graph 2"
                width={1360}
                height={350}
                unoptimized
                className="w-[85%] h-auto object-contain -mt-8 ml-auto shadow-lg"
                sizes="85vw"
              />
            </SolutionChartFrame>
          </div>
        </div>
      </div>

      {/* Desktop View (Hidden on Mobile) */}
      <div className="hidden lg:block w-full relative">
        {/* Content Section - Now Relative Flow */}
        <div className="relative w-full z-10 py-[80px]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20 relative w-full h-full">
              {/* Left Column: Text Content */}
              <div className="flex-1 max-w-[500px] relative z-20 pt-0">
                <span className="mb-2.5 block font-geist text-2xl font-normal leading-none text-lp-number-label">
                  01
                </span>
                <h3 className="mb-6 font-display text-[40px] font-normal leading-[1.2] text-lp-text-dark">
                  Early Issue Detection
                </h3>
                <p className="max-w-[373px] font-geist text-[18px] font-normal leading-normal text-lp-text-muted">
                  Detect fast-growing customer issues in real time using
                  statistical anomaly tracking. Instantly alert your team via
                  Slack or email before problems escalate.
                </p>
                <Link
                  href="/features/issue-radar"
                  className="mt-4 inline-flex items-center gap-1 font-geist text-[18px] font-medium text-lp-accent-blue hover:underline"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Right Column: Images */}
              <div className="flex-1 w-full relative h-full flex items-start pt-0 justify-center md:justify-end">
                {/* Images Container */}
                <div className="relative z-10 w-full max-w-[1005px] min-[1921px]:hidden">
                  <SolutionChartFrame className="px-8 py-8 lg:px-10 lg:py-10">
                    {/* Top Image */}
                    <div className="relative w-[760px] z-30">
                      <Image
                        src={cdnUrl('/images/our-solution-top-image.webp')}
                        alt="Early Issue Detection - Graph 1"
                        width={3090}
                        height={836}
                        unoptimized
                        className="w-[760px] h-[205px]"
                        sizes="(max-width: 1920px) 760px, 892px"
                      />
                    </div>

                    {/* Bottom Image */}
                    <div className="relative w-[619px] z-20 ml-[120px] md:ml-[182px] -mt-[60px] md:-mt-[57px]">
                      <Image
                        src={cdnUrl('/images/our-solution-bottom-image.webp')}
                        alt="Early Issue Detection - Graph 2"
                        width={2553}
                        height={688}
                        unoptimized
                        className="w-[630px] h-[170px]"
                        sizes="(max-width: 1920px) 630px, 735px"
                      />
                    </div>
                  </SolutionChartFrame>
                </div>
                <div className="relative z-10 w-full max-w-[1100px] hidden min-[1921px]:block">
                  <SolutionChartFrame className="px-10 py-10">
                    {/* Top Image */}
                    <div className="relative w-[892px] z-30">
                      <Image
                        src={cdnUrl('/images/our-solution-top-image-wide.webp')}
                        alt="Early Issue Detection - Graph 1"
                        width={3605}
                        height={975}
                        unoptimized
                        className="w-[892px] h-[234px]"
                        sizes="892px"
                      />
                    </div>

                    {/* Bottom Image */}
                    <div className="relative w-[735px] z-20 ml-[180px] -mt-[60px]">
                      <Image
                        src={cdnUrl(
                          '/images/our-solution-bottom-image-wide.webp'
                        )}
                        alt="Early Issue Detection - Graph 2"
                        width={2979}
                        height={803}
                        unoptimized
                        className="w-[735px] h-[191px]"
                        sizes="735px"
                      />
                    </div>
                  </SolutionChartFrame>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mx-auto hidden max-w-[1400px] px-5 lg:block lg:px-8">
        <div className="h-px w-full bg-[#546087]/30" />
      </div>
    </div>
  );
};

export default SolutionStep1;
