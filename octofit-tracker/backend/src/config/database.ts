import mongoose from 'mongoose';

const databaseName = 'octofit_db';

export async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI ?? `mongodb://127.0.0.1:27017/${databaseName}`;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  return mongoose.connect(mongoUri, { dbName: databaseName });
}