import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Track = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string;
  bg: string;
  illustration: ReactNode;
};

const tracks: Track[] = [
  {
    eyebrow: "Explore the why",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    tags: "Problem framing · User research · Product thinking",
    bg: "bg-[#EAF2FF]",
    illustration: (
      <>{/* PASTE ORIGINAL BLUE ILLUSTRATION (inside the 252x252 relative div) */}</>
    ),
  },
  {
    eyebrow: "Make it meaningful",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    tags: "UI/UX · Visual storytelling · Prototyping",
    bg: "bg-[#FFF7DF]",
    illustration: (
      <>{/* PASTE ORIGINAL YELLOW ILLUSTRATION */}</>
    ),
  },
  {
    eyebrow: "Bring ideas to life",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    tags: "Web & mobile · Cloud · AI foundations",
    bg: "bg-[#EAF5ED]",
    illustration: (
      <>{/* PASTE ORIGINAL GREEN ILLUSTRATION */}</>
    ),
  },
];

export default function TrackOverview() {
  return (
    <div className="flex py-20 px-24 flex-col items-start gap-9 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-[800px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <div className="w-[7px] h-[7px]"></div>
          <p className="text-[#5F6368] font-googleSans text-xs font-medium w-fit">
            Explore your interests
          </p>
        </div>
        <p className="text-[#242424] font-googleSans text-5xl font-bold leading-[1.12em] w-full">
          Three ways in. Plenty of ways forward.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          These pathways are starting points, not boxes. Follow one deeply or
          bring different skills together.
        </p>
      </div>

      <div className="flex items-start gap-6 w-full overflow-hidden">
        {tracks.map(({ eyebrow, title, description, tags, bg, illustration }) => (
          <div
            key={title}
            className="flex flex-col items-start rounded-3xl border border-[#DADCE0] w-full h-full overflow-hidden"
          >
            <div className={`flex justify-center items-center ${bg} w-full h-[232px]`}>
              <div className="shrink-0 w-[252px] h-[252px] relative">{illustration}</div>
            </div>
            <div className="flex p-7 flex-col items-start gap-[18px] w-full overflow-hidden">
              <p className="text-[#1967D2] font-googleSans text-[11px] font-medium w-fit">
                {eyebrow}
              </p>
              <p className="text-[#242424] font-googleSans text-[28px] font-bold leading-[1.12em] w-full">
                {title}
              </p>
              <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
                {description}
              </p>
              <div className="bg-[#DADCE0] w-full h-px"></div>
              <p className="text-[#5F6368] font-googleSans text-[13px] w-full">{tags}</p>
              <div className="flex items-center gap-3 w-fit overflow-hidden">
                <p className="text-[#1967D2] font-googleSans text-base font-medium w-fit">
                  Explore this track
                </p>
                <ArrowRight size={20} className="text-[#1967D2]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}