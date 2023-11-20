import React from 'react'

import Email from '../../../assets/images/email.svg'
import Setting from '../../../assets/images/setting.svg'

import './ProfileItem.css'

const ProfileItem = () => {
  return (
    <div className='profileitem_list'>
        <img src={Email} alt='Email' className='profileitem'/>
        <img src={Setting} alt='Setting' className='profileitem'/>
    </div>
  )
}

export default ProfileItem