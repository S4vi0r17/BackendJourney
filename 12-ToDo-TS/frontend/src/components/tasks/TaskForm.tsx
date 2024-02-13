import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'
import { Task } from './Task'

type InputChange = HTMLInputElement | HTMLSelectElement

const TaskForm = () => {
	const params = useParams()
	const navigate = useNavigate()

	const [task, setTask] = useState<Task>({
		name: '',
		done: false,
	})

	const handleInputChange = (e: React.ChangeEvent<InputChange>) => {
		setTask({ ...task, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (params.id) {
			updateTask(params.id)
		} else {
			createTask(task)
		}
	}

	const createTask = async (task: Task) => {
		const response = await axios.post('http://localhost:4000/tasks', task)
		console.log(response)
		toast.success('Task created')
		setTask({ name: '', done: false })
	}

	const updateTask = async (id: string) => {
		const response = await axios.put(
			`http://localhost:4000/tasks/${id}`,
			task
		)
		console.log(response)
		toast.success('Task updated')
		navigate('/')
		setTask({ name: '', done: false })
	}

	const getTask = async (id: string) => {
		const response = await axios.get<Task>(
			`http://localhost:4000/tasks/${id}`
		)
		console.log(response)
		const { name, done } = response.data
		setTask({ name, done })
	}

	useEffect(() => {
		if (params.id) {
			getTask(params.id)
		}
	}, [params.id])

	return (
		<div className='mx-auto w-1/2 mt-12'>
			<form onSubmit={handleSubmit}>
				<input
					name='name'
					type='text'
					autoFocus
					className='w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500'
					placeholder='Task name'
					value={task.name}
					onChange={handleInputChange}
				/>
				<select
					name='done'
					className='w-full p-2 mt-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500'
					value={task.done.toString()}
					onChange={handleInputChange}
				>
					<option value='true'>Completed</option>
					<option value='false'>Pending</option>
				</select>
				{params.id ? (
					<button className='w-full p-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-blue-500'>
						Update Task
					</button>
				) : (
					<button className='w-full p-2 mt-2 bg-blue-400 text-white rounded-md hover:bg-blue-500'>
						Create Task
					</button>
				)}
			</form>
		</div>
	)
}

export default TaskForm
