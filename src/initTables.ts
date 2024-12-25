// initTables.ts pour la creation des tables dans la bases de donnees
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'AppCollectesDonnees',
  password: '020103',
  port: 5432,
});

export const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        nameUser VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Posts (
        id SERIAL PRIMARY KEY,
        userId INTEGER REFERENCES Users(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS admin (
          idAmin SERIAL PRIMARY KEY,
          nomAdmin VARCHAR(100),
          emailAdmin VARCHAR(50),
          passwordAdmin VARCHAR(8),
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS serveurDistant (
          id SERIAL PRIMARY KEY,
          adresseIP VARCHAR(20),  
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS systeme (
          id SERIAL PRIMARY KEY,
          identifiantSysteme VARCHAR(20),  
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

    console.log('Tables created successfully');
  } catch (err:unknown) {
    if (err instanceof Error) {
        console.error('An error occurred:', err.message);
      } else {
        console.error('An unknown error occurred');
      }
  }
};
