import Introduction from "./Introduction";
import Workspace from "./Workspace";
import BeforeYouSend from "./BeforeYouSent";

export default function Contact() {
  return (
    <div className="flex flex-col items-start w-full overflow-hidden">
      <Introduction />
      <Workspace />
      <BeforeYouSend />
    </div>
  );
}