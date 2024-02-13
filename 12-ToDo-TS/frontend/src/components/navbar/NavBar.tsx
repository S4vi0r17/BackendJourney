import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className='container mx-auto'>
			<nav className='bg-gray-100'>
				<div className='flex items-center justify-between mx-auto px-4 py-4'>
					<Link className='text-gray-800 font-bold text-xl' to='/'>
						My Tasks
					</Link>

					<ul className='flex space-x-4'>
						<li>
							<Link
								className='text-gray-600 hover:text-red-400'
								to='/new-task'
							>
								Create a new task
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</div>
	)
}

export default NavBar
