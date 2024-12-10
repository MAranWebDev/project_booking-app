import { dbConnect } from '@/libs/mongoose/db-connect';
import { Schedule, User } from '@/libs/mongoose/models';
import { scheduleZodCreate } from '@/libs/zod/schemas';
import mongoose from 'mongoose';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
  if (req.method === 'GET') {
    try {
      // Token guard
      const token = await getToken({ req });
      if (!token)
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

      // Connect to database
      await dbConnect();

      // Get user
      const userExists = await User.findOne({ email: token.email });
      const schedules = await Schedule.find({ userId: userExists._id || '' });
      return NextResponse.json(schedules, { status: 201 });
    } catch (error) {
      const status =
        error instanceof mongoose.Error.ValidationError ? 400 : 500;
      const message =
        error instanceof Error ? error.message : 'Internal Server Error';
      return NextResponse.json({ message }, { status });
    }
  }

  if (req.method === 'POST') {
    try {
      // Token guard
      const token = await getToken({ req });
      if (!token)
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

      // // Validations guard
      const body = await req.json();
      const parsedBody = scheduleZodCreate.safeParse(body);
      if (!parsedBody.success)
        return NextResponse.json(
          { message: 'Validation failed', errors: parsedBody.error.flatten() },
          { status: 400 },
        );

      const { date, time, doctorId } = parsedBody.data;

      // Connect to database
      await dbConnect();

      // Get user
      const userExists = await User.findOne({ email: token.email });
      if (!userExists)
        return NextResponse.json(
          { message: 'User not found. Please try again.' },
          { status: 404 },
        );

      const scheduleFound = await Schedule.exists({ date, time, doctorId });
      if (scheduleFound)
        return NextResponse.json(
          { message: 'The selected date and time is unavailable.' },
          { status: 409 },
        );

      const schedule = await Schedule.create({
        date,
        time,
        doctorId,
        userId: userExists._id,
      });

      return NextResponse.json(schedule, { status: 201 });
    } catch (error) {
      const status =
        error instanceof mongoose.Error.ValidationError ? 400 : 500;
      const message =
        error instanceof Error ? error.message : 'Internal Server Error';
      return NextResponse.json({ message }, { status });
    }
  }
};

export { handler as GET, handler as POST };
