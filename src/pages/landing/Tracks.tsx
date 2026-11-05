import HyperLink from "../../components/HyperLink";
import SectionLabel from "../../components/SectionLabel";

function TrackCard() {
  return (
    <div className="flex flex-col items-start rounded-3xl border border-[#DADCE0] w-full h-full overflow-hidden">
      <div className="w-full min-h-[232px] ">
        <img className="size-full" src="" alt="🔍" />
      </div>
      <div className="flex p-5 md:p-7 flex-col items-start gap-[18px] w-full overflow-hidden">
        <p className="text-[#1967D2] font-googleSans text-[11px] font-medium w-fit">
          Explore the why
        </p>
        <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
          Research &amp; discovery
        </p>
        <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
          Ask better questions, understand people, and turn insight into
          a clear problem worth solving.
        </p>
        <div className="bg-[#DADCE0] w-full h-px"></div>
        <p className="text-[#5F6368] font-googleSans text-[13px] w-full">
          Problem framing · User research · Product thinking
        </p>
        <HyperLink caption="Explore this track" />
      </div>
    </div>
  )
}

export default function Tracks() {
  return (
    <div className="flex pt-4 px-5 md:px-10 xl:px-24 pb-14 md:pb-[88px] flex-col items-start gap-9 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-5 w-full overflow-hidden">
        <div className="flex flex-col items-start gap-[18px] w-full md:flex-1 md:max-w-[800px] overflow-hidden">
          <div className="flex items-center gap-2.5 w-fit overflow-hidden">
            <SectionLabel children="FIND YOUR STARTING POINT"/>
          </div>
          <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
            Many interests. One shared journey.
          </p>
          <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
            Follow what excites you. Explore a track, then connect the dots
            with others.
          </p>
        </div>
        <HyperLink caption="See the overview" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 w-full overflow-hidden">
        <TrackCard />
        <div className="flex flex-col items-start rounded-3xl border border-[#DADCE0] w-full h-full overflow-hidden">
          <div className="flex justify-center items-center bg-[#FFF7DF] w-full h-[232px]">
            <div className="flex justify-center items-center w-[252px] h-[252px]">
              <div className="shrink-0 w-[252px] h-[252px] relative">
                <div className="shadow-[16.2px17.1px18px0rgba(255,255,255,0.50)inset] w-[244px] h-[210px] absolute left-[13px] top-[31px]">
                  <svg
                    width="209"
                    height="209"
                    viewBox="0 0 209 209"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[194px] h-[194px] absolute left-[50px] top-0 "
                  >
                    <g filter="url(#filter0_d_2049_23)">
                      <path
                        d="M86.766 201.347C73.5827 201.347 62.8949 190.659 62.8949 177.476C62.8949 176.523 62.9508 175.584 63.0595 174.66C63.5244 170.708 60.8617 166.337 56.8825 166.337H12.4825C9.56515 166.337 7.20021 163.972 7.20021 161.054L7.2002 116.651C7.2002 112.672 11.5727 110.009 15.5248 110.474C16.4488 110.582 17.3889 110.638 18.3421 110.638C31.5253 110.638 42.2119 99.9514 42.212 86.7682C42.212 73.5849 31.5253 62.8973 18.3421 62.8971C17.3888 62.8971 16.4486 62.9532 15.5245 63.0621C11.5724 63.5278 7.2002 60.8655 7.2002 56.8861L7.2002 12.4822C7.2002 9.56491 9.56514 7.19996 12.4824 7.19996L56.8852 7.19996C60.8643 7.19996 63.527 11.5717 63.0619 15.5235C62.9533 16.447 62.8974 17.3867 62.8974 18.3394C62.8976 31.5224 73.5843 42.2089 86.7672 42.2093C99.9505 42.2093 110.638 31.5226 110.638 18.3394C110.638 17.3867 110.582 16.447 110.474 15.5235C110.009 11.5717 112.671 7.19996 116.65 7.19996L161.056 7.19995C163.973 7.19995 166.338 9.56489 166.338 12.4822V56.8862C166.338 60.8653 170.709 63.5273 174.661 63.0618C175.584 62.9531 176.524 62.8971 177.476 62.8971C190.66 62.8971 201.347 73.5849 201.347 86.7682C201.347 99.9515 190.659 110.638 177.476 110.638C176.524 110.638 175.585 110.582 174.662 110.474C170.71 110.009 166.338 112.672 166.338 116.651V161.054C166.338 163.972 163.973 166.336 161.056 166.336H116.648C112.669 166.336 110.006 170.708 110.471 174.66C110.58 175.584 110.636 176.523 110.636 177.476C110.636 190.659 99.9492 201.347 86.766 201.347Z"
                        fill="url(#paint0_linear_2049_23)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2049_23"
                        x="0.000195026"
                        y="-4.91142e-05"
                        width="208.547"
                        height="208.547"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2049_23"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2049_23"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2049_23"
                        x1="104.274"
                        y1="7.19995"
                        x2="104.274"
                        y2="201.347"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F9AB00" />
                        <stop offset="1" stopColor="#FDE293" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="w-[187px] h-[187px] absolute -left-0 top-[23px]">
                    <div className="w-44 h-44 absolute left-0 top-[11px]"></div>
                  </div>
                  <div className="w-[131px] h-36 absolute left-14 top-[50px]">
                    <div className="w-[131px] h-36 absolute left-[131px] top-0">
                      <svg
                        width="93"
                        height="87"
                        viewBox="0 0 93 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[84px] h-[95px] absolute -left-[84px] top-0 "
                      >
                        <foreignObject
                          x="-1.8"
                          y="-1.8"
                          width="95.6313"
                          height="90.1283"
                        >
                          <div
                            className="backdrop-filter:blur(0.9px);clipPath:url(#bgblur_0_2049_32_clip_path);height:100%;width:100%"
                          ></div>
                        </foreignObject>
                        <path
                          data-figma-bg-blur-radius="1.8"
                          d="M90.1311 1.93423C86.6123 -1.52118 80.5685 -0.182006 74.1739 4.63998C68.3803 8.9039 38.0368 31.6959 22.1632 45.9667C11.0963 54.9324 2.49366 63.7306 0.619734 70.3624C-0.565721 74.5555 0.0451844 78.2174 1.64122 79.7825L6.78026 84.828C8.37612 86.3948 12.1836 87.0666 16.5869 86.0329C23.5516 84.3963 32.9354 76.3677 42.5561 65.9823C57.8255 51.1206 82.3352 22.6006 86.9227 17.1533C92.1098 11.1455 93.6501 5.38798 90.1311 1.93423Z"
                          fill="#F9AB00"
                          fillOpacity="0.6"
                        />
                        <defs>
                          <clipPath
                            id="bgblur_0_2049_32_clip_path"
                            transform="translate(1.8 1.8)"
                          >
                            <path d="M90.1311 1.93423C86.6123 -1.52118 80.5685 -0.182006 74.1739 4.63998C68.3803 8.9039 38.0368 31.6959 22.1632 45.9667C11.0963 54.9324 2.49366 63.7306 0.619734 70.3624C-0.565721 74.5555 0.0451842 78.2174 1.64123 79.7825L6.78026 84.828C8.37612 86.3948 12.1836 87.0666 16.5869 86.0329C23.5516 84.3963 32.9354 76.3677 42.5561 65.9823C57.8255 51.1206 82.3352 22.6005 86.9227 17.1533C92.1098 11.1455 93.6502 5.38798 90.1311 1.93423Z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="45"
                        height="52"
                        viewBox="0 0 45 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-[53px] absolute -left-[126px] top-[85px] "
                      >
                        <foreignObject
                          x="-1.8"
                          y="-1.8"
                          width="48.4647"
                          height="54.7448"
                        >
                          <div
                            className="backdrop-filter:blur(0.9px);clipPath:url(#bgblur_0_2049_33_clip_path);height:100%;width:100%"
                          ></div>
                        </foreignObject>
                        <path
                          data-figma-bg-blur-radius="1.8"
                          d="M30.2347 0.866243C23.5013 -1.12272 15.9894 0.305088 10.7186 5.23532C-1.91913 17.0565 -3.04436 39.419 5.56851 51.1448C5.56851 51.1448 6.61255 49.9184 10.086 47.7876C19.7178 41.8682 30.6933 40.9081 39.073 33.0689C44.3438 28.1367 46.0111 20.9732 44.0997 14.4777L30.2347 0.866243Z"
                          fill="#F9AB00"
                          fillOpacity="0.6"
                        />
                        <defs>
                          <clipPath
                            id="bgblur_0_2049_33_clip_path"
                            transform="translate(1.8 1.8)"
                          >
                            <path d="M30.2347 0.866243C23.5013 -1.12272 15.9894 0.305088 10.7186 5.23532C-1.91913 17.0565 -3.04436 39.419 5.56851 51.1448C5.56851 51.1448 6.61255 49.9184 10.086 47.7876C19.7178 41.8682 30.6933 40.9081 39.073 33.0689C44.3438 28.1367 46.0111 20.9732 44.0997 14.4777L30.2347 0.866243Z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-5 md:p-7 flex-col items-start gap-[18px] w-full overflow-hidden">
            <p className="text-[#1967D2] font-googleSans text-[11px] font-medium w-fit">
              Make it meaningful
            </p>
            <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
              Design &amp; creativity
            </p>
            <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
              Translate ideas into thoughtful experiences, from a first
              sketch to a prototype people can use.
            </p>
            <div className="bg-[#DADCE0] w-full h-px"></div>
            <p className="text-[#5F6368] font-googleSans text-[13px] w-full">
              UI&#x2F;UX · Visual storytelling · Prototyping
            </p>
            <div className="flex items-center gap-3 w-fit overflow-hidden">
              <p className="text-[#1967D2] font-googleSans text-base font-medium w-fit">
                Explore this track
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
                  d="M3.3335 10H16.566M16.566 10C16.566 10.32 16.4435 10.64 16.2002 10.8833L11.4585 15.625M16.566 10C16.566 9.68 16.4435 9.36 16.2002 9.11667L11.4585 4.375"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#1967D2"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start rounded-3xl border border-[#DADCE0] w-full h-full overflow-hidden">
          <div className="flex justify-center items-center bg-[#EAF5ED] w-full h-[232px]">
            <div className="flex pt-8 pr-0 pb-[21px] pl-5 justify-end items-center w-[257px] h-[257px]">
              <div className="shrink-0 shadow-[22.68px23.94px25.2px0rgba(255,255,255,0.50)inset] w-[242px] h-[204px] relative">
                <svg
                  width="255"
                  height="183"
                  viewBox="0 0 255 183"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[234px] h-[162px] absolute left-2 top-0 "
                >
                  <g filter="url(#filter0_d_2049_60)">
                    <path
                      d="M45.8317 120.65C45.8317 116.989 41.815 114.549 38.1851 115.104C36.9697 115.291 35.7248 115.387 34.4572 115.387C20.9944 115.387 10.0802 104.507 10.0801 91.0858C10.0801 77.6644 20.9943 66.7838 34.4572 66.7838C35.7249 66.7838 36.9698 66.8805 38.1851 67.0667C41.8151 67.6228 45.8316 65.183 45.8316 61.5218L45.8316 14.9404C45.8316 12.2561 48.0144 10.0801 50.707 10.0801L97.4346 10.0801C101.107 10.0801 103.555 14.0846 102.997 17.7034C102.81 18.9153 102.713 20.1568 102.713 21.4208C102.713 34.8422 113.627 45.7228 127.09 45.7228C140.553 45.7227 151.466 34.8422 151.466 21.4208C151.466 20.1568 151.37 18.9154 151.183 17.7035C150.625 14.0846 153.073 10.0801 156.745 10.0801L203.468 10.0801C206.161 10.0801 208.343 12.2561 208.343 14.9404V61.522C208.343 65.1834 212.36 67.6232 215.99 67.0668C217.206 66.8805 218.451 66.7838 219.719 66.7838C233.182 66.784 244.096 77.6645 244.096 91.0858C244.096 104.507 233.182 115.387 219.719 115.387C218.451 115.387 217.206 115.291 215.99 115.104C212.36 114.549 208.343 116.989 208.343 120.65V167.231C208.343 169.915 206.161 172.091 203.468 172.091L50.707 172.091C48.0144 172.091 45.8317 169.915 45.8317 167.231L45.8317 120.65Z"
                      fill="url(#paint0_linear_2049_60)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2049_60"
                      x="7.82013e-05"
                      y="7.82013e-05"
                      width="254.176"
                      height="182.171"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5.04" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2049_60"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2049_60"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_2049_60"
                      x1="127.088"
                      y1="10.0801"
                      x2="127.088"
                      y2="172.091"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#34A853" />
                      <stop offset="1" stopColor="#81C995" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="w-48 h-[174px] absolute left-0 top-[30px]">
                  <div className="w-48 h-[174px] absolute -left-0 top-0">
                    <div className="rounded-[1258.7px] bg-[#D9D9D9] w-[54px] h-2.5 absolute left-8 top-[141px]"></div>
                    <div className="rounded-[1258.7px] bg-[#D9D9D9] w-[67px] h-2.5 absolute left-8 top-[159px]"></div>
                    <div className="rounded-[1258.7px] bg-[#D9D9D9] w-[67px] h-2.5 absolute left-8 top-44"></div>
                  </div>
                </div>
                <svg
                  width="137"
                  height="96"
                  viewBox="0 0 137 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[104px] h-[63px] absolute left-[69px] top-[50px] "
                >
                  <g filter="url(#filter0_dd_2049_68)">
                    <path
                      d="M43.1371 25.3031L19.4108 37.5152C15.2755 39.6437 15.2414 45.5439 19.3518 47.72L43.1371 60.3122M78.8121 11.2507L58.1025 74.3657M93.7774 25.3031L117.504 37.5152C121.639 39.6437 121.673 45.5439 117.563 47.72L93.7774 60.3122"
                      strokeWidth="12.418"
                      strokeLinecap="round"
                      stroke="#34A853"
                      strokeOpacity="0.6"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_2049_68"
                      x="7.82013e-05"
                      y="3.91006e-05"
                      width="136.915"
                      height="95.6964"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.52" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2049_68"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5.04" />
                      <feGaussianBlur stdDeviation="5.04" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_2049_68"
                        result="effect2_dropShadow_2049_68"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_2049_68"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex p-5 md:p-7 flex-col items-start gap-[18px] w-full overflow-hidden">
            <p className="text-[#1967D2] font-googleSans text-[11px] font-medium w-fit">
              Bring ideas to life
            </p>
            <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
              Development
            </p>
            <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
              Learn the tools, write the code, and build useful things with
              people who enjoy figuring it out.
            </p>
            <div className="bg-[#DADCE0] w-full h-px"></div>
            <p className="text-[#5F6368] font-googleSans text-[13px] w-full">
              Web &amp; mobile · Cloud · AI foundations
            </p>
            <div className="flex items-center gap-3 w-fit overflow-hidden">
              <p className="text-[#1967D2] font-googleSans text-base font-medium w-fit">
                Explore this track
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
                  d="M3.3335 10H16.566M16.566 10C16.566 10.32 16.4435 10.64 16.2002 10.8833L11.4585 15.625M16.566 10C16.566 9.68 16.4435 9.36 16.2002 9.11667L11.4585 4.375"
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
    </div>
  );
}
