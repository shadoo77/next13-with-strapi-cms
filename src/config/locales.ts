interface ILocales {
  [key: string]: ILocale;
}

export interface ILocale {
  code: string;
  title: string;
  language: string;
  country: string;
  languageId: number;
  countryId: number;
  countryName: string;
  order: number;
  languageNameTranslation?: string;
}

export const COUNTRIES = {
  NL: {
    country: 'NL',
    countryName: 'Netherlands',
    countryId: 169,
    translatedCountryName: 'translated-country-NL'
  },
  GB: {
    country: 'GB',
    countryName: 'United Kingdom',
    countryId: 81,
    translatedCountryName: 'translated-country-GB'
  },
  BE: {
    country: 'BE',
    countryName: 'Belgium',
    countryId: 19,
    translatedCountryName: 'translated-country-BE'
  }
};

export const LANGUAGES = {
  NL: {
    languageId: 1,
    language: 'nl',
    title: 'Nederlands',
    translationName: 't-nl',
    mainLocale: 'nl-NL'
  },
  EN: {
    languageId: 2,
    language: 'en',
    title: 'English',
    translationName: 't-en',
    mainLocale: 'en-US'
  },
  FR: {
    languageId: 3,
    language: 'fr',
    title: 'French',
    translationName: 't-fr',
    mainLocale: 'fr-FR'
  }
};

export const LOCALES: ILocales = {
  nl_NL: {
    code: 'nl-NL',
    title: 'Nederlands - Nederland',
    language: LANGUAGES.NL.language,
    languageId: LANGUAGES.NL.languageId,
    country: COUNTRIES.NL.country,
    countryName: COUNTRIES.NL.countryName,
    countryId: COUNTRIES.NL.countryId,
    order: 3,
    languageNameTranslation: LANGUAGES.NL.translationName
  },
  en_GB: {
    code: 'en-GB',
    language: LANGUAGES.EN.language,
    languageId: LANGUAGES.EN.languageId,
    title: 'English - United Kingdom',
    country: COUNTRIES.GB.country,
    countryName: COUNTRIES.GB.countryName,
    countryId: COUNTRIES.GB.countryId,
    order: 1,
    languageNameTranslation: LANGUAGES.EN.translationName
  },
  fr_BE: {
    code: 'fr-BE',
    language: LANGUAGES.FR.language,
    languageId: LANGUAGES.FR.languageId,
    title: 'Français - Belguim',
    country: COUNTRIES.BE.country,
    countryName: COUNTRIES.BE.countryName,
    countryId: COUNTRIES.BE.countryId,
    order: 5,
    languageNameTranslation: LANGUAGES.FR.translationName
  },
  nl_BE: {
    code: 'nl-BE',
    language: LANGUAGES.NL.language,
    languageId: LANGUAGES.NL.languageId,
    title: 'Nederlands - België',
    country: COUNTRIES.BE.country,
    countryName: COUNTRIES.BE.countryName,
    countryId: COUNTRIES.BE.countryId,
    order: 9,
    languageNameTranslation: LANGUAGES.NL.translationName
  }
};
