import SectionLabel from "../../../components/common/SectionLabel";

export default function GetStarted() {
  return (
    <div className="flex pt-2 px-5 md:px-10 xl:px-24 pb-14 md:pb-[88px] flex-col items-start gap-10 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[800px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="MAKE YOUR FIRST MOVE" />
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          You don’t need to have it all figured out.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 w-full overflow-hidden">
        <div className="flex flex-col items-start gap-5 w-full overflow-hidden">
          <p className="text-[#1967D2] font-inter text-4xl md:text-[44px] font-bold w-fit">
            01
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
          <p className="text-[#242424] font-googleSans text-[25px] font-bold leading-[1.12em] w-full">
            Follow your curiosity
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Explore the tracks and find a topic you want to understand
            better.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 w-full overflow-hidden">
          <p className="text-[#1967D2] font-inter text-4xl md:text-[44px] font-bold w-fit">
            02
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
          <p className="text-[#242424] font-googleSans text-[25px] font-bold leading-[1.12em] w-full">
            Learn alongside others
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Join a learning opportunity, ask a question, and share your
            perspective.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 w-full overflow-hidden">
          <p className="text-[#1967D2] font-inter text-4xl md:text-[44px] font-bold w-fit">
            03
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
          <p className="text-[#242424] font-googleSans text-[25px] font-bold leading-[1.12em] w-full">
            Turn learning into action
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Practice through a project, exchange feedback, and pass
            something on.
          </p>
        </div>
      </div>
    </div>
  );
}
