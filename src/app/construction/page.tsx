import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "varvell Construction",
  description: "varvell Construction focuses on quality-led construction and infrastructure projects with a practical, reliable approach.",
  alternates: { canonical: "/construction" }
};

export default function ConstructionPage() {
  return (
    <>
      <section className="division-hero construction-hero">
        <div className="container division-hero-content">
          <span className="eyebrow">varvell CONSTRUCTION · 01</span>
          <h1>Built to stand<br /><em>the test of time.</em></h1>
          <p>Construction and infrastructure with a focus on quality, coordination and dependable delivery.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="sticky-label"><span className="eyebrow">CONSTRUCTION</span></div>
          <div className="rich-copy">
            <h2>From concept to completion.</h2>
            <p>varvell Construction represents our built-environment business, bringing together project coordination, construction expertise and a quality-first mindset.</p>
            <p>Our approach is centred on clear planning, responsible execution and strong communication throughout the project lifecycle.</p>
            <Link href="/contact" className="button button-dark">Discuss a project <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-light-gray">
        <div className="container">
          <SectionHeading eyebrow="CAPABILITIES" title="A practical approach to every project." />
          <div className="capability-grid">
            {[
              ["01", "Project delivery", "Structured planning and coordination from early stages through completion."],
              ["02", "Construction", "Quality-conscious execution across commercial and development environments."],
              ["03", "Infrastructure", "A long-term view of the built environment and the systems that support it."],
              ["04", "Partnerships", "Close collaboration with clients, specialists and delivery partners."]
            ].map(([n,t,d]) => <div className="capability" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <CTA title="Have a construction project in mind?" text="Tell us what you're planning and our team will get back to you." />
    </>
  );
}
