import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { RootState } from './RootState'

export const createReduxStore = (initialState?: RootState) => {
	const rootReducer = {
		counter: counterReducer
	}

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
    
	return store
}