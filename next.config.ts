// "next.config.ts" is not in "tsconfig" so it can't use absolute import
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Constants
const REQUEST_CONFIG_PATH = './src/libs/next-intl/request-config.ts';

// "next-intl"
const withNextIntl = createNextIntlPlugin(REQUEST_CONFIG_PATH);

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
