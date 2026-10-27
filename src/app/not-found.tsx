import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero small-page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not<br /><em>found.</em></h1>
        <Link href="/" className="button button-dark">Back home <span>→</span></Link>
      </div>
    </section>
  );
}
