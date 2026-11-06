import HyperLink from "../../../components/common/HyperLink";
import SectionLabel from "../../../components/common/SectionLabel";

export default function ProjectBrief() {
  return (
    <div className="flex flex-col lg:flex-row py-14 md:py-[88px] px-5 md:px-10 xl:px-24 items-stretch lg:items-center gap-10 lg:gap-16 w-full overflow-hidden">
      <div className="flex p-5 md:p-10 flex-col items-start gap-6 rounded-[32px] bg-[#FFF7DF] w-full lg:w-[480px] xl:w-[592px] lg:shrink-0 overflow-hidden">
        <div className="flex justify-between items-center w-full overflow-hidden">
          <p className="text-[#5F6368] font-googleSans text-xs w-fit">
            IDEA → PROTOTYPE
          </p>
          <p className="text-[#1967D2] font-googleSans text-2xl w-fit">
            &lt;&#x2F;&gt;
          </p>
        </div>
        <div className="flex p-5 md:p-[26px] flex-col items-start gap-6 rounded-2xl border border-[#DADCE0] bg-[#FFF] w-full overflow-hidden">
          <div className="flex items-start gap-1.5 w-fit overflow-hidden">
            <div className="w-2 h-2"></div>
            <div className="w-2 h-2"></div>
            <div className="w-2 h-2"></div>
          </div>
          <p className="text-[#242424] font-googleSans text-2xl md:text-[32px] font-bold leading-[1.12em] w-full">
            A little less friction. A better campus day.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full overflow-hidden">
            <div className="flex p-4 flex-col items-start gap-6 rounded-xl bg-[#EAF2FF] w-full overflow-hidden">
              <p className="text-[#000] font-googleSans text-[13px] font-bold w-fit">
                Discover
              </p>
            </div>
            <div className="flex p-4 flex-col items-start gap-6 rounded-xl bg-[#EAF5ED] w-full overflow-hidden">
              <p className="text-[#000] font-googleSans text-[13px] font-bold w-fit">
                Connect
              </p>
            </div>
            <div className="flex p-4 flex-col items-start gap-6 rounded-xl bg-[#FDEDEA] w-full overflow-hidden">
              <p className="text-[#000] font-googleSans text-[13px] font-bold w-fit">
                Share
              </p>
            </div>
          </div>
          <p className="text-[#5F6368] font-googleSans text-[13px] leading-[1.55em] w-full">
            Start with a student need. Build a small, useful solution.
          </p>
        </div>
        <p className="text-[#5F6368] font-googleSans text-[11px] w-fit">
          EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
        </p>
      </div>
      <div className="flex flex-col items-start gap-6 w-full overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="BUILD SOMETHING THAT MATTERS"/>
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Your next project could start on campus.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          What if finding a study partner, sharing resources, or navigating
          campus felt easier? Small, familiar problems can be the beginning
          of meaningful work.
        </p>
        <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
          Bring research, design, and development together. Try an idea, get
          feedback, and make the next version better.
        </p>
        <HyperLink caption="Explore porject-based learning" />
      </div>
    </div>
  );
}
