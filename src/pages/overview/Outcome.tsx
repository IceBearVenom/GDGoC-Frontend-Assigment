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
    <div className="flex pt-0 pr-24 pb-20 pl-24 flex-col items-start gap-8 w-full overflow-hidden">
      <p className="text-[#242424] font-googleSans text-4xl font-bold leading-[1.12em] w-full">
        From an interest to something you can show.
      </p>
      <div className="flex flex-col items-start rounded-[20px] border border-[#DADCE0] w-full overflow-hidden">
        <div className="flex py-5 px-7 items-start gap-7 bg-[#F1F3F4] w-full overflow-hidden">
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-[250px]">Pathway</p>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-[448px]">
            What you can practice
          </p>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-[438px]">
            A possible outcome
          </p>
        </div>
        {outcomes.map(({ pathway, practice, outcome }) => (
          <div
            key={pathway}
            className="flex p-7 items-start gap-7 border-t border-t-[#DADCE0] w-full overflow-hidden"
          >
            <p className="text-[#242424] font-googleSans text-lg font-medium w-[250px]">
              {pathway}
            </p>
            <div className="flex flex-col items-start w-[448px] overflow-hidden">
              <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
                {practice}
              </p>
            </div>
            <div className="flex flex-col items-start w-full overflow-hidden">
              <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
                {outcome}
              </p>
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