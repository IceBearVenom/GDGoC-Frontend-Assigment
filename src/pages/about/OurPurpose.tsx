import { ArrowRight } from "lucide-react";
import SectionLabel from "../../components/SectionLabel";

const OurPurpose = () => {
  return (
    <section className="learning-section container section-pad bg-[#f1f3f4]" id="about">
        <div className="about-heading">
            <SectionLabel>WHY WE COME TOGETHER</SectionLabel>
            <h2>A bridge from<br />
                <p className="text-blue-500">"I wonder"</p>to<br />
                "I made this."
            </h2>
            <a className="text-link" href="#contact">More about GDGOC UGM <ArrowRight size={13} /></a>
        </div>
        <div className="about-copy">
            <p className="lead">
            Google Developer Groups on Campus, Universitas Gadjah Mada brings
            students together around one simple idea: we can go further when
            we learn with each other.
            </p>
            <p>
            From your first line of code to your next project idea, there's
            room to ask questions, try something new, and learn by doing.
            </p>
            <div className="tag-list">
            <span>Student-led</span>
            <span>Peer-powered</span>
            <span>Curiosity-first</span>
            </div>
        </div>
    </section>
  )
}

export default OurPurpose