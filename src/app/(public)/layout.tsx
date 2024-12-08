import { AuthGuardProvider } from '@/features/auth/providers';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  return <AuthGuardProvider>{children}</AuthGuardProvider>;
}
