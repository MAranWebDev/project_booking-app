'use server';

import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, Locale } from './constants';

// Constants
const COOKIE_NAME = 'NEXT_LOCALE'; // The locale is read from a cookie.

// Utils
export const getUserLocale = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
};

export const setUserLocale = async (locale: Locale) => {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
};
