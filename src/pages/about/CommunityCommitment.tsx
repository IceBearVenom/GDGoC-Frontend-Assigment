export default function CommunityCommitment() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 md:gap-16 py-10 md:py-14 px-5 md:px-10 xl:px-24 bg-[#FFF7DF] w-full overflow-hidden">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="w-14 h-14 md:w-[72px] md:h-[72px] shrink-0"
      >
        <path
          d="PASTE YOUR ORIGINAL SPARKLE PATH 'd' VALUE HERE"
          fill="#F9AB00"
        />
      </svg>
      <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
        <h2 className="text-[#242424] font-googleSans text-2xl md:text-[32px] font-bold leading-[1.12em] w-full">
          A space to learn. A responsibility to care.
        </h2>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          We want every conversation and learning experience to be respectful, inclusive, and
          constructive. Be kind, give credit, and make room for people who are just getting started.
        </p>
      </div>
    </div>
  );
}