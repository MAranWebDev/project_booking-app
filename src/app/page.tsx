import { SigninForm } from '@/features/auth/components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';

export default function RootPage() {
  const t = useTranslations('Home');

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 'calc(100vh - 64px)',
        overflow: 'hidden',
        backgroundImage: `url("/images/imagen.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          flexGrow: 1,
          gap: 2,
          p: 2,
        }}
      >
        <Button sx={{ backgroundColor: 'transparent' }} variant="contained">
          {t('contactMessage')}
        </Button>
        <Button sx={{ backgroundColor: 'transparent' }} variant="contained">
          {t('helpMessage')}
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'start', p: 2 }}>
        <SigninForm />
      </Box>
    </Box>
  );
}
