import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/libs/mongoose/db-connect';
import { Schedule } from '@/libs/mongoose/models';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const { date, time, doctor } = body;

  // Connect to database
  await dbConnect();

  const schedule = await Schedule.create({
    selectedDate: date,
    selectedTime: time,
    selectedDoctor: doctor,
  });

  return NextResponse.json(schedule, { status: 201 });
};
