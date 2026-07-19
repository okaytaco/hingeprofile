import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/lib/db/connect';
import UserModel from '@/lib/db/models/User';
import { GeneratedProfileModel } from '@/lib/db/models/GeneratedProfile';

/**
 * GET /api/profile/latest
 * Returns the user's most recent active generated profile without
 * triggering any new generation. Returns 404 if none exists.
 */
export async function GET() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const user = await UserModel.findOne({ clerkId });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Find the latest active profile for this user
    const profile = await GeneratedProfileModel.findOne({
      userId: user._id,
      status: 'active',
    }).sort({ createdAt: -1 });

    if (!profile) {
      return NextResponse.json(
        { error: 'No profile found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ profile: profile.toJSON() });
  } catch (error) {
    console.error('Latest profile fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    );
  }
}
