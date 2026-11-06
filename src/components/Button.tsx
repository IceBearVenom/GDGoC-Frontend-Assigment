import React from 'react'

type ButtonTypes = {
    cn?: string;
    caption: string;
    solid?: boolean;
}

const Button = ({cn, caption, solid = true}: ButtonTypes) => {

    if (solid) {
        return (
            <div className={`flex py-0 px-6 items-center gap-4 rounded-lg border border-[rgba(255,255,255,0.00)] bg-[#4284F4] w-fit h-[52px] overflow-hidden cursor-pointer ${cn}`}>
                <p className="text-[#FFF] text-base font-medium w-fit">
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
                    stroke="white"
                />
                </svg>
            </div>
        )
    }
 
    return (
        <div className="flex py-0 px-6 items-center gap-4 rounded-lg border border-[#DADCE0] bg-[#FFF] w-fit h-[52px] overflow-hidden">
            <p className="text-[#1967D2] text-base font-medium w-fit">
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

export default Button