import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">varvell<span>.</span></Link>
          <p className="footer-tagline">Building. Serving. Delivering.</p>
          <p className="muted footer-copy">
            A diversified business group focused on construction, hospitality,
            warehousing and logistics.
          </p>
        </div>

        <div>
          <h3>Businesses</h3>
          <Link href="/construction">Construction</Link>
          <Link href="/hospitality">Hospitality</Link>
          <Link href="/logistics">Logistics</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/about">About us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Legal</h3>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/legal-notice">Legal notice</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 varvell Group. All rights reserved.</span>
        <span>Luxembourg · Europe</span>
      </div>
    </footer>
  );
}
