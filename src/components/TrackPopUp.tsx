import type { TrackTypes } from "../types/types";
import Button from "./Button";

interface TrackOverviewProps {
  track: TrackTypes;
  onClose: () => void;
}

export default function TrackPopUp({
  track,
  onClose,
}: TrackOverviewProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative flex min-h-[200px] items-center justify-center"
          style={{ backgroundColor: track.color }}
        >
          <span className="text-7xl">{track.icon}</span>

          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/80 text-xl hover:bg-white"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 p-6 md:p-8">
          <div>
            <p className="text-sm font-medium text-[#1967D2]">
              {track.tagline}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#242424]">
              {track.name}
            </h2>
          </div>

          <p className="leading-relaxed text-[#5F6368]">
            {track.description}
          </p>

          <div className="h-px w-full bg-[#DADCE0]" />

          {/* What You Do */}
          <div>
            <h3 className="mb-2 font-bold text-[#242424]">
              What you'll do
            </h3>

            <p className="text-[#5F6368] leading-relaxed">
              {track.what_you_do}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-3 font-bold text-[#242424]">
              Skills you'll develop
            </h3>

            <div className="flex flex-wrap gap-2">
              {track.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#F1F3F4] px-4 py-2 text-sm text-[#5F6368]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <Button caption="Explore this track" href="" />
        </div>
      </div>
    </div>
  );
}