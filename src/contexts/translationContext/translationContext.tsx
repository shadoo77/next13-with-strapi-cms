'use client';

import { createContext, useCallback, useContext } from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as getTranslationOrg,
  UseTranslationResponse
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, Locale } from '@/i18n';

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../../locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    }
  });

interface TranslationContext {
  useTranslation: () => UseTranslationResponse<string | string[], undefined>;
}

const TranslationContext = createContext<TranslationContext | undefined>(undefined);

interface IProviderProps {
  children: React.ReactElement;
  lng: Locale;
}

export function TranslationProvider({ lng, children }: IProviderProps) {
  const useTranslation = useCallback(
    (ns: string | string[] = 'translation', options: any = {}) =>
      getTranslationOrg(ns, { ...options, lng }),
    [lng]
  );

  return (
    <TranslationContext.Provider value={{ useTranslation }}>{children}</TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context.useTranslation();
}
