import nodemailer from 'nodemailer'

const CONNECTION_TIMEOUT_MS = 10_000

/**
 * Create a nodemailer transporter configured for Gmail
 */
export function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: CONNECTION_TIMEOUT_MS,
  })
}

/**
 * Build a styled HTML email template
 */
export function buildEmailHtml(name: string, email: string, message: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Message</h1>
      </div>
      <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
          <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">${name}</p>
          <p style="margin: 5px 0 0 0; color: #3b82f6;">${email}</p>
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      <div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
        Sent from your portfolio contact form
      </div>
    </div>
  `
}

interface SendEmailParams {
  to: string
  replyTo: string
  subject: string
  text: string
  html: string
}

/**
 * Send an email using the configured transporter
 */
export async function sendEmail({ to, replyTo, subject, text, html }: SendEmailParams) {
  const transporter = createTransporter()
  
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to,
    replyTo,
    subject,
    text,
    html,
  })
}
