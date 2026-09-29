import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import { SolutionChartFrame } from '@/components/solution/SolutionChartFrame';

const SolutionStep2 = () => {
  return (
    <div className="relative w-full lg:mt-0 mt-2">
      {/* Mobile View */}
      <div className="block lg:hidden w-full relative">
        <div className="relative z-10 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none text-lp-number-label lg:text-2xl">
            02
          </span>
          <h3 className="mx-auto mb-4 max-w-[18rem] font-display text-[20px] font-normal leading-[1.2] text-lp-text-dark lg:mx-0 lg:mb-6 lg:max-w-none lg:text-[40px]">
            AI-Measured CSAT
          </h3>
          <p className="font-geist text-base font-normal leading-normal text-lp-text-muted lg:text-[18px]">
            Customer Satisfaction Reports rarely get submitted, often dropping
            under 5%. Our AI reads the actual conversations to determine if the
            customer was satisfied with their experience and this allows us to
            supplement the vast majority of the missing data.
          </p>
        </div>

        <div className="relative z-10 w-full px-5 pb-2">
          <SolutionChartFrame className="px-4 py-5 sm:px-5 sm:py-6">
            {/* Figma 6484:9551 — cluster vertically centered in striped frame */}
            <div className="flex min-h-[248px] w-full items-center justify-center py-1">
              <div className="relative h-[228px] w-full max-w-[330px] shrink-0">
                <div className="absolute left-0 top-0 z-20">
                  <Image
                    src={cdnUrl('/images/solution-part-2-back-image.webp')}
                    alt="Satisfaction Data Coverage - Mobile"
                    width={2217}
                    height={1691}
                    unoptimized
                    className="h-[186px] w-[244px] object-contain rounded-[9px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2px_2px_rgba(0,0,0,0.1))]"
                    sizes="244px"
                  />
                </div>
                <div className="absolute left-[140px] top-[84px] z-30">
                  <Image
                    src={cdnUrl('/images/solution-part-2-front-image.webp')}
                    alt="Sentiment Trend - Mobile"
                    width={1652}
                    height={1260}
                    unoptimized
                    className="h-[136px] w-[178px] object-contain rounded-[9px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_1.5px_1.5px_rgba(0,0,0,0.1))]"
                    sizes="178px"
                  />
                </div>
              </div>
            </div>
          </SolutionChartFrame>
        </div>
      </div>

      {/* Desktop View (Hidden on Mobile) */}
      <div className="hidden lg:block w-full relative">
        <div className="relative w-full z-10 py-[80px]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-12 lg:gap-20 relative w-full h-full">
              {/* Right Column: Text Content */}
              <div className="flex-1 max-w-[500px] relative z-20 pt-0 text-right">
                <span className="mb-2.5 block font-geist text-2xl font-normal leading-none text-lp-number-label">
                  02
                </span>
                <h3 className="mb-6 font-display text-[40px] font-normal leading-[1.2] text-lp-text-dark">
                  AI-Measured CSAT
                </h3>
                <p className="ml-auto max-w-[470px] font-geist text-[18px] font-normal leading-normal text-lp-text-muted">
                  Customer Satisfaction Reports rarely get submitted, often
                  dropping under 5%. Our AI reads the actual conversations to
                  determine if the customer was satisfied with their experience
                  and this allows us to supplement the vast majority of the
                  missing data.
                </p>
              </div>

              {/* Left Column: Images — min-w-0 so flex item can shrink; fluid % layout matches Figma 952×541 */}
              <div className="relative flex h-full w-full min-w-0 flex-1 items-start justify-center pt-0 lg:justify-start">
                <div className="relative z-10 w-full max-w-[952px]">
                  <SolutionChartFrame
                    overflow="visible"
                    stripeOverlayClassName="overflow-hidden rounded-[10px]"
                  >
                    {/* Artboard 952×541; cluster vertically centered (Figma content is shorter than frame) */}
                    <div className="relative aspect-952/541 w-full">
                      <div className="absolute inset-0 translate-y-[7.5%]">
                        <div className="absolute left-[5.462%] top-[0.37%] z-20 w-[57.353%]">
                          <div className="relative aspect-2217/1691 w-full">
                            <Image
                              src={cdnUrl(
                                '/images/solution-part-2-back-image.webp'
                              )}
                              alt="Satisfaction Data Coverage"
                              fill
                              unoptimized
                              className="object-contain rounded-[9px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2.36px_2.36px_rgba(0,0,0,0.1))]"
                              sizes="(min-width: 1920px) 546px, (min-width: 1024px) 45vw, 90vw"
                            />
                          </div>
                        </div>
                        <div className="absolute left-[51.45%] top-[27.511%] z-30 w-[42.729%]">
                          <div className="relative aspect-59/45 w-full">
                            <Image
                              src={cdnUrl(
                                '/images/solution-part-2-front-image.webp'
                              )}
                              alt="Sentiment Trend"
                              fill
                              unoptimized
                              className="object-contain rounded-[9px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2.44px_2.44px_rgba(0,0,0,0.1))]"
                              sizes="(min-width: 1920px) 407px, (min-width: 1024px) 38vw, 90vw"
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

export default SolutionStep2;
