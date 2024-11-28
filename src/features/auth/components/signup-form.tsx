import { usersZodCreateInput, UsersZodCreateInput } from '@/libs/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const SignupForm = () => {
  // "react-hook-form"
  const {} = useForm<UsersZodCreateInput>({
    resolver: zodResolver(usersZodCreateInput),
  });
};
