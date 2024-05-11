import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthFormState } from '../types/authForm'

const initialState: AuthFormState = {
	username: '',
	password: '',
	isLoading: false
}

export const authFormSlice = createSlice({
	name: 'authForm',
	initialState,
	reducers: {
		onSetUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		onSetPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
		onClearState: (state) => {
			state.username = ''
			state.password = ''
		},
	},
})

export const { actions: authFormActions } = authFormSlice
export const { reducer: authFormReducer } = authFormSlice