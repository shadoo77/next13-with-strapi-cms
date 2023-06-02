import { Theme as MuiTheme, PaletteOptions } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';

export interface AppTheme extends MuiTheme {
  appVars: {
    topBarHeight: string;
    accordionLineHeight: string;
    borderRadius: string;
  };
}

interface ThemeOptions {
  appVars: AppTheme['appVars'];
  palette: Partial<PaletteOptions>;
}

export interface ThemeResponse {
  name: string;
  mode: ThemeMode;
  value: ThemeOptions;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface ThemeData {
  name: string;
  mode: ThemeMode;
  value: AppTheme;
}

export interface ThemeState {
  themes: ThemeData[];
  activeTheme: ThemeData;
}

export interface IThemeStore extends ThemeState {
  setActiveTheme: (theme: ThemeData) => void;
  setThemes: (items: ThemeResponse[]) => void;
}
