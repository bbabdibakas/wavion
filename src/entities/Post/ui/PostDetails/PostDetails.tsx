import { classNames } from "shared/lib/classNames/classNames"
import { DynamicModuleLoader, ReducersList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader"
import cls from './PostDetails.module.scss'
import { useSelector } from "react-redux"
import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader"
import { useEffect } from "react"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { postReducer } from "../../model/slice/postSlice"
import { getPostIsErrorMessage } from "../../model/selectors/getPostIsErrorMessage/getPostIsErrorMessage"
import { getPostData } from "../../model/selectors/getPostData/getPostData"
import { getPostIsLoading } from "../../model/selectors/getPostIsLoading/getPostIsLoading"
import { fetchPostDataById } from "../../model/services/fetchPostDataById"

const initialReducers: ReducersList = {
    post: postReducer
}

interface PostDetailsProps {
    id: string
    className?: string
}

export const PostDetails = (props: PostDetailsProps) => {
    const {
        id,
        className
    } = props

    const dispatch = useAppDispatch()
    const postData = useSelector(getPostData)
    const isLoading = useSelector(getPostIsLoading)
    const isErrorMessage = useSelector(getPostIsErrorMessage)

    let content

    useEffect(() => {
        dispatch(fetchPostDataById(id))
    }, [dispatch, id])

    if (isLoading) {
        content = (
            <div className={classNames(cls.PostDetails, [className, cls.isLoading])}>
                <AppPageLoader />
            </div>
        )
    } else if (isErrorMessage) {
        content = (
            <div className={classNames(cls.PostDetails, [className, cls.isErrorMessage])}>
                {isErrorMessage}
            </div>
        )
    } else {
        content = (
            <div className={classNames(cls.PostDetails, [className])}>
                <div className={cls.header}>
                    <div className={cls.avatar} />
                    <div className={cls.profile}>
                        <div className={cls.name}>
                            {postData?.profile?.name}
                        </div>
                        <div className={cls.username}>
                            @{postData?.profile?.username}
                        </div>
                    </div>
                </div>
                <div className={cls.paragraph}>
                    {postData?.paragraph}
                </div>
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    )
}