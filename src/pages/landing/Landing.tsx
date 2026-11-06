import Hero from "./sections/Hero";
import ValueStrip from "./sections/ValueStrip";
import About from "./sections/About";
import Tracks from "./sections/Tracks";
import LearningFormats from "./sections/LearningFormats";
import ProjectBrief from "./sections/ProjectBrief";
import GetStarted from "./sections/GetStarted";
import InclusiveBanner from "./sections/InclusiveBanner";
import Faq from "./sections/Faq";
import CommunityStats from "./sections/CommunityStats";

export default function LandingGdgocUgm() {
  return (
    <div className="flex flex-col items-start bg-[#FFF] w-full min-h-screen overflow-hidden">
      <div className="flex flex-col items-start w-full">
        <Hero />
        <ValueStrip />
      </div>
      <div className="flex flex-col items-start w-full overflow-hidden">
        <CommunityStats />
        <About />
        <Tracks />
        <LearningFormats />
      </div>
      <div className="flex flex-col items-start w-full overflow-hidden">
        <ProjectBrief />
        <GetStarted />
        <InclusiveBanner />
        <Faq />
      </div>
      
    </div>
  );
}
