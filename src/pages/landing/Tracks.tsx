import { useEffect, useMemo, useState } from "react";
import HyperLink from "../../components/HyperLink";
import SectionLabel from "../../components/SectionLabel";
import type { ApiResponse, TrackTypes } from "../../types/types";
import { fetchData } from "../../services/api";
import type { Track } from "../../data";

function TrackCard({
  id, 
  name,
  tagline,
  description,
  icon,
  color,
  skills,
  whatYouDo,
  exploreLink, 
  open
}: TrackTypes) {

  const randomSkills = useMemo(
    () => [...skills].sort(() => Math.random() - 0.5).slice(0, 3),
    [skills]
  );

  return (
    <div className="flex flex-col items-start rounded-3xl border border-[#DADCE0] w-full h-full overflow-hidden">
      <div className="w-full min-h-[232px]" style={{backgroundColor: color}}>
        <img className="size-full" src="" alt={icon} />
      </div>
      <div className="flex p-5 md:p-7 flex-col items-start gap-[18px] w-full overflow-hidden">
        <p className="text-[#1967D2] font-googleSans text-[11px] font-medium w-fit">
          {tagline}
        </p>
        <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
          {name}
        </p>
        <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
          {description}
        </p>
        <div className="bg-[#DADCE0] w-full h-px"></div>
        <p className="text-[#5F6368] font-googleSans text-[13px] w-full">
          {randomSkills.join(" • ")}
        </p>
        <HyperLink caption="Explore this track" />
      </div>
    </div>
  )
}

export default function Tracks() {
  const [tracks, setTracks] = useState<TrackTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await fetchData<ApiResponse<TrackTypes[]>>("/tracks");

        setTracks(response.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
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
        <HyperLink caption="See the overview" />
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
          whatYouDo={track.whatYouDo}
          exploreLink={track.exploreLink}
          open={track.open}
          />
        ))}
      </div>
    </div>
  );
}
