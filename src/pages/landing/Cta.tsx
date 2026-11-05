export default function Cta() {
  return (
    <div className="flex py-10 md:py-16 px-5 md:px-10 xl:px-24 flex-col items-start w-full overflow-hidden">
      <div className="flex flex-col md:flex-row p-6 md:p-12 items-start md:items-center gap-8 md:gap-12 rounded-[32px] bg-[#EAF2FF] w-full overflow-hidden">
        <div className="flex flex-col items-start gap-4 w-full overflow-hidden">
          <div className="flex items-center gap-2.5 w-fit overflow-hidden">
            <div className="w-[7px] h-[7px]"></div>
            <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">
              Your next chapter
            </p>
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
          <div className="flex py-0 px-6 items-center gap-4 rounded-lg border border-[rgba(255,255,255,0.00)] bg-[#4284F4] w-fit h-[52px] overflow-hidden">
            <p className="text-[#FFF] font-googleSans text-base font-medium w-fit">
              Explore the overview
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 relative "
            >
              <path
                d="M3.33301 10H16.5655M16.5655 10C16.5655 10.32 16.443 10.64 16.1997 10.8833L11.458 15.625M16.5655 10C16.5655 9.68 16.443 9.36 16.1997 9.11667L11.458 4.375"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="white"
              />
            </svg>
          </div>
          <div className="flex items-center gap-3 w-fit overflow-hidden">
            <p className="text-[#1967D2] font-googleSans text-base font-medium w-fit">
              Talk to the community
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 relative "
            >
              <path
                d="M3.33301 10H16.5655M16.5655 10C16.5655 10.32 16.443 10.64 16.1997 10.8833L11.458 15.625M16.5655 10C16.5655 9.68 16.443 9.36 16.1997 9.11667L11.458 4.375"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#1967D2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
