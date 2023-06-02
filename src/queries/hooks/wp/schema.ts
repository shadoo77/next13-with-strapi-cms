import { z } from 'zod';

export const wpSchema = z.object({});

export type WpType = z.infer<typeof wpSchema>;
