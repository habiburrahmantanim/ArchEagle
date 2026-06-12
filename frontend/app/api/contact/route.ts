import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NOTIFICATION_EMAIL_FROM,
    pass: process.env.NOTIFICATION_EMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const { first_name, last_name, email, phone, service } = await req.json();

  try {
    await transporter.sendMail({
      from: process.env.NOTIFICATION_EMAIL_FROM,
      to: process.env.NOTIFICATION_EMAIL_TO,
      subject: `New Contact Form Submission from ${first_name} ${last_name}`,
      text: `
First Name: ${first_name}
Last Name: ${last_name}
Email: ${email}
Phone: ${phone}
Service Interested In: ${service}
      `.trim(),
    });

    return NextResponse.json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to submit contact form" },
      { status: 500 },
    );
  }
}
