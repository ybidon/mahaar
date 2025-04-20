import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    // Send email notification in the background
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'PDF Downloader',
        email: email,
        company: 'PDF Download',
        message: `New PDF download request for ${pdfPath} from: ${email}`,
      }),
    }).catch(console.error);

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