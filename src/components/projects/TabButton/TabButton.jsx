import "./TabButton.scss";

export default function TabButton({ isSelected, onSelect, children }) {
  return (
    <li className="tab-button">
      <div className="gradient-border">
        <button
          className={isSelected ? "active" : undefined}
          onClick={onSelect}
        >
          {children}
        </button>
      </div>
    </li>
  );
}
