import { CounterState } from 'entities/Counter'
import { ProfileState } from 'entities/Profile'
import { UserState } from 'entities/User'
import { AuthFormState } from 'features/AuthByUsername'

export interface RootState {
    counter: CounterState
    user: UserState
    profile?: ProfileState
    authForm?: AuthFormState
}

export type RootStateKey = keyof RootState