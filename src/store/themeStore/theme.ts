import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { AppTheme } from './interfaces';

declare module '@mui/material/styles' {
  interface Theme {
    appVars: {
      topBarHeight: string;
      accordionLineHeight: string;
      borderRadius: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    appVars: {
      topBarHeight: string;
      accordionLineHeight: string;
      borderRadius: string;
    };
  }
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

// Create a theme instance.
export const theme: AppTheme = createTheme({
  appVars: {
    topBarHeight: '64px',
    accordionLineHeight: '1.8em',
    borderRadius: '5px'
  },
  palette: {
    primary: {
      light: '#334d87',
      main: '#012169',
      dark: '#001749'
    },
    secondary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f'
    },
    success: {
      light: '#68b36b',
      main: '#43a047',
      dark: '#2e7031'
    },
    error: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f'
    },
    warning: {
      light: '#ffcf33',
      main: '#ffc400',
      dark: '#b28900'
    },
    text: {
      primary: '#000',
      secondary: '#757575',
      disabled: '#AAA'
    },
    background: {
      default: '#FFF'
    },
    common: {
      black: '#000',
      white: '#FFF'
    }
  }
});
