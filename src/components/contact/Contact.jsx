import "./Contact.scss";
import CTAButton from "../common/CTA/CTAButton";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card" id="resume-card">
        <p>Are you hiring?</p>
        <p>Check out</p>
        <h2>My Resume</h2>
        <CTAButton>View Resume</CTAButton>
      </div>
      <div className="contact-card" id="email-card">
        <h2>Let's Start a Project together!</h2>
        <button>Copy my email address</button>
      </div>
    </div>
  );
}
