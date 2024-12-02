'use client';

import { signOut, useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <main>
      <h1>Profile</h1>
      <pre>{JSON.stringify({ session, status }, null, 2)}</pre>
      <button onClick={() => signOut()}>Signout</button>
    </main>
  );
}
