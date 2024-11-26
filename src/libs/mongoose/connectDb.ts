import { MONGODB_URI } from '@/config/env';
import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
  } catch (error) {}
};
