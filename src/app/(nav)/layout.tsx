import { AppHeader } from '@/components/headers/app-header';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
