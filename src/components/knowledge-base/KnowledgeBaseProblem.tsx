'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';

const PROBLEM_CARDS = [
  {
    step: '01',
    title: "It lives in one person's head.",
    body: 'The engineer who onboarded the account knows the VPN quirks and the custom integration. When they are out, every ticket waits.'
  },
  {
    step: '02',
    title: "It's scattered across ten tools.",
    body: 'Setup notes in a drive, runbooks in a wiki, and the important details buried in a call recording nobody will rewatch.'
  },
  {
    step: '03',
    title: 'New agents learn it in front of the customer.',
    body: "The first time they hear about the customer's environment is the day it breaks, with the customer on the other end of the chat."
  }
] as const;

export function KnowledgeBaseProblem() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: PROBLEM_CARDS.length,
    staggerDelay: 160,
    threshold: 0.2
  });

  return (
    <section id="the-problem" className="bg-white scroll-mt-16">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-32">
        <div className="max-w-[768px]">
          <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
            The problem
          </p>
          <h2 className="mt-[19px] font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
            Customer knowledge is{' '}
            <span className="font-display italic text-[#0caee9]">tribal</span>.
            <br />
            Support can&apos;t be.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-14 overflow-hidden rounded-[20px] border border-[#e3e4e9] bg-[#f8f8fb] p-px"
        >
          <div className="grid gap-px lg:grid-cols-3">
            {PROBLEM_CARDS.map((card, index) => (
              <article
                key={card.step}
                className={`bg-white px-8 py-10 lg:min-h-[239px] lg:px-10 ${
                  index === 1 ? 'lg:border-x lg:border-[#e8e8e8]' : ''
                }`}
                style={getItemStyle(index)}
              >
                <p className="text-[12px] leading-4 text-[#60636c]">
                  {card.step}
                </p>
                <h3 className="pt-4 font-display text-[24px] leading-[33px] text-[#101116]">
                  {card.title}
                </h3>
                <p className="pt-[15px] text-[14px] leading-[22.75px] text-[#60636c]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
