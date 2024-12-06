'use client';

import Paper from '@mui/material/Paper';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const AuthFormLayout = ({ children }: PropsWithChildren) => {
  const t = useTranslations('Auth');

  return (
    <Paper sx={{ width: '450px', p: 6 }}>
      <Image
        style={{ margin: 'auto' }}
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={150}
      />

      {children}

      <Link href="/">{t('goback')}</Link>
    </Paper>
  );
};
