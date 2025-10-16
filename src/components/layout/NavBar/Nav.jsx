import "./Nav.scss";
import { useEffect, useRef } from "react";

export default function Nav() {
  // make the nav bar disappear when scrolling down and reappear when scrolling up
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        nav.classList.remove("hidden");
      } else {
        nav.classList.add("hidden");
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav ref={navRef}>
      <div id="nav-left" onClick={() => handleClick("home")}>
        Home
      </div>
      <div className="nav-center" onClick={() => handleClick("projects")}>
        Projects
      </div>
      <div className="nav-center" onClick={() => handleClick("tech")}>
        Tech
      </div>
      <div id="nav-right" onClick={() => handleClick("contact")}>
        Contact
      </div>
    </nav>
  );
}
