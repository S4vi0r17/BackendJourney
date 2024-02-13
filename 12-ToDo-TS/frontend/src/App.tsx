import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/tasks/TaskList'
import TaskForm from './components/tasks/TaskForm'
import NavBar from './components/navbar/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import 'todomvc-app-css/index.css'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<NavBar />}>
					<Route index element={<TaskList />} />
					<Route path='new-task' element={<TaskForm />} />
					<Route path='update-task/:id' element={<TaskForm />} />
				</Route>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	)
}

export default App
