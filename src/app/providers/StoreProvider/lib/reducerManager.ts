import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit'
import { RootState, RootStateKey } from './RootState'

interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootState>
    reduce: (state: RootState, action: UnknownAction) => RootState
    add: (key: RootStateKey, reducer: Reducer) => void
    remove: (key: RootStateKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<RootState> {
	reducerManager: ReducerManager
}

export function createReducerManager(initialReducers: ReducersMapObject<RootState>): ReducerManager {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: RootStateKey[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: RootState, action: UnknownAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }
				for (const key of keysToRemove) {
					delete state[key]
				}
				keysToRemove = []
			}

			return combinedReducer(state, action)
		},

		add: (key: RootStateKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			combinedReducer = combineReducers(reducers)
		},

		remove: (key: RootStateKey) => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		}
	}
}