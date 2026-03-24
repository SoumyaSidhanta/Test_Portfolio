import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Request from '@/models/Request';
import { sendAutoReply, sendAdminNotification } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, requirement, budget } = body;

    // Validate required fields
    if (!name || !email || !requirement) {
      return NextResponse.json(
        { error: 'Name, email, and requirement are required.' },
        { status: 400 }
      );
    }

    // Save to database
    try {
      await connectToDatabase();
      await Request.create({
        name,
        email,
        company: company || '',
        requirement,
        budget: budget || '',
      });
    } catch (dbError) {
      console.error('Database error (non-critical):', dbError);
      // Continue even if DB fails — still send emails
    }

    // Send emails (non-blocking failures)
    try {
      await Promise.all([
        sendAutoReply(email, name),
        sendAdminNotification({ name, email, company, requirement, budget }),
      ]);
    } catch (emailError) {
      console.error('Email error (non-critical):', emailError);
      // Continue even if email fails
    }

    return NextResponse.json({ success: true, message: 'Request submitted successfully.' });
  } catch (error) {
    console.error('Request API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
