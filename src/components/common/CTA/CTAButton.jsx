import "./CTAButton.scss";

export default function CTAButton({ title, whatToDo }) {
  function handleClick() {
    if (whatToDo === "scrollToContact") {
      const contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else if (whatToDo === "openResume") {
      window.open("path/to/resume.pdf", "_blank");
    }
  }

  return (
    <button className="cta-button" onClick={handleClick}>
      <strong>{title}</strong>
    </button>
  );
}
