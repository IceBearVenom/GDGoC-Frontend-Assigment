import Hero from "./Hero";
import ValueStrip from "./ValueStrip";
import About from "./About";
import Tracks from "./Tracks";
import LearningFormats from "./LearningFormats";
import ProjectBrief from "./ProjectBrief";
import GetStarted from "./GetStarted";
import InclusiveBanner from "./InclusiveBanner";
import Faq from "./Faq";

export default function LandingGdgocUgm() {
  return (
    <div className="flex flex-col items-start bg-[#FFF] w-full min-h-screen overflow-hidden">
      <div className="flex flex-col items-start w-full">
        <Hero />
        <ValueStrip />
      </div>
      <div className="flex flex-col items-start w-full overflow-hidden">
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
