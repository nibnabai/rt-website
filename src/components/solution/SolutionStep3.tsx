import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import { SolutionChartFrame } from '@/components/solution/SolutionChartFrame';

const SolutionStep3 = () => {
  return (
    <div className="relative mt-2 w-full lg:mt-0">
      {/* Mobile View */}
      <div className="relative block w-full overflow-hidden lg:hidden">
        <div className="relative z-10 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none text-lp-number-label lg:text-2xl">
            03
          </span>
          <h3 className="mx-auto mb-4 max-w-88 font-display text-[20px] font-normal leading-[1.2] text-lp-text-dark lg:mx-0 lg:mb-6 lg:max-w-none lg:text-[40px]">
            Agent Performance Dashboard
          </h3>
          <p className="font-geist text-base font-normal leading-normal text-lp-text-muted lg:text-[18px]">
            Our AI analyzes actual customer conversations to assess agent
            effectiveness, communication quality, and sentiment trends. This
            enables a comprehensive, data-driven view of performance, helping
            teams identify strengths, uncover coaching opportunities, and
            continuously improve customer experience - even when direct feedback
            is limited.
          </p>
        </div>

        <div className="relative z-10 w-full px-5 pb-2">
          <SolutionChartFrame className="px-3 py-4 sm:px-4 sm:py-5">
            <div className="relative mx-auto aspect-881/660 w-full max-w-[381px]">
              <div className="absolute left-[43.7%] top-[6.21%] z-20 w-[50.6%]">
                <div className="relative aspect-613/718 w-full">
                  <Image
                    src={cdnUrl('/images/solution-part-3-back-image.webp')}
                    alt="Agent profile and performance radar"
                    fill
                    unoptimized
                    className="object-contain rounded-[10px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2px_2px_rgba(0,0,0,0.1))]"
                    sizes="(max-width: 640px) 85vw, 200px"
                  />
                </div>
              </div>
              <div className="absolute left-[5.33%] top-[48.79%] z-30 w-[42.8%]">
                <div className="relative aspect-1565/1224 w-full">
                  <Image
                    src={cdnUrl('/images/solution-part-3-front-image.webp')}
                    alt="Statistics actual vs training"
                    fill
                    unoptimized
                    className="object-contain rounded-[11px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2px_2px_rgba(0,0,0,0.1))]"
                    sizes="(max-width: 640px) 75vw, 180px"
                  />
                </div>
              </div>
            </div>
          </SolutionChartFrame>
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden w-full lg:block">
        <div className="relative z-10 w-full py-[80px]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div className="relative flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:gap-20">
              <div className="relative z-20 max-w-[484px] flex-1 pt-0 text-left">
                <span className="mb-2.5 block font-geist text-2xl font-normal leading-none text-lp-number-label">
                  03
                </span>
                <h3 className="mb-6 font-display text-[40px] font-normal leading-[1.2] text-lp-text-dark">
                  Agent Performance Dashboard
                </h3>
                <p className="max-w-[484px] font-geist text-[18px] font-normal leading-normal text-lp-text-muted">
                  Our AI analyzes actual customer conversations to assess agent
                  effectiveness, communication quality, and sentiment trends.
                  This enables a comprehensive, data-driven view of performance,
                  helping teams identify strengths, uncover coaching
                  opportunities, and continuously improve customer experience -
                  even when direct feedback is limited.
                </p>
              </div>

              <div className="relative flex h-full min-w-0 flex-1 items-start justify-center pt-0 lg:justify-end">
                <div className="relative z-10 w-full max-w-[881px]">
                  <SolutionChartFrame
                    overflow="visible"
                    stripeOverlayClassName="overflow-hidden rounded-[10px]"
                  >
                    <div className="relative aspect-881/660 w-full">
                      <div className="absolute left-[43.7%] top-[6.21%] z-20 w-[50.6%]">
                        <div className="relative aspect-613/718 w-full">
                          <Image
                            src={cdnUrl(
                              '/images/solution-part-3-back-image.webp'
                            )}
                            alt="Agent profile and performance radar"
                            fill
                            unoptimized
                            className="object-contain rounded-[10px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2.36px_2.36px_rgba(0,0,0,0.1))]"
                            sizes="(min-width: 1280px) 446px, 40vw"
                          />
                        </div>
                      </div>
                      <div className="absolute left-[5.33%] top-[48.79%] z-30 w-[42.8%]">
                        <div className="relative aspect-1565/1224 w-full">
                          <Image
                            src={cdnUrl(
                              '/images/solution-part-3-front-image.webp'
                            )}
                            alt="Statistics actual vs training"
                            fill
                            unoptimized
                            className="object-contain rounded-[11px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2.44px_2.44px_rgba(0,0,0,0.1))]"
                            sizes="(min-width: 1280px) 377px, 36vw"
                          />
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

      <div className="mx-auto hidden max-w-[1400px] px-5 lg:block lg:px-8">
        <div className="h-px w-full bg-[#546087]/30" />
      </div>
    </div>
  );
};

export default SolutionStep3;
