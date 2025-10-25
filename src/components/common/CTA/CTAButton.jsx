import "./CTAButton.scss";
import resume from "../../../assets/CV_Kutowinski_Lisa.pdf";

export default function CTAButton({ title, whatToDo }) {
  function handleClick() {
    if (whatToDo === "scrollToContact") {
      const contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else if (whatToDo === "openResume") {
      window.open(resume, "_blank");
    }
  }

  return (
    <button className="cta-button" onClick={handleClick}>
      <strong>{title}</strong>
    </button>
  );
}
