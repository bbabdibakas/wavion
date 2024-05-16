import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddReplyFormState } from '../types/addReplyForm'
import { addReplyByPostId } from '../services/addReplyByPostId/addReplyByPostId'

const initialState: AddReplyFormState = {
	paragraph: '',
	isLoading: false
}

export const addReplyFormSlice = createSlice({
	name: 'addReplyForm',
	initialState,
	reducers: {
		onSetParagraph: (state, action: PayloadAction<string>) => {
			state.paragraph = action.payload
		},
		onClearState: (state) => {
			state.paragraph = ''
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addReplyByPostId.pending, (state) => {
				state.isLoading = true
				state.isErrorMessage = undefined
			})
			.addCase(addReplyByPostId.rejected, (state, action) => {
				state.isLoading = false
				state.isErrorMessage = action.payload as string
			})
			.addCase(addReplyByPostId.fulfilled, (state) => {
				state.isLoading = false
				state.isErrorMessage = undefined
			})
	}
})

export const { actions: addReplyFormActions } = addReplyFormSlice
export const { reducer: addReplyFormReducer } = addReplyFormSlice