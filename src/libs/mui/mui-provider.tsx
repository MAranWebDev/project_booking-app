'use client';

import { LOCALES } from '@/libs/next-intl/constants';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { enUS, esES } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  enUS as dateEnUS,
  esES as dateEsES,
} from '@mui/x-date-pickers/locales';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useLocale } from 'next-intl';
import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';

// Direct imports necessary for dayjs adapterLocale
import 'dayjs/locale/en';
import 'dayjs/locale/es';

export const MuiProvider = ({ children }: PropsWithChildren) => {
  // "next-intl"
  const locale = useLocale();
  const isSpanishLocale = locale === LOCALES.ES;
  const coreLocale = isSpanishLocale ? esES : enUS;
  const datePickerLocale = isSpanishLocale ? dateEsES : dateEnUS;

  // Theme settings
  const theme = createTheme(
    {
      typography: { fontFamily: 'var(--font-roboto)' },
      components: {
        MuiButton: { styleOverrides: { root: { textTransform: 'none' } } },
      },
    },
    coreLocale, // core translations
    datePickerLocale, // x-date-pickers translations
  );

  return (
    // For next.js
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {/* Normalize css */}
        <CssBaseline />

        {/* "mui-x-date-pickers" */}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
          {/* "notistack" */}
          <SnackbarProvider maxSnack={1}>{children}</SnackbarProvider>;
        </LocalizationProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
