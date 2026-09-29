import { useState } from 'react';
import { faqItems } from './data';

export function FhaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#fcfcfd] py-[55px]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-normal uppercase leading-4 tracking-[2.4px] text-[#0caee9]">
              07 · FAQ
            </p>
            <h2 className="mt-6 font-display text-5xl not-italic leading-[48px] tracking-[-1.2px] text-[#151a28]">
              Honest answers.
            </h2>
            <p className="mt-[26px] text-base font-normal leading-6 text-[#636a7e]">
              Compliance tooling lives or dies on trust. Here&apos;s what
              RipeText does — and what it doesn&apos;t.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:col-span-8">
            <div className="w-full">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#e3e6ed]">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex w-full cursor-pointer items-center justify-between pt-4 text-left"
                  >
                    <span className="text-base font-medium leading-6 text-[#151a28]">
                      {item.question}
                    </span>
                    <span className="ml-4 flex size-4 shrink-0 items-center justify-center text-[#636a7e]">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`size-4 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 pt-3 pr-[6.86%] text-sm font-normal leading-[22.75px] text-[#636a7e]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  {openIndex !== index && <div className="pb-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
