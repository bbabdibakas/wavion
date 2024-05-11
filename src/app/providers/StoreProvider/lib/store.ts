import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { RootState } from './RootState'
import { authFormReducer } from 'features/AuthByUsername'

export const createReduxStore = (initialState?: RootState) => {
	const rootReducer = {
		counter: counterReducer,
		authForm: authFormReducer
	}

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
    
	return store
}