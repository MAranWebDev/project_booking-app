import { SignoutButton } from '@/components/buttons/signout-button';
import { LanguageDropdown } from '@/components/dropdowns/language-dropdown';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const AppHeader = async () => {
  const session = await getServerSession();
  const t = await getTranslations('Navbar');

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar sx={{ width: '90%', mx: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {session ? (
              <>
                <Link href="/profile">{t('profile')}</Link>
                <Link href="/schedule">{t('schedule')}</Link>
                <SignoutButton />
              </>
            ) : (
              <>
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about')}</Link>
                <Link href="/signin">{t('signin')}</Link>
                <Link href="/signup">
                  <Button variant="outlined" color="inherit">
                    {t('signup')}
                  </Button>
                </Link>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LanguageDropdown />
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Empty toolbar to not have content behind the AppBar with "fixed" position  */}
      <Toolbar />
    </header>
  );
};
