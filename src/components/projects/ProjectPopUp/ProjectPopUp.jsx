import "./ProjectPopUp.scss";
import { projects } from "../../../data/projects.js";
import githubIcon from "../../../assets/icons/github-icon.png";
import eyeIcon from "../../../assets/icons/eye-icon.png";
import { useEffect } from "react";

export default function ProjectPopUp({ projectTitle, onClose }) {
  const project = projects.find((p) => p.title === projectTitle);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when popup unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="close-popup-btn" onClick={onClose}>
          <div className="x-bar" id="x-bar-1"></div>
          <div className="x-bar" id="x-bar-2"></div>
        </div>
        <img src={project.image} alt={project.title} />
        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
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
        </div>
        <div className="project-details-btn-container">
          <button onClick={() => window.open(project.repoURL, "_blank")}>
            Open on GitHub
            <img src={githubIcon} alt="GitHub" />
          </button>
          <button onClick={() => window.open(project.liveDemoURL, "_blank")}>
            Live Demo
            <img id="eye-icon" src={eyeIcon} alt="Live Demo" />
          </button>
        </div>
      </div>
    </div>
  );
}
