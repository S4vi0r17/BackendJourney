import { useState } from 'react'
import Todos from './components/Todos'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import { FilterValue } from './types'
import Header from './components/Header'

const mockTodos = [
	{
		id: 1,
		title: 'Buy milk',
		completed: false,
	},
	{
		id: 2,
		title: 'Buy bread',
		completed: true,
	},
	{
		id: 3,
		title: 'Buy cheese',
		completed: false,
	},
]

const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodos)
	const [filterSelected, setFilterSelected] = useState<FilterValue>(
		TODO_FILTERS.ALL
	)

	const handleRemove = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const handleCompleted = (id: number) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			})
		)
	}

	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter)
	}

	const activeCount = todos.filter((todo) => !todo.completed).length
	const completedCount = todos.length - activeCount

	const filteredTodos = todos.filter((todo) => {
		if (filterSelected === TODO_FILTERS.ACTIVE) {
			return !todo.completed
		}
		if (filterSelected === TODO_FILTERS.COMPLETED) {
			return todo.completed
		}
		return todo
	})

	const handleRemoveCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed))
	}

	const onAddTodo = (title: string) => {
		const newTodo = {
			id: todos.length + 1,
			title,
			completed: false,
		}
		setTodos([...todos, newTodo])
	}

	return (
		<div className='todoapp'>
			<Header onAddTodo={onAddTodo} />
			<Todos
				todos={filteredTodos}
				handleRemove={handleRemove}
				handleCompleted={handleCompleted}
			/>
			<Footer
				activeCount={activeCount}
				completedCount={completedCount}
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
				handleRemoveCompleted={handleRemoveCompleted}
			/>
		</div>
	)
}

export default App
