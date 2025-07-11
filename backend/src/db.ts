import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const db = mysql.createPool({
	host: process.env['DB_HOST'] || 'localhost',
	user: process.env['DB_USER'] || 'root',
	password: process.env['DB_PASSWORD'] || '',
	database: process.env['DB_NAME'] || 'house',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

export default db;
