import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const recipient = "arkha.the.coder@gmail.com";
const sender = "noreply.arkha.pms@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxMessageLength = 5000;

function json(body, status = 200) {
  return Response.json(body, { status });
}

function createTransporter() {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: sender,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
    },
  });
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "invalid_request" }, 400);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return json({ error: "invalid_request" }, 400);
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  // Silently accept bot submissions caught by the form's honeypot field.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return json({ success: true });
  }

  if (email.length > 254 || !emailPattern.test(email)) {
    return json({ error: "invalid_email" }, 400);
  }
  if (!message || message.length > maxMessageLength) {
    return json({ error: "invalid_message" }, 400);
  }

  const transporter = createTransporter();
  if (!transporter) {
    return json({ error: "email_not_configured" }, 503);
  }

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Arkha Portfolio",
      link: process.env.SITE_URL || "http://localhost:3000",
    },
  });

  const notification = {
    body: {
      title: "New portfolio contact message",
      intro: [`From: ${email}`, "Message:", message],
      outro: "Reply to this email to respond directly to the sender.",
    },
  };
  const confirmation = {
    body: {
      title: "Thanks for reaching out",
      intro: ["Your message has been received. Arkha will get back to you as soon as possible."],
      outro: "This is an automatic confirmation. You can reply to this email if you need to add anything.",
    },
  };

  try {
    await transporter.sendMail({
      from: `Arkha Portfolio <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: "New portfolio contact message",
      html: mailGenerator.generate(notification),
      text: mailGenerator.generatePlaintext(notification),
    });
  } catch (error) {
    console.error("Contact notification email failed:", error);
    return json({ error: "notification_failed" }, 502);
  }

  try {
    await transporter.sendMail({
      from: `Arkha Portfolio <${sender}>`,
      to: email,
      replyTo: recipient,
      subject: "Thanks for contacting Arkha",
      html: mailGenerator.generate(confirmation),
      text: mailGenerator.generatePlaintext(confirmation),
    });
  } catch (error) {
    console.error("Contact confirmation email failed:", error);
    return json({ error: "confirmation_failed", notificationSent: true }, 502);
  }

  return json({ success: true });
}
