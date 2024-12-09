'use client';

import { ROUTES } from '@/constants/routes';
import { userZodSignup, UserZodSignup } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AuthFormLayout } from './layouts/auth-form-layout';

export const SignupForm = () => {
  const router = useRouter();

  // "next-intl"
  const t = useTranslations();

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserZodSignup>({
    resolver: zodResolver(userZodSignup),
  });

  // Utils
  const onSubmit = async ({ name, email, password }: UserZodSignup) => {
    const response = await fetch(ROUTES.API_AUTH_SIGNUP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Signup failed');
    }

    const signupResponse = await response.json();

    const res = await signIn('credentials', {
      email: signupResponse.email,
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
            label={t('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name')}
          />
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
            {t('signup')}
          </Button>
        </Stack>
      </form>
    </AuthFormLayout>
  );
};
