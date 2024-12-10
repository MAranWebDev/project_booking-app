import { ProfileTable } from '@/features/profile/components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  // "next-intl"
  const t = useTranslations();

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 2 }} component="main">
      <Typography sx={{ mb: 2 }} component="h1" variant="h4">
        {t('profile')}
      </Typography>

      <ProfileTable />
    </Box>
  );
}
