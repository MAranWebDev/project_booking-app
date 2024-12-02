'use client';

import { usersZodSignin, UsersZodSignin } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const SigninForm = () => {
  const t = useTranslations('Auth');
  const router = useRouter();

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersZodSignin>({
    resolver: zodResolver(usersZodSignin),
  });

  // Utils
  const onSubmit = async ({ email, password }: UsersZodSignin) => {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) return router.push('/dashboard/profile');
  };

  return (
    <Paper sx={{ width: '450px', p: 6 }}>
      <Image
        style={{ margin: 'auto' }}
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={150}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label={t('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <TextField
            label={t('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />

          <Button variant="contained" type="submit">
            {t('signin')}
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};
