import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import taskController from './controllers/taskController.js';
import errorController from './controllers/errorController.js';
// import path from 'path';
// import { fileURLToPath } from "url"; // Para windows

// settings
// const __dirname = path.dirname(new URL(import.meta.url).pathname); // /C:/Users/GBP17/Desktop/BackendJourney/06-App/src
// const __dirname = path.dirname(fileURLToPath(import.meta.url)); // C:\Users\GBP17\Desktop\BackendJourney\06-App\src
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/tasks', taskController.getAllTasks);
app.post('/tasks', taskController.addTask);
app.put('tasks/:id', taskController.editTask);
app.put('/tasks/complete/:id', taskController.completeTask);
app.put('/tasks/uncomplete/:id', taskController.uncompleteTask);
app.delete('/tasks/:id', taskController.deleteTask);

app.use(errorController.error404)


app.listen(port, () => {
    console.log(`API listening at http://localhost/tasks:${port}`);
});
