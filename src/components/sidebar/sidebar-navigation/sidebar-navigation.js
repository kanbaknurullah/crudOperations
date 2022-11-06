import './sidebar-navigation.css';
import { SidebarNavigationData } from './sidebar-navigation-data';

const SidebarNavigation = () => {
    return(
        <div className="sidebar-navigation">
            <ul className='list-style'>
                {SidebarNavigationData.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className={index === 2 ? 'button' : 'item'}>
                                <img src={item.icon} alt='icon' className={item.imageClassName}/>
                                <p className={item.textClassName}>{item.title}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default SidebarNavigation;