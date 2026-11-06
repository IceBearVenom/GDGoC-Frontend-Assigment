import Introduction from "./sections/Introduction";
import Navigation from "./sections/OverviewNav"
import TrackOverview from "./sections/TrackOverview";
import Outcomes from "./sections/Outcome";
import ProgramFormat from "./sections/Format";
import LearningJourney from "./sections/Journey";
import StartingPoint from "./sections/StartingPoint";

export default function ProgramsAndLearningTracks() {
  return (
    <div className="flex flex-col items-start w-full overflow-hidden">
      <Introduction />
      <Navigation />
      <TrackOverview />
      <Outcomes />
      <ProgramFormat />
      <LearningJourney />
      <StartingPoint />
    </div>
  );
}