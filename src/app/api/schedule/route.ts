import { dbConnect } from '@/libs/mongoose/db-connect';
import { Schedule } from '@/libs/mongoose/models';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  // Token guard
  const token = await getToken({ req });
  if (!token)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

  // Body
  const body = await req.json();
  const { date, time, doctorId } = body;

  // Connect to database
  await dbConnect();

  const schedule = await Schedule.create({
    date,
    time,
    doctorId,
  });

  return NextResponse.json(schedule, { status: 201 });
};
