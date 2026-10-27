import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "varvell Logistics",
  description: "varvell Logistics focuses on warehousing, logistics and dependable operational infrastructure for modern businesses.",
  alternates: { canonical: "/logistics" }
};

export default function LogisticsPage() {
  return (
    <>
      <section className="division-hero logistics-hero">
        <div className="container division-hero-content">
          <span className="eyebrow">varvell LOGISTICS · 03</span>
          <h1>Moving business<br /><em>forward.</em></h1>
          <p>Warehousing and logistics built around reliability, efficiency and operational clarity.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="sticky-label"><span className="eyebrow">LOGISTICS</span></div>
          <div className="rich-copy">
            <h2>Reliable operations behind every delivery.</h2>
            <p>Modern commerce depends on dependable physical infrastructure. varvell Logistics focuses on warehousing and operational capabilities that help businesses store, move and manage goods efficiently.</p>
            <p>We believe good logistics should be clear, scalable and built around service reliability.</p>
            <Link href="/contact" className="button button-dark">Discuss logistics <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-light-gray">
        <div className="container">
          <SectionHeading eyebrow="CAPABILITIES" title="Operational clarity at every step." />
          <div className="capability-grid">
            {[
              ["01", "Warehousing", "Organised storage environments designed around accessibility and control."],
              ["02", "Distribution", "Reliable movement of goods through coordinated operational processes."],
              ["03", "Operations", "Systems and workflows designed for consistency and scalability."],
              ["04", "Service", "Clear communication and dependable support for customers and partners."]
            ].map(([n,t,d]) => <div className="capability" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <CTA title="Need a more reliable logistics setup?" text="Tell us about your warehousing or logistics requirements." />
    </>
  );
}
