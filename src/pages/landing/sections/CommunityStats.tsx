import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../../../components/common/SectionLabel";
import { fetchData } from "../../../services/api";
import type { ApiResponse } from "../../../types/types";

// Move this into types/types.ts if you prefer to keep all types together.
type CommunityStatsTypes = {
  community_members: number;
  workshops_held: number;
  projects_shipped: number;
  active_tracks: number;
  university: string;
  city: string;
  country: string;
  founded_year: number;
  social: {
    instagram: string;
    linkedin: string;
    github: string;
  };
  tagline: string;
};

export default function CommunityStats() {
  const [stats, setStats] = useState<CommunityStatsTypes | null>(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetchData<ApiResponse<CommunityStatsTypes>>(
          "/stats" // change to your real endpoint
        );
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch community stats:", error);
      }
    };

    getStats();
  }, []);

  // Nothing to show until the data arrives (or if the request fails)
  if (!stats) return null;

  const items = [
    { value: stats.community_members, suffix: "+", label: "Community members", featured: true },
    { value: stats.workshops_held, suffix: "+", label: "Workshops held" },
    { value: stats.projects_shipped, suffix: "+", label: "Projects shipped" },
    { value: stats.active_tracks, suffix: "", label: "Active learning tracks" },
  ];

  const socials = [
    {
      name: "Instagram",
      handle: stats.social.instagram,
      href: `https://www.instagram.com/${stats.social.instagram.replace("@", "")}/`,
    },
    {
      name: "LinkedIn",
      handle: stats.social.linkedin,
      href: `https://www.linkedin.com/company/${stats.social.linkedin}`,
    },
    {
      name: "GitHub",
      handle: stats.social.github,
      href: `https://github.com/${stats.social.github}`,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 xl:gap-24 py-14 md:py-[88px] px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] bg-[#F1F3F4] w-full overflow-hidden">
      {/* Left: tagline, where we are, where to find us */}
      <div className="flex flex-col items-start gap-6 w-full lg:w-[340px] xl:w-[400px] lg:shrink-0">
        <SectionLabel children="COMMUNITY AT A GLANCE" />
        <h2 className="text-[#1967D2] font-googleSans text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.12em] w-full">
          {stats.tagline}
        </h2>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          Based at {stats.university} in {stats.city}, {stats.country}. Growing since{" "}
          {stats.founded_year}.
        </p>

        <ul className="flex flex-wrap gap-3 w-full">
          {socials.map(({ name, handle, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}: ${handle}`}
                className="flex items-center gap-2 rounded-full border border-[#DADCE0] bg-white px-4 py-2.5 font-googleSans text-sm font-medium text-[#1967D2] transition-colors hover:bg-[#EAF2FF]"
              >
                {name}
                <ArrowUpRight size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: the numbers */}
      <dl className="grid grid-cols-2 gap-4 md:gap-6 w-full min-w-0">
        {items.map(({ value, suffix, label, featured }) => (
          <div
            key={label}
            className={`flex flex-col gap-2 rounded-3xl p-5 md:p-8 min-w-0 ${
              featured
                ? "col-span-2 bg-[#EAF2FF]"
                : "bg-white border border-[#DADCE0]"
            }`}
          >
            <dd
              className={`order-first font-googleSans font-bold leading-none text-[#1967D2] ${
                featured ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
              }`}
            >
              {value.toLocaleString()}
              {suffix}
            </dd>
            <dt className="text-[#5F6368] font-googleSans text-sm md:text-base leading-[1.55em]">
              {label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
