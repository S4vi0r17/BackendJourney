import { useState } from 'react'

interface Props {
	onAddTodo: (title: string) => void
}

const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		onAddTodo(inputValue)
		setInputValue('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='new-todo'
				placeholder='What needs to be done?'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				autoFocus
			/>
		</form>
	)
}

export default CreateTodo
