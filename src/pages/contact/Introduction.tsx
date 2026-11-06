import SectionLabel from "../../components/SectionLabel";

export default function Introduction() {
  return (
    <div className="flex pt-10 pb-10 md:pt-[72px] md:pb-14 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] flex-col items-start gap-6 w-full overflow-hidden">
      <div className="flex items-center gap-2.5 w-fit overflow-hidden">
        <SectionLabel children="CONTACT • LET'S CONNECT" />
      </div>
      <p className="text-[#1967D2] font-googleSans text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08em] w-full">
        Good things start with hello.
      </p>
      <div className="flex flex-col items-start w-full md:max-w-[770px] overflow-hidden">
        <p className="text-[#5F6368] font-googleSans text-lg md:text-[22px] leading-[1.55em] w-full">
          A question, a collaboration, or an idea for the community? Tell us what’s on your mind.
        </p>
      </div>
    </div>
  );
}