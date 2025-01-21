/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Client } from 'pg';

// const client = new Client({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// client.connect().catch((err: any) => console.error('Database connection failed', err));

// export default client;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from 'pg';

declare global {
  // Prevent TypeScript from complaining about global variables
  var _pgClient: Client | undefined;
}

const client = global._pgClient || new Client({
  connectionString: process.env.DATABASE_URL, // Use DATABASE_URL directly
  ssl: {
    rejectUnauthorized: false, // Required for Neon PostgreSQL
  },
});

if (!global._pgClient) {
  global._pgClient = client;
  client.connect().catch((err: any) => {
    console.error('Database connection failed:', err);
  });
}

export default client;


