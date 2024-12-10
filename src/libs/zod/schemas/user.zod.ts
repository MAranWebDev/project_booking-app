import { z } from 'zod';

const name = z.string().trim().min(2).max(20);
const email = z.string().trim().email().min(5).max(20);
const password = z.string().min(8).max(20);

// Exported schemas
export const userZodSignup = z.object({ name, email, password });
export const userZodSignin = z.object({ email, password });

// Exported schema types
export type UserZodSignup = z.infer<typeof userZodSignup>;
export type UserZodSignin = z.infer<typeof userZodSignin>;
