import { useEffect, useMemo, useState } from "react";
import HyperLink from "../../../components/common/HyperLink";
import SectionLabel from "../../../components/common/SectionLabel";
import type { ApiResponse, TrackTypes } from "../../../types/types";
import { fetchData } from "../../../services/api";
import { TrackCard } from "../../../components/tracks/TrackCard";

export default function Tracks() {
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
        <HyperLink caption="See the overview" href="/overview"/>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 w-full overflow-hidden">
        {tracks.map((track, index) => (
          <TrackCard 
          id={track.id}
          name={track.name}
          tagline={track.tagline}
          description={track.description}
          icon={track.icon}
          color={track.color}
          skills={track.skills}
          what_you_do={track.what_you_do}
          explore_link={track.explore_link}
          open={track.open}
          />
        ))}
      </div>
    </div>
  );
}
