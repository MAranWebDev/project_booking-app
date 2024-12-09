'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  // "next-auth"
  const { data, status } = useSession();

  // "next-intl"
  const t = useTranslations();

  return (
    <Box component="main">
      <Typography>{t('profile')}</Typography>
      <pre>{JSON.stringify({ data, status }, null, 2)}</pre>
    </Box>
  );
}
