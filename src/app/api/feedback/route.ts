import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Feedback from '@/models/Feedback';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, rating, message } = body;

    // Validate
    if (!name || !email || !rating || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5.' },
        { status: 400 }
      );
    }

    // Save to database
    try {
      await connectToDatabase();
      await Feedback.create({
        name,
        email,
        rating,
        message,
        approved: false,
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save feedback. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Feedback submitted successfully.' });
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const feedbacks = await Feedback.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return NextResponse.json({ feedbacks });
  } catch (error) {
    console.error('Feedback GET error:', error);
    return NextResponse.json({ feedbacks: [] });
  }
}
