import "./Hero.scss";
import profileImg from "../../assets/profile.png";
import CTAButton from "../common/CTA/CTAButton";

export default function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="hero-content">
        <h1>
          Frontend <br />
          Developer
        </h1>
        <p>Hi! I am Liza.</p>
        <p>
          {" "}
          I design and develop user-friendly{" "}
          <span>
            <strong>web applications.</strong>
          </span>
        </p>
        <img src={profileImg} alt="This is Me" />
        <CTAButton title="Get in Touch" whatToDo="scrollToContact" />
      </div>
    </section>
  );
}
