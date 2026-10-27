import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About varvell Group",
  description: "Learn about varvell Group, its approach and its businesses across construction, hospitality and logistics.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT varvell</span>
          <h1>A group built around<br /><em>real-world businesses.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="sticky-label">
            <span className="big-index">02</span>
            <span className="eyebrow">OUR STORY</span>
          </div>
          <div className="rich-copy">
            <h2>Practical businesses. Ambitious standards.</h2>
            <p>varvell Group brings together complementary businesses in construction, hospitality and logistics. Our model is simple: operate businesses well, create strong partnerships and build sustainable value over time.</p>
            <p>We believe a modern business group should be entrepreneurial enough to move quickly and disciplined enough to think beyond the next quarter.</p>
          </div>
        </div>
      </section>

      <section className="image-band">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
          alt="Modern European business interior"
          width={1800}
          height={620}
          sizes="100vw"
        />
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE VALUE" title="A consistent standard across every business." text="The sectors may be different, but the principles are shared." />
          <div className="principles-grid">
            <div><span>01</span><h3>Integrity</h3><p>We value straightforward communication and responsible decisions.</p></div>
            <div><span>02</span><h3>Execution</h3><p>Ideas matter, but disciplined execution is what creates results.</p></div>
            <div><span>03</span><h3>Partnership</h3><p>We build lasting relationships with clients, suppliers and teams.</p></div>
            <div><span>04</span><h3>Progress</h3><p>We continuously look for better ways to operate and grow.</p></div>
          </div>
        </div>
      </section>

      <CTA title="Interested in the varvell story?" text="Whether you're a potential partner, client or future team member, we'd like to hear from you." />
    </>
  );
}
