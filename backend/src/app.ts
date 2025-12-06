import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRouter from './routes/health';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);

export default app;
