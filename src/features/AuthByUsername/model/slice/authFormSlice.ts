import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormState } from '../types/AuthFormState';
import { authByUsername } from '../services/authByUsername';

const initialState: AuthFormState = {
    username: '',
    password: '',
};

export const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.errorMessage = undefined;
                state.isLoading = true;
            })
            .addCase(authByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            });
    },
});

export const { actions: authFormActions } = authFormSlice;
export const { reducer: authFormReducer } = authFormSlice;
