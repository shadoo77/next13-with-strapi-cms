import { z } from 'zod';

export const publicationSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string()
});
