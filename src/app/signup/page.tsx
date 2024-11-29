'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SignupPage() {
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
          fullname: formData.get('fullname'),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Signup failed');
      }

      const signupResponse = await response.json();

      const res = await signIn('credentials', {
        email: signupResponse.email,
        password: formData.get('password') as string,
        redirect: false,
      });

      if (res?.ok) return router.push('/dashboard/profile');
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred',
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <h1>Signup</h1>

        <label>Fullname:</label>
        <input type="text" placeholder="Fullname" name="fullname" required />

        <label>Email:</label>
        <input type="email" placeholder="Email" name="email" required />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
