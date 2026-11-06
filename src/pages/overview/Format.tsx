const formats = [
  {
    title: "Study groups",
    text: "Build foundations with peers. Work through a topic, compare approaches, and make space for questions.",
    bestFor: "Learning the fundamentals",
    iconBg: "bg-[#EAF2FF]",
    iconPath:
      "M12 19.595L13.015 18.874C13.6918 18.3928 14.5016 18.1341 15.332 18.134H19.25C19.7804 18.134 20.2891 17.9232 20.6642 17.5482C21.0393 17.1731 21.25 16.6644 21.25 16.134V7.20996C21.25 6.67953 21.0393 6.17082 20.6642 5.79575C20.2891 5.42067 19.7804 5.20996 19.25 5.20996H15.5C14.5717 5.20996 13.6815 5.57871 13.0251 6.23509C12.3687 6.89146 12 7.7817 12 8.70996C12 8.25033 11.9095 7.79521 11.7336 7.37057C11.5577 6.94593 11.2999 6.56009 10.9749 6.23509C10.6499 5.91008 10.264 5.65227 9.83939 5.47638C9.41475 5.30049 8.95963 5.20996 8.5 5.20996H4.75C4.21957 5.20996 3.71086 5.42067 3.33579 5.79575C2.96071 6.17082 2.75 6.67953 2.75 7.20996V16.134C2.75 16.6644 2.96071 17.1731 3.33579 17.5482C3.71086 17.9232 4.21957 18.134 4.75 18.134H8.667C9.49776 18.1339 10.3079 18.3926 10.985 18.874L12 19.595ZM12 8.70996V19.595",
  },
  {
    title: "Hands-on workshops",
    text: "Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.",
    bestFor: "Trying something new",
    iconBg: "bg-[#EAF5ED]",
    iconPath: "M8.75 6.5L3.25 12L8.75 17.5M15.25 6.5L20.75 12L15.25 17.5",
  },
  {
    title: "Project circles",
    text: "Connect research, design, and development around a shared problem. Learn through making and feedback.",
    bestFor: "Putting skills into practice",
    iconBg: "bg-[#FFF7DF]",
    iconPath:
      "M15.172 3.75C15.6247 3.75131 16.0728 3.84185 16.4905 4.01644C16.9082 4.19103 17.2875 4.44625 17.6065 4.7675C17.9255 5.08875 18.1781 5.46973 18.3497 5.88866C18.5214 6.3076 18.6088 6.75626 18.607 7.209C18.607 7.958 18.371 8.651 17.968 9.218C17.6523 9.66607 17.2334 10.0317 16.7469 10.284C16.2603 10.5364 15.7201 10.6681 15.172 10.668M18.624 13.237C20.16 14.097 21.252 16 21.25 17.61V20.25M13.322 7.209C13.322 7.958 13.085 8.651 12.682 9.218C12.3663 9.66607 11.9474 10.0317 11.4609 10.284C10.9743 10.5364 10.4341 10.6681 9.886 10.668C7.988 10.668 6.45 9.118 6.45 7.208C6.45 5.298 7.988 3.75 9.886 3.75C10.3388 3.75118 10.787 3.84162 11.2048 4.01615C11.6227 4.19068 12.002 4.44588 12.3211 4.76714C12.6403 5.08841 12.8929 5.46944 13.0647 5.88843C13.2364 6.30743 13.3238 6.75618 13.322 7.209ZM2.75 18.107C2.75 15.43 6.295 13.333 9.886 13.333C11.318 13.333 12.743 13.666 13.939 14.237C15.742 15.097 17.023 16.497 17.021 18.107V19.25C17.021 19.5152 16.9156 19.7696 16.7281 19.9571C16.5406 20.1446 16.2862 20.25 16.021 20.25H3.75C3.48478 20.25 3.23043 20.1446 3.04289 19.9571C2.85536 19.7696 2.75 19.5152 2.75 19.25V18.107Z",
  },
  {
    title: "Knowledge sharing",
    text: "Walk through an idea, share a lesson from your process, and discover how other students approach their work.",
    bestFor: "Exchanging perspectives",
    iconBg: "bg-[#FDEDEA]",
    iconPath:
      "M9.07009 17.7371H14.9301M15.0131 17.1041C15.1391 16.1461 15.7491 15.3401 16.4771 14.7041C17.5236 13.7923 18.2668 12.5828 18.6073 11.2372C18.9478 9.89166 18.8694 8.47421 18.3826 7.17441C17.8958 5.87461 17.0238 4.7544 15.8831 3.96358C14.7425 3.17276 13.3876 2.74902 11.9996 2.74902C10.6116 2.74902 9.25673 3.17276 8.11608 3.96358C6.97543 4.7544 6.1034 5.87461 5.61658 7.17441C5.12977 8.47421 5.05138 9.89166 5.3919 11.2372C5.73242 12.5828 6.47561 13.7923 7.52209 14.7041C8.25109 15.3401 8.8621 16.1461 8.9871 17.1041L9.0711 17.7371L9.30409 19.5111C9.36742 19.9922 9.60349 20.4338 9.96832 20.7538C10.3331 21.0737 10.8019 21.2501 11.2871 21.2501H12.7131C13.1983 21.2501 13.667 21.0737 14.0319 20.7538C14.3967 20.4338 14.6328 19.9922 14.6961 19.5111L14.9291 17.7371L15.0131 17.1041Z",
  },
];

export default function ProgramFormat() {
  return (
    <div className="flex py-20 px-24 flex-col items-start gap-9 bg-[#F1F3F4] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-[800px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <div className="w-[7px] h-[7px]"></div>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">Ways to learn</p>
        </div>
        <p className="text-[#242424] font-googleSans text-5xl font-bold leading-[1.12em] w-full">
          The format changes. The curiosity stays.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          Explore the kinds of experiences that help you move from
          understanding to doing.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full">
        {formats.map(({ title, text, bestFor, iconBg, iconPath }) => (
          <div
            key={title}
            className="flex p-7 items-start gap-6 rounded-3xl bg-[#FFF] w-full overflow-hidden"
          >
            <div
              className={`flex shrink-0 justify-center items-center rounded-[14px] ${iconBg} w-[52px] h-[52px] overflow-hidden`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 w-6 h-6 relative"
              >
                <path
                  d={iconPath}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#1967D2"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
              <p className="text-[#242424] font-googleSans text-[27px] font-bold leading-[1.12em] w-full">
                {title}
              </p>
              <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
                {text}
              </p>
              <p className="text-[#1967D2] font-googleSans text-[13px] font-medium w-full">
                Best for • {bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}