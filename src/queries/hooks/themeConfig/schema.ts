import { z } from 'zod';

export const themeConfigSchema = z.object({
  fontFamily: z.string(),
  borderRadius: z.number(),
  outlinedFilled: z.boolean(),
  navType: z.enum(['light', 'dark']),
  presetColor: z.enum(['default', 'theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6'])
});

export type ThemeConfig = z.infer<typeof themeConfigSchema>;
