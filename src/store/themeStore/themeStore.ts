'use client';

import { create } from 'zustand';
import { ThemeData, ThemeState, IThemeStore, ThemeResponse } from './interfaces';
import { theme } from './theme';
import { getOverrideThemes } from './helpers';

const defaultTheme: ThemeData = {
  name: 'light',
  mode: 'light',
  value: theme
};

const initialState: ThemeState = {
  themes: [defaultTheme],
  activeTheme: defaultTheme
};

export const useThemeStore = create<IThemeStore>((set) => ({
  ...initialState,
  setThemes: (themesData: ThemeResponse[]) =>
    set((state) => {
      const themes = getOverrideThemes(themesData, state.activeTheme.value);

      const activeTheme = themes.find((theme) => theme.mode === 'light') || defaultTheme;

      return { themes, activeTheme };
    }),
  setActiveTheme: (activeTheme: ThemeData) => set({ activeTheme })
}));
