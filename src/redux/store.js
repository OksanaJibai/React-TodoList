import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {todosReducer} from './todosSlice';
import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const persistConfig = {
	key : 'todos',
	storage,
	whitelist : ['todos'],
};

const rootReducer = combineReducers({todos: todosReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware(getDefaultMiddleware){
		return getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		});
	},
});

export const persistor = persistStore(store);