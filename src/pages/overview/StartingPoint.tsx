import { ArrowRight } from "lucide-react";

export default function StartingPoint() {
  return (
    <div className="flex py-14 px-24 items-center gap-16 bg-[#FFF7DF] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-4 w-[460px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <div className="w-[7px] h-[7px]"></div>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">
            Start where you are
          </p>
        </div>
        <p className="text-[#242424] font-googleSans text-4xl font-bold leading-[1.12em] w-full">
          New to tech? That’s a starting point, too.
        </p>
      </div>
      <div className="flex flex-col items-start gap-5 w-full overflow-hidden">
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          You don’t need a finished portfolio or the perfect track choice.
          Pick a topic you’re curious about. If you’re unsure, tell us what
          interests you and we can start a conversation.
        </p>
        <div className="flex items-center gap-3 w-fit overflow-hidden">
          <p className="text-[#1967D2] font-googleSans text-base font-medium w-fit">
            Ask about getting started
          </p>
          <ArrowRight size={20} className="text-[#1967D2]" />
        </div>
      </div>
    </div>
  );
}