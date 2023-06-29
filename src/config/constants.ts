import { ILocale } from '@/config/locales';

export const CONSTANTS = Object.freeze({
  APPBAR_HEIGHT: 100,
  MY_APP_SNACKBAR_STORAGE: 'test-my-app--snackbar-sorage',
  MY_APP_MENU_STORAGE: 'test-my-app--menu-sorage'
});

export const ENV = Object.freeze({
  MIANTENANCE_MODE: process.env.NEXT_PUBLIC_MIANTENANCE_MODE,
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  GA_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-7NP8T781G1'
});

export const ROUTES = Object.freeze({
  HOME: '',
  PRODUCTS: 'products',
  MAINTENANCE: 'maintenance'
});

interface HomePageSlug {
  [key: ILocale['language']]: string;
}

export const homePageSlug: HomePageSlug = Object.freeze({
  en: 'home-page',
  nl: 'home-pagina'
});

export const baseURL = `${process.env.NEXT_PUBLIC_API_URL}` || 'http://localhost:1337';

export const apiBaseURL = `${baseURL}/api`;
