import { Router } from 'express';
import {
	getTasks,
	getTask,
	AddTask,
	UpdateTask,
	DeleteTask,
} from '../controllers/TasksController';

const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', AddTask);
router.put('/tasks/:id', UpdateTask);
router.delete('/tasks/:id', DeleteTask);

export default router;
