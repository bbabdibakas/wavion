import { AxiosInstance } from 'axios'
import { CounterState } from 'entities/Counter'
import { PostState } from 'entities/Post'
import { ProfileState } from 'entities/Profile'
import { UserState } from 'entities/User'
import { AddReplyFormState } from 'features/AddReplyByPostId'
import { AuthFormState } from 'features/AuthByUsername'
import { PostPageState } from 'pages/PostPage'

export interface RootState {
    counter: CounterState
    user: UserState
    profile?: ProfileState
    post?: PostState
    postPage?: PostPageState
    authForm?: AuthFormState
    addReplyForm?: AddReplyFormState
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