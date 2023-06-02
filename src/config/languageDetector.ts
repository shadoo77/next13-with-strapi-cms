import LanguageDetector from 'i18next-browser-languagedetector';
import { fallbackLng, locales } from '@/i18n';

const languageDetector = new LanguageDetector({
  fallbackLng,
  supportedLngs: locales
});

export default languageDetector;
