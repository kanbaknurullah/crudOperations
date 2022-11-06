import './sidebar.css';
import user from '../../assets/images/user.png';
import logout from '../../assets/images/logout.png';
import SidebarNavigation from './sidebar-navigation/sidebar-navigation';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className='sidebar_header'>
                <div className='vertical_line'/>
                <div className='sidebar_title'>
                    <p>CRUD OPERATIONS</p>
                </div>
            </div>
            <div className='sidebar_user'>
                <img src={user} alt='logo'/>
                <p>Ali Veli</p>
                <p>Admin</p>
            </div>
            <SidebarNavigation />
            <div className='logout' onClick={()=>{}}>
                <p>Logout</p>
                <img src={logout} alt='icon'/>
            </div>
        </div>
    )
}
export default Sidebar;