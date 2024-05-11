import { CounterState } from 'entities/Counter'
import { UserState } from 'entities/User'
import { AuthFormState } from 'features/AuthByUsername'

export interface RootState {
    counter: CounterState
    user: UserState
    authForm: AuthFormState
}