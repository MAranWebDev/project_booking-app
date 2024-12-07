'use client';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns, AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function LocalizationProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}

export default LocalizationProviderWrapper;
