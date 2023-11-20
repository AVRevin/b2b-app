import React from 'react'
import MenuItem from './MenuItem'

import './Menu.css'

import Logo from '../../../assets/images/logo.svg'

const Menu = () => {
  return (
    <div className='menu'>
        <img src={Logo} alt="Logo"/>
        <MenuItem/> 
    </div>
  )
}

export default Menu