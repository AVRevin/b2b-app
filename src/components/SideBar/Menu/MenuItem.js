import React from 'react'

import './MenuItem.css'

import Content1 from '../../../assets/images/content1.svg'
import Content2 from '../../../assets/images/content2.svg'
import Content3 from '../../../assets/images/content3.svg'

const MenuItem = () => {
  return (
    <div className="menuitem_list">
        <img className="menuitem" src={Content1} alt={Content1}/>
        <img className="menuitem" src={Content2} alt={Content2}/>
        <img className="menuitem" src={Content3} alt={Content3}/>
    </div>
  )
}

export default MenuItem