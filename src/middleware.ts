export { default } from 'next-auth/middleware';

// "app/dashboard" is the only protected route
export const config = { matcher: ['/dashboard/:path*'] };
