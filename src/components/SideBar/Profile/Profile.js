import React from 'react'
import ProfileItem from './ProfileItem'

import './Profile.css'

import Avatar from '../../../assets/images/avatar.svg'


const Profile = () => {
    return (
        <div className='profile'>
            <ProfileItem/>
            <img src={Avatar} alt='Avatar' className='avatar' />
        </div>
    )
}
export default Profile
