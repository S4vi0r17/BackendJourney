import { type FilterValue } from '../types'
import { Filters } from './Filter'

interface Props {
	activeCount: number
	completedCount: number
	filterSelected: FilterValue
	handleFilterChange: (filter: FilterValue) => void
	handleRemoveCompleted: () => void
}

const Footer: React.FC<Props> = ({
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
	handleRemoveCompleted,
}) => {
	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong>{activeCount}</strong> item left
			</span>

			<Filters
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
			/>

			{!!completedCount && (
				<button
					className='clear-completed'
					onClick={handleRemoveCompleted}
				>
					Clear completed
				</button>
			)}
		</footer>
	)
}
export default Footer
