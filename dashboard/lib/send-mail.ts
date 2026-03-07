import "server-only";

import nodemailer from "nodemailer";
import config from "@/lib/config";

const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = config;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

transporter.verify()
  .then(() => console.info("[MAIL] SMTP ready"))
  .catch((err) => console.error("[MAIL ERROR] SMTP connection failed:", err));

interface SendMailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendMail = async ({ from, to, subject, text, html }: SendMailOptions) => {
  try {
    const info = await transporter.sendMail({ from, to, subject, text, html });
    console.info("[MAIL SENT]", info.messageId);
    return info;
  } catch (error) {
    console.error("[MAIL ERROR] Failed to send mail:", error);
    throw error;
  }
};
