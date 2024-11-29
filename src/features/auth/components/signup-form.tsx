'use client';

import { usersZodCreateInput, UsersZodCreateInput } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

export const SignupForm = () => {
  // "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersZodCreateInput>({
    resolver: zodResolver(usersZodCreateInput),
  });

  // Utils
  const onSubmit = (inputs: UsersZodCreateInput) => {
    console.log(inputs);
  };

  return (
    <Paper
      sx={{ width: 500, p: 6 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={2}>
        <TextField
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
        />
        <TextField
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <TextField
          label="Password"
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
