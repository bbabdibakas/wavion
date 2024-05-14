import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Post, PostState } from '../types/post'
import { fetchPostDataById } from '../services/fetchPostDataById'

const initialState: PostState = {
	isLoading: false
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostDataById.pending, (state) => {
				state.isLoading = true
				state.isErrorMessage = undefined
			})
			.addCase(fetchPostDataById.rejected, (state, action) => {
				state.isLoading = false
				state.isErrorMessage = action.payload as string
			})
			.addCase(fetchPostDataById.fulfilled, (state, action: PayloadAction<Post>) => {
				state.isLoading = false
				state.isErrorMessage = undefined
                state.postData = action.payload
			})
	}
})

export const { actions: postActions } = postSlice
export const { reducer: postReducer } = postSlice