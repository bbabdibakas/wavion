import { EntityState } from "@reduxjs/toolkit"
import { Post } from "entities/Post"

export interface PostPageState extends EntityState<Post, string> {
    isLoading: boolean
    isErrorMessage?: string
}