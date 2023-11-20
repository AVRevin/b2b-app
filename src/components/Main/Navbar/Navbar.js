import React from 'react'

import './Navbar.css'


const Navbar = (props) => {

  let iCheckProfile = false;
  let iCheckLanguages = false;
  let iCheckNotice = false;
  let iCheckTariffplan = true;
  let iCheckUsers = false;

  if(props.mycomponent.type.name==="Profile")
  { 
    iCheckProfile=true; 
    iCheckLanguages = false;
    iCheckNotice = false;
    iCheckTariffplan = false;
    iCheckUsers = false;
  };
  if(props.mycomponent.type.name==="Languages")
  { 
    iCheckProfile=false; 
    iCheckLanguages = true;
    iCheckNotice = false;
    iCheckTariffplan = false;
    iCheckUsers = false;
  };
  if(props.mycomponent.type.name==="Notices")
  { 
    iCheckProfile=false; 
    iCheckLanguages = false;
    iCheckNotice = true;
    iCheckTariffplan = false;
    iCheckUsers = false;
  };
  if(props.mycomponent.type.name==="Tariffplan")
  { 
    iCheckProfile=false; 
    iCheckLanguages = false;
    iCheckNotice = false;
    iCheckTariffplan = true;
    iCheckUsers = false;
  };
  if(props.mycomponent.type.name==="Users")
  { 
    iCheckProfile=false; 
    iCheckLanguages = false;
    iCheckNotice = false;
    iCheckTariffplan = false;
    iCheckUsers = true;
  };
  

  return (
    <nav className='nav'>
      <ul>
        <li><a className={iCheckProfile?"navbarItemActive":"navbarItemInActive"} value="profile" href="/profile">Профиль</a></li>
        <li><a className={iCheckLanguages?"navbarItemActive":"navbarItemInActive"} value="languages" href="/languages">Языки</a></li>
        <li><a className={iCheckNotice?"navbarItemActive":"navbarItemInActive"} value="notices" href="/notices">Уведомления</a></li>
        <li><a className={iCheckTariffplan?"navbarItemActive":"navbarItemInActive"} value="tariffplan" href="/tariffplan">Тарифный план</a></li>
        <li><a className={iCheckUsers?"navbarItemActive":"navbarItemInActive"} value="users" href="/users">Пользователи</a></li>
      </ul>
    </nav>
  )
}
export default Navbar