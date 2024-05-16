import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Post } from 'entities/Post'
import { addReplyFormActions } from '../../slice/addReplyFormSlice'
import { getPostData } from 'entities/Post/model/selectors/getPostData/getPostData'
import { getUserData } from 'entities/User'

export const addReplyByPostId = createAsyncThunk<Post, string, ThunkConfig<string>>(
	'post/addReplyByPostId',
	async (paragraph, thunkApi) => {
		const { dispatch, rejectWithValue, getState ,extra } = thunkApi

		const post = getPostData(getState())
		const profile = getUserData(getState())

		try {
			const response = await extra.api.post<Post>('/posts', {
				postId: post.id,
				paragraph: paragraph,
				profileId: profile.profileId
			})

			if (!response.data) {
				throw new Error('some error')
			}

			dispatch(addReplyFormActions.onClearState())

			return response.data
		} catch (e) {
			// console.log(e)
			return rejectWithValue('some error')
		}
	}
)