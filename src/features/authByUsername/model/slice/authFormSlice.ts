import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthFormState } from '../types/authForm'
import { authByUsername } from '../services/authByUsername/authByUsername'

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
	extraReducers: (builder) => {
		builder
			.addCase(authByUsername.pending, (state) => {
				state.isLoading = true
				state.isErrorMessage = undefined
			})
			.addCase(authByUsername.rejected, (state, action) => {
				state.isLoading = false
				state.isErrorMessage = action.payload as string
			})
			.addCase(authByUsername.fulfilled, (state) => {
				state.isLoading = false
				state.isErrorMessage = undefined
			})
	}
})

export const { actions: authFormActions } = authFormSlice
export const { reducer: authFormReducer } = authFormSlice