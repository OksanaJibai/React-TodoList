import TodoList from './components/TodoList';

function App() {
	return(
		// eslint-disable-next-line react/react-in-jsx-scope
		<>
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<h1 className="text-center mt-5 mb-5">TODO LIST</h1>
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<TodoList/>
		</>
	);
}

export default App;
