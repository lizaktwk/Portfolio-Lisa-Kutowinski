import "./SectionHeading.scss";

export default function SectionHeading({ title, headingCategory }) {
  return (
    <div className={`${headingCategory}`}>
      <h2>{title}</h2>
    </div>
  );
}
