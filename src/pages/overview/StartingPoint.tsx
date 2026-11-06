import SectionLabel from "../../components/SectionLabel";
import HyperLink from "../../components/HyperLink";

export default function StartingPoint() {
  return (
    <div className="flex flex-col lg:flex-row py-10 md:py-14 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] items-start lg:items-center gap-6 lg:gap-16 bg-[#FFF7DF] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-4 w-full lg:w-[460px] lg:shrink-0 overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="START WHERE YOU ARE" />
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl font-bold leading-[1.12em] w-full">
          New to tech? That’s a starting point, too.
        </p>
      </div>
      <div className="flex flex-col items-start gap-5 w-full min-w-0 overflow-hidden">
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          You don’t need a finished portfolio or the perfect track choice.
          Pick a topic you’re curious about. If you’re unsure, tell us what
          interests you and we can start a conversation.
        </p>
        <div className="flex items-center gap-3 w-fit overflow-hidden">
          <HyperLink caption="Ask about getting started" href="/contact"/>
        </div>
      </div>
    </div>
  );
}