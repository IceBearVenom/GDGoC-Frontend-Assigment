import { useEffect, useState } from "react";
import { fetchData } from "../../../services/api";
import type { ApiResponse, TrackTypes } from "../../../types/types";
import { TrackCard } from "../../../components/tracks/TrackCard";
import SectionLabel from "../../../components/common/SectionLabel";

export default function TrackOverview() {

    const [tracks, setTracks] = useState<TrackTypes[]>([]);

    useEffect(() => {
        const getTracks = async () => {
            try {
                const response = await fetchData<ApiResponse<TrackTypes[]>>("/tracks");
                setTracks(response.data);
            } catch (error) {
                console.error("Failed to fetch values:", error);
            }
        };

        getTracks();
    }, []);

    return (
        <div className="flex py-14 md:py-20 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] flex-col items-start gap-9 w-full overflow-hidden">
        <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[800px] overflow-hidden">
            <div className="flex items-center gap-2.5 w-fit overflow-hidden">
                <SectionLabel children="EXPLORE YOUR INTERESTS" />
            </div>
            <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
            Three ways in. Plenty of ways forward.
            </p>
            <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
            These pathways are starting points, not boxes. Follow one deeply or
            bring different skills together.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {tracks.map(({ id, name, tagline, description, icon, color, skills, what_you_do, explore_link, open }) => (
            <TrackCard key={id} 
            id={id}
            name={name}
            tagline={tagline}
            description={description}
            icon={icon}
            color={color}
            skills={skills}
            what_you_do={what_you_do}
            explore_link={explore_link}
            open={open}
            />
            ))}
        </div>
        </div>
    );
}