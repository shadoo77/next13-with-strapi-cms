import { AppTheme, ThemeResponse } from './interfaces';

export function getOverrideThemes(items: ThemeResponse[], theme: AppTheme) {
  return items.map((item) => ({
    name: item.name,
    mode: item.mode,
    value: {
      ...theme,
      appVars: {
        ...theme.appVars,
        ...item.value.appVars
      },
      palette: {
        ...theme.palette,
        primary: {
          ...theme.palette.primary,
          ...item.value.palette.primary
        },
        secondary: {
          ...theme.palette.secondary,
          ...item.value.palette.secondary
        },
        success: {
          ...theme.palette.success,
          ...item.value.palette.success
        },
        error: {
          ...theme.palette.error,
          ...item.value.palette.error
        },
        warning: {
          ...theme.palette.warning,
          ...item.value.palette.warning
        },
        text: {
          ...theme.palette.text,
          ...item.value.palette.text
        },
        background: {
          ...theme.palette.background,
          ...item.value.palette.background
        },
        common: {
          ...theme.palette.common,
          ...item.value.palette.common
        }
      }
    }
  }));
}
