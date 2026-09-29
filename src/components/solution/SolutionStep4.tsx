import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';
import { SolutionChartFrame } from '@/components/solution/SolutionChartFrame';

const SolutionStep4 = () => {
  return (
    <div className="relative mt-2 w-full lg:mt-0">
      {/* Mobile */}
      <div className="relative block w-full overflow-hidden lg:hidden">
        <div className="relative z-10 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none text-lp-number-label lg:text-2xl">
            04
          </span>
          <h3 className="mx-auto mb-4 max-w-[18rem] font-display text-[20px] font-normal leading-[1.2] text-lp-text-dark lg:mx-0 lg:mb-6 lg:max-w-none lg:text-[40px]">
            Conversation Insights
          </h3>
          <p className="wrap-break-word font-geist text-base font-normal leading-normal text-lp-text-muted lg:text-[18px]">
            Every single message in every single thread - measured on multiple
            metrics. All guidelines in your company code-of-conduct, sentiment
            score, timeliness of response, number of people involved, and other
            important metrics get extracted and conveniently displayed, so you
            can immediately spot where and what has went wrong.
          </p>
        </div>

        <div className="relative z-10 flex w-full justify-center px-5 pb-2">
          <div className="w-full max-w-[393px]">
            <SolutionChartFrame className="px-4 py-5 sm:px-5 sm:py-6">
              <div className="flex justify-center">
                <div className="filter-[drop-shadow(0px_2.45px_2.45px_rgba(0,0,0,0.1))]">
                  <div className="overflow-hidden rounded-[9px] border border-[#e2e2e2] bg-white">
                    <Image
                      src={cdnUrl('/images/solution-part-4-image.webp')}
                      alt="Conversation thread and quick stats"
                      width={2483}
                      height={1532}
                      unoptimized
                      className="h-auto w-full max-w-[353px] object-contain"
                      sizes="(max-width: 640px) 90vw, 353px"
                    />
                  </div>
                </div>
              </div>
            </SolutionChartFrame>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden w-full lg:block">
        <div className="relative z-10 w-full py-[80px]">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div className="relative flex h-full w-full flex-col items-start justify-between gap-12 lg:flex-row-reverse lg:gap-20">
              <div className="relative z-20 min-w-0 flex-1 pt-0 lg:max-w-[500px]">
                <div className="ml-auto min-w-0 w-full max-w-[480px] text-right">
                  <span className="mb-2.5 block font-geist text-2xl font-normal leading-none text-lp-number-label">
                    04
                  </span>
                  <h3 className="mb-6 font-display text-[40px] font-normal leading-[1.2] text-lp-text-dark">
                    Conversation Insights
                  </h3>
                  <p className="w-full wrap-break-word text-center font-geist text-[18px] font-normal leading-normal text-[#636A7E]">
                    Every single message in every single thread - measured on
                    multiple metrics. All guidelines in your company
                    code-of-conduct, sentiment score, timeliness of response,
                    number of people involved, and other important metrics get
                    extracted and conveniently displayed, so you can immediately
                    spot where and what has went wrong.
                  </p>
                </div>
              </div>

              <div className="relative flex h-full w-full min-w-0 flex-1 items-start justify-center pt-0 lg:justify-start">
                <div className="relative z-10 w-full max-w-[888px]">
                  <SolutionChartFrame
                    overflow="visible"
                    stripeOverlayClassName="overflow-hidden rounded-[10px]"
                    className="px-6 py-6 lg:px-8 lg:py-8"
                  >
                    <div className="flex w-full justify-center lg:justify-start">
                      <div className="filter-[drop-shadow(4px_0px_4px_rgba(0,0,0,0.05))_drop-shadow(0px_2.45px_2.45px_rgba(0,0,0,0.1))]">
                        <div className="overflow-hidden rounded-[9px] border border-[#e2e2e2] bg-white">
                          <Image
                            src={cdnUrl('/images/solution-part-4-image.webp')}
                            alt="Conversation thread and quick stats"
                            width={2483}
                            height={1532}
                            unoptimized
                            className="h-auto w-full max-w-[784px] object-contain"
                            sizes="(min-width: 1280px) 784px, 90vw"
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

export default SolutionStep4;
