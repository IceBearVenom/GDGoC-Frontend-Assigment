const steps = [
  { number: "01", title: "Discover", text: "Explore a topic and find the questions you want to answer." },
  { number: "02", title: "Practice", text: "Try an exercise, work through a challenge, and ask for help." },
  { number: "03", title: "Build", text: "Apply your learning to a small idea with a clear purpose." },
  { number: "04", title: "Share", text: "Show your process, gather feedback, and help someone else." },
];

export default function LearningJourney() {
  return (
    <div className="flex py-20 px-24 flex-col items-start gap-10 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-fit overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <div className="w-[7px] h-[7px]"></div>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">
            Progress, not perfection
          </p>
        </div>
        <p className="text-[#242424] font-googleSans text-5xl font-bold leading-[1.12em] w-[812px]">
          A journey you can keep building on.
        </p>
      </div>

      <div className="flex items-start gap-8 w-full overflow-hidden">
        {steps.map(({ number, title, text }) => (
          <div key={number} className="flex flex-col items-start gap-5 w-full overflow-hidden">
            <div className="flex justify-between items-start w-full overflow-hidden">
              <p className="text-[#1967D2] font-googleSans text-[38px] font-bold w-fit">
                {number}
              </p>
            </div>
            <div className="bg-[#DADCE0] w-full h-px"></div>
            <p className="text-[#242424] font-googleSans text-[26px] font-bold leading-[1.12em] w-full">
              {title}
            </p>
            <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}