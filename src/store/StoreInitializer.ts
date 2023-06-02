'use client';

import { useRef } from 'react';
import { getOverrideThemes } from './themeStore/helpers';
import { ThemeResponse, useThemeStore } from '@/store/themeStore';

function StoreInitializer({ themesData }: { themesData: ThemeResponse[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useThemeStore.setState((prevState) => {
      if (!themesData?.length) {
        return { ...prevState };
      }
      const themes = getOverrideThemes(themesData, prevState.activeTheme.value);
      return { ...prevState, themes, activeTheme: themes[0] };
    });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
