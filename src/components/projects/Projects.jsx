import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects({ selectedCategory }) {
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => {
          // check if category is an array
          if (Array.isArray(project.category)) {
            // check if selectedCategory is included in project.category
            return project.category.includes(selectedCategory);
          } else {
            return project.category === selectedCategory;
          }
        });

  return (
    <section className="section projects">
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            repoURL={project.repoURL}
            liveURL={project.liveURL}
            category={
              // if the category of the project is an array, let the category prop be "frontend" to show the GitHub button, otherwise, pass the project.category (the actual string)
              Array.isArray(project.category) ? "frontend" : project.category
            }
          />
        ))}
      </div>
    </section>
  );
}
