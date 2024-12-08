'use client';

import { ROUTES } from '@/constants/routes';
import { usersZodSignin, UsersZodSignin } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AuthFormLayout } from './layouts/auth-form-layout';

export const SigninForm = () => {
  const router = useRouter();

  // "next-intl"
  const t = useTranslations('Auth');

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

    if (res?.ok) return router.push(ROUTES.DASHBOARD_PROFILE);
  };

  return (
    <AuthFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label={t('email')}
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <TextField
            label={t('password')}
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />

          <Button variant="contained" type="submit">
            {t('signin')}
          </Button>
        </Stack>
      </form>
    </AuthFormLayout>
  );
};
