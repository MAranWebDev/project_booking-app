import mongoose, { models, Schema } from 'mongoose';

const ScheduleSchema = new Schema(
  {
    selectedDate: { type: String, required: true },
    selectedTime: { type: String, required: true },
    selectedDoctor: { type: String, required: true },
  },
  { timestamps: true },
);

export const Schedule =
  models.Schedule || mongoose.model('Schedule', ScheduleSchema);
