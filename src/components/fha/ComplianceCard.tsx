import { type ComplianceScenario } from './data';
import { cdnUrl } from '@/util/cdn';

interface ComplianceCardProps {
  scenario: ComplianceScenario;
  animationPhase?:
    | 'idle'
    | 'messageIn'
    | 'replyTyping'
    | 'replyIn'
    | 'flagAppear'
    | 'panelOpen'
    | 'hold';
  className?: string;
}

function FhaAddonLogo({ className }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-[15px] ${
        className ?? 'h-[47px] w-[45px]'
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cdnUrl('/images/fha-compliance/fha-addon-logo.png')}
        alt="FHA Compliance"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.86 2.573L1.213 12a1.333 1.333 0 001.14 2h11.293a1.333 1.333 0 001.14-2L9.14 2.573a1.333 1.333 0 00-2.28 0z"
        stroke="#E94135"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6v2.667"
        stroke="#E94135"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11.333" r="0.667" fill="#E94135" />
    </svg>
  );
}

const show = (
  phase: string | undefined,
  minPhase: string,
  phases: string[]
) => {
  if (!phase) return true;
  const current = phases.indexOf(phase);
  const min = phases.indexOf(minPhase);
  return current >= min;
};

const PHASES = [
  'idle',
  'messageIn',
  'replyTyping',
  'replyIn',
  'flagAppear',
  'panelOpen',
  'hold'
] as const;

export function ComplianceCard({
  scenario,
  animationPhase,
  className = ''
}: ComplianceCardProps) {
  const s = scenario;
  const animated = !!animationPhase;
  const showMessage = show(animationPhase, 'messageIn', [...PHASES]);
  const showReply = show(animationPhase, 'replyIn', [...PHASES]);
  const showFlag = show(animationPhase, 'flagAppear', [...PHASES]);
  const showPanel = show(animationPhase, 'panelOpen', [...PHASES]);

  return (
    <div
      className={`grid overflow-hidden rounded-2xl border border-[#e3e6ed] bg-white p-[21px] shadow-[0px_8px_16px_-8px_rgba(21,26,40,0.06),0px_24px_48px_-12px_rgba(21,26,40,0.12)] lg:grid-cols-[1.15fr_1fr] lg:gap-0 ${className}`}
    >
      {/* Left panel - Conversation */}
      <div className="flex flex-col gap-3 rounded-xl bg-[#f2f4f7]/40 p-4">
        {/* Customer header */}
        <div className="flex items-center gap-2 border-b border-[#e3e6ed]/60 pb-2">
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-[#fcfcfd]"
            style={{
              backgroundImage:
                'linear-gradient(136deg, rgb(15, 29, 67) 0%, rgb(31, 47, 92) 100%)'
            }}
          >
            {s.customerInitials}
          </div>
          <div>
            <p className="text-[14.6px] font-medium leading-[21px] text-[#151a28]">
              {s.customerName}
            </p>
            <p className="text-[9.3px] leading-[17px] text-[#636a7e]">
              {s.reviewDate}
            </p>
          </div>
        </div>

        {/* Customer message */}
        <div
          className={`max-w-[85%] rounded-bl-2xl rounded-br-2xl rounded-tl-sm rounded-tr-2xl border border-[#e3e6ed] bg-[#fcfcfd] px-3.5 py-2.5 text-[14.6px] leading-[21px] text-[#151a28] transition-all duration-500 ${
            animated && !showMessage
              ? 'translate-y-4 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >
          {s.customerMessage}
        </div>

        {/* Reply message */}
        <div
          className={`relative ml-auto max-w-[88%] transition-all duration-500 ${
            animated && !showReply
              ? 'translate-y-4 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >
          <div
            className={`rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-sm px-[15.7px] py-[10.5px] text-[13.9px] leading-[19.9px] text-[#151a28] shadow-[0px_1px_2px_0px_rgba(21,26,40,0.04)] transition-all duration-300 ${
              showFlag
                ? 'border-2 border-[#e94135]/70 bg-[#feedeb]'
                : 'border border-[#e3e6ed] bg-[#fcfcfd]'
            }`}
          >
            <span>{s.replyBefore}</span>
            <span
              className={`transition-all duration-300 ${
                showFlag
                  ? 'text-[#e94135] underline decoration-wavy decoration-[1.5px] underline-offset-[3px]'
                  : ''
              }`}
            >
              {s.flaggedPhrase}
            </span>
            <span>{s.replyAfter}</span>
          </div>

          {/* Flagged badge */}
          <div
            className={`mt-1 flex justify-end transition-all duration-300 ${
              showFlag ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-[#e94135] px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white shadow-[0px_0px_0px_0.7px_rgba(233,65,53,0.32)]" />
              Flagged after review
            </span>
          </div>
        </div>
      </div>

      {/* Right panel - Analysis */}
      <div
        className={`flex flex-col gap-3 rounded-xl border border-[#e3e6ed] bg-[#fcfcfd] p-4 transition-all duration-500 ${
          animated && !showPanel
            ? 'translate-x-4 opacity-0'
            : 'translate-x-0 opacity-100'
        }`}
      >
        {/* Violation header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-[3px]">
            <FhaAddonLogo />
            <div className="flex flex-col gap-[5px]">
              <p className="text-[14.6px] font-semibold leading-[21px] text-[#151a28]">
                {s.violationTitle}
              </p>
              <p className="font-mono text-[10.5px] uppercase leading-[15.7px] tracking-[0.5px] text-[#636a7e]">
                {s.violationLabel}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-[10.5px] border border-[#f9cbc8] bg-[#feedeb] px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.26px] text-[#e94135]">
            {s.riskLevel}
          </span>
        </div>

        {/* Description */}
        <div className="rounded-xl border border-[#f9cbc8] bg-[#feedeb]/60 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <p className="text-[10.8px] leading-[17px] text-[#151a28]">
              {s.violationDescription}
            </p>
          </div>
        </div>

        <div className="mt-auto" />

        {/* Citation + Cost */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[10.5px] border border-[#e3e6ed] bg-white p-2">
            <p className="font-mono text-[10.5px] leading-[15.7px] text-[#636a7e]">
              CITATION
            </p>
            <p className="text-xs font-medium text-[#151a28]">{s.citation}</p>
          </div>
          <div className="rounded-[10.5px] border border-[#e3e6ed] bg-white p-2">
            <p className="font-mono text-[10.5px] leading-[15.7px] text-[#636a7e]">
              Est. Cost
            </p>
            <p className="text-xs font-medium text-[#151a28]">
              {s.estimatedCost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
