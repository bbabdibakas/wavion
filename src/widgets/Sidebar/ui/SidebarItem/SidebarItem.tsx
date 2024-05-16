import { AppLink } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/types/item'
import cls from './SidebarItem.module.scss'
import { useSelector } from 'react-redux'
import { getUserData } from 'entities/User'

interface SidebarItemProps {
    location: string
    item: SidebarItemType
}

export const SidebarItem = (props: SidebarItemProps) => {
	const {
		location,
		item
	} = props

	const auth = useSelector(getUserData)
    
	if (item.isRequiredAuth && !auth) {
		return null
	}
    
	return (
		<AppLink to={item.path} className={cls.SidebarItem}>
			{location === item.path ? <item.ActiveIcon className="icon" /> : <item.Icon className="icon" />}
			<div className={cls.label}>
				{item.label}
			</div>
		</AppLink>
	)
}