'use client';

import { ReactNode } from 'react';
import { TranslationProvider } from '@/contexts/translationContext';
import { Locale, fallbackLng } from '@/i18n';
import ThemeCustomization from '@/themes';

interface IProvidersProps {
  children: ReactNode;
  lng: Locale;
}

export default function Providers({ lng, children }: IProvidersProps) {
  return (
    <TranslationProvider lng={lng || fallbackLng}>
      <ThemeCustomization>{children}</ThemeCustomization>
    </TranslationProvider>
  );
}
