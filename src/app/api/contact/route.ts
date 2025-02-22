import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { prisma } from '@/lib/prisma'

// Update the transporter configuration for GoDaddy
const transporter = nodemailer.createTransport({
  host: "mail.zuperstudio.com",
  port: 465,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true
})

// Verify the connection configuration
transporter.verify(function(error) {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// HTML template for the thank you email
const createEmailTemplate = (name: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #333; font-size: 24px; margin-bottom: 20px;">Hello ${name}!</h2>
    <p style="color: #666; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
      Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
    </p>
    <p style="color: #666; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
      In the meantime, feel free to check out our website for more information.
    </p>
    <div style="color: #888; font-size: 14px; margin-top: 30px;">
      <p style="margin: 5px 0;">Best regards,</p>
      <p style="margin: 5px 0;">Zuper Studio Team</p>
    </div>
  </div>
`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    try {
      const savedMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          message,
        },
      })
      console.log('💾 Message saved to database with ID:', savedMessage.id)

      // Send thank you email
      console.log('📧 Sending thank you email to:', email)
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Zuper Studio!',
        html: createEmailTemplate(name),
      })
      console.log('✅ Thank you email sent successfully to:', email)

      // Send notification to admin
      console.log('📧 Sending notification email to admin:', process.env.ADMIN_EMAIL)
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })
      console.log('✅ Admin notification email sent successfully')

      return NextResponse.json(
        { message: 'Message sent successfully', id: savedMessage.id },
        { status: 200 }
      )
    } catch (dbError) {
      console.error('❌ Database or email error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('❌ Form processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
} 