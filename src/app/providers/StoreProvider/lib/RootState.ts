import { CounterState } from 'entities/Counter'
import { AuthFormState } from 'features/AuthByUsername'

export interface RootState {
    counter: CounterState
    authForm: AuthFormState
}