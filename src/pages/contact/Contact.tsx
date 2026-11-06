import Introduction from "./sections/Introduction";
import Workspace from "./sections/Workspace";
import BeforeYouSend from "./sections/BeforeYouSent";

export default function Contact() {
  return (
    <div className="flex flex-col items-start w-full overflow-hidden">
      <Introduction />
      <Workspace />
      <BeforeYouSend />
    </div>
  );
}