import { ScheduleForm } from '@/features/schedule/components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

export default function SchedulePage() {
  // "next-intl"
  const t = useTranslations();

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 2 }} component="main">
      <Typography component="h1" variant="h4">
        {t('schedule')}
      </Typography>

      <ScheduleForm />
    </Box>
  );
}
