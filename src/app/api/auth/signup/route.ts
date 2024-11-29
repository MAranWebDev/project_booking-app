import { dbConnect } from '@/libs/mongoose/db-connect';
import { User } from '@/libs/mongoose/models';
import { usersZodSignup } from '@/libs/zod/schemas';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const body = await req.json();
    const { data } = usersZodSignup.safeParse(body);
    const { name, email, password } = data!;

    // Database connection
    await dbConnect();

    // Check if user already exists
    const userFound = await User.exists({ email });
    if (userFound)
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 },
      );

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 12);
    const { createdAt, updatedAt } = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { name, email, createdAt, updatedAt },
      { status: 201 },
    );
  } catch (error) {
    const status = error instanceof mongoose.Error.ValidationError ? 400 : 500;
    const message =
      error instanceof mongoose.Error.ValidationError
        ? error.message
        : 'Internal Server Error';
    return NextResponse.json({ message }, { status });
  }
}
