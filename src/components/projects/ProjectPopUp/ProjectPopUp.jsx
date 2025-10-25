import "./ProjectPopUp.scss";
import { projects } from "../../../data/projects.js";
import githubIcon from "../../../assets/icons/github-icon.png";
import eyeIcon from "../../../assets/icons/eye-icon.png";
import { useEffect } from "react";

export default function ProjectPopUp({ projectTitle, onClose }) {
  const project = projects.find((p) => p.title === projectTitle);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  // Helper function to render UX/UI and Frontend content dynamically
  const renderProcessSection = (project) => {
    const isFrontend = project.category.includes("frontend");
    const isUXUI = project.category.includes("uxui");

    // --- BOTH CATEGORIES ---
    if (isFrontend && isUXUI) {
      return (
        <>
          <h3>Design Process</h3>
          {renderUXUISection(project)}
          <h3>Development Process</h3>
          {renderFrontendSection(project)}
        </>
      );
    }

    // --- ONLY UX/UI ---
    if (isUXUI) {
      return (
        <>
          <h3>The Design Process</h3>
          {renderUXUISection(project)}
        </>
      );
    }

    // --- ONLY FRONTEND ---
    if (isFrontend) {
      return (
        <>
          <h3>The Development Process</h3>
          {renderFrontendSection(project)}
        </>
      );
    }

    return null;
  };

  // --- RENDERING UX/UI SECTION ---
  const renderUXUISection = (project) => (
    <section>
      {/* Problems */}
      {project?.projectDetails?.problems && (
        <>
          <h4>Problems</h4>
          <ul>
            {project.projectDetails.problems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Goals */}
      {project?.projectDetails?.goals && (
        <>
          <h4>Goals</h4>
          <ul>
            {project.projectDetails.goals.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Research */}
      {project?.projectDetails?.research && (
        <>
          <h4>Research</h4>
          <ul>
            {project.projectDetails.research.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Personas */}
      {project?.projectDetails?.personas && (
        <>
          <h4>Personas</h4>
          <ul>
            {project.projectDetails.personas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );

  // --- RENDERING FRONTEND SECTION ---
  const renderFrontendSection = (project) => (
    <section>
      {project?.features && (
        <>
          <h4>Features</h4>
          <ul>
            {project.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {project?.technologies && (
        <>
          <h4>Technologies</h4>
          <ul>
            {project.technologies.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="close-popup-btn" onClick={onClose}>
          <div className="x-bar" id="x-bar-1"></div>
          <div className="x-bar" id="x-bar-2"></div>
        </div>

        <img src={project.image} alt={project.title} />

        <div className="project-details">
          {/* --- GENERAL PROJECT DETAILS --- */}
          <h2>{project.title}</h2>
          <h3>Project Overview</h3>
          <p>{project.description}</p>
          <p>Tools: {project.technologies.join(", ")}</p>
          <p>Type: {project.type}</p>

          {/* --- RENDERING PROJECT DEPENDING ON CATEGORY --- */}
          {renderProcessSection(project)}
        </div>

        {/* BUTTONS */}
        <div className="project-details-btn-container">
          {project.category.includes("frontend") && (
            <>
              <button onClick={() => window.open(project.repoURL, "_blank")}>
                Open on GitHub
                <img src={githubIcon} alt="GitHub" />
              </button>

              {project.liveURL && (
                <button onClick={() => window.open(project.liveURL, "_blank")}>
                  Open Demo
                  <img className="eye-icon" src={eyeIcon} alt="Figma Preview" />
                </button>
              )}
            </>
          )}

          {/* If UX/UI category and no frontend category */}
          {project.category.includes("uxui") &&
            !project.category.includes("frontend") &&
            project.liveURL && (
              <button onClick={() => window.open(project.liveURL, "_blank")}>
                Live Demo
                <img className="eye-icon" src={eyeIcon} alt="Figma Preview" />
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
