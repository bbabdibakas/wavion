import { routePath } from "shared/config/routeConfig/routeConfig"
import MainPageIcon from 'shared/assets/icons/MainPage.svg'
import MainPageActiveIcon from 'shared/assets/icons/MainPageActive.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfilePage.svg'
import ProfilePageActiveIcon from 'shared/assets/icons/ProfilePageActive.svg'

export interface SidebarItemType {
    path: string
    label: string
    Icon: React.FC<React.SVGProps<SVGElement>>
    ActiveIcon: React.FC<React.SVGProps<SVGElement>>
    isRequiredAuth?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: routePath.main,
        label: 'Home',
        Icon: MainPageIcon,
        ActiveIcon: MainPageActiveIcon,
        isRequiredAuth: false
    },
    {
        path: `${routePath.profile}1`,
        label: 'Profile',
        Icon: ProfilePageIcon,
        ActiveIcon: ProfilePageActiveIcon,
        isRequiredAuth: true
    },
    {
        path: `${routePath.post}1`,
        label: 'Post',
        Icon: ProfilePageIcon,
        ActiveIcon: ProfilePageActiveIcon,
        isRequiredAuth: true
    }
]