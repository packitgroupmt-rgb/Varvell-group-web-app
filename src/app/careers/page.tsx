import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at varvell Group",
  description: "Explore career opportunities at varvell Group across construction, hospitality, logistics and corporate functions.",
  alternates: { canonical: "/careers" }
};

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">CAREERS</span>
          <h1>Do work that<br /><em>moves things forward.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container careers-intro">
          <div><span className="big-index">04</span></div>
          <div>
            <h2>People are part of the group.</h2>
            <p>We are building a group of businesses that depends on capable, responsible people. If you are practical, curious and motivated to do good work, we'd like to hear from you.</p>
            <Link href="/contact" className="button button-dark">Send an enquiry <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-light-gray">
        <div className="container">
          <div className="job-header">
            <span className="eyebrow">OPPORTUNITIES</span>
            <h2>Current openings</h2>
          </div>
          <div className="job-empty">
            <span>—</span>
            <h3>No public vacancies listed right now.</h3>
            <p>We still welcome speculative applications for future opportunities across our businesses.</p>
            <Link href="/contact" className="text-link">Contact the team <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
