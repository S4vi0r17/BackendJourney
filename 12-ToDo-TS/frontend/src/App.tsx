import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/tasks/TaskList';
import TaskForm from './components/tasks/TaskForm';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
                    <Route index element={<TaskList />}/>
                    <Route path='new-task' element={<TaskForm />}/>
                </Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
