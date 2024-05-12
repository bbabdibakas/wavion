import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { RootState } from './RootState'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (initialState?: RootState, asyncReducers?: ReducersMapObject<RootState>) => {
	const rootReducer: ReducersMapObject<RootState> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})

	//@ts-expect-error fix later
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
