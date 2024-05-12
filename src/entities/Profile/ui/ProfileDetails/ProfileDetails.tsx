import { classNames } from "shared/lib/classNames/classNames"
import { profileReducer } from "../../model/slice/profileSlice"
import { DynamicModuleLoader, ReducersList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader"
import cls from './ProfileDetails.module.scss'
import { useSelector } from "react-redux"
import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader"
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading"
import { getProfileIsErrorMessage } from "../../model/selectors/getProfileIsErrorMessage/getProfileIsErrorMessage"
import { useEffect } from "react"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { fetchProfileDataById } from "../../model/services/fetchProfileData/fetchProfileDataById"

const initialReducers: ReducersList = {
    profile: profileReducer
}

interface ProfileDetailsProps {
    id: string
    className?: string
}

export const ProfileDetails = (props: ProfileDetailsProps) => {
    const {
        id,
        className
    } = props

    const dispatch = useAppDispatch()
    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const isErrorMessage = useSelector(getProfileIsErrorMessage)

    let content

    useEffect(() => {
        dispatch(fetchProfileDataById(id))
    }, [dispatch, id])

    if (isLoading) {
        content = (
            <div className={classNames(cls.ProfileDetails, [className, cls.isLoading])}>
                <AppPageLoader />
            </div>
        )
    } else if (isErrorMessage) {
        content = (
            <div className={classNames(cls.ProfileDetails, [className, cls.isErrorMessage])}>
                {isErrorMessage}
            </div>
        )
    } else {
        content = (
            <div className={classNames(cls.ProfileDetails, [className])}>
                <div className={cls.cover} />
                <div className={cls.profile}>
                    <div className={cls.avatar} />
                    <div className={cls.info}>
                        <div className={cls.name}>
                            {profileData?.name}
                        </div>
                        <div className={cls.username}>
                            {profileData?.username}
                        </div>
                        <div className={cls.bio}>
                            {profileData?.bio}
                        </div>
                    </div>
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