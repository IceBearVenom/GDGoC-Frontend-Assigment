import { useEffect, useState } from "react";
import type { ApiResponse, JourneyTypes } from "../../types/types";
import { formatNumber } from "../../utils/textFormat";
import { fetchData } from "../../services/api";
import SectionLabel from "../../components/SectionLabel";

function LearningJourneyMap({
    step,
    id,
    title,
    description
}: JourneyTypes) {
    return (
        <div key={id} className="flex flex-col items-start gap-5 w-full overflow-hidden">
            <div className="flex justify-between items-start w-full overflow-hidden">
                <p className="text-[#1967D2] font-googleSans text-3xl md:text-[38px] font-bold w-fit">
                    {formatNumber(step)}
                </p>
            </div>
            <div className="bg-[#DADCE0] w-full h-px"></div>
            <p className="text-[#242424] font-googleSans text-2xl md:text-[26px] font-bold leading-[1.12em] w-full">
                {title}
            </p>
            <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
                {description}
            </p>
        </div>
    )
}

export default function LearningJourney() {
    const [steps, setSteps] = useState<JourneyTypes[]>([]);
    
        useEffect(() => {
            const getsteps = async () => {
                try {
                    const response = await fetchData<ApiResponse<JourneyTypes[]>>("/journey");
                    setSteps(response.data);
                } catch (error) {
                    console.error("Failed to fetch values:", error);
                }
            };
    
        getsteps();
    }, []);

    return (
        <div className="flex py-14 md:py-20 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] flex-col items-start gap-10 w-full overflow-hidden">
        <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[812px] overflow-hidden">
            <div className="flex items-center gap-2.5 w-fit overflow-hidden">
            <SectionLabel children="PROGRESS, NOT PERFECTION" />
            </div>
            <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
            A journey you can keep building on.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 w-full">
            {steps.map(({ step, id, title, description }) => (
                <LearningJourneyMap key={id} 
                step={step}
                id={id}
                title={title}
                description={description}
                />
            ))}
        </div>
        </div>
    );
}