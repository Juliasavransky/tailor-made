// /src/lib/email.ts
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({ name, email, message }: ContactPayload) {
  const user = process.env.GMAIL_USER!;
  const pass = process.env.GMAIL_APP_PASSWORD!;
  const to = process.env.CONTACT_TO || user;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,         // 587 גם עובד, אבל 465 עדיף עם secure: true
    secure: true,
    auth: { user, pass },
  });

  // אופציונלי: בדיקת חיבור
  await transporter.verify();

  const info = await transporter.sendMail({
    from: `"Site Contact" <${user}>`,
    to,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
        <h2>New message from ${escapeHtml(name)}</h2>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p style="white-space:pre-line">${escapeHtml(message)}</p>
      </div>
    `,
    replyTo: email, // כך כשלוחצים Reply זה חוזר לשולח
  });

  return info.messageId;
}

// היגיינה בסיסית למניעת החדרת HTML
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]!));
}
