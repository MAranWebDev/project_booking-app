import { LanguageDropdown } from '@/components/ui/dropdowns';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const PublicHeader = async () => {
  const t = await getTranslations('Navbar');

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar sx={{ width: '90%', mx: 'auto', gap: 2 }}>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/">{t('home')}</Link>
            <Link href="/about">{t('about')}</Link>
            <Link href="/contact">{t('contact')}</Link>
            <Link href="/signup">{t('signup')}</Link>
            <LanguageDropdown />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Empty toolbar to not have content behind the AppBar with "fixed" position  */}
      <Toolbar />
    </header>
  );
};
