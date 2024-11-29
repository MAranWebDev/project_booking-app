import { dbConnect } from '@/libs/mongoose/db-connect';
import { User } from '@/libs/mongoose/models';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Database connection
    await dbConnect();

    const { name, email, password } = await req.json();

    // Check if user already exists
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 },
      );

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
    if (error instanceof mongoose.Error.ValidationError)
      return NextResponse.json({ message: error.message }, { status: 400 });
    return NextResponse.error();
  }
}
