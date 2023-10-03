import {createSlice} from '@reduxjs/toolkit';

const initialState = [
	{
		id:'2605',
		taskTitle : 'Some title',
		taskBody : 'Some description',
		isCompleted : false,
	}
];
export const todosSlice = createSlice({
	name: 'todos',
	initialState : initialState,
	reducers:{
		addTodo : (state, action) =>{
			return [action.payload, ...state];
		},
		deleteTodo : (state, action) =>{
			return state.filter(todo => todo.id !== action.payload.id);
		},
		deleteAll : () =>{
			return [];
		},
	},
});

export const {addTodo, deleteTodo, deleteAll} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;