import { LanguageDropdown } from '@/components/ui/dropdowns';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <h1>{t('title')}</h1>
      <LanguageDropdown />
    </main>
  );
}
