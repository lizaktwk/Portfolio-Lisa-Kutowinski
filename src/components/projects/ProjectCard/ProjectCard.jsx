import "./ProjectCard.scss";
import ProjectPopUp from "../ProjectPopUp/ProjectPopUp.jsx";
import { useState } from "react";
import infoIcon from "../../../assets/icons/info-icon.png";
import githubIcon from "../../../assets/icons/github-icon.png";
import eyeIcon from "../../../assets/icons/eye-icon.png";

export default function ProjectCard({ title, image, repoURL, liveURL }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <ProjectPopUp projectTitle={title} onClose={() => setIsOpen(false)} />
    );
  }

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-buttons">
          <button
            className="project-detail-btn"
            onClick={() => setIsOpen(true)}
          >
            <img src={infoIcon} alt="Project Info" />
          </button>
          <button
            className="project-detail-btn"
            onClick={() => window.open(repoURL, "_blank")}
          >
            <img src={githubIcon} alt="View Code" />
          </button>
          <button
            className="project-detail-btn"
            onClick={() => window.open(liveURL, "_blank")}
          >
            <img src={eyeIcon} alt="View Project" />
          </button>
        </div>
      </div>
    </div>
  );
}
