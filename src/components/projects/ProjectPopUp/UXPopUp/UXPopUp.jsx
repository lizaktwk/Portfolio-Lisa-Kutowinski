import { projects } from "../../../../data/projects.js";
import "./UXPopUp.scss";
// import githubIcon from "../../../../assets/icons/github-icon.png";
// import eyeIcon from "../../../../assets/icons/eye-icon.png";

export default function UXPopUp({ projectTitle }) {
  const project = projects.find((p) => p.title === projectTitle);

  return (
    <>
      {/* PROBLEMS & GOALS */}
      <section>
        <h3>Problems & Goals</h3>
        {/* Show that your design solves a real problem
      - Headings: Problem, Objectives/Goals 
      - use 2-4 sentences max or concise bullet points */}
        <h4>Problems</h4>
        <ul>
          {project?.projectDetails?.problems?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h4>Goals</h4>
        <ul>
          {project?.projectDetails?.goals?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* RESEARCH */}
      {project?.projectDetails?.research && (
        <section>
          <h3>Research & Insights</h3>
          <ul>
            {project.projectDetails.research.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* PERSONAS */}
      <h3>Personas</h3>
      {/* Show empathy and understanding of user needs, Show how you structured the UX
      - User Flow diagram
      - site map (if relevant)
      Write 1-2 lines introducing each diagram, e.g. I mapped out a simple flow for returning customers to reorder in 3 steps instead of 6*/}

      {/* WIREFRAMES */}
      <h3>Wireframes</h3>
      {/* Show the iteration process
      - low fidelity wireframes
      - sketches or early prototypes
      - comments on design decision
      Combine screenshots with short captions (e.g. Explored three layout options for the product list - chose the grid layout for easier visual scanning) */}

      {/* VISUAL DESIGN */}
      <h3>Visual Design</h3>
      {/* Present the polished design system and final UI
      - Color palette & typo
      - UI components (buttons, cards, icons etc.)
      - High fidelity screens
      Use visuals with small annotations to explain design decisions */}

      {/* PROTOTYPE */}
      <h3>Prototype</h3>
    </>
  );
}
