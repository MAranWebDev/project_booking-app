import { dbConnect } from '@/libs/mongoose/db-connect';
import { User } from '@/libs/mongoose/models';
import { usersZodSignup } from '@/libs/zod/schemas';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // Validate request body
    const parsedBody = usersZodSignup.safeParse(body);
    if (!parsedBody.success)
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedBody.error.flatten() },
        { status: 400 },
      );

    const { name, email, password } = parsedBody.data;

    // Connect to database
    await dbConnect();

    // Check if user exists
    const userFound = await User.exists({ email });
    if (userFound)
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 },
      );

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      { status: 201 },
    );
  } catch (error) {
    const status = error instanceof mongoose.Error.ValidationError ? 400 : 500;
    const message =
      error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ message }, { status });
  }
};
