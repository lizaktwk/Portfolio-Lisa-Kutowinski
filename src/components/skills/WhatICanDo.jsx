import "./WhatICanDo.scss";

export default function WhatICanDo({ title, description }) {
  return (
    <div className="what-i-can-do-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
