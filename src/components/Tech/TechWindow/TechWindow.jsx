import "./TechWindow.scss";

export default function TechWindow({ title, logo }) {
  return (
    <div className="tech-window-card">
      <img src={logo} alt={`${title} logo`} />
      <h3>{title}</h3>
    </div>
  );
}
