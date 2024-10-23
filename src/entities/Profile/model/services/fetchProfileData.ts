import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Profile } from '../types/ProfileState';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    { rejectValue: string }
>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await axios.get<Profile>(`http://localhost:8000/profiles/${profileId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
