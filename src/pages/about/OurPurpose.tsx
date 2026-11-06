import SectionLabel from "../../components/SectionLabel";

export default function OurPurpose() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-24 py-14 md:py-20 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] bg-[#F1F3F4] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-5 w-full lg:w-[340px] xl:w-[400px] lg:shrink-0 overflow-hidden">
        <SectionLabel children="WHY WE COME TOGETHER" />
        <h2 className="text-[#1967D2] font-googleSans text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.12em] w-full">
          A bridge from <br /> “I wonder” to <br /> “I made this.”
        </h2>
      </div>
      <div className="flex flex-col items-start gap-6 w-full min-w-0 overflow-hidden">
        <p className="text-[#242424] font-googleSans text-xl md:text-2xl leading-[1.55em] w-full">
          Learning feels different when there’s someone to exchange ideas with, a problem you care
          about, and the space to give it a try.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          That’s the spirit of Google Developer Groups on Campus at UGM. We create room for
          students to explore technology, develop practical skills, and learn from one another.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          Our campus is the starting point. The questions we ask and the things we build can reach
          beyond it.
        </p>
      </div>
    </div>
  );
}