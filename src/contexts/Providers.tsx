'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeStore } from '@/store/themeStore';
import { TranslationProvider } from '@/contexts/translationContext';
import { Locale, fallbackLng } from '@/i18n';
import { useAppThemes } from '@/queries/hooks/theme';

interface IProvidersProps {
  children: ReactNode;
  lng: Locale;
}

export default function Providers({ lng, children }: IProvidersProps) {
  const { data: themes } = useAppThemes();
  const { activeTheme, setThemes } = useThemeStore();

  useEffect(() => {
    if (themes?.length) {
      setThemes(themes);
    }
  }, [themes, setThemes]);

  return (
    <TranslationProvider lng={lng || fallbackLng}>
      <ThemeProvider theme={activeTheme.value}>{children}</ThemeProvider>
    </TranslationProvider>
  );
}
