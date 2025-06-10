import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, subject, message } = req.body

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" })
  }

  try {
    // 1. Setup transporter using Gmail SMTP (or any other SMTP service)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER, // your Gmail address
        pass: process.env.SMTP_PASS, // app password, not your Gmail password
      },
    })

    // 2. Email to site owner
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // 3. Email copy to user
    const userMailOptions = {
      from: `"Prit Senjaliya" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for contacting me – ${subject}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I have received your message and will get back to you soon.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>Prit Senjaliya</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return res.status(200).json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Email send error:", error)
    return res.status(500).json({ error: "Failed to send email" })
  }
}
