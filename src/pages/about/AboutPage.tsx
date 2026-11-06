import AboutIntroduction from "./AboutIntroduction";
import OurPurpose from "./OurPurpose";
import CommunityValues from "./CommunityValues";
import WaysToBelong from "./WaysToBelong";
import CommunityCommitment from "./CommunityCommitment";

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