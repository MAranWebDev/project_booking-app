import { dbConnect } from '@/libs/mongoose/db-connect';
import { scheduleZodCreate } from '@/libs/zod/schemas';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  // Token guard
  const token = await getToken({ req });
  if (!token)
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

  // // Validations guard
  const body = await req.json();
  const parsedBody = scheduleZodCreate.safeParse(body);
  console.log(parsedBody.error.flatten());
  if (!parsedBody.success)
    return NextResponse.json(
      { message: 'Validation failed', errors: parsedBody.error.flatten() },
      { status: 400 },
    );

  const { date, time, doctorId } = parsedBody.data;

  // Connect to database
  await dbConnect();

  const schedule = { date, time, doctorId };
  console.log(schedule);

  // const schedule = await Schedule.create({
  //   date,
  //   time,
  //   doctorId,
  // });

  return NextResponse.json(schedule, { status: 201 });
};
