import Introduction from "./Introduction";
import Navigation from "./OverviewNav"
import TrackOverview from "./TrackOverview";
import Outcomes from "./Outcome";
import ProgramFormat from "./Format";
import LearningJourney from "./Journey";
import StartingPoint from "./StartingPoint";

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