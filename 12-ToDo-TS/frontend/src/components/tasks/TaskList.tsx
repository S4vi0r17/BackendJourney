import { useEffect, useState } from 'react'
import axios from 'axios'
import { Task } from './Task'
import TaskItem from './TaskItem'

const TaskList = () => {
	const API: string = 'http://localhost:4000/tasks'

	const [tasks, setTasks] = useState<Task[]>([])

	const loadTasks = async () => {
		const response = await axios.get<Task[]>(API)
		// console.log(response);
		const formatedTasks = response.data
			.map((task: Task) => {
				return {
					...task,
					createdAt: task.createdAt
						? new Date(task.createdAt)
						: new Date(),
					updatedAt: task.updatedAt
						? new Date(task.updatedAt)
						: new Date(),
				}
			})
			.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
		setTasks(formatedTasks)
	}

	useEffect(() => {
		loadTasks()
	}, [])

	return (
		<div className='mx-auto mt-12 flex flex-wrap items-center justify-center gap-3'>
			{tasks.map((task) => (
				<TaskItem key={task._id} task={task} loadTasks={loadTasks} />
			))}
		</div>
	)
}

export default TaskList
