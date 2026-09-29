export function FeedbackTimelineMockup() {
  return (
    <div className="h-[160px] w-full max-w-[350px] overflow-hidden rounded-[18px] border border-[#e4e4e4] bg-[#fbfaf8] px-4">
      <div className="relative mt-[49px] h-px w-full bg-[#ccced1]">
        <span className="absolute -top-[3.5px] left-0 h-2 w-2 rounded-[3px] bg-[#2a9d67]" />
        <span className="absolute -top-[2.5px] left-[23%] h-1.5 w-1.5 rounded-[3px] bg-[#ccced1]" />
        <span className="absolute -top-[2.5px] left-[47%] h-1.5 w-1.5 rounded-[3px] bg-[#ccced1]" />
        <span className="absolute -top-[2.5px] left-[71%] h-1.5 w-1.5 rounded-[3px] bg-[#ccced1]" />
        <span className="absolute -top-[3.5px] right-0 h-2 w-2 rounded-[3px] bg-[#de3b3d]" />
      </div>

      <div className="mt-3 flex justify-between text-[10px] text-[#5e5f74]">
        <span>Bad reply</span>
        <span className="text-[9.7px]">+3 wks</span>
        <span className="text-[9.9px]">Pattern caught</span>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-[10px] text-[#5e5f74]">
        <span className="rounded-[10px] bg-[#ffb9b4] px-1.5 py-0.5 text-[9.9px] leading-[15px] text-[#930e10]">
          12 more tickets
        </span>
        <span>shaped by the same pattern</span>
      </div>
    </div>
  );
}
