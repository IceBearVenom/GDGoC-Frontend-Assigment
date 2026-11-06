import SectionLabel from "../../../components/common/SectionLabel";

export default function Introduction() {
  return (
    <div className="flex flex-col lg:flex-row pt-10 pb-10 md:pt-16 md:pb-14 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] items-start lg:items-center gap-10 lg:gap-16 w-full">
      <div className="flex flex-col items-start gap-6 w-full lg:flex-1 lg:min-w-0 overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="OVERVIEW • PROGRAM & LEARNING TRACKS" />
        </div>
        <p className="text-[#1967D2] font-googleSans text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.08em] w-full">
          Find your spark. Build your own path.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg md:text-[21px] leading-[1.55em] w-full">
          Explore how research, creativity, and development connect. Start
          with one interest. Grow through practice and the people around you.
        </p>
      </div>

      <div className="flex pb-1.5 flex-col items-center shrink-0 self-center lg:self-auto w-[264px] h-[280px]">
        <div className="flex pt-[3px] pr-[3px] pb-[3px] pl-[3px] justify-center items-center w-[286px] h-[286px]">
          <div className="flex pt-[35px] pr-0 pb-[31px] pl-[35px] justify-end items-center w-[280px] h-[280px]">
            <div className="shadow-[25.2px_26.6px_28px_0_rgba(255,255,255,0.50)_inset] w-[248px] h-[214px] relative">
              {/* Illustration */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}