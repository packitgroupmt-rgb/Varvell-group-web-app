import Link from "next/link";

type Props = {
  title?: string;
  text?: string;
};

export default function CTA({
  title = "Let's build what comes next.",
  text = "Talk to the varvell Group team about a project, partnership or career opportunity."
}: Props) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">START A CONVERSATION</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/contact" className="button button-light">Get in touch <span>→</span></Link>
      </div>
    </section>
  );
}
