import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Post } from 'entities/Post'

export const fetchPostsDataByPostId = createAsyncThunk<Post[], string, ThunkConfig<string>>(
    'post/fetchPostsDataByPostId',
    async (postId, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi

        try {
            const response = await extra.api.get<Post[]>(`/posts/${postId}/posts`, {
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
