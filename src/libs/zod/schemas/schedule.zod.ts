import { z } from 'zod';

const date = z.string().date();
const time = z.string().datetime();
const doctorId = z.number();

// Exported schemas
export const scheduleZodCreate = z.object({ date, time, doctorId });

// Exported schema types
export type ScheduleZodCreate = z.infer<typeof scheduleZodCreate>;
