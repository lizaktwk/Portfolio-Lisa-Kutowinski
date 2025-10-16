import "./SectionHeading.scss";

export default function SectionHeading({ id, title, headingCategory }) {
  return (
    <div className={`${headingCategory}`} id={id}>
      <h2>{title}</h2>
    </div>
  );
}
