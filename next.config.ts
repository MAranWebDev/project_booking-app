import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Constants
const REQUEST_PATH = './src/libs/next-intl/request.ts';

const withNextIntl = createNextIntlPlugin(REQUEST_PATH);

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
