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
		setCompleteTodo: (state, action) => {
			const index = state.findIndex(
				todo => todo.id === action.payload.id
			);
			state[index] = {
				...state[index],
				isCompleted: action.payload.isChecked,
			};
			return state;
		},
		deleteAll : () =>{
			return [];
		},
	},
});

export const {addTodo, deleteTodo, setCompleteTodo, deleteAll} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;