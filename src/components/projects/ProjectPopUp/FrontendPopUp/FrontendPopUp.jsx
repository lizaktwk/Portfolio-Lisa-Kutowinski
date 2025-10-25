import "./FrontendPopUp.scss";
import { projects } from "../../../../data/projects.js";
import githubIcon from "../../../../assets/icons/github-icon.png";
import eyeIcon from "../../../../assets/icons/eye-icon.png";

export default function FrontendPopUp({ projectTitle }) {
  const project = projects.find((p) => p.title === projectTitle);

  return (
    <>
      <h3>Features</h3>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="project-details-btn-container">
        <button onClick={() => window.open(project.repoURL, "_blank")}>
          Open on GitHub
          <img src={githubIcon} alt="GitHub" />
        </button>
        <button onClick={() => window.open(project.liveDemoURL, "_blank")}>
          Live Demo
          <img className="eye-icon" src={eyeIcon} alt="Live Demo" />
        </button>
      </div>
    </>
  );
}
