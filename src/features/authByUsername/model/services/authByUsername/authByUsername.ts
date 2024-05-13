import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import { authFormActions } from '../../slice/authFormSlice'
import { ThunkConfig } from 'app/providers/StoreProvider'

interface AuthByUsernameProps {
    username: string
    password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, ThunkConfig<string>>(
	'auth/authByUsername',
	async (authData, thunkApi) => {
		const { dispatch, rejectWithValue, extra } = thunkApi

		try {
			const response = await extra.api.post<User>('/login', authData)

			if (!response.data) {
				throw new Error('some error')
			}

			dispatch(authFormActions.onClearState())
			dispatch(userActions.setUserData(response.data))

			return response.data
		} catch (e) {
			// console.log(e)
			return rejectWithValue('some error')
		}
	}
)