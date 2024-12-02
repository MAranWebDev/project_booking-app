import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './utils';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const messagesUrl = `./locales/${locale}.json`

  return {
    locale,
    messages: (await import(messagesUrl)).default,
  };
});
