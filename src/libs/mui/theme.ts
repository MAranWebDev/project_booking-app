'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: { fontFamily: 'var(--font-roboto)' },
  palette: { mode: 'light' },
  components: {
    MuiDrawer: {
      defaultProps: { SlideProps: { appear: true } },
    },
    MuiToggleButtonGroup: {
      defaultProps: { color: 'primary' },
    },
    MuiToggleButton: {
      styleOverrides: { root: { textTransform: 'none' } },
    },
    MuiTab: {
      styleOverrides: { root: { textTransform: 'none' } },
    },
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none' } },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: '16px' } },
    },
  },
});
