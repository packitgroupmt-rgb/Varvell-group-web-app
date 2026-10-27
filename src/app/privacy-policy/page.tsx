import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "varvell Group privacy policy.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero small-page-hero"><div className="container"><span className="eyebrow">LEGAL</span><h1>Privacy<br /><em>Policy.</em></h1></div></section>
      <section className="section legal-page">
        <div className="container legal-copy">
          <p className="legal-date">Last updated: October 2026</p>
          <h2>1. Introduction</h2>
          <p>This privacy policy explains how varvell Group may collect, use and protect personal information submitted through this website.</p>
          <h2>2. Information we collect</h2>
          <p>Information may include your name, email address, company details and any information you voluntarily include in an enquiry.</p>
          <h2>3. How we use information</h2>
          <p>We use submitted information to respond to enquiries, manage business communications, consider applications and improve our website and services.</p>
          <h2>4. Data retention</h2>
          <p>We retain information only for as long as reasonably necessary for the purpose for which it was collected or where a legal obligation requires retention.</p>
          <h2>5. Contact</h2>
          <p>For privacy questions, contact <a href="mailto:privacy@varvellgroup.com">privacy@varvellgroup.com</a>.</p>
        </div>
      </section>
    </>
  );
}
