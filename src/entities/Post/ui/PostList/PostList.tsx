import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader"
import { Post } from "../../model/types/post"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostList.module.scss'
import { PostCard } from "../PostCard/PostCard"

interface PostListProps {
    posts: Post[]
    isLoading: boolean
    isErrorMessage?: string
    className?: string
}

export const PostList = (props: PostListProps) => {
    const {
        posts,
        isLoading,
        isErrorMessage,
        className,
    } = props

    let content

    if (isLoading) {
        content = (
            <div className={classNames(cls.PostList, [cls.isLoading])}>
                <AppPageLoader />
            </div>
        )
    } else if (isErrorMessage) {
        content = (
            <div className={classNames(cls.PostList, [cls.isErrorMessage])}>
                {isErrorMessage}
            </div>
        )
    } else {
        content = (
            <div className={cls.PostList}>
                {
                    posts.map((post) => (
                        <PostCard postData={post} key={post.id} className={className} />
                    ))
                }
            </div>
        )
    }

    return content
}