import React from 'react';
import Menu from './Menu/Menu';
import Profile from './Profile/Profile';

import './Sidebar.css'


const SideBar = () => {
    return(
        <div className='sidebar'>
            <Menu/>
            <Profile/>
        </div>
    )
}

export default SideBar