import { ArrowRight } from "lucide-react";
import ImageFrame from "../../components/ImageFrame";
import SectionLabel from "../../components/SectionLabel";

const AboutIntroduction = () => {
  return (
    <section className="hero container" id="about">
      <div className="">
        <SectionLabel>ABOUT GDGOC UGM</SectionLabel>
        <h1>Built by students.<br /><span>For what's next.</span></h1>
        <p>
          We're a community of learners and makers at Universitas Gadjah Mada, connected by curiosity and the belief that technology can do good.
        </p>
        <div className="hero-note">
          UNIVERSITAS GADJAH MADA · 2026/2027
        </div>
      </div>
      <div className="hero-visual">
        <ImageFrame className="hero-image h-[400px]" label="Hero illustration placeholder" />
      </div>
    </section>
  )
}

export default AboutIntroduction