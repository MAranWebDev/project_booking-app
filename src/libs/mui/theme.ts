'use client';

import { createTheme } from '@mui/material/styles';
// import { deDE as dataGridDeDE } from '@mui/x-data-grid';
// import { deDE as coreDeDE } from '@mui/material/locale';
// import { deDE } from '@mui/x-date-pickers/locales';

export const theme = createTheme(
  {
    typography: { fontFamily: 'var(--font-roboto)' },
    components: {
      MuiButton: {
        styleOverrides: { root: { textTransform: 'none' } },
      },
    },
  },
  // deDE,
  // dataGridDeDE,
  // coreDeDE,
);
