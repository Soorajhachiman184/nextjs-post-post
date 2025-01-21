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
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;


