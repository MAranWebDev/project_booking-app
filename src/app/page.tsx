import { AppHeader } from '@/components/headers/app-header';
import { AuthGuardProvider } from '@/features/auth/auth-guard-provider';
import { SigninForm } from '@/features/auth/components';
import Box from '@mui/material/Box';

export default function RootPage() {
  return (
    <AuthGuardProvider>
      <AppHeader />

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
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'start', p: 2 }}>
          <SigninForm />
        </Box>
      </Box>
    </AuthGuardProvider>
  );
}
