import AboutIntroduction from "./sections/AboutIntroduction";
import OurPurpose from "./sections/OurPurpose";
import CommunityValues from "./sections/CommunityValues";
import WaysToBelong from "./sections/WaysToBelong";
import CommunityCommitment from "./sections/CommunityCommitment";

export default function AboutPage() {
  return (
    <div id="about" className="flex flex-col items-start w-full overflow-hidden">
      <AboutIntroduction />
      <OurPurpose />
      <CommunityValues />
      <WaysToBelong />
      <CommunityCommitment />
    </div>
  );
}