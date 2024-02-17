import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
	handleRemove: (id: number) => void
	handleCompleted: (id: number) => void
}

const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	handleRemove,
	handleCompleted,
}) => {
	return (
		<div className='view'>
			<input
				className='toggle'
				type='checkbox'
				checked={completed}
				onChange={() => {
					handleCompleted(id)
				}}
			/>
			<label>{title}</label>
			<button
				className='destroy'
				onClick={() => {
					handleRemove(id)
				}}
			></button>
		</div>
	)
}

export default Todo
