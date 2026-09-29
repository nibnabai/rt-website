import type { ConversationMessageData } from './conversation-mockup-data';

interface ConversationMessageProps {
  message: ConversationMessageData;
  style?: React.CSSProperties;
  violationStyle?: React.CSSProperties;
  pillStyle?: React.CSSProperties;
}

export function ConversationMessage({
  message,
  style,
  violationStyle,
  pillStyle
}: ConversationMessageProps) {
  const bubbleClass = message.isViolation
    ? 'rounded-[18px] border border-[#ffaea6] bg-lp-mockup-violation'
    : 'rounded-[18px] border border-lp-mockup-bubble-border bg-white';

  return (
    <div className="relative flex gap-3" style={style}>
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-medium ${message.avatarClass}`}
      >
        {message.initial}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-1 text-[11px]">
          <span className="font-medium text-[#4a4a50]">{message.author}</span>
          <span className="text-[#00010e]">·</span>
          <span className="text-[#71727d]">{message.time}</span>
          {message.csat ? (
            <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#71727d]">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-lp-mockup-sparkline" />
              <span>
                CSAT <span className="tabular-nums">{message.csat}</span>
              </span>
            </span>
          ) : message.statusDotClass ? (
            <span
              className={`ml-auto h-1.5 w-1.5 rounded-[3px] ${message.statusDotClass}`}
            />
          ) : null}
        </div>
        <div
          className={bubbleClass}
          style={message.isViolation ? violationStyle : undefined}
        >
          <p className="px-3.5 py-3 text-[13px] leading-[21px] text-[#00010e]">
            {message.body}
          </p>
        </div>
        {message.isViolation && message.violationLabel ? (
          <div
            className="absolute -top-2 right-0 flex h-[25px] items-center gap-1.5 rounded-[15px] border border-[#ffaea6] bg-[#ffe3de] px-2.5 text-[10px] font-medium text-[#880e10]"
            style={pillStyle}
          >
            <span className="h-1.5 w-1.5 rounded-[3px] bg-[#e04647]" />
            {message.violationLabel}
          </div>
        ) : null}
      </div>
    </div>
  );
}
