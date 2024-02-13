import { Task } from './Task'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Props {
	task: Task
	loadTasks: () => void
}

const TaskItem = ({ task, loadTasks }: Props) => {
	const navigate = useNavigate()

	const handleDelete = async (
		id: string,
		evt: React.MouseEvent<HTMLButtonElement>
	) => {
		evt.stopPropagation()
		if (window.confirm('Are you sure you want to delete this task?')) {
			await axios.delete(`http://localhost:4000/tasks/${id}`)
			loadTasks()
		}
	}

	return (
		<div
			key={task._id}
			className='py-5 px-4 flex flex-col bg-gray-100 rounded-xl hover:shadow-lg cursor-pointer'
			onClick={() => navigate(`/update-task/${task._id}`)}
		>
			<h1 className='text-xl font-bold pb-3 text-center'>{task.name}</h1>
			<p
				className={`${
					task.done ? 'text-emerald-400' : 'text-red-400'
				} text-sm text-center pb-3`}
			>
				{task.done ? 'Completed' : 'Pending'}
			</p>

			<button
				className='p-2 ml-2 bg-red-400 text-white rounded-md hover:bg-red-500'
				onClick={(evt) => handleDelete(task._id as string, evt)}
			>
				Delete
			</button>
		</div>
	)
}

export default TaskItem
