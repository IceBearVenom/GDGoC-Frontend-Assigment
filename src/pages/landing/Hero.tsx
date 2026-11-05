import ScaleToFit from "../../components/ScaleToFit";
import Button from "../../components/Button"
import SectionLabel from "../../components/SectionLabel";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row pt-10 md:pt-[72px] px-5 md:px-10 xl:pr-16 xl:pl-24 pb-10 md:pb-16 items-center gap-10 w-full">
      <div className="flex flex-col items-start gap-5 md:gap-7 w-full lg:flex-1 lg:min-w-0 lg:max-w-[620px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="GDGOC UGM • 2026&#x2F;2027"/>
        </div>
        <p className="text-[#1967D2] text-5xl md:text-6xl xl:text-[80px] font-bold leading-[1.05em] w-full">
          Big ideas. <br />Built together.
        </p>
        <p className="text-[#5F6368] text-lg md:text-[21px] font-bold leading-[1.55em] w-full">
          A place for curious minds at Universitas Gadjah Mada to learn,
          connect, and build technology that matters.
        </p>
        <div className="flex flex-wrap items-start gap-3 w-fit overflow-hidden">
          <Button caption="Find your learning track" />
          <Button caption="Get to know us" solid={false}/>
        </div>
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <div className="flex items-start -space-x-[3px] w-fit overflow-hidden">
            <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="text-[#5F6368] text-sm w-fit">
            Different backgrounds. A shared curiosity.
          </p>
        </div>
      </div>
      <ScaleToFit width={620} height={530} className="lg:flex-1 lg:min-w-0">
        <div className="rounded-[32px] bg-[#EAF2FF] w-[620px] h-[530px] absolute left-0 top-0 overflow-hidden">
          <div className="rounded-[300px] bg-[#FDE293] w-[300px] h-[300px] absolute -left-[100px] top-[318px]"></div>
          <div className="rounded-[440px] bg-[#8AB4F8] w-[440px] h-[440px] absolute left-[341px] -top-[100px]"></div>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[475px] top-[376px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[376px] top-[376px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[277px] top-[376px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[178px] top-[376px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[79px] top-[376px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="76"
            height="96"
            viewBox="0 0 76 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute -left-5 top-[376px] "
          >
            <rect
              x="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[475px] top-[277px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[376px] top-[277px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[277px] top-[277px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[178px] top-[277px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[79px] top-[277px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="76"
            height="96"
            viewBox="0 0 76 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute -left-5 top-[277px] "
          >
            <rect
              x="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[475px] top-[178px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[376px] top-[178px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[277px] top-[178px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[178px] top-[178px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[79px] top-[178px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="76"
            height="96"
            viewBox="0 0 76 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute -left-5 top-[178px] "
          >
            <rect
              x="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[475px] top-[79px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[376px] top-[79px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[277px] top-[79px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[178px] top-[79px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[79px] top-[79px] "
          >
            <rect
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="76"
            height="96"
            viewBox="0 0 76 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute -left-5 top-[79px] "
          >
            <rect
              x="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="76"
            viewBox="0 0 96 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[475px] -top-5 "
          >
            <rect
              y="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="76"
            viewBox="0 0 96 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[376px] -top-5 "
          >
            <rect
              y="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="76"
            viewBox="0 0 96 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[277px] -top-5 "
          >
            <rect
              y="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="76"
            viewBox="0 0 96 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[178px] -top-5 "
          >
            <rect
              y="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="96"
            height="76"
            viewBox="0 0 96 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute left-[79px] -top-5 "
          >
            <rect
              y="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 absolute -left-5 -top-5 "
          >
            <rect
              x="-20"
              y="-20"
              width="95.94"
              height="95.94"
              rx="10.3384"
              fill="white"
              fillOpacity="0.01"
            />
          </svg>
        </div>
        <div className="flex pt-0.5 pr-[3px] pb-[3px] pl-0.5 justify-center items-center w-[243px] h-[243px] absolute left-[18px] top-0.5">
          <div className="shrink-0 w-[238px] h-[238px] relative">
            <div className="shadow-[21.42px22.61px23.8px0rgba(255,255,255,0.50)inset] w-[211px] h-[182px] absolute left-[30px] top-[30px]">
              <svg
                width="202"
                height="202"
                viewBox="0 0 202 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[182px] h-[182px] absolute left-[29px] top-0 "
              >
                <g filter="url(#filter0_d_2049_160)">
                  <path
                    d="M158.757 56.9053C158.757 60.2778 162.446 62.5256 165.78 62.0135C166.896 61.8421 168.039 61.7531 169.203 61.7531C181.566 61.7532 191.589 71.7754 191.589 84.1384C191.589 96.5016 181.567 106.524 169.203 106.524C168.039 106.524 166.896 106.435 165.779 106.264C162.446 105.751 158.757 107.999 158.757 111.372V154.28C158.757 156.753 156.753 158.757 154.28 158.757H111.371C107.999 158.757 105.751 162.446 106.264 165.78C106.435 166.896 106.524 168.04 106.524 169.204C106.524 181.567 96.5022 191.59 84.139 191.59C71.7758 191.59 61.7531 181.567 61.7531 169.204C61.7531 168.04 61.8422 166.896 62.0138 165.78C62.5262 162.446 60.2787 158.757 56.906 158.757H13.9971C11.5245 158.757 9.52002 156.753 9.52002 154.28L9.52002 13.9971C9.52002 11.5245 11.5245 9.52002 13.9971 9.52002H57.1211C60.5132 9.52002 62.766 13.2522 62.2304 16.6019C62.045 17.7611 61.9487 18.9501 61.9487 20.1616C61.9487 32.5248 71.9714 42.5475 84.3346 42.5475C96.6978 42.5475 106.72 32.5248 106.72 20.1616C106.72 18.9501 106.624 17.7612 106.438 16.602C105.903 13.2523 108.156 9.52002 111.548 9.52002H154.28C156.753 9.52002 158.757 11.5245 158.757 13.9971V56.9053Z"
                    fill="url(#paint0_linear_2049_160)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2049_160"
                    x="1.90735e-05"
                    y="1.90735e-05"
                    width="201.109"
                    height="201.11"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.76" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2049_160"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2049_160"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2049_160"
                    x1="100.554"
                    y1="9.52002"
                    x2="100.554"
                    y2="191.59"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4284F4" />
                    <stop offset="1" stopColor="#8AB4F8" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="168"
                height="168"
                viewBox="0 0 168 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-[149px] h-[149px] absolute left-0 top-[30px] "
              >
                <g filter="url(#filter0_dd_2049_162)">
                  <use
                    xlinkHref="#stroke0_2049_162"
                    fill="white"
                    fillOpacity="0.55"
                  />
                  <mask id="stroke1_2049_162" fill="white">
                    <use xlinkHref="#stroke0_2049_162" />
                  </mask>
                  <path
                    d="M24.395 4.76001C16.1797 4.76001 9.52002 11.4197 9.52002 19.635V138.635C9.52002 146.85 16.1797 153.51 24.395 153.51H143.395C151.61 153.51 158.27 146.85 158.27 138.635V19.635C158.27 11.4197 151.61 4.76001 143.395 4.76001H24.395Z"
                    strokeWidth="2.38"
                    stroke="white"
                    mask="url(#stroke1_2049_162)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_2049_162"
                    x="1.90735e-05"
                    y="9.53674e-06"
                    width="167.79"
                    height="167.79"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.38" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2049_162"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.76" />
                    <feGaussianBlur stdDeviation="4.76" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_2049_162"
                      result="effect2_dropShadow_2049_162"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_2049_162"
                      result="shape"
                    />
                  </filter>
                  <path
                    id="stroke0_2049_162"
                    d="M24.395 4.76001C16.1797 4.76001 9.52002 11.4197 9.52002 19.635V138.635C9.52002 146.85 16.1797 153.51 24.395 153.51H143.395C151.61 153.51 158.27 146.85 158.27 138.635V19.635C158.27 11.4197 151.61 4.76001 143.395 4.76001H24.395Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </defs>
              </svg>
              <div className="w-[152px] h-[125px] absolute left-[15px] top-[49px]">
                <svg
                  width="119"
                  height="90"
                  viewBox="0 0 119 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[119px] h-[89px] absolute left-0 top-[11px] "
                >
                  <path
                    d="M111.562 0C115.67 0 119 3.32995 119 7.4375C119 11.545 115.67 14.875 111.562 14.875H7.4375C3.32995 14.875 0 11.545 0 7.4375C0 3.32995 3.32995 0 7.4375 0H111.562ZM111.562 37.1875C115.67 37.1875 119 40.5175 119 44.625C119 48.7325 115.67 52.0625 111.562 52.0625H7.4375C3.32995 52.0625 0 48.7325 0 44.625C0 40.5175 3.32995 37.1875 7.4375 37.1875H111.562ZM119 81.8125C119 77.705 115.67 74.375 111.562 74.375H7.4375C3.32995 74.375 0 77.705 0 81.8125C0 85.92 3.32995 89.25 7.4375 89.25H111.562C115.67 89.25 119 85.92 119 81.8125Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>
                <div className="w-[125px] h-[125px] absolute left-[152px] top-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[49px] pr-0 pb-8 pl-[31px] justify-end items-center w-[393px] h-[393px] absolute left-[186px] top-[85px]">
          <div className="shrink-0 shadow-[34.65px36.575px38.5px0rgba(255,255,255,0.50)inset] w-[370px] h-[312px] relative">
            <svg
              width="389"
              height="279"
              viewBox="0 0 389 279"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[358px] h-[248px] absolute left-[13px] top-0 "
            >
              <g filter="url(#filter0_d_2049_179)">
                <path
                  d="M70.0204 184.326C70.0204 178.732 63.8839 175.005 58.3381 175.854C56.4813 176.138 54.5794 176.286 52.6428 176.286C32.0746 176.286 15.4001 159.664 15.3999 139.159C15.3999 118.654 32.0744 102.031 52.6428 102.031C54.5794 102.031 56.4814 102.178 58.3382 102.463C63.8839 103.313 70.0204 99.585 70.0204 93.9915L70.0204 22.8255C70.0204 18.7245 73.3551 15.4 77.4688 15.4L148.858 15.4C154.469 15.4 158.208 21.518 157.356 27.0468C157.07 28.8983 156.922 30.795 156.922 32.7262C156.922 53.2311 173.597 69.8542 194.165 69.8542C214.733 69.8541 231.407 53.231 231.407 32.7262C231.407 30.795 231.259 28.8984 230.973 27.0469C230.121 21.5181 233.861 15.4 239.472 15.4L310.854 15.4C314.967 15.4 318.302 18.7245 318.302 22.8255V93.9919C318.302 99.5856 324.439 103.313 329.985 102.463C331.842 102.178 333.745 102.031 335.682 102.031C356.25 102.031 372.924 118.654 372.924 139.159C372.924 159.663 356.25 176.286 335.682 176.286C333.745 176.286 331.842 176.138 329.985 175.854C324.439 175.005 318.302 178.733 318.302 184.326V255.491C318.302 259.592 314.967 262.916 310.854 262.916L77.4688 262.916C73.3552 262.916 70.0204 259.592 70.0204 255.491L70.0204 184.326Z"
                  fill="url(#paint0_linear_2049_179)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2049_179"
                  x="-9.82285e-05"
                  y="2.38419e-05"
                  width="388.324"
                  height="278.316"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2049_179"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2049_179"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2049_179"
                  x1="194.162"
                  y1="15.4"
                  x2="194.162"
                  y2="262.916"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#34A853" />
                  <stop offset="1" stopColor="#81C995" />
                </linearGradient>
              </defs>
            </svg>
            <div className="w-[294px] h-[266px] absolute left-0 top-[46px]">
              <div className="w-[294px] h-[266px] absolute -left-0 top-0">
                <div className="rounded-[1923.1px] bg-[#D9D9D9] w-[83px] h-[15px] absolute left-12 top-[216px]"></div>
                <div className="rounded-[1923.1px] bg-[#D9D9D9] w-[102px] h-[15px] absolute left-12 top-[243px]"></div>
                <div className="rounded-[1923.1px] bg-[#D9D9D9] w-[102px] h-[15px] absolute left-12 top-[270px]"></div>
              </div>
            </div>
            <svg
              width="210"
              height="147"
              viewBox="0 0 210 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[159px] h-24 absolute left-[105px] top-[76px] "
            >
              <g filter="url(#filter0_dd_2049_187)">
                <path
                  d="M65.9036 38.6574L29.6551 57.3148C23.3372 60.5666 23.2851 69.5808 29.565 72.9054L65.9036 92.1435M120.407 17.1885L88.7674 113.614M143.271 38.6574L179.519 57.3148C185.837 60.5666 185.889 69.5808 179.609 72.9054L143.271 92.1435"
                  strokeWidth="18.972"
                  strokeLinecap="round"
                  stroke="#34A853"
                  strokeOpacity="0.6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_2049_187"
                  x="-9.82285e-05"
                  y="-4.91142e-05"
                  width="209.175"
                  height="146.203"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="3.85" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2049_187"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="7.7" />
                  <feGaussianBlur stdDeviation="7.7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_2049_187"
                    result="effect2_dropShadow_2049_187"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_2049_187"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="inline-flex py-2.5 px-4 items-center gap-2 rounded-[100px] bg-[#FFF] absolute left-[300px] top-[455px] overflow-hidden">
          <div className="w-2 h-2 absolute left-4 top-3.5"></div>
          <p className="text-[#5F6368] text-xs font-bold absolute left-8 top-2.5">
            Built on curiosity. Rooted in UGM.
          </p>
        </div>
        <div className="inline-flex py-3.5 px-5 items-start rounded-lg border border-[#DADCE0] bg-[#FFF] absolute left-6 top-[356px] overflow-hidden">
          <p className="text-[#242424] text-[23px] font-bold absolute left-5 top-3.5">
            hello, possibilities_
          </p>
        </div>
      </ScaleToFit>
    </div>
  );
}
