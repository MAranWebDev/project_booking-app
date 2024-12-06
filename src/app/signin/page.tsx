import { SigninForm } from '@/features/auth/components';
import Box from '@mui/material/Box';

export default function SignupPage() {
  return (
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
      <SigninForm />
    </Box>
  );
}
