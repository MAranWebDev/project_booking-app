import { SignupForm } from '@/features/auth/components';
import { useTranslations } from 'next-intl';

export default function SignupPage() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <h1>Signup Page</h1>
      <h1>{t('title')}</h1>
      <SignupForm />
    </main>
  );
}
