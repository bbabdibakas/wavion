import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchProfileDataById = createAsyncThunk<Profile, string, ThunkConfig<string>>(
	'profile/fetchProfileDataById',
	async (profileId, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi

		try {
			const response = await extra.api.get<Profile>(`/profiles/${profileId}`)

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