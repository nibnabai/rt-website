import Image from 'next/image';
import { cdnUrl } from '@/util/cdn';

const checkItems = [
  'Quickly detect messages containing violations or discriminatory language',
  'Use RipeText suggested, situation-specific responses to help resolve issues and reduce legal and financial risk',
  'Edit or write fully custom responses whenever needed'
];

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        stroke="#239F71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 6L5.5 7L7.5 5"
        stroke="#239F71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResolutionCard() {
  return (
    <div className="h-[219px] w-full overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white shadow-[0px_12px_12px_0px_rgba(0,0,0,0.15)] lg:h-[358px] lg:w-[576px] lg:max-w-full lg:rounded-[22px] lg:shadow-[0px_20px_20px_0px_rgba(0,0,0,0.12)]">
      {/* Header */}
      <div className="border-b border-[#e5e7eb] bg-[#e5e7eb] py-[6px] pl-[16px] pr-[4px] lg:py-[10px] lg:pl-[26px] lg:pr-[7px]">
        <p className="text-[11px] font-medium text-black lg:text-[18px]">
          Resolution
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[14px] px-3 py-3 lg:gap-[22px] lg:px-5 lg:py-4">
        <p className="text-[8px] text-[#374151] lg:text-[13px]">
          Once you resolve the issue – log the actions you took
        </p>

        {/* Suggestion box */}
        <div className="rounded-[7px] bg-[rgba(147,180,241,0.1)] px-[8px] py-[7px] lg:h-[81px] lg:rounded-[11px] lg:px-[13px] lg:pt-[11px]">
          <p className="text-[10px] font-semibold text-[#374151] lg:text-[16.5px]">
            RipeText&apos;s suggestion:
          </p>
          <p className="mt-2 text-[8px] text-[#374151] lg:mt-3 lg:text-[13px]">
            Call up customer and apologise!
          </p>
        </div>

        {/* Buttons row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-5">
            <button className="rounded-[4px] bg-[#4d6dd5] px-[7px] py-[4px] text-[7px] font-bold text-white shadow-[inset_0px_1px_2px_rgba(0,0,0,0.1)] lg:rounded-[7px] lg:px-[11px] lg:py-[7px] lg:text-[11px]">
              Resolved with Suggestion
            </button>
            <button className="rounded-[4px] bg-[#4d6dd5]/25 px-[7px] py-[4px] text-[7px] font-bold text-white lg:rounded-[7px] lg:px-[11px] lg:py-[7px] lg:text-[11px]">
              Custom Resolution
            </button>
            <button className="rounded-[4px] bg-red-500/25 px-[7px] py-[4px] text-[7px] font-bold text-white lg:rounded-[7px] lg:px-[11px] lg:py-[7px] lg:text-[11px]">
              None
            </button>
          </div>
          <span className="text-[6px] font-medium text-[#2169dd] lg:text-[10px]">
            Reset Choice
          </span>
        </div>

        {/* Logged Resolution box */}
        <div className="rounded-[7px] bg-[rgba(147,180,241,0.1)] px-[8px] py-[7px] lg:h-[81px] lg:rounded-[11px] lg:px-[13px] lg:pt-[11px]">
          <p className="text-[10px] font-semibold text-[#374151] lg:text-[16.5px]">
            Logged Resolution
          </p>
          <p className="mt-2 text-[8px] text-[#374151] lg:mt-3 lg:text-[13px]">
            Call up customer and apologise!
          </p>
        </div>
      </div>
    </div>
  );
}

export function FhaPrevention() {
  return (
    <section
      id="prevention"
      className="border-b border-t border-[#e3e6ed] bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-12 lg:gap-16">
          {/* Left column - text content */}
          <div className="order-1 lg:col-span-5">
            <p className="font-mono text-xs font-normal uppercase leading-4 tracking-[2.4px] text-[#0caee9]">
              05 · Prevention
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[-1.2px] text-[#151a28] sm:text-[48px] sm:leading-[48px]">
              Reduce disputes before <br className="hidden sm:block" />
              they happen.
            </h2>
            <p className="mt-[25px] text-[16px] leading-[28px] text-[#636a7e] lg:mt-[23px]">
              Our platform helps you keep all critical information organized,
              documented, and accessible.
            </p>
            <p className="mt-[10px] text-[16px] leading-[26px] text-[rgba(99,106,126,0.9)] lg:mt-[16px]">
              With structured records, detailed reports, and centralized
              evidence management, you can significantly reduce
              misunderstandings and simplify communication with stakeholders.
              Clear documentation supports your case when it matters most.
            </p>

            {/* Checklist */}
            <div className="mt-[36px] space-y-[15px] lg:mt-[29px] lg:space-y-[12px]">
              {checkItems.map((item) => (
                <div key={item} className="flex items-start gap-[13px]">
                  <div className="mt-[2px] flex h-5 w-[22px] shrink-0 items-center justify-center rounded-full border border-[#c2ebdc] bg-[#ebfaf4]">
                    <CheckIcon />
                  </div>
                  <p className="text-[14px] leading-[22.75px] text-[#151a28]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - visual composition (Desktop) */}
          <div className="relative order-2 hidden pt-[32px] lg:col-span-7 lg:block">
            <div className="relative mx-auto mb-[-13%] aspect-749/614 w-full max-w-[749px]">
              <div className="absolute left-[28.2%] top-0 z-1 w-[71.8%]">
                <Image
                  src={cdnUrl(
                    '/images/fha-compliance/section-5/middle-top.png'
                  )}
                  alt="FHA violation detected - Race class"
                  width={538}
                  height={168}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <div className="absolute left-[3.1%] top-[44.6%] z-2 w-[71.8%]">
                <Image
                  src={cdnUrl(
                    '/images/fha-compliance/section-5/bottom-left.png'
                  )}
                  alt="FHA violation detected - Race class"
                  width={538}
                  height={168}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <div className="absolute left-[22.6%] top-[56.2%] z-3 w-[71.8%]">
                <Image
                  src={cdnUrl(
                    '/images/fha-compliance/section-5/right-bottom.png'
                  )}
                  alt="FHA violation detected - Religion class"
                  width={538}
                  height={168}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <div className="absolute left-[27.9%] top-[31.6%] z-4 w-[71.8%]">
                <Image
                  src={cdnUrl(
                    '/images/fha-compliance/section-5/middle-bottom.png'
                  )}
                  alt="FHA violation detected - Religion class"
                  width={538}
                  height={168}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <div className="absolute left-0 top-[8.96%] z-[5] w-[71.8%]">
                <Image
                  src={cdnUrl(
                    '/images/fha-compliance/section-5/middle left.png'
                  )}
                  alt="FHA violation detected - Religion class"
                  width={538}
                  height={168}
                  className="w-full rounded-xl"
                  unoptimized
                />
              </div>
              <div className="absolute left-[11.2%] top-[7.8%] z-10 w-[76.9%]">
                <ResolutionCard />
              </div>
            </div>
          </div>

          {/* Right column - visual composition (Mobile) */}
          <div className="relative order-2 lg:hidden">
            <div
              className="relative mb-[-6%] w-full"
              style={{ paddingBottom: '106%' }}
            >
              {/* mobile-1: top card */}
              <div className="absolute left-[3.3%] top-0 z-1 w-[91.5%]">
                <Image
                  src={cdnUrl('/images/fha-compliance/section-5/mobile-1.png')}
                  alt="FHA violation detected"
                  width={330}
                  height={103}
                  className="w-full"
                  unoptimized
                />
              </div>
              {/* mobile-2: second card */}
              <div className="absolute left-0 top-[14%] z-2 w-[91.5%]">
                <Image
                  src={cdnUrl('/images/fha-compliance/section-5/mobile-2.png')}
                  alt="FHA violation detected"
                  width={330}
                  height={103}
                  className="w-full"
                  unoptimized
                />
              </div>
              {/* mobile-4: bottom-most card (lower z) */}
              <div className="absolute left-[8.3%] top-[67%] z-3 w-[91.5%]">
                <Image
                  src={cdnUrl('/images/fha-compliance/section-5/mobile-4.png')}
                  alt="FHA violation detected"
                  width={330}
                  height={103}
                  className="w-full"
                  unoptimized
                />
              </div>
              {/* mobile-3: peeks below Resolution (higher z than mobile-4) */}
              <div className="absolute left-[0.3%] top-[58%] z-4 w-[91.5%]">
                <Image
                  src={cdnUrl('/images/fha-compliance/section-5/mobile-3.png')}
                  alt="FHA violation detected"
                  width={330}
                  height={103}
                  className="w-full"
                  unoptimized
                />
              </div>
              {/* Resolution card - on top */}
              <div className="absolute left-[1.7%] top-[21.8%] z-10 w-[98%]">
                <ResolutionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
