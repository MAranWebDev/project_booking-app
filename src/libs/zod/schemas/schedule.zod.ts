import { z } from 'zod';

const date = z.string().date();
const time = z.string().min(1);
const doctorId = z.string().min(1).max(10);

// Exported schemas
export const scheduleZodCreate = z.object({ date, time, doctorId });

// Exported schema types
export type ScheduleZodCreate = z.infer<typeof scheduleZodCreate>;
