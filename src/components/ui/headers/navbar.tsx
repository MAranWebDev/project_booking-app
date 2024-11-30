import { LanguageDropdown } from '@/components/ui/dropdowns';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export const Navbar = async () => {
  const session = await getServerSession();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          width: '90%',
          mx: 'auto',
          my: 1,
        }}
      >
        <Link href="/">
          <Typography variant="h6" component="div">
            Next Auth
          </Typography>
        </Link>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <Link href="/">Home</Link>

          {session ? (
            <Link href="/dashboard/profile">Profile</Link>
          ) : (
            <>
              <Link href="/signup">Signup</Link>
              <Link href="/signin">Signin</Link>
            </>
          )}
          <LanguageDropdown />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
