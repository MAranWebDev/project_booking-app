import mongoose from 'mongoose';

import { MONGODB_URI } from '@/config/env';

// Validate env
if (!MONGODB_URI) throw new Error('MONGODB_URI must be defined');

export const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);

    if (connection.readyState === 1) {
      console.log('MongoDB Connected');
      return true;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
