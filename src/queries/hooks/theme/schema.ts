import { z } from 'zod';

export const themeValueSchema = z.object({
  appVars: z.object({
    topBarHeight: z.string(),
    accordionLineHeight: z.string(),
    borderRadius: z.string()
  }),
  palette: z.object({
    primary: z.object({
      light: z.string(),
      main: z.string(),
      dark: z.string()
    }),
    secondary: z.object({
      light: z.string(),
      main: z.string(),
      dark: z.string()
    }),
    success: z.object({
      light: z.string(),
      main: z.string(),
      dark: z.string()
    }),
    error: z.object({ light: z.string(), main: z.string(), dark: z.string() }),
    warning: z.object({
      light: z.string(),
      main: z.string(),
      dark: z.string()
    }),
    text: z.object({
      primary: z.string(),
      secondary: z.string(),
      disabled: z.string()
    }),
    background: z.object({ default: z.string() }),
    common: z.object({ black: z.string(), white: z.string() })
  })
});

export const attributeSchema = z.object({
  name: z.string(),
  value: themeValueSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  locale: z.string(),
  mode: z.enum(['light', 'dark'])
});

export const themeSchema = z.object({
  id: z.number(),
  attributes: attributeSchema
});

export const themesSchema = z.array(themeSchema);

export type ThemeOptions = z.infer<typeof themeValueSchema>;
export type ThemeType = z.infer<typeof themeSchema>;
export type ThemeAttributes = z.infer<typeof attributeSchema>;
