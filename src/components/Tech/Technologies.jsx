import "./Technologies.scss";
import { technologies } from "../../data/tech";
import TechWindow from "./TechWindow/TechWindow";

export default function Technologies() {
  return (
    <div className="technologies">
      <div className="technologies-list">
        {technologies.map((tech) => (
          <TechWindow key={tech.id} title={tech.name} logo={tech.logo} />
        ))}
      </div>
    </div>
  );
}
