'use client';

import { usersZodSignin, UsersZodSignin } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Email"
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
  );
};
