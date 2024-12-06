'use client';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const AuthFormLayout = ({ children }: PropsWithChildren) => {
  // "next-intl"
  const t = useTranslations('Navbar');

  return (
    <Stack sx={{ width: '450px', px: 6, py: 2 }} component={Paper} gap={2}>
      <Image
        style={{ margin: 'auto' }}
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={150}
      />

      {children}

      <Link href="/">
        <Button variant="outlined">{t('goback')}</Button>
      </Link>
    </Stack>
  );
};
