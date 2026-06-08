import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';

// Seed the octofit_db database with test data.
async function seed() {
  await connectDatabase();
  console.log('Seed the octofit_db database with test data');
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Failed to seed octofit_db', error);
  process.exit(1);
});