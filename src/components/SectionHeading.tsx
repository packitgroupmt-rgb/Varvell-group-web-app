type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export default function SectionHeading({ eyebrow, title, text }: Props) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
