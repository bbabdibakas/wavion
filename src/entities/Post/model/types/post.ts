import { Profile } from 'entities/Profile/model/types/profile'

export interface Post {
    id: string
    paragraph: string
    profile: Profile
    postId?: string
}

export interface PostState {
    postData?: Post
    isLoading: boolean
    isErrorMessage?: string
}