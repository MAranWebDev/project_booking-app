import { dbConnect } from '@/libs/mongoose/db-connect';
import { Schedule, User } from '@/libs/mongoose/models';
import { scheduleZodCreate } from '@/libs/zod/schemas';
import mongoose from 'mongoose';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    // Token guard
    const token = await getToken({ req });
    if (!token)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    // Check if user exists
    const user = await User.findOne({ email: token.email });

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

    const schedule = await Schedule.create({
      date,
      time,
      doctorId,
      userId: user._id,
    });

    return NextResponse.json(schedule, { status: 201 });
  } catch (error) {
    const status = error instanceof mongoose.Error.ValidationError ? 400 : 500;
    const message =
      error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ message }, { status });
  }
};
