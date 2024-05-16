import { useLocation } from 'react-router-dom'
import cls from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemsList } from 'widgets/Sidebar/model/types/item'

export const Sidebar = () => {
	const location = useLocation()
	return (
		<div className={cls.Sidebar} data-testid='sidebar'>
			{SidebarItemsList.map((item) => (
				<SidebarItem
					location={location.pathname}
					item={item}
					key={item.path}
				/>
			))}
		</div>
	)
}