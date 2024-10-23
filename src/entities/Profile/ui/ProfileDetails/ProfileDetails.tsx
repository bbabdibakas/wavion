import { useSelector } from "react-redux"
import cls from './ProfileDetails.module.scss'
import { AppPageLoader } from "shared/ui/AppPageLoader/AppPageLoader"
import { getProfileErrorMessage } from "../../model/selectors/getProfileErrorMessage"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading"
import { getProfileData } from "../../model/selectors/getProfileData"
import { useEffect } from "react"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { fetchProfileData } from "../../model/services/fetchProfileData"
import { classNames } from "shared/lib/classNames/classNames"
import AppButton from "shared/ui/AppButton/AppButton"

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
    const errorMessage = useSelector(getProfileErrorMessage)

    let content

    useEffect(() => {
        dispatch(fetchProfileData(id))
    }, [])

    if (isLoading) {
        content = (
            <div className={classNames(cls.ProfileDetails, {}, [cls.isLoading, className])}>
                <AppPageLoader />
            </div>
        )
    } else if (errorMessage) {
        content = (
            <div className={classNames(cls.ProfileDetails, {}, [cls.isHasError, className])}>
                {errorMessage}
            </div>
        )
    } else (
        content = (
            <div className={cls.ProfileDetails}>
                <div className={cls.profile}>
                    <div className={cls.name}>
                        {profileData?.name}
                    </div>
                    <div className={cls.username}>
                        {'@' + profileData?.username}
                    </div>
                    <div className={cls.bio}>
                        {profileData?.bio}
                    </div>
                </div>
                <AppButton>
                    Edit profile
                </AppButton>
            </div>
        )
    )

    return content
}