import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchPostsDataByPostId } from '../services/fetchPostsDataByPostId'
import { Post } from 'entities/Post'
import { RootState } from 'app/providers/StoreProvider'
import { PostPageState } from '../types/posPage'

const repliesAdapter = createEntityAdapter({
	selectId: (reply: Post) => reply.id
})

export const getRepliesData = repliesAdapter.getSelectors<RootState>(
	(state) => state.postPage || repliesAdapter.getInitialState()
)

export const postPageSlice = createSlice({
	name: 'postPage',
	initialState: repliesAdapter.getInitialState<PostPageState>({
		ids: [],
		entities: {},
		isLoading: false
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostsDataByPostId.pending, (state) => {
				state.isLoading = true
				state.isErrorMessage = undefined
			})
			.addCase(fetchPostsDataByPostId.rejected, (state, action) => {
				state.isLoading = false
				state.isErrorMessage = action.payload as string
			})
			.addCase(fetchPostsDataByPostId.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.isLoading = false
				state.isErrorMessage = undefined
				repliesAdapter.setAll(state, action.payload)
			})
	}
})

export const { actions: postPageActions } = postPageSlice
export const { reducer: postPageReducer } = postPageSlice