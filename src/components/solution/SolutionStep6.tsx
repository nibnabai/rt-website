import Image from 'next/image';
import { SolutionChartFrame } from '@/components/solution/SolutionChartFrame';
import { cdnUrl } from '@/util/cdn';

const SolutionStep6 = () => {
  return (
    <div className="relative w-full lg:mt-0">
      {/* Mobile View */}
      <div className="block lg:hidden w-full relative">
        <div className="relative z-10 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none text-lp-number-label lg:text-2xl">
            06
          </span>
          <h3 className="mx-auto mb-4 max-w-[16rem] font-display text-[20px] font-normal leading-[1.2] text-lp-text-dark lg:mx-0 lg:mb-6 lg:max-w-none lg:text-[40px]">
            Topic Intelligence
          </h3>
          <p className="font-geist text-base font-normal leading-normal text-lp-text-muted lg:text-[18px]">
            Explore Monitored Topics, Discovered Topics, and Frequent Questions
            through an intuitive filter-based UI. Includes sentiment trends over
            time without unnecessary visual clutter.
          </p>
        </div>

        <div className="relative z-10 flex w-full justify-center px-5 pb-2">
          <div className="w-full max-w-[393px]">
            <SolutionChartFrame
              overflow="visible"
              stripeOverlayClassName="overflow-hidden rounded-[10px]"
              className="py-4 sm:py-5"
            >
              <div className="relative h-[280px] w-full px-5">
                {/* Left image (Custom Topics) */}
                <div className="absolute left-5 top-0 z-10 isolate">
                  <div className="h-[232px] w-[176px] overflow-hidden rounded-[7px] bg-transparent">
                    <Image
                      src={cdnUrl('/images/solution-part-6-left-image.webp')}
                      alt="Custom Topics - Mobile"
                      width={1644}
                      height={2157}
                      unoptimized
                      className="h-full w-full object-contain"
                      sizes="176px"
                    />
                  </div>
                </div>

                {/* Middle image (Common Topics) */}
                <div className="absolute left-[120px] top-[54px] z-20 isolate">
                  <div className="h-[213px] w-[149px] overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white shadow-[0px_4px_6px_-1px_rgba(229,231,235,0.4)]">
                    <Image
                      src={cdnUrl('/images/solution-part-6-middle-image.webp')}
                      alt="Common Topics - Mobile"
                      width={656}
                      height={936}
                      unoptimized
                      className="h-full w-full object-contain object-top-left"
                      sizes="149px"
                    />
                  </div>
                </div>

                {/* Right image (Common Questions) */}
                <div className="absolute left-[227px] top-0 z-10 isolate">
                  <div className="h-[215px] w-[149px] overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white shadow-[0px_4px_6px_-1px_rgba(229,231,235,0.4)]">
                    <Image
                      src={cdnUrl('/images/solution-part-6-right-image.webp')}
                      alt="Common Questions - Mobile"
                      width={656}
                      height={946}
                      unoptimized
                      className="h-full w-full object-contain object-top-left"
                      sizes="149px"
                    />
                  </div>
                </div>
              </div>
            </SolutionChartFrame>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block w-full relative">
        <div className="relative w-full z-10 pt-[80px] pb-[80px]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-12 lg:gap-20 relative w-full h-full">
              {/* Right Column: Text Content */}
              <div className="flex-1 max-w-[500px] relative z-20 pt-0 text-right">
                <span className="mb-2.5 block font-geist text-2xl font-normal leading-none text-lp-number-label">
                  06
                </span>
                <h3 className="mb-6 font-display text-[40px] font-normal leading-[1.2] text-lp-text-dark">
                  Topic Intelligence
                </h3>
                <p className="ml-auto max-w-[470px] font-geist text-[18px] font-normal leading-normal text-lp-text-muted">
                  Explore Monitored Topics, Discovered Topics, and Frequent
                  Questions through an intuitive filter-based UI. Includes
                  sentiment trends over time without unnecessary visual clutter.
                </p>
              </div>

              {/* Left Column: Images — Figma 6484:10527 cluster: 858×610 (normalized from frame) */}
              <div className="relative flex h-full w-full flex-1 items-start justify-center pt-0 lg:justify-start">
                <div className="relative z-10 w-full max-w-[min(100%,920px)]">
                  <SolutionChartFrame
                    overflow="visible"
                    stripeOverlayClassName="overflow-hidden rounded-[10px]"
                    className="px-7 py-7 lg:px-10 lg:py-9"
                  >
                    {/* Aspect box matches design bounding box so cards scale down with column width */}
                    <div className="relative mx-auto aspect-858/610 w-full max-w-[858px]">
                      <div className="absolute inset-0">
                        {/* Custom Topics — baked chrome in asset; transparent wrapper so stripes show in any letterbox */}
                        <div className="absolute left-0 top-0 z-10 h-[86.7213%] w-[46.7366%] isolate">
                          <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-transparent">
                            <Image
                              src={cdnUrl(
                                '/images/solution-part-6-left-image.webp'
                              )}
                              alt="Custom Topics"
                              width={1644}
                              height={2157}
                              unoptimized
                              className="h-full w-full object-contain object-top-left"
                              sizes="(min-width: 1024px) 28vw, 176px"
                            />
                          </div>
                        </div>
                        {/* Common Topics — Figma border on outer white shell */}
                        <div className="absolute left-[31.7028%] top-[20.1639%] z-20 h-[79.8361%] w-[39.7436%] isolate">
                          <div className="relative h-full w-full overflow-hidden rounded-[14px] border border-[#e2e2e2] bg-white shadow-[0px_4px_6px_-1px_rgba(229,231,235,0.4)]">
                            <Image
                              src={cdnUrl(
                                '/images/solution-part-6-middle-image.webp'
                              )}
                              alt="Common Topics"
                              width={1096}
                              height={1564}
                              unoptimized
                              className="h-full w-full object-contain object-top-left"
                              sizes="(min-width: 1024px) 24vw, 149px"
                            />
                          </div>
                        </div>
                        {/* Common Questions */}
                        <div className="absolute left-[60.2564%] top-0 z-10 h-[80.4918%] w-[39.7436%] isolate">
                          <div className="relative h-full w-full overflow-hidden rounded-[14px] border border-[#e2e2e2] bg-white shadow-[0px_4px_6px_-1px_rgba(229,231,235,0.4)]">
                            <Image
                              src={cdnUrl(
                                '/images/solution-part-6-right-image.webp'
                              )}
                              alt="Common Questions"
                              width={1096}
                              height={1580}
                              unoptimized
                              className="h-full w-full object-contain object-top-left"
                              sizes="(min-width: 1024px) 24vw, 149px"
                            />
                          </div>
                        </div>
                      </div>
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

export default SolutionStep6;
