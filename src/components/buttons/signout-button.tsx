'use client';

import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export const SignoutButton = () => {
  // "next-intl"
  const t = useTranslations();

  // Utils
  const handleClickSignout = () => signOut();

  return (
    <Button variant="text" color="inherit" onClick={handleClickSignout}>
      {t('signout')}
    </Button>
  );
};
