import mongoose, { models, Schema } from 'mongoose';
import { USER_MODEL_NAME } from './user';

// Constants
export const SCHEDULE_MODEL_NAME = 'Schedule';

const ScheduleSchema = new Schema(
  {
    date: { type: Date, required: true },
    time: { type: String, required: true },
    doctorId: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: USER_MODEL_NAME,
      required: true,
    },
  },
  { timestamps: true },
);

export const Schedule =
  models.Schedule || mongoose.model(SCHEDULE_MODEL_NAME, ScheduleSchema);
