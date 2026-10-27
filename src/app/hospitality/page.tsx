import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "varvell Hospitality",
  description: "varvell Hospitality develops and operates restaurant and hospitality concepts focused on experience, service and quality.",
  alternates: { canonical: "/hospitality" }
};

export default function HospitalityPage() {
  return (
    <>
      <section className="division-hero hospitality-hero">
        <div className="container division-hero-content">
          <span className="eyebrow">varvell HOSPITALITY · 02</span>
          <h1>Spaces made<br /><em>to be remembered.</em></h1>
          <p>Restaurant and hospitality concepts where atmosphere, service and quality come together.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="sticky-label"><span className="eyebrow">HOSPITALITY</span></div>
          <div className="rich-copy">
            <h2>Experience is the product.</h2>
            <p>Hospitality is about more than a menu or a room. It is the feeling created by the space, the people, the service and the details that guests remember.</p>
            <p>varvell Hospitality brings a considered, quality-led approach to restaurant and hospitality operations.</p>
            <Link href="/contact" className="button button-dark">Partner with us <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="OUR HOSPITALITY PRINCIPLES" title="Designed around the guest." />
          <div className="principles-grid principles-dark">
            <div><span>01</span><h3>Atmosphere</h3><p>Distinct spaces that feel considered, comfortable and memorable.</p></div>
            <div><span>02</span><h3>Service</h3><p>Professional, warm and consistent guest experiences.</p></div>
            <div><span>03</span><h3>Quality</h3><p>Attention to ingredients, suppliers, standards and detail.</p></div>
            <div><span>04</span><h3>Concept</h3><p>Clear identities that create a reason for guests to return.</p></div>
          </div>
        </div>
      </section>

      <CTA title="Let's create something people remember." text="For hospitality partnerships, concepts or opportunities, start a conversation with varvell." />
    </>
  );
}
