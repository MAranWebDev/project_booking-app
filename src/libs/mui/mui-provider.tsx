import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

import { theme } from './theme';

export const MuiProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {/* Normalize css */}
        <CssBaseline />

        {/* Rest of the app */}
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
