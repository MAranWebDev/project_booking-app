'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es-mx';
import { useLocale } from 'next-intl';
import { PropsWithChildren } from 'react';

export const MuiXDatePickersProvider = ({ children }: PropsWithChildren) => {
  // "next-intl"
  const locale = useLocale();
  const currentLocale = locale === 'es' ? locale : 'en';

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={currentLocale}
    >
      {children}
    </LocalizationProvider>
  );
};
