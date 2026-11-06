import ScaleToFit from "../../components/ScaleToFit";
import SectionLabel from "../../components/SectionLabel";

export default function AboutIntroduction() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 py-14 md:py-20 px-5 md:px-10 xl:px-24 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[26px] w-full lg:flex-1 lg:min-w-0 lg:max-w-[720px] overflow-hidden">
        <SectionLabel children="ABOUT GDGOC UGM" />
        <h1 className="text-[#1967D2] font-googleSans text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08em] w-full">
          Built by students. For what’s next.
        </h1>
        <p className="text-[#5F6368] font-googleSans text-lg md:text-[22px] leading-[1.55em] w-full">
          We’re a community of learners and makers at Universitas Gadjah Mada, connected by
          curiosity and the belief that technology can do good.
        </p>
        <p className="text-[#5F6368] font-googleSans text-[13px] w-fit">
          UNIVERSITAS GADJAH MADA • 2026&#x2F;2027
        </p>
      </div>

      <ScaleToFit width={464} height={400} className="self-center lg:self-auto lg:w-[464px] lg:shrink-0">
        <div className="rounded-[32px] bg-[#EAF2FF] w-[464px] h-[400px] absolute left-0 top-0 overflow-hidden">
          <div className="rounded-[300px] bg-[#FDE293] w-[300px] h-[300px] absolute -left-[100px] top-60"></div>
          <div className="rounded-[440px] bg-[#8AB4F8] w-[440px] h-[440px] absolute left-[255px] -top-[100px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-3xl bg-[#FFF] w-[360px] h-[216px] absolute left-[52px] top-[92px] overflow-hidden">
          <svg
            width="287"
            height="178"
            viewBox="0 0 287 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            role="img"
            aria-label="GDGoC logo"
            className="shrink-0 w-[272px] h-[150px]"
          >
            <path
              d="M0 28.4318L270.51 2.03848e-05L286.231 149.576L15.7211 178.008L0 28.4318Z"
              fill="url(#pattern0_14_16539)"
            />
            <defs>
              <pattern id="pattern0_14_16539" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                  xlinkHref="#image0_14_16539"
                  transform="matrix(0.00215979 0 0 0.00390587 -0.278665 -0.406234)"
                />
              </pattern>
              <image
                id="image0_14_16539"
                width="960"
                height="1330"
                preserveAspectRatio="none"
                xlinkHref="PASTE YOUR ORIGINAL data:image/png;base64,... STRING HERE"
              />
            </defs>
          </svg>
        </div>
      </ScaleToFit>
    </div>
  );
}