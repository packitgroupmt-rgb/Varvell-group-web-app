import Image from "next/image";
import Link from "next/link";

type Props = {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default function BusinessCard({ number, title, subtitle, image, href }: Props) {
  return (
    <article className="business-card">
      <div className="business-image">
        <Image src={image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" />
        <span className="business-number">{number}</span>
      </div>
      <div className="business-card-body">
        <span className="eyebrow">{subtitle}</span>
        <h3>{title}</h3>
        <Link href={href} className="text-link">Explore <span>→</span></Link>
      </div>
    </article>
  );
}
