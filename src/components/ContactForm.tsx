
"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      type: formData.get("type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSuccess(true);
      setStatus("Thank you! Your enquiry has been sent successfully.");
      form.reset();

    } catch (error) {
      setSuccess(false);
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
        />
      </label>

      <label>
        Email address
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
        />
      </label>

      <label>
        Company
        <input
          name="company"
          autoComplete="organization"
          placeholder="Company name"
        />
      </label>

      <label>
        Enquiry type
        <select name="type" defaultValue="General enquiry">
          <option>General enquiry</option>
          <option>Construction</option>
          <option>Hospitality</option>
          <option>Logistics</option>
          <option>Partnership</option>
          <option>Careers</option>
        </select>
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us about your enquiry..."
        />
      </label>

      {status && (
        <p
          role="status"
          style={{
            color: success ? "green" : "red",
            marginBottom: "15px",
          }}
        >
          {status}
        </p>
      )}

      <button
        className="button button-dark"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send enquiry"}
        {!loading && <span> →</span>}
      </button>
    </form>
  );
}
