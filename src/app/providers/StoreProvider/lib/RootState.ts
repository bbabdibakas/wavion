import { AxiosInstance } from 'axios'
import { CounterState } from 'entities/Counter'
import { PostState } from 'entities/Post'
import { ProfileState } from 'entities/Profile'
import { UserState } from 'entities/User'
import { AuthFormState } from 'features/AuthByUsername'

export interface RootState {
    counter: CounterState
    user: UserState
    profile?: ProfileState
    post?: PostState
    authForm?: AuthFormState
}

export type RootStateKey = keyof RootState

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: RootState
}