import { useEffect, useState } from 'react'
import axios from 'axios'

interface Task {
	createdAt: string
	done: boolean
	name: string
	updatedAt: string
	_id: string
}

const TaskList = () => {
	const API: string = 'http://localhost:4000/tasks'

	const [tasks, setTasks] = useState<Task[]>([])

	const loadTasks = async () => {
		const response = await axios.get(API)
		// console.log(response);
		setTasks(response.data)
	}

	useEffect(() => {
		loadTasks()
	}, [])

	return (
		<div className='container mx-auto px-8'>
			{tasks.map((task) => (
				<div
					className='bg-gray-50 text-black text-2xl flex justify-between'
					key={task._id}
				>
					<h1>{task.name}</h1>
					<p
						className={`${
							task.done ? 'text-emerald-400' : 'text-red-400'
						}`}
					>
						{task.done ? 'Completed' : 'Pending'}
					</p>
				</div>
			))}
		</div>
	)
}

export default TaskList
