import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function initDb() {
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    });

    await connection.execute(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
    await connection.execute(`
        CREATE TABLE IF NOT EXISTS orders (
          id INT AUTO_INCREMENT PRIMARY KEY,
          total FLOAT NOT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          userId INT NOT NULL,
          FOREIGN KEY (userId) REFERENCES users(id)
        );
      `);
      

    return connection;
}
