export default function LearningFormats() {
  return (
    <div className="flex py-14 md:py-20 px-5 md:px-10 xl:px-24 flex-col items-start gap-10 bg-[#F1F3F4] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[800px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <div className="w-[7px] h-[7px]"></div>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">
            More than a classroom
          </p>
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Less watching. More making.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          Learn in a way that turns a new concept into something you can
          actually use.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 w-full overflow-hidden">
        <div className="flex p-6 md:p-8 flex-col items-start gap-5 rounded-3xl bg-[#FFF] w-full overflow-hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative "
          >
            <path
              d="M12 19.595L13.015 18.874C13.6918 18.3928 14.5016 18.1341 15.332 18.134H19.25C19.7804 18.134 20.2891 17.9232 20.6642 17.5482C21.0393 17.1731 21.25 16.6644 21.25 16.134V7.20996C21.25 6.67953 21.0393 6.17082 20.6642 5.79575C20.2891 5.42067 19.7804 5.20996 19.25 5.20996H15.5C14.5717 5.20996 13.6815 5.57871 13.0251 6.23509C12.3687 6.89146 12 7.7817 12 8.70996C12 8.25033 11.9095 7.79521 11.7336 7.37057C11.5577 6.94593 11.2999 6.56009 10.9749 6.23509C10.6499 5.91008 10.264 5.65227 9.83939 5.47638C9.41475 5.30049 8.95963 5.20996 8.5 5.20996H4.75C4.21957 5.20996 3.71086 5.42067 3.33579 5.79575C2.96071 6.17082 2.75 6.67953 2.75 7.20996V16.134C2.75 16.6644 2.96071 17.1731 3.33579 17.5482C3.71086 17.9232 4.21957 18.134 4.75 18.134H8.667C9.49776 18.1339 10.3079 18.3926 10.985 18.874L12 19.595ZM12 8.70996V19.595"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#1967D2"
            />
          </svg>
          <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
            Study together
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Work through foundations in peer learning sessions. Bring your
            questions; leave with a next step.
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
          <p className="text-[#1967D2] font-googleSans text-[13px] font-medium w-full">
            Study groups &amp; guided practice
          </p>
        </div>
        <div className="flex p-6 md:p-8 flex-col items-start gap-5 rounded-3xl bg-[#FFF] w-full h-full overflow-hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative "
          >
            <path
              d="M8.75 6.5L3.25 12L8.75 17.5M15.25 6.5L20.75 12L15.25 17.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#1967D2"
            />
          </svg>
          <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
            Try it hands-on
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Explore a tool or technique in a workshop, then put it to work
            in a small experiment.
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
          <p className="text-[#1967D2] font-googleSans text-[13px] font-medium w-full">
            Workshops &amp; technical sessions
          </p>
        </div>
        <div className="flex p-6 md:p-8 flex-col items-start gap-5 rounded-3xl bg-[#FFF] w-full h-full overflow-hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative "
          >
            <path
              d="M15.172 3.75C15.6247 3.75131 16.0728 3.84185 16.4905 4.01644C16.9082 4.19103 17.2875 4.44625 17.6065 4.7675C17.9255 5.08875 18.1781 5.46973 18.3497 5.88866C18.5214 6.3076 18.6088 6.75626 18.607 7.209C18.607 7.958 18.371 8.651 17.968 9.218C17.6523 9.66607 17.2334 10.0317 16.7469 10.284C16.2603 10.5364 15.7201 10.6681 15.172 10.668M18.624 13.237C20.16 14.097 21.252 16 21.25 17.61V20.25M13.322 7.209C13.322 7.958 13.085 8.651 12.682 9.218C12.3663 9.66607 11.9474 10.0317 11.4609 10.284C10.9743 10.5364 10.4341 10.6681 9.886 10.668C7.988 10.668 6.45 9.118 6.45 7.208C6.45 5.298 7.988 3.75 9.886 3.75C10.3388 3.75118 10.787 3.84162 11.2048 4.01615C11.6227 4.19068 12.002 4.44588 12.3211 4.76714C12.6403 5.08841 12.8929 5.46944 13.0647 5.88843C13.2364 6.30743 13.3238 6.75618 13.322 7.209ZM2.75 18.107C2.75 15.43 6.295 13.333 9.886 13.333C11.318 13.333 12.743 13.666 13.939 14.237C15.742 15.097 17.023 16.497 17.021 18.107V19.25C17.021 19.5152 16.9156 19.7696 16.7281 19.9571C16.5406 20.1446 16.2862 20.25 16.021 20.25H3.75C3.48478 20.25 3.23043 20.1446 3.04289 19.9571C2.85536 19.7696 2.75 19.5152 2.75 19.25V18.107Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#1967D2"
            />
          </svg>
          <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
            Share the process
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Exchange feedback, explain your decisions, and learn from
            different ways of thinking.
          </p>
          <div className="bg-[#DADCE0] w-full h-px"></div>
          <p className="text-[#1967D2] font-googleSans text-[13px] font-medium w-full">
            Project circles &amp; sharing sessions
          </p>
        </div>
      </div>
    </div>
  );
}
