import { useMemo, useState } from "react";
import type { TrackTypes } from "../../types/types";
import TrackPopUp from "./TrackPopUp";

export function TrackCard({
  id,
  name,
  tagline,
  description,
  icon,
  color,
  skills,
  what_you_do,
  explore_link,
  open,
}: TrackTypes) {

  const [showOverview, setShowOverview] = useState(false);

  const randomSkills = useMemo(
    () => [...skills]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3),
    [skills]
  );

  return (
    <>
      <div className="flex flex-col items-start rounded-3xl border border-[#DADCE0] w-full h-full overflow-hidden">

        {/* Image */}
        <div
          className="w-full min-h-[232px] flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span className="text-7xl">{icon}</span>
        </div>

        {/* Content */}
        <div className="flex p-5 md:p-7 flex-col items-start gap-[18px] w-full">

          <p className="text-[#1967D2] font-googleSans text-[11px] font-medium">
            {tagline}
          </p>

          <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em]">
            {name}
          </p>

          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em]">
            {description}
          </p>

          <div className="bg-[#DADCE0] w-full h-px" />

          <p className="text-[#5F6368] font-googleSans text-[13px]">
            {randomSkills.join(" • ")}
          </p>

          {/* Overview Button */}
          <button
            onClick={() => setShowOverview(true)}
            className="text-[#1967D2] font-medium text-sm hover:underline"
          >
            Explore this track →
          </button>
        </div>
      </div>

      {/* Popup */}
      {showOverview && (
        <TrackPopUp
          track={{
            id,
            name,
            tagline,
            description,
            icon,
            color,
            skills,
            what_you_do,
            explore_link,
            open,
          }}
          onClose={() => setShowOverview(false)}
        />
      )}
    </>
  );
}
