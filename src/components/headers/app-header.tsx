import { SignoutButton } from '@/components/buttons/signout-button';
import { LanguageDropdown } from '@/components/dropdowns/language-dropdown';
import { ROUTES } from '@/constants/routes';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
                <Link href={ROUTES.DASHBOARD_PROFILE}>{t('profile')}</Link>
                <Link href={ROUTES.DASHBOARD_SCHEDULE}>{t('schedule')}</Link>
                <SignoutButton />

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <AccountCircleIcon />
                  <Typography>{session.user?.email}</Typography>
                </Box>
              </>
            ) : (
              <>
                <Link href={ROUTES.ROOT}>{t('home')}</Link>
                <Link href={ROUTES.ABOUT}>{t('about')}</Link>
                <Link href={ROUTES.SIGNIN}>{t('signin')}</Link>
                <Link href={ROUTES.SIGNUP}>
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
