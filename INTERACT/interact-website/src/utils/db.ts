import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not repeatedly created during hot reloading
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client for each request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const getDatabase = async (dbName: string) => {
  const client = await clientPromise;
  return client.db(dbName);
};