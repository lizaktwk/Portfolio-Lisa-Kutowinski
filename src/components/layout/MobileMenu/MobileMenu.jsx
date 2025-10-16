import "./MobileMenu.scss";
import { useState } from "react";
// import { useEffect, useRef } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const handleClick = (sectionId) => {
    toggleMenu();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Dropdown Menu */}
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <div onClick={() => handleClick("home")}>Home</div>
        <div onClick={() => handleClick("projects")}>Projects</div>
        <div onClick={() => handleClick("tech")}>Tech</div>
        <div onClick={() => handleClick("contact")}>Contact</div>
      </nav>
    </>
  );
}
