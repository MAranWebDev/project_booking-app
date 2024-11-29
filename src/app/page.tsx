import { LanguageDropdown } from '@/components/ui/dropdowns';
import { useTranslations } from 'next-intl';

export default function RootPage() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <h1>{t('title')}</h1>
      <LanguageDropdown />
    </main>
  );
}
