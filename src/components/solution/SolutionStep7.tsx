import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';

const SolutionStep7 = () => {
  return (
    <div className="relative mt-2 w-full lg:mt-0">
      {/* Mobile — stacked */}
      <div className="relative block w-full overflow-x-clip lg:hidden">
        <div className="relative z-20 mb-6 px-5 pt-6 text-center">
          <span className="mb-2.5 block font-geist text-[15px] font-normal leading-none tracking-normal text-lp-number-label">
            07
          </span>
          <h3 className="mx-auto mb-4 max-w-[18rem] font-display text-[20px] font-normal leading-[1.2] tracking-normal text-lp-text-dark text-balance">
            Your AI Teammate
          </h3>
          <p className="wrap-break-word font-geist text-[18px] font-normal leading-normal text-[#636A7E]">
            Empower your team with Ivy, your intelligent AI Teammate. She will
            help you get reliable and quick answers to complex CX questions. Ivy
            knows everything about your data and the insights we have extracted
            from it. She surfaces the most relevant information fast & easy.
          </p>
        </div>

        <div className="relative z-10 flex justify-center px-5 pb-0">
          <div className="relative aspect-1499/700 w-full max-w-[393px]">
            <div className="pointer-events-none absolute left-[19.61%] top-0 z-0 isolate h-full w-[48.43%] overflow-hidden">
              <div className="relative h-full w-full bg-white">
                <Image
                  src={cdnUrl('/images/solution-step-7-ivy-portrait.png')}
                  alt=""
                  width={2904}
                  height={2800}
                  unoptimized
                  className="absolute inset-0 h-full w-full object-contain object-top"
                  sizes="200px"
                />
              </div>
            </div>
            <div className="absolute left-[46.5%] top-[9.71%] z-30 h-[81.99%] w-[53.5%] overflow-hidden rounded-[10px] border border-[#e2e4e9] bg-white shadow-[0px_6px_28px_rgba(23,35,76,0.08)]">
              <Image
                src={cdnUrl('/images/solution-part-7-ivy.png')}
                alt="AI Teammate Ivy chat with team performance chart"
                width={3208}
                height={2296}
                unoptimized
                className="h-full w-full object-contain object-top"
                sizes="360px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop — Figma coords: text left; Ivy 726×700 @294,0; chat 802×573.93 @697,68 */}
      <div className="relative hidden w-full lg:block">
        <div className="relative z-10 w-full pt-[80px] pb-0">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
            <div
              className="relative w-full overflow-visible"
              style={{ aspectRatio: '1499 / 700' }}
            >
              <span
                className="absolute left-0 z-40 max-w-[489px] font-geist text-[24px] font-normal leading-[28.8px] tracking-normal text-lp-number-label"
                style={{ top: `${(53 / 700) * 100}%` }}
              >
                07
              </span>
              <h3
                className="absolute left-0 z-40 max-w-[470px] font-display text-[40px] font-normal leading-[48px] tracking-normal text-lp-text-dark text-balance"
                style={{ top: `${(92 / 700) * 100}%` }}
              >
                Your AI Teammate
              </h3>
              <p
                className="absolute left-0 z-40 max-w-[480px] wrap-break-word font-geist text-[18px] font-normal leading-normal text-[#636A7E]"
                style={{ top: `${(160 / 700) * 100}%` }}
              >
                Empower your team with Ivy, your intelligent AI Teammate. She
                will help you get reliable and quick answers to complex CX
                questions. Ivy knows everything about your data and the insights
                we have extracted from it. She surfaces the most relevant
                information fast & easy.
              </p>

              <div
                className="pointer-events-none absolute z-0 isolate overflow-hidden"
                style={{
                  left: `${(294 / 1499) * 100}%`,
                  top: 0,
                  width: `${(726 / 1499) * 100}%`,
                  height: '100%'
                }}
              >
                <div className="relative h-full w-full bg-white">
                  <Image
                    src={cdnUrl('/images/solution-step-7-ivy-portrait.png')}
                    alt=""
                    width={2904}
                    height={2800}
                    unoptimized
                    className="absolute inset-0 h-full w-full object-contain object-top"
                    sizes="(min-width: 1280px) 726px, 48vw"
                  />
                </div>
              </div>

              <div
                className="absolute z-30 overflow-hidden rounded-[10px] border border-[#e2e4e9] bg-white shadow-[0px_6px_28px_rgba(23,35,76,0.08)]"
                style={{
                  left: `${(697 / 1499) * 100}%`,
                  top: `${(68 / 700) * 100}%`,
                  width: `${(802 / 1499) * 100}%`,
                  height: `${(573.93 / 700) * 100}%`
                }}
              >
                <Image
                  src={cdnUrl('/images/solution-part-7-ivy.png')}
                  alt="AI Teammate Ivy chat with team performance chart"
                  width={3208}
                  height={2296}
                  unoptimized
                  className="h-full w-full object-contain object-top"
                  sizes="(min-width: 1536px) 802px, 54vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionStep7;
