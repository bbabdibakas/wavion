import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileState } from '../types/profile'
import { fetchProfileDataById } from '../services/fetchProfileData/fetchProfileDataById'

const initialState: ProfileState = {
	isLoading: false
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileDataById.pending, (state) => {
				state.isLoading = true
				state.isErrorMessage = undefined
			})
			.addCase(fetchProfileDataById.rejected, (state, action) => {
				state.isLoading = false
				state.isErrorMessage = action.payload as string
			})
			.addCase(fetchProfileDataById.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.isErrorMessage = undefined
				state.profileData = action.payload
			})
	}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice