'use client';

import { Calendar } from '@/components/calendar';
import { useAppContext } from '@/context/app.context';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AboutPage() {
  const { counter, changeCounter } = useAppContext();

  return (
    <main>
      <Typography sx={{ p: 1 }} component="h1" variant="h4">
        About Page
      </Typography>

      <Typography component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        dignissimos eveniet dolore voluptas sunt laudantium deserunt, modi,
        laboriosam veritatis odit vero, et iure. Sequi dolor odio tempora
        dolores harum. Molestias!
      </Typography>

      <Typography>Contador: {counter}</Typography>

      <Button variant="outlined" onClick={changeCounter}>
        Agregar a contador
      </Button>

      <section>
        <Calendar />
      </section>
    </main>
  );
}
