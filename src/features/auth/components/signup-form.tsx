'use client';

import { usersZodSignup, UsersZodSignup } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const SignupForm = () => {
  const router = useRouter();

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersZodSignup>({
    resolver: zodResolver(usersZodSignup),
  });

  // Utils
  const onSubmit = async ({ name, email, password }: UsersZodSignup) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Signup failed');
    }

    const signupResponse = await response.json();
    console.log(signupResponse);

    // const res = await signIn('credentials', {
    //   email: signupResponse.email,
    //   password,
    //   redirect: false,
    // });

    // if (res?.ok) return router.push('/dashboard/profile');
  };

  return (
    <Paper
      sx={{ width: 500, p: 6 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2}>
        <TextField
          required
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
        />
        <TextField
          required
          label="Email"
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <TextField
          required
          label="Password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />

        <Button variant="contained" type="submit">
          Signup
        </Button>
      </Stack>
    </Paper>
  );
};
