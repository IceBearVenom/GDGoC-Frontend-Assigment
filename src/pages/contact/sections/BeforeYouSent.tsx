import SectionLabel from "../../../components/common/SectionLabel";
import HyperLink from "../../../components/common/HyperLink";

const guidance = [
  {
    title: "For learning questions",
    text: "Tell us which topic interests you and where you are in your learning journey.",
  },
  {
    title: "For collaborations",
    text: "Share the idea, who it’s for, and how you imagine working with the community.",
  },
  {
    title: "Not sure which category fits?",
    text: "Choose General inquiry. A clear question is always a good starting point.",
  },
];

export default function BeforeYouSend() {
  return (
    <div className="flex flex-col lg:flex-row py-10 md:py-[72px] px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] items-start gap-8 lg:gap-12 xl:gap-20 border-t border-t-[#DADCE0] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-5 w-full lg:w-[340px] xl:w-[420px] lg:shrink-0 overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
            <SectionLabel children="A LITTLE GUIDANCE" />
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl xl:text-[40px] font-bold leading-[1.12em] w-full">
            Help us understand your idea.
        </p>
        <div className="flex items-center gap-3 w-fit overflow-hidden">
            <HyperLink caption="Explore the programs first" href="" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-[26px] w-full min-w-0 overflow-hidden">
        {guidance.map(({ title, text }) => (
          <div key={title} className="flex flex-col items-start gap-2.5 w-full overflow-hidden">
            <p className="text-[#242424] font-googleSans text-xl md:text-[21px] font-bold leading-[1.12em] w-full">
              {title}
            </p>
            <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
              {text}
            </p>
            <div className="bg-[#DADCE0] w-full h-px"></div>
          </div>
        ))}
      </div>
    </div>
  );
}