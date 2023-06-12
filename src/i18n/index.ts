export type Locale = 'en' | 'nl';

interface LanguageType {
  code: string;
  label: string;
  locale: Locale;
}

export const fallbackLng = 'en';
export const locales: Locale[] = [fallbackLng, 'nl'];
export const defaultNS = 'translation';

export const i18n = {
  defaultLocale: fallbackLng,
  locales
} as const;

export function getOptions(lng: Locale = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}

export const languages: readonly LanguageType[] = [
  { code: 'NL', label: 'Dutch', locale: 'nl' },
  {
    code: 'US',
    label: 'English',
    locale: 'en'
  }
];
