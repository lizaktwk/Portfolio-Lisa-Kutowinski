import "./CTAButton.scss";

export default function CTAButton({ children }) {
  return (
    <button className="cta-button">
      <strong>{children}</strong>
    </button>
  );
}
