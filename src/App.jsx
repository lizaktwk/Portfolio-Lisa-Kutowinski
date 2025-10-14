import Navbar from "./components/layout/NavBar/Nav";
import Hero from "./components/Hero/Hero";
import TabButton from "./components/projects/TabButton/TabButton";
import Projects from "./components/projects/Projects";
import ProjectCard from "./components/projects/ProjectCard/ProjectCard";
import { projects } from "./data/projects";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleSelect = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
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
      <Navbar />
      <Hero />
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
      {/* <Projects /> */}

      {/* <div>
        Icon Links:
        <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">
          Eye icons created by Gregor Cresnar - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/info" title="info icons">
          Info icons created by Freepik - Flaticon
        </a>
      </div> */}
    </>
  );
}

export default App;
