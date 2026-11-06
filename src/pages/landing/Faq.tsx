import HyperLink from "../../components/HyperLink";
import SectionLabel from "../../components/SectionLabel";

export default function Faq() {
  return (
    <div className="flex flex-col lg:flex-row py-14 md:py-[88px] px-5 md:px-10 xl:px-24 items-start gap-10 lg:gap-12 xl:gap-24 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-5 w-full lg:w-[340px] xl:w-[400px] lg:shrink-0 overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="A FEW GOOD QUESTION" />
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Wondering where to begin?
        </p>
        <HyperLink caption="Ask us a question" />
      </div>
      <div className="flex flex-col items-start gap-6 w-full overflow-hidden">
        <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
          <div className="flex items-center gap-6 w-full overflow-hidden">
            <p className="text-[#242424] font-googleSans text-lg md:text-xl font-medium w-full">
              Do I need to know how to code?
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 relative "
            >
              <path
                d="M4.75 9.75L10.94 15.94C11.2213 16.2209 11.6025 16.3787 12 16.3787C12.3975 16.3787 12.7787 16.2209 13.06 15.94L19.25 9.75"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#1967D2"
              />
            </svg>
          </div>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            No. Start with an interest in technology and a willingness to
            learn. Research and design are part of the journey, too.
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
        </div>
        <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
          <div className="flex items-center gap-6 w-full overflow-hidden">
            <p className="text-[#242424] font-googleSans text-lg md:text-xl font-medium w-full">
              Is this only for computer science students?
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 relative "
            >
              <path
                d="M4.75 9.75L10.94 15.94C11.2213 16.2209 11.6025 16.3787 12 16.3787C12.3975 16.3787 12.7787 16.2209 13.06 15.94L19.25 9.75"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#1967D2"
              />
            </svg>
          </div>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Different disciplines bring different perspectives. Explore the
            overview to find a starting point that fits your interests.
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
        </div>
        <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
          <div className="flex items-center gap-6 w-full overflow-hidden">
            <p className="text-[#242424] font-googleSans text-lg md:text-xl font-medium w-full">
              How can I find learning opportunities?
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 relative "
            >
              <path
                d="M4.75 9.75L10.94 15.94C11.2213 16.2209 11.6025 16.3787 12 16.3787C12.3975 16.3787 12.7787 16.2209 13.06 15.94L19.25 9.75"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#1967D2"
              />
            </svg>
          </div>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Keep an eye on @gdgoc.ugm for community updates. You can also
            use the contact page to ask about getting involved.
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
        </div>
      </div>
    </div>
  );
}
