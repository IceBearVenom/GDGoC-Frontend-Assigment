import React from 'react'

type HyperLinkTypes = {
    caption: string;
}

const HyperLink = ({caption}: HyperLinkTypes) => {
  return (
    <div className="flex items-center gap-3 w-fit overflow-hidden">
        <p className="text-[#1967D2] font-googleSans text-base font-medium w-fit">
            {caption}
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
  )
}

export default HyperLink