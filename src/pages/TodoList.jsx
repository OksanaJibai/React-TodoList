import React from 'react';
import TodoBox from '../components/TodoBox';
import {Layout} from '../Layout';

function TodoList(){
	return(
		<Layout>
			<TodoBox/>
		</Layout>
	);
}
export default TodoList;