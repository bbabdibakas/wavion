import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Profile } from '../../types/profile'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const fetchProfileDataById = createAsyncThunk<Profile, string, { rejectValue: string }>(
    'profile/fetchProfileDataById',
    async (profileId, thunkApi) => {
        const { rejectWithValue } = thunkApi

        try {
            const response = await axios.get<Profile>(`http://localhost:8000/profiles/${profileId}`, {
                headers: {
                    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
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