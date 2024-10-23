import { useSelector } from 'react-redux'
import cls from './Sidebar.module.scss'
import { useLocation } from 'react-router-dom'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = () => {
    const location = useLocation()

    const links = useSelector(getSidebarItems)

    return (
        <div className={cls.Sidebar}>
            {links.map((item)=>(
                <SidebarItem 
                    item={item}
                    location={location.pathname}
                />
            ))}        
        </div>
    )
}

export default Sidebar