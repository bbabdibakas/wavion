import { authFormActions, authFormReducer } from './authFormSlice'
import { AuthFormState } from '../types/authForm'

describe('authFormSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<AuthFormState> = { username: '123' }
        expect(authFormReducer(state as AuthFormState, authFormActions.onSetUsername('1234'))).toEqual({ username: '1234' })
    })

    test('test set password', () => {
        const state: DeepPartial<AuthFormState> = { password: '123' }
        expect(authFormReducer(state as AuthFormState, authFormActions.onSetPassword('1234'))).toEqual({ password: '1234' })
    })

    test('test set state clear', () => {
        const state: DeepPartial<AuthFormState> = { username: '123', password: '123' }
        expect(authFormReducer(state as AuthFormState, authFormActions.onClearState())).toEqual({ username: '', password: '' })
    })
})