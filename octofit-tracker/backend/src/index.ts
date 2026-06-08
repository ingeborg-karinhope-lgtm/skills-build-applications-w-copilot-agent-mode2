import { app } from './app.js';
import { connectDatabase } from './db.js';

const port = Number(process.env.PORT ?? 8000);

async function startServer() {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`OctoFit API listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start OctoFit API', error);
  process.exit(1);
});