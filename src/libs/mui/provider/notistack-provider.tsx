'use client';

import { SnackbarProvider } from 'notistack';
import { PropsWithChildren } from 'react';

export const NotistackProvider = ({ children }: PropsWithChildren) => {
  return <SnackbarProvider maxSnack={1}>{children}</SnackbarProvider>;
};
