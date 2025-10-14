import "./ProjectCard.scss";
import infoIcon from "../../../assets/icons/info-icon.png";
import githubIcon from "../../../assets/icons/github-icon.png";
import eyeIcon from "../../../assets/icons/eye-icon.png";

export default function ProjectCard({ title, image, repoURL, liveURL }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-buttons">
          <button className="project-detail-btn">
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
