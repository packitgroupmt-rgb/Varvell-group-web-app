import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact varvell Group",
  description: "Contact varvell Group for business enquiries, partnerships, construction, hospitality, logistics and careers.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="eyebrow">CONTACT</span>
          <h1>Let's start<br /><em>a conversation.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Tell us what you're working on.</h2>
            <p>Use the form for general enquiries, partnerships, projects, supplier enquiries or careers.</p>

            <div className="contact-details">
              <div><span>Email</span><a href="mailto:hello@varvellgroup.com">hello@varvellgroup.com</a></div>
              <div><span>Location</span><p>Luxembourg · Europe</p></div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
