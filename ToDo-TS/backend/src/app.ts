import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import TasksRoutes from './routes/TasksRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('port', process.env.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(TasksRoutes);

export default app;
