import Button from "./Button";
import HyperLink from "./HyperLink";
import SectionLabel from "./SectionLabel";

export default function Cta() {
  return (
    <div className="flex py-10 md:py-16 px-5 md:px-10 xl:px-24 flex-col items-start w-full overflow-hidden">
      <div className="flex flex-col md:flex-row p-6 md:p-12 items-start md:items-center gap-8 md:gap-12 rounded-[32px] bg-[#EAF2FF] w-full overflow-hidden">
        <div className="flex flex-col items-start gap-4 w-full overflow-hidden">
          <div className="flex items-center gap-2.5 w-fit overflow-hidden">
            <SectionLabel children="YOUR NEXT CHAPTER" />
          </div>
          <p className="text-[#242424] font-googleSans text-3xl md:text-[44px] font-bold leading-[1.12em] w-full">
            Bring your curiosity. <br /> We’ll build from there.
          </p>
          <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
            Find a learning track, meet a collaborator, or start a
            conversation.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 w-full md:w-[260px] md:shrink-0 overflow-hidden">
          <Button caption="Explore the overview" href="/overview" />
          <HyperLink caption="Talk to the community" href="" />
        </div>
      </div>
    </div>
  );
}
