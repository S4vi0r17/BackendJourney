import { RequestHandler, Request, Response } from 'express';
import TasksModel from '../models/Tasks';

const getTasks: RequestHandler = (_req: Request, res: Response) => {
	res.json({
		title: 'Get Tasks'
	});
};

const getTask: RequestHandler = (_req: Request, res: Response) => {
	res.json({
		title: 'Get Task'
	});
};

const AddTask: RequestHandler = (_req: Request, res: Response) => {
	res.json({
		message: 'Add Task'
	});
};

const UpdateTask: RequestHandler = (_req: Request, res: Response) => {
	res.json({
		message: 'Update Task'
	});
};

const DeleteTask: RequestHandler = (_req: Request, res: Response) => {
	res.json({
		message: 'Delete Task'
	});
};

export { getTasks, getTask, AddTask, UpdateTask, DeleteTask };
