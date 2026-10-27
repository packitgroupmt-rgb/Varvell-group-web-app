"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Thank you. Connect this form to your preferred email or CRM provider.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" required autoComplete="name" />
      </label>

      <label>
        Email address
        <input name="email" type="email" required autoComplete="email" />
      </label>

      <label>
        Company
        <input name="company" autoComplete="organization" />
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
        <textarea name="message" rows={6} required />
      </label>

      <button className="button button-dark" type="submit">
        Send enquiry <span>→</span>
      </button>
    </form>
  );
}
