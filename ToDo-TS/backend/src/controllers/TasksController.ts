import { RequestHandler, Request, Response } from 'express';
import TasksModel from '../models/Tasks';

const getTasks: RequestHandler = async (_req: Request, res: Response) => {
	try {
		const tasks = await TasksModel.find();
		res.json(tasks);
	} catch (error) {
		res.json(error);
	}
};

const getTask: RequestHandler = async (req: Request, res: Response) => {
	const task = await TasksModel.findById(req.params.id);
	if (!task) return res.status(404).json();
	res.json(task);
};

const AddTask: RequestHandler = async (req: Request, res: Response) => {
	const { name } = req.body;
	const nameExists = await TasksModel.findOne({ name });

	if (nameExists) {
		return res.status(400).json({ msg: 'Name already exists' });
	}

	const task = new TasksModel(req.body);
	const taskSaved = await task.save();
	res.json(taskSaved);
};

const UpdateTask: RequestHandler = async (req: Request, res: Response) => {
	const task = await TasksModel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json({
		message: 'task successfully updated',
		task
	});
};

const DeleteTask: RequestHandler = async (req: Request, res: Response) => {
	const task = await TasksModel.findByIdAndDelete(req.params.id);
	if (!task)
		return res.status(404).json({
			message: 'Task not found',
		});
	res.json({
		message: 'Task successfully deleted',
	});
};

export { getTasks, getTask, AddTask, UpdateTask, DeleteTask };
