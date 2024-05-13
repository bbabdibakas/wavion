import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { RootState, ThunkExtraArg } from './RootState'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'

export const createReduxStore = (initialState?: RootState, asyncReducers?: ReducersMapObject<RootState>) => {
	const rootReducer: ReducersMapObject<RootState> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const extraArg: ThunkExtraArg = {
		api: $api
	}

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg
			}
		})
	})

	//@ts-expect-error fix later
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
