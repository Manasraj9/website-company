import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      companyName, 
      cityCountry, 
      yourName, 
      telephone, 
      emailAddress, 
      applicationProducts, 
      sampleApplication, 
      icPartNumber, 
      icSampleQuantity, 
      massProductionDate, 
      otherInstructions, 
      subject, 
      message,
      name,
      email
    } = body;

    // Create a transporter using your SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let emailHtml = '';
    let emailSubject = '';

    if (applicationProducts) {
      // This is a sample request
      emailSubject = `Sample Request for ${applicationProducts}`;
      emailHtml = `
        <p><strong>Type:</strong> Sample Request</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>City/Country:</strong> ${cityCountry}</p>
        <p><strong>Your Name:</strong> ${yourName || name || 'N/A'}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
        <p><strong>Email Address:</strong> ${emailAddress || email || 'N/A'}</p>
        <p><strong>Application Products:</strong> ${applicationProducts}</p>
        <p><strong>Sample Application:</strong> ${sampleApplication}</p>
        <p><strong>IC Part Number:</strong> ${icPartNumber}</p>
        <p><strong>IC Sample Quantity:</strong> ${icSampleQuantity}</p>
        <p><strong>Mass Production Date:</strong> ${massProductionDate}</p>
        <p><strong>Other Instructions:</strong> ${otherInstructions || 'N/A'}</p>
      `;
    } else {
      // This is a general contact form submission
      emailSubject = `Contact Form: ${subject}`;
      emailHtml = `
        <p><strong>Type:</strong> General Contact</p>
        <p><strong>Name:</strong> ${name || yourName || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || emailAddress || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: process.env.CONTACT_EMAIL_RECEIVER, // Receiver address (your email)
      subject: emailSubject,
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
