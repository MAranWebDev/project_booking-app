import { getRequestConfig } from 'next-intl/server';

// Constants
const LOCALE = 'en';
const MESSAGES_PATH = `./locales/${LOCALE}.json`;

export default getRequestConfig(async () => {
  return {
    locale: LOCALE,
    messages: (await import(MESSAGES_PATH)).default,
  };
});
