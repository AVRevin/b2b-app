import React from 'react'
import Navbar from './Navbar/Navbar'
import Languages from './pages/Settings/Languages'
import Notices from './pages/Settings/Notices'
import Profile from './pages/Settings/Profile'
import TariffPlan from './pages/Settings/TariffPlan'
import Users from './pages/Settings/Users'

import iconQuestion from '../../assets/images/iconQuestion.svg'


import './Main.css'

const Main = (props) => {
   
    let component
    switch (window.location.pathname) {
        case "/":
            component = <TariffPlan tariffList = {props.tariffList[0]}/>
            break;
        case "/languages":
            component = <Languages />
            break;
        case "/notices":
            component = <Notices />
            break;
        case "/profile":
            component = <Profile />
            break;
        case "/tariffplan":
            component = <TariffPlan tariffList = {props.tariffList[0]}/>
            break;
        case "/users":
            component = <Users />
            break;
        default:
            break;
    }
    return (
        <div className='main'>
            <div className='container-form'>
                <div className='labelSettings'>
                    Настройки
                </div>
                <form className='form'>
                    <input className='search' type="text"  placeholder='Поиск по настройкам'/>         
                </form>
                <button className='btnAskQuestions'>
                    Задайте вопрос
                    <img alt="Question" src={iconQuestion} />
                </button>
            </div>
            <Navbar mycomponent={component} />
            {component}
        </div>
    )
}

export default Main