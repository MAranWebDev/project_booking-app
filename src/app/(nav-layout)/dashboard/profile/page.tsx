'use client';

import { SignoutButton } from '@/components/buttons/signout-button';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data, status } = useSession();

  return (
    <main>
      <h1>Bienvenido Profile</h1>
      <pre>{JSON.stringify({ data, status }, null, 2)}</pre>
      <SignoutButton />
    </main>
  );
}
