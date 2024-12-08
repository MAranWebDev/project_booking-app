import mongoose, { models, Schema } from 'mongoose';

// Constants
export const USER_MODEL_NAME = 'User';

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = models.User || mongoose.model(USER_MODEL_NAME, UserSchema);
