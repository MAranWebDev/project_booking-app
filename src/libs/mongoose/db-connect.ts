import mongoose from 'mongoose';

import { MONGODB_URI } from '@/config/env';

export const dbConnect = async () => {
  try {
    // Establish the database connection
    await mongoose.connect(MONGODB_URI);

    // Check if there is only one connection
    if (mongoose.connection.readyState === 1) console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
