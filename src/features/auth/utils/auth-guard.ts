import { ROUTES } from '@/constants/routes';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const authGuard = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession();

  if (session) return redirect(ROUTES.DASHBOARD_PROFILE);

  return children;
};
