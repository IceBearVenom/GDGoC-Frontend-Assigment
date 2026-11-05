import HyperLink from "../../components/HyperLink";
import SectionLabel from "../../components/SectionLabel";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row py-14 md:py-[88px] px-5 md:px-10 xl:px-24 items-start gap-8 lg:gap-12 xl:gap-24 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-5 w-full lg:w-[440px] xl:w-[490px] lg:shrink-0 overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="A CAMPUS. A COMMUNITY"/>
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Not just learning tech. Finding your people.
        </p>
        <HyperLink caption="More about GDGoC UGM" />
      </div>
      <div className="flex flex-col items-start gap-6 w-full overflow-hidden">
        <p className="text-[#5F6368] font-googleSans text-lg md:text-[21px] font-bold leading-[1.55em] w-full">
          Google Developer Groups on Campus, Universitas Gadjah Mada brings
          students together around one simple idea: we can go further when
          we learn with each other.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          From your first line of code to your next product idea, there’s
          room to ask questions, share what you know, and try something new.
        </p>
        <div className="flex flex-wrap items-start gap-3 w-fit overflow-hidden">
          <div className="flex py-2 px-3.5 items-start rounded-[100px] bg-[#F1F3F4] w-fit overflow-hidden">
            <p className="text-[#5F6368] font-googleSans text-[13px] font-bold w-fit">
              Student-led
            </p>
          </div>
          <div className="flex py-2 px-3.5 items-start rounded-[100px] bg-[#F1F3F4] w-fit overflow-hidden">
            <p className="text-[#5F6368] font-googleSans text-[13px] font-bold w-fit">
              Peer-powered
            </p>
          </div>
          <div className="flex py-2 px-3.5 items-start rounded-[100px] bg-[#F1F3F4] w-fit overflow-hidden">
            <p className="text-[#5F6368] font-googleSans text-[13px] font-bold w-fit">
              Curiosity-first
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
