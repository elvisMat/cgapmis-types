import { z } from 'zod';
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6, 'Password must be 6 characters or more'),
  name: z.string().min(3, 'Name must be 3 characters or more'),
  role: z.enum(['admin', 'user']).optional(),
});
export type User = z.infer<typeof userSchema>;
