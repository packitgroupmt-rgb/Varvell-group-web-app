
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, type, message } = body;

    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

     const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });


    await transporter.sendMail({
      from: `"Varvell Group Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New ${type} Enquiry - ${name}`,
      text: `
New enquiry received from Varvell Group website.

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Enquiry Type: ${type}

Message:
${message}
      `,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Enquiry Type:</strong> ${escapeHtml(type)}</p>
        <h3>Message</h3>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully!",
    });

  } catch (error) {
    console.error("Contact form SMTP error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to send your enquiry. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]!);
}
