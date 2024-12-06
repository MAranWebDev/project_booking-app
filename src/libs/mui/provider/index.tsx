import { theme } from '@/libs/mui/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { MuiXDatePickersProvider } from './mui-x-date-pickers.provider';
import { NotistackProvider } from './notistack-provider';

export const MuiProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {/* Normalize css */}
        <CssBaseline />

        <MuiXDatePickersProvider>
          {/* "notistack": must be inside theme provider to inherit styles */}
          <NotistackProvider>{children}</NotistackProvider>
        </MuiXDatePickersProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
