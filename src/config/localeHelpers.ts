import { LOCALES } from '@/config/locales';

export const FALLBACK_LOCALE = LOCALES.en_GB;

export const getLanguageByLocale = (localePath: string | undefined) => {
  if (!localePath) {
    return FALLBACK_LOCALE.language;
  }

  if (!localePath.includes('-')) {
    return localePath;
  }

  return LOCALES[localePath.replace('-', '_')].language;
};

export const getCurrentLocaleByCode = (localePath: string | undefined) =>
  localePath ? LOCALES[localePath.replace('-', '_')] : LOCALES.en_GB;

export const getCurrentLocaleCodeByPathname = (pathname: string) => {
  const match = pathname.match(/(\w\w-\w\w)/i);
  if (match && match[0]) {
    return match[0];
  }
  return FALLBACK_LOCALE.code;
};

export const getCurrentLocaleByPathname = (pathname: string) =>
  getCurrentLocaleByCode(getCurrentLocaleCodeByPathname(pathname));

export const getCountryById = (countryId: number) => {
  const country = Object.values(LOCALES).find((obj) => obj.countryId === countryId);
  return country?.country;
};

export const getLanguageCodeById = (languageId: number) => {
  const language = Object.values(LOCALES).find((obj) => obj.languageId === languageId);
  return language?.language || null;
};

export const doesLocaleExistByCountryIdAndLanguageId = (countryId: number, languageId: number) => {
  const userCountryCode = getCountryById(countryId);
  const userLanguageCode = getLanguageCodeById(languageId);
  const localePath = `${userLanguageCode}_${userCountryCode}`;
  return Object.keys(LOCALES).some((locale) => locale === localePath);
};

export const containsLocale = (value: string) =>
  Object.keys(LOCALES).some((key) => value.includes(LOCALES[key as keyof typeof LOCALES].code));

export function getLanguageId(locale: string) {
  const { languageId } = LOCALES[locale.replace('-', '_')];
  return languageId;
}
