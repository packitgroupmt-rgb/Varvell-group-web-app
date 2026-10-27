import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and website information for varvell Group.",
  alternates: { canonical: "/legal-notice" }
};

export default function LegalPage() {
  return (
    <>
      <section className="page-hero small-page-hero"><div className="container"><span className="eyebrow">LEGAL</span><h1>Legal<br /><em>Notice.</em></h1></div></section>
      <section className="section legal-page">
        <div className="container legal-copy">
          <h2>Website operator</h2>
          <p><strong>varvell Group</strong><br />Luxembourg · Europe</p>
          <h2>Website</h2>
          <p>This website is intended to provide general information about varvell Group and its business activities.</p>
          <h2>Accuracy of information</h2>
          <p>Information on this website is provided for general information purposes and may be updated or changed without notice.</p>
          <h2>Intellectual property</h2>
          <p>Unless otherwise stated, website content, branding, text and visual materials are owned by or licensed to varvell Group and may not be reproduced without permission.</p>
          <h2>Contact</h2>
          <p><a href="mailto:hello@varvellgroup.com">hello@varvellgroup.com</a></p>
        </div>
      </section>
    </>
  );
}
