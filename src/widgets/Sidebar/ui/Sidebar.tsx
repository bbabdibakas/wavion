import { Link, useLocation } from "react-router-dom"
import cls from './Sidebar.module.scss'
import { AppLink } from "shared/ui/AppLink/AppLink"
import MainPageIcon from "shared/assets/icons/MainPage.svg"
import MainPageActiveIcon from "shared/assets/icons/MainPageActive.svg"
import ProfilePageIcon from "shared/assets/icons/ProfilePage.svg"
import ProfilePageActiveIcon from "shared/assets/icons/ProfilePageActive.svg"

export const Sidebar = () => {
    const location = useLocation()
    return (
        <div className={cls.Sidebar}>
            <AppLink to={'/'} className={cls.link}>
                {location.pathname === '/' ? <MainPageActiveIcon className="icon" /> : <MainPageIcon className="icon" />}
                <div className={cls.label}>
                    Home
                </div>
            </AppLink>
            <AppLink to={'/profile'} className={cls.link}>
                {location.pathname === '/profile' ? <ProfilePageActiveIcon className="icon" /> : <ProfilePageIcon className="icon" />}
                <div className={cls.label}>
                    Profile
                </div>
            </AppLink>
        </div>
    )
}