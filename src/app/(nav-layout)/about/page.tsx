import { AuthGuardProvider } from '@/features/auth/providers';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  // "next-intl"
  const t = useTranslations('Navbar');

  return (
    <AuthGuardProvider>
      <Box sx={{ width: '90%', mx: 'auto' }} component="main">
        <Typography sx={{ p: 1 }} component="h1" variant="h4">
          {t('about')}
        </Typography>

        <Typography component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ut
          aperiam corrupti corporis harum nesciunt incidunt pariatur. Ipsa
          laboriosam laborum beatae similique quidem soluta consequuntur
          pariatur tempore corporis eius amet ullam doloremque mollitia numquam
          voluptatibus facilis nostrum delectus quibusdam vitae aliquid, ducimus
          neque? Labore a natus nobis at! Repellat labore dolorum velit
          similique non, corrupti quidem, dolores unde expedita dicta
          repellendus? Aliquam amet, vel repellat cum iusto, omnis animi
          nesciunt placeat accusantium ipsum quidem dolores laboriosam expedita
          magni praesentium accusamus soluta.
        </Typography>
      </Box>
    </AuthGuardProvider>
  );
}
