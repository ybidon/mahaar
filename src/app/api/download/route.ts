import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, pdfPath } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Validate pdfPath
    if (!pdfPath || !pdfPath.startsWith('/')) {
      return NextResponse.json({ error: 'Invalid PDF path' }, { status: 400 });
    }

    // Get the absolute path to the PDF file
    const absolutePath = path.join(process.cwd(), 'public', pdfPath);

    // Check if file exists
    if (!fs.existsSync(absolutePath)) {
      return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(absolutePath);

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'contact@mahaarsolutions.com',
        subject: `New PDF Download Request from ${email}`,
        text: `
Name: PDF Downloader
Email: ${email}
Company: PDF Download

Message:
New PDF download request for ${pdfPath} from: ${email}
        `,
        html: `
<h2>New PDF Download Request</h2>
<p><strong>Name:</strong> PDF Downloader</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> PDF Download</p>
<p><strong>Message:</strong></p>
<p>New PDF download request for ${pdfPath} from: ${email}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue with download even if email fails
    }

    // Return the PDF file
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${path.basename(pdfPath)}"`,
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    );
  }
} 