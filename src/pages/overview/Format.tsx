import { useEffect, useState } from "react";
import type { ApiResponse, FormatsTypes } from "../../types/types";
import { fetchData } from "../../services/api";
import { formatTitle } from "../../utils/textFormat";
import HyperLink from "../../components/HyperLink";

function ProgramFormatCard({
    id,
    name,
    description,
    icon,
    cta
}: FormatsTypes) {
    return (
        <div
            key={id}
            className="flex p-5 md:p-7 items-start gap-4 md:gap-6 rounded-3xl bg-[#FFF] w-full overflow-hidden"
        >
            <div
            className={`flex shrink-0 justify-center items-center rounded-[14px] ${icon} w-[52px] h-[52px] overflow-hidden`}
            >
                <p className="size-full text-4xl">{icon}</p>
            </div>
            <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
                <p className="text-[#242424] font-googleSans text-2xl md:text-[27px] font-bold leading-[1.12em] w-full">
                    {name}
                </p>
                <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
                    {description}
                </p>
                <HyperLink 
                caption={formatTitle(cta)}
                href=""
                />
            </div>
        </div>
    )
} 

export default function ProgramFormat() {
    const [formats, setFormats] = useState<FormatsTypes[]>([]);
    
    useEffect(() => {
        const getFormats = async () => {
            try {
                const response = await fetchData<ApiResponse<FormatsTypes[]>>("/formats");
                setFormats(response.data);
            } catch (error) {
                console.error("Failed to fetch values:", error);
            }
        };
    
        getFormats();
    }, []);

    return (
        <div className="flex py-14 md:py-20 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] flex-col items-start gap-9 bg-[#F1F3F4] w-full overflow-hidden">
            <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[800px] overflow-hidden">
                <div className="flex items-center gap-2.5 w-fit overflow-hidden">
                    <div className="w-[7px] h-[7px]"></div>
                    <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">Ways to learn</p>
                </div>
                <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
                    The format changes. The curiosity stays.
                </p>
                <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
                    Explore the kinds of experiences that help you move from
                    understanding to doing.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {formats.map(({ id, name, description, icon, cta }) => (
                    <ProgramFormatCard key={id} 
                    id={id}
                    name={name}
                    description={description}
                    icon={icon}
                    cta={cta}
                    />
                ))}
            </div>
        </div>
    );
}