import Typography from '@mui/material/Typography';

export default function AboutPage() {
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
    </main>
  );
}
