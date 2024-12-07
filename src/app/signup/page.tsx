import { SignupForm } from '@/features/auth/components';
import { AuthGuardProvider } from '@/features/auth/providers';
import Box from '@mui/material/Box';

export default function SignupPage() {
  return (
    <AuthGuardProvider>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
        component="main"
      >
        <SignupForm />
      </Box>
    </AuthGuardProvider>
  );
}
