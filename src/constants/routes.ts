// Constants
export const ROUTES = {
  ROOT: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  ABOUT: '/about',
  DASHBOARD_PROFILE: '/dashboard/profile',
  DASHBOARD_SCHEDULE: '/dashboard/schedule',
  API_ROOT: '/api',
  API_AUTH_SIGNUP: '/api/auth/signup',
} as const;

// Exported types
export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
