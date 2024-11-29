// Types
export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

// Constants
export const LOCALES = { EN: 'en', ES: 'es' } as const;
export const DEFAULT_LOCALE: Locale = LOCALES.EN;
