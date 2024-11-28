import { z } from 'zod';

// Base schemas
const name = z.string().trim().min(2).max(20);
const email = z.string().trim().email().min(5).max(20);
const password = z.string().min(8).max(20);

// Exported schemas
export const usersZodCreateInput = z.object({ name, email, password });

// Exported types
export type UsersZodCreateInput = z.infer<typeof usersZodCreateInput>;
