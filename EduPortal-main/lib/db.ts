import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eduportal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function executeQuery<T>({ query, values }: { query: string; values?: any[] }): Promise<T> {
  try {
    const [results] = await pool.execute(query, values);
    return results as T;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}