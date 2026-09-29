import { cn } from '@/lib/utils';
import type { ConversationMessageData } from '../conversation-mockup/conversation-mockup-data';

type DrilldownConversationMessageProps = {
  message: ConversationMessageData;
};

export function DrilldownConversationMessage({
  message
}: DrilldownConversationMessageProps) {
  return (
    <div className="flex gap-3">
      <span
        className={cn(
          'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-medium',
          message.avatarClass
        )}
      >
        {message.initial}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[10px] text-[#777a82]">
          <span className="text-[#0b0d13]">{message.author}</span>
          <span>·</span>
          <span>{message.time}</span>
          {message.isViolation && message.violationLabel ? (
            <span className="ml-auto flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#de3b3d]" />
              <span className="rounded bg-[#fde8e8] px-1.5 py-0.5 text-[9px] font-medium text-[#880e10]">
                {message.violationLabel}
              </span>
            </span>
          ) : message.statusDotClass ? (
            <span
              className={cn(
                'ml-auto h-1.5 w-1.5 rounded-full',
                message.statusDotClass
              )}
            />
          ) : null}
        </div>
        <p
          className={cn(
            'mt-1 rounded-lg border px-3 py-2 text-[12px] leading-[18px] text-[#0b0d13]',
            message.isViolation
              ? 'border-[#f0c4c4] bg-[#fff8f7]'
              : 'border-[#dcdee2] bg-white'
          )}
        >
          {message.body}
        </p>
      </div>
    </div>
  );
}
