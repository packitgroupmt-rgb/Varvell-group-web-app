import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import BusinessCard from "@/components/BusinessCard";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Construction, Hospitality & Logistics",
  description:
    "varvell Group brings together construction, hospitality and logistics businesses with a focus on quality, reliability and long-term growth.",
  alternates: { canonical: "/" }
};

const businesses = [
  {
    number: "01",
    title: "varvell Construction",
    subtitle: "Construction & infrastructure",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    href: "/construction"
  },
  {
    number: "02",
    title: "varvell Hospitality",
    subtitle: "Restaurant & hospitality",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
    href: "/hospitality"
  },
  {
    number: "03",
    title: "varvell Logistics",
    subtitle: "Warehousing & logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    href: "/logistics"
  }
];

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "varvell Group",
    url: "https://www.varvellgroup.com",
    description:
      "Diversified European business group operating across construction, hospitality and logistics.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LU"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">varvell GROUP · LUXEMBOURG</span>
          <h1>Building.<br />Serving.<br /><em>Delivering.</em></h1>
          <p>
            A diversified business group bringing together construction,
            hospitality and logistics under one long-term vision.
          </p>
          <div className="hero-actions">
            <Link href="/about" className="button button-gold">Discover varvell <span>→</span></Link>
            <Link href="/contact" className="button button-outline">Talk to our team</Link>
          </div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="intro section">
        <div className="container intro-grid">
          <div><span className="big-index">01</span></div>
          <div>
            <SectionHeading
              eyebrow="THE GROUP"
              title="One group. Three essential sectors."
              text="varvell Group is built around businesses that shape everyday life and long-term growth. We combine practical expertise with a disciplined, modern approach to building businesses that last."
            />
            <Link href="/about" className="text-link">More about varvell <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="businesses section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="OUR BUSINESSES"
            title="Different industries. One standard."
            text="Each varvell business operates with its own expertise while sharing the same commitment to quality, reliability and responsible growth."
          />
          <div className="business-grid">
            {businesses.map((item) => <BusinessCard key={item.number} {...item} />)}
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container values-grid">
          <div className="values-copy">
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Built for the long term.</h2>
            <p>
              We focus on strong fundamentals: dependable operations,
              thoughtful partnerships and consistent standards across every
              business we operate.
            </p>
            <Link href="/contact" className="button button-dark">Work with us <span>→</span></Link>
          </div>

          <div className="value-list">
            {[
              ["01", "Quality", "We aim for high standards in the work we deliver and the relationships we build."],
              ["02", "Reliability", "Clear communication, responsible execution and dependable service."],
              ["03", "Growth", "We develop businesses with a long-term view rather than chasing short-term wins."]
            ].map(([n, t, d]) => (
              <div className="value-item" key={n}>
                <span>{n}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
