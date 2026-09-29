import { MESSAGES, TICKET_HEADER } from './conversation-mockup-data';
import { ConversationMessage } from './ConversationMessage';

interface ConversationThreadProps {
  headerStyle?: React.CSSProperties;
  getMessageStyle: (index: number) => React.CSSProperties;
  getViolationStyles?: (index: number) => {
    bubble?: React.CSSProperties;
    pill?: React.CSSProperties;
  };
}

export function ConversationThread({
  headerStyle,
  getMessageStyle,
  getViolationStyles
}: ConversationThreadProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col bg-[#fefefe]">
      <div className="flex flex-col gap-5 px-7 pb-7 pt-7" style={headerStyle}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase text-[#00010e]">
              {TICKET_HEADER.label}
            </p>
            <h3 className="mt-1 font-display text-2xl leading-8 text-[#00010e]">
              {TICKET_HEADER.title}
            </h3>
          </div>
          <div className="flex shrink-0 gap-2">
            {TICKET_HEADER.statusPills.map((pill) => (
              <span
                key={pill.label}
                className={`rounded-full px-2 py-1 text-[11px] font-normal ${pill.className}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-7 pb-7">
        {MESSAGES.map((message, index) => {
          const violationStyles = getViolationStyles?.(index);
          return (
            <ConversationMessage
              key={message.id}
              message={message}
              style={getMessageStyle(index)}
              violationStyle={violationStyles?.bubble}
              pillStyle={violationStyles?.pill}
            />
          );
        })}
      </div>
    </div>
  );
}
