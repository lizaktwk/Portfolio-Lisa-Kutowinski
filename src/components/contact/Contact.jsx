import "./Contact.scss";
import CTAButton from "../common/CTA/CTAButton";
import { useRef } from "react";
import confetti from "canvas-confetti";

export default function Contact() {
  const emailBtnRef = useRef(null);
  const canvas = useRef(null);

  function copyEmail() {
    navigator.clipboard.writeText("lisa.ktwk@gmail.com");
    // change the button text to "Copied!" for 2 seconds
    const button = emailBtnRef.current;
    button.innerText = "Copied!🎉";
    button.style.setProperty("--before-opacity", "1");

    // confetti pop!
    canvas.confetti =
      canvas.confetti || confetti.create(canvas.current, { resize: true });
    canvas.confetti({
      particleCount: 50,
      startVelocity: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ff45ec", "#1ac5c5", "#ffffff"],
    });

    setTimeout(() => {
      button.innerText = "Copy my email address";
      button.style.setProperty("--before-opacity", "0");
    }, 5000);
  }

  return (
    <div className="contact-container">
      <div className="contact-card" id="resume-card">
        <p>Are you hiring?</p>
        <p>Check out</p>
        <h2>My Resume</h2>
        <CTAButton title="View Resume" whatToDo="openResume" />
      </div>
      <div className="contact-card" id="email-card">
        <h2>Let's Start a Project together!</h2>
        <button ref={emailBtnRef} onClick={copyEmail}>
          Copy my email address
        </button>
        <canvas ref={canvas} className="confetti-canvas" />
      </div>
    </div>
  );
}
