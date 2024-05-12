import { Provider } from 'react-redux'
import { RootState } from '../lib/RootState'
import { ReactNode } from 'react'
import { createReduxStore } from '../lib/store'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    initialState?: DeepPartial<RootState>
	asyncReducers?: DeepPartial<ReducersMapObject<RootState>>
    children: ReactNode
}

export const StoreProvider = (props: StoreProviderProps) => {

	const {
		initialState,
		asyncReducers,
		children
	} =props

	const store = createReduxStore(initialState as RootState, asyncReducers as ReducersMapObject<RootState>)
    
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}