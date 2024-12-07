import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const { date, time } = body;
  console.log(date, time);

  const user;
}
