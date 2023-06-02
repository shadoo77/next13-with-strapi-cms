import { ILocale } from '@/config/locales';

export const CONSTANTS = Object.freeze({
  MY_APP_SNACKBAR_STORAGE: 'test-my-app--snackbar-sorage',
  MY_APP_THEME_STORAGE: 'test-my-app--theme-sorage'
});

export const ROUTES = Object.freeze({
  HOME: '',
  PRODUCTS: 'products'
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
