import { MONGODB_URI } from '@/config/env';
import mongoose from 'mongoose';

if (!MONGODB_URI) throw new Error('MONGODB_URI must be defined');

export const dbConnect = async () => {
  try {
    // Establish the database connection
    await mongoose.connect(MONGODB_URI);

    // Check if there is only one connection
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB Connected');
      return true;
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
