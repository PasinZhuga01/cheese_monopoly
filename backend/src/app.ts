import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: process.env['FRONTEND_URL'] }));

export default app;
