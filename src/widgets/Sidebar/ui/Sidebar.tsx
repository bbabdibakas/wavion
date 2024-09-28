import AppLink from 'shared/ui/AppLink/AppLink'
import cls from './Sidebar.module.scss'
import { useLocation } from 'react-router-dom'
import MainPageActiveIcon from 'shared/assets/MainIconActive.svg'
import MainPageIcon from 'shared/assets/MainIcon.svg'
import ProfilePageActiveIcon from 'shared/assets/ProfileIconActive.svg'
import ProfilePageIcon from 'shared/assets/ProfileIcon.svg'
import { routePath } from 'app/providers/AppRouter/lib/routeConfig'

const Sidebar = () => {
    const location = useLocation()

    return (
        <div className={cls.Sidebar}>
            <div className={cls.links}>
                <AppLink to={routePath.main} className={cls.link}>
                    {location.pathname === routePath.main ? <MainPageActiveIcon /> : <MainPageIcon />}
                    <div className={cls.label}>
                        Main
                    </div>
                </AppLink>
                <AppLink to={routePath.profile} className={cls.link}>
                    {location.pathname === routePath.profile ? <ProfilePageActiveIcon /> : <ProfilePageIcon />}
                    <div className={cls.label}>
                        Profile
                    </div>
                </AppLink>
            </div>
        </div>
    )
}

export default Sidebar