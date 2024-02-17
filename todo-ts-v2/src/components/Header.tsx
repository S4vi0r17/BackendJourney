import CreateTodo from './CreateTodo'

interface Props {
	onAddTodo: (title: string) => void
}

const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header className='header'>
			<h1>
				todos
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
					alt='TypeScript'
					width='20'
					height='20'
				/>
			</h1>
			<CreateTodo onAddTodo={onAddTodo} />
		</header>
	)
}

export default Header
