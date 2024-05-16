import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Post } from '../types/post'

export const fetchPostDataById = createAsyncThunk<Post, string, ThunkConfig<string>>(
	'post/fetchPostDataById',
	async (postId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi

		try {
			const response = await extra.api.get<Post>(`/posts/${postId}`, {
				params: {
					_expand: 'profile'
				}
			})

			if (!response.data) {
				throw new Error('some error')
			}

			return response.data
		} catch (e) {
			// console.log(e)
			return rejectWithValue('some error')
		}
	}
)
