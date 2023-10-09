import React from 'react';
import Item from '../components/Item';
import {useSelector} from 'react-redux';
import {getTodos} from '../redux/selector';
import {useParams} from 'react-router-dom';
import {Layout} from '../Layout';
function Todo(){
	const todos = useSelector(getTodos);
	const {id} = useParams();
	const selectedTodo = todos.find(todo => todo.id === id);
	return(
		<Layout>
			<Item selectedTodo={selectedTodo}/>
		</Layout>
	);
}
export default Todo;