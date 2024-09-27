import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types/UserState';

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            localStorage.setItem('USER_LOCALSTORAGE_KEY', JSON.stringify(action.payload))
        },
        resetUserData: (state) => {
            state.userData = undefined;
            localStorage.removeItem('USER_LOCALSTORAGE_KEY')
        },
        initUserData: (state) => {
            const userData = localStorage.getItem('USER_LOCALSTORAGE_KEY')
            if (userData) {
                state.userData = JSON.parse(userData)
            }
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
