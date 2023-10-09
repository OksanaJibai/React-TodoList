import React, {useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';

const CurrentTodoContext = createContext();
export const useMyContext = () =>{
	return useContext(CurrentTodoContext);
};
// eslint-disable-next-line react/prop-types
export const CurrentTodoContextProvider = ({children}) =>{
	const [selectedTodo,setSelectedTodo] = useState(null);
	const toggle = data =>{
		setSelectedTodo(data);
	};
	return (
		<CurrentTodoContext.Provider value={{toggle,selectedTodo}}>
			{children}
			{selectedTodo && (
				<div>
					<h2>{selectedTodo.title}</h2>
					<p>{selectedTodo.description}</p>
				</div>
			) }
		</CurrentTodoContext.Provider>
	);
};
CurrentTodoContextProvider.protoType = {
	children:PropTypes.node.isRequired,
};