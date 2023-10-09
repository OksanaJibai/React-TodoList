import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Todo from './pages/Todo';

function App() {
	return(
		// eslint-disable-next-line react/react-in-jsx-scope
		<>
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<Routes>
				{/* eslint-disable-next-line react/react-in-jsx-scope */}
				<Route path="/" element={<Home />} />
				{/* eslint-disable-next-line react/react-in-jsx-scope */}
				<Route path="/todosList" element={<TodoList />} />
				{/* eslint-disable-next-line react/react-in-jsx-scope */}
				<Route path="/todoList/:id" element={<Todo />} />
			</Routes>
		</>
	);
}

export default App;
