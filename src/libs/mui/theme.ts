'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: { fontFamily: 'var(--font-roboto)' },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none' } },
    },
  },
});
