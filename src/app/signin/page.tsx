'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Signin() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.error) setError(res.error as string);

    if (res?.ok) return router.push('/dashboard/profile');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <h1>Signin</h1>

        <label>Email:</label>
        <input type="email" placeholder="Email" name="email" />

        <label>Password:</label>
        <input type="password" placeholder="Password" name="password" />

        <button>Signup</button>
      </form>
    </div>
  );
}
