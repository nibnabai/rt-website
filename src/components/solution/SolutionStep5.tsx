import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import { SolutionChartFrame } from '@/components/solution/SolutionChartFrame';

const SolutionStep5 = () => {
  return (
    <div className="relative mt-2 w-full lg:mt-0">
      {/* Mobile */}
      <div className="relative block w-full lg:hidden">
        <div className="relative z-10 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none text-lp-number-label">
            05
          </span>
          <h3 className="mx-auto mb-4 max-w-[20rem] font-display text-[20px] font-normal leading-[1.2] text-lp-text-dark">
            Training grounded in data
          </h3>
          <p className="font-geist text-base font-normal leading-normal text-lp-text-muted">
            Train your [human] agents on the learnings we made for you. Turn
            real customer data into lively personas that simulate authentic
            conversations. Support officers can practice on personalized
            simulation scenarios, handling emotional tone or complex requests in
            a safe, AI-driven environment.
          </p>
        </div>

        <div className="relative z-10 flex w-full justify-center pb-0">
          <div className="relative h-[234px] w-full max-w-[393px] px-5">
            <div className="absolute left-8 top-28 z-20 filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2px_2px_rgba(0,0,0,0.1))]">
              <div className="overflow-hidden rounded-[6px]">
                <Image
                  src={cdnUrl('/images/solution-part-5-left-image.webp')}
                  alt="Training scenarios library"
                  width={1636}
                  height={1008}
                  unoptimized
                  className="h-[121px] w-[193px] object-contain"
                  sizes="193px"
                />
              </div>
            </div>
            <div className="absolute right-0 top-0 z-10 filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2px_2px_rgba(0,0,0,0.1))]">
              <div className="overflow-hidden rounded-[6px]">
                <Image
                  src={cdnUrl('/images/solution-part-5-right-image.webp')}
                  alt="Training chat simulation"
                  width={2439}
                  height={1917}
                  unoptimized
                  className="h-[206px] w-[262px] object-contain"
                  sizes="262px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop — Figma 6484:10059: text left; striped frame; scenario card lower-left, chat upper-right */}
      <div className="relative hidden w-full lg:block">
        <div className="relative z-10 w-full py-[80px]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div className="relative flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:gap-20">
              <div className="relative z-20 min-w-0 max-w-[500px] flex-1 pt-0 text-left">
                <span className="mb-2.5 block font-geist text-2xl font-normal leading-none text-lp-number-label">
                  05
                </span>
                <h3 className="mb-6 font-display text-[40px] font-normal leading-[1.2] text-lp-text-dark">
                  Training grounded in data
                </h3>
                <p className="max-w-[470px] font-geist text-[18px] font-normal leading-normal text-lp-text-muted">
                  Train your [human] agents on the learnings we made for you.
                  Turn real customer data into lively personas that simulate
                  authentic conversations. Support officers can practice on
                  personalized simulation scenarios, handling emotional tone or
                  complex requests in a safe, AI-driven environment.
                </p>
              </div>

              <div className="relative flex w-full min-w-0 flex-1 items-start justify-center lg:justify-end">
                <div className="relative z-10 w-full max-w-[700px]">
                  <SolutionChartFrame
                    overflow="visible"
                    stripeOverlayClassName="overflow-hidden rounded-[10px]"
                    className="px-5 py-6 lg:px-8 lg:py-8"
                  >
                    <div className="relative mx-auto w-full max-w-[620px]">
                      <div className="relative z-20 ml-auto w-[92%] max-w-[458px] filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2.45px_2.45px_rgba(0,0,0,0.1))]">
                        <div className="overflow-hidden rounded-[10px]">
                          <Image
                            src={cdnUrl(
                              '/images/solution-part-5-right-image.webp'
                            )}
                            alt="Training chat simulation"
                            width={2439}
                            height={1917}
                            unoptimized
                            className="h-auto w-full object-contain"
                            sizes="(min-width: 1024px) 458px, 92vw"
                          />
                        </div>
                      </div>
                      <div className="relative z-10 -mt-30 mr-auto w-[68%] max-w-[352px] filter-[drop-shadow(0px_2.38px_2.38px_rgba(0,0,0,0.1))] lg:-mt-35">
                        <div className="overflow-hidden rounded-[9px]">
                          <Image
                            src={cdnUrl(
                              '/images/solution-part-5-left-image.webp'
                            )}
                            alt="Training scenarios library"
                            width={1636}
                            height={1008}
                            unoptimized
                            className="h-auto w-full object-contain"
                            sizes="(min-width: 1024px) 352px, 68vw"
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

export default SolutionStep5;
