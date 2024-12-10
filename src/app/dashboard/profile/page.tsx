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

  // Log session data
  console.log(JSON.stringify({ data, status }, null, 2));

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 2 }} component="main">
      <Typography component="h1" variant="h4">
        {t('profile')}
      </Typography>
    </Box>
  );
}
