'use client';

import { useStaggeredReveal } from '@/hooks/use-staggered-reveal';
import {
  ExtractFactsIcon,
  RedactIcon,
  UploadDocsIcon,
  VerifyIcon
} from './icons';

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Upload what you already have.',
    body: 'Onboarding notes, runbooks, setup guides and call transcripts. PDF, DOCX, TXT, Markdown and VTT, up to 20 MB each.',
    icon: <UploadDocsIcon className="h-5 w-5" />
  },
  {
    step: '02',
    title: 'Secrets are scrubbed first.',
    body: 'Passwords, API keys, tokens and private keys are redacted before anything is indexed or read by AI. Hostnames, IPs and ports stay, because your agents need them.',
    icon: <RedactIcon className="h-5 w-5" />
  },
  {
    step: '03',
    title: 'Facts are extracted and sorted.',
    body: 'Concrete, customer-specific facts land in categories like Setup, Integrations, Known issues and How-to. Each one keeps the excerpt it came from.',
    icon: <ExtractFactsIcon className="h-5 w-5" />
  },
  {
    step: '04',
    title: 'Your team signs off.',
    body: "Verify, edit or reject each fact, or add one by hand. Verified facts ground Ivy's answers and every training scenario built on them.",
    icon: <VerifyIcon className="h-5 w-5" />
  }
] as const;

export function KnowledgeBaseHowItWorks() {
  const { containerRef, getItemStyle } = useStaggeredReveal({
    itemCount: HOW_IT_WORKS_STEPS.length,
    staggerDelay: 140,
    threshold: 0.15
  });

  return (
    <section
      id="how-it-works"
      className="border-t border-[#e3e4e9] bg-white scroll-mt-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[438px_minmax(0,586px)] lg:justify-between lg:gap-24">
          <div className="max-w-[530px]">
            <p className="text-xs font-normal uppercase tracking-[2.4px] text-[#0caee9]">
              How it works
            </p>
            <h2 className="mt-[19px] font-display text-[40px] leading-[1.05] tracking-[-0.03em] text-[#101116] sm:text-[44px] lg:text-[48px] lg:leading-[50.4px] lg:tracking-[-1.2px]">
              From a folder of docs to{' '}
              <span className="font-display italic text-[#0caee9]">
                facts your team trusts
              </span>
              .
            </h2>
            <p className="mt-6 text-[17px] leading-[28px] text-[#60636c]">
              Create a knowledge base for a customer before their first ticket
              arrives, then link it to the customer once their conversations
              start flowing in.
            </p>
          </div>

          <div ref={containerRef} className="relative">
            <div className="space-y-10">
              {HOW_IT_WORKS_STEPS.map((item, index) => (
                <article
                  key={item.step}
                  className="relative flex gap-5"
                  style={getItemStyle(index)}
                >
                  {index < HOW_IT_WORKS_STEPS.length - 1 ? (
                    <div className="absolute -bottom-10 left-[19px] top-10 hidden w-px bg-[#e3e4e9] lg:block" />
                  ) : null}
                  <div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e3e4e9] bg-white p-px shadow-[0px_1px_1px_rgba(18,22,31,0.04),0px_8px_12px_rgba(18,22,31,0.06)]">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1 pt-[3px]">
                    <p className="text-[11px] uppercase tracking-[0.55px] text-[#60636c]">
                      Step {item.step}
                    </p>
                    <h3 className="mt-1 font-display text-[28px] leading-[1.05] text-[#101116] lg:text-[32px] lg:leading-8">
                      {item.title}
                    </h3>
                    <p className="pt-[7px] text-[14px] leading-[22.75px] text-[#60636c]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
