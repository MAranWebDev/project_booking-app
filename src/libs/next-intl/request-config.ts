import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './utils';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const translationsPath = `./locales/${locale}.json`;

  return {
    locale,
    messages: (await import(translationsPath)).default,
  };
});
