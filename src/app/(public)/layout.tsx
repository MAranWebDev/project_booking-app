import { AuthGuardProvider } from '@/features/auth/auth-guard-provider';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  return <AuthGuardProvider>{children}</AuthGuardProvider>;
}
