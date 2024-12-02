import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const BasicButtons = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        ¿Necesitas hablar? Responde estas preguntas
      </Button>
      <Button variant="outlined">Agendar sesión</Button>
    </Stack>
  );
};
