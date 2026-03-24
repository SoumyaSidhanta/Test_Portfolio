import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendAutoReply(to: string, name: string) {
  const mailOptions = {
    from: `"SSM Test Labs" <${process.env.GMAIL_USER}>`,
    to,
    subject: 'We received your request – SSM Test Labs',
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; padding: 40px; border-radius: 12px; border: 1px solid #1a1a1a;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #00ff88; font-size: 24px; margin: 0;">🐛 SSM Test Labs</h1>
        </div>
        <h2 style="color: #ffffff; font-size: 20px;">Hi ${name},</h2>
        <p style="color: #cccccc; line-height: 1.8; font-size: 16px;">
          Thank you for reaching out to SSM Test Labs! We have received your tool request and our team is reviewing it.
        </p>
        <p style="color: #cccccc; line-height: 1.8; font-size: 16px;">
          We will contact you <strong style="color: #00ff88;">within 24 hours</strong> to discuss your requirements and provide a detailed quote.
        </p>
        <div style="background: #141414; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 3px solid #00ff88;">
          <p style="color: #888; margin: 0; font-size: 14px;">
            In the meantime, feel free to explore our tools at <a href="https://ssmtechlabs.com" style="color: #00ff88;">ssmtechlabs.com</a>
          </p>
        </div>
        <p style="color: #888; font-size: 14px; margin-top: 30px;">
          Best regards,<br/>
          <strong style="color: #00ff88;">SSM Test Labs Team</strong><br/>
          contact.ssmtechlabs@gmail.com
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendAdminNotification(details: {
  name: string;
  email: string;
  company: string;
  requirement: string;
  budget: string;
}) {
  const mailOptions = {
    from: `"SSM Test Labs" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🚀 New Tool Request from ${details.name}`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; padding: 40px; border-radius: 12px; border: 1px solid #1a1a1a;">
        <h1 style="color: #00ff88; font-size: 24px;">🐛 New Tool Request</h1>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 12px; color: #888; width: 120px;">Name</td>
            <td style="padding: 12px; color: #fff;">${details.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 12px; color: #888;">Email</td>
            <td style="padding: 12px; color: #00ff88;">${details.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 12px; color: #888;">Company</td>
            <td style="padding: 12px; color: #fff;">${details.company || 'Not specified'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 12px; color: #888;">Budget</td>
            <td style="padding: 12px; color: #00ff88; font-weight: bold;">${details.budget || 'Not specified'}</td>
          </tr>
        </table>
        <div style="background: #141414; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 3px solid #00ff88;">
          <p style="color: #888; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Requirement</p>
          <p style="color: #fff; margin: 0; line-height: 1.6;">${details.requirement}</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendContactEmail(details: {
  name: string;
  email: string;
  message: string;
}) {
  const mailOptions = {
    from: `"SSM Test Labs" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `📧 Contact Form: Message from ${details.name}`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ededed; padding: 40px; border-radius: 12px; border: 1px solid #1a1a1a;">
        <h1 style="color: #00ff88; font-size: 24px;">📧 New Contact Message</h1>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 12px; color: #888; width: 120px;">Name</td>
            <td style="padding: 12px; color: #fff;">${details.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="padding: 12px; color: #888;">Email</td>
            <td style="padding: 12px; color: #00ff88;">${details.email}</td>
          </tr>
        </table>
        <div style="background: #141414; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 3px solid #00ff88;">
          <p style="color: #888; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="color: #fff; margin: 0; line-height: 1.6;">${details.message}</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}
