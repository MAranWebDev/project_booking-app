import { ROUTES } from '@/constants/routes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const AuthGuardProvider = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession();

  if (session) return redirect(ROUTES.DASHBOARD_PROFILE);
  return <>{children}</>;
};
