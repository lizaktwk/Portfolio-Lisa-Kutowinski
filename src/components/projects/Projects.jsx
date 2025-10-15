import "./Projects.scss";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects({ selectedCategory }) {
  let filteredProjects = [];

  if (selectedCategory === "all") {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter(
      (project) => project.category === selectedCategory
    );
  }
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
          />
        ))}
      </div>
    </section>
  );
}
