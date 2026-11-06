const outcomes = [
  {
    pathway: "Research & discovery",
    practice: "Listening, problem framing, and testing assumptions",
    outcome: "A research insight and a focused problem brief",
  },
  {
    pathway: "Design & creativity",
    practice: "Ideation, user flows, and prototype feedback",
    outcome: "An interactive prototype and a design story",
  },
  {
    pathway: "Development",
    practice: "Coding, testing, and connecting tools",
    outcome: "A working demo with a clear explanation",
  },
];

export default function Outcomes() {
  return (
    <div className="flex pt-0 pb-14 md:pb-20 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] flex-col items-start gap-8 w-full overflow-hidden">
      <p className="text-[#242424] font-googleSans text-3xl md:text-4xl font-bold leading-[1.12em] w-full">
        From an interest to something you can show.
      </p>
      <div className="flex flex-col items-start rounded-[20px] border border-[#DADCE0] w-full overflow-hidden">
        {/* Column headers: desktop/tablet only. On mobile each row labels its own cells. */}
        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1.6fr)] py-5 px-7 gap-7 bg-[#F1F3F4] w-full">
          <p className="text-[#5F6368] font-googleSans text-xs font-medium">Pathway</p>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium">What you can practice</p>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium">A possible outcome</p>
        </div>
        {outcomes.map(({ pathway, practice, outcome }) => (
          <div
            key={pathway}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1.6fr)] p-5 md:p-7 gap-4 md:gap-7 items-start border-t border-t-[#DADCE0] first:border-t-0 md:first:border-t w-full"
          >
            <p className="text-[#242424] font-googleSans text-lg font-medium">{pathway}</p>
            <div className="flex flex-col gap-1">
              <span className="md:hidden text-[#5F6368] font-googleSans text-xs font-medium">
                What you can practice
              </span>
              <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em]">{practice}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="md:hidden text-[#5F6368] font-googleSans text-xs font-medium">
                A possible outcome
              </span>
              <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em]">{outcome}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#5F6368] font-googleSans text-[13px] leading-[1.55em] w-full">
        Illustrative learning outcomes. Topics and opportunities are shared
        through community updates.
      </p>
    </div>
  );
}
