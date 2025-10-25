import Navbar from "./components/layout/NavBar/Nav";
import MobileMenu from "./components/layout/MobileMenu/MobileMenu";
import Hero from "./components/Hero/Hero";
import VerticalDivider from "./components/common/VerticalDivider/VerticalDivider";
import SectionHeading from "./components/common/SectionHeading/SectionHeading";
import TabButton from "./components/projects/TabButton/TabButton";
import Projects from "./components/projects/Projects";
// import ProjectCard from "./components/projects/ProjectCard/ProjectCard";
import WhatICanDo from "./components/skills/WhatICanDo";
import Technologies from "./components/Tech/Technologies";
import Contact from "./components/contact/Contact";
// import ProjectPopUp from "./components/projects/ProjectPopUp/ProjectPopUp";
import Footer from "./components/layout/Footer/Footer";
import { projects } from "./data/projects";
import { useState } from "react";

function App() {
  const isMobile = window.innerWidth < 768;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedCategory) {
    tabContent = (
      <div id="tab-content">
        <Projects selectedCategory={selectedCategory} />
      </div>
    );
  }

  return (
    <>
      {isMobile ? <MobileMenu /> : <Navbar />}
      <Hero />
      <VerticalDivider />
      <SectionHeading
        id="projects"
        title="Projects"
        headingCategory="stripes"
      />
      <section>
        <menu className="tabs">
          <TabButton
            isSelected={selectedCategory === "all"}
            onSelect={() => handleSelect("all")}
          >
            All
          </TabButton>
          <TabButton
            isSelected={selectedCategory === "frontend"}
            onSelect={() => handleSelect("frontend")}
          >
            Frontend
          </TabButton>
          <TabButton
            isSelected={selectedCategory === "uxui"}
            onSelect={() => handleSelect("uxui")}
          >
            UX/UI
          </TabButton>
        </menu>
        {tabContent}
      </section>
      <VerticalDivider />
      <SectionHeading
        id="tech"
        title="What I Use to Build Stuff"
        headingCategory="stripes"
      />
      <Technologies />
      <SectionHeading
        id="contact"
        title="Contact"
        headingCategory="underlined"
      />
      <Contact />
      <Footer />

      {/* <WhatICanDo
        title="Frontend Dev"
        description="I create responsive and visually appealing websites. I ensure that the user interface is intuitive and user-friendly."
      />
      <WhatICanDo
        title="UX/UI Design"
        description="Thoughtful design of both aesthetically pleasing and functional User Interfaces."
      /> */}
    </>
  );
}

export default App;
