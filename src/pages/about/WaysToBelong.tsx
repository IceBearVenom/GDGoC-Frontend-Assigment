import { ArrowRight } from "lucide-react";
import SectionLabel from "../../components/SectionLabel";
import HyperLink from "../../components/HyperLink";

const roles = [
  {
    title: "Come as a learner",
    text: "Explore a topic, join a discussion, and ask the question that’s been on your mind.",
  },
  {
    title: "Grow as a collaborator",
    text: "Work with people whose skills complement yours. Discover what you can build together.",
  },
  {
    title: "Give back as a contributor",
    text: "Share knowledge, support a learning session, or bring an idea for the community.",
  },
];

export default function WaysToBelong() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 xl:gap-24 pt-0 pb-14 md:pb-[88px] px-5 md:px-10 xl:px-24 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[22px] w-full lg:w-[340px] xl:w-[400px] lg:shrink-0 overflow-hidden">
        <SectionLabel children="PEOPLE, NOT LABELS" />
        <h2 className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          There’s more than one way to contribute.
        </h2>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          You can be learning one day and helping someone else the next. A community grows through
          both.
        </p>
      </div>
      <div className="flex flex-col items-start gap-7 w-full overflow-hidden">
        {roles.map(({ title, text }) => (
          <div key={title} className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
            <h3 className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
              {title}
            </h3>
            <p className="text-[#5F6368] font-googleSans text-base md:text-[17px] leading-[1.55em] w-full">
              {text}
            </p>
            <div className="bg-[#DADCE0] w-full h-px"></div>
          </div>
        ))}
        <HyperLink caption="Let's talk about getting involved" />
      </div>
    </div>
  );
}