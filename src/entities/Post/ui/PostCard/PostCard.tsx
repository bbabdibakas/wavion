import { classNames } from "shared/lib/classNames/classNames"
import { Post } from "../../model/types/post"
import cls from './PostCard.module.scss'
import { AppLink } from "shared/ui/AppLink/AppLink"

interface PostCardProps {
    postData: Post
    className?: string
}

export const PostCard = (props: PostCardProps) => {
    const {
        postData,
        className,
    } = props

    return (
        <AppLink to={`/post/${postData.id}`} className={classNames(cls.PostCard, [className])}>
            <div className={cls.avatarWrapper}>
                <div className={cls.avatar} />
            </div>
            <div className={cls.post}>
                <div className={cls.profile}>
                    <div className={cls.name}>
                        {postData?.profile?.name}
                    </div>
                    <div className={cls.username}>
                        @{postData?.profile?.username}
                    </div>
                </div>
                <div className={cls.paragraph}>
                    {postData?.paragraph}
                </div>
            </div>
        </AppLink>
    )
}