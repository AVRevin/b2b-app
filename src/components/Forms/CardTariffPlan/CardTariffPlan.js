import React from 'react'
import './CardTariffPlan.css'

import Team from './../../../assets/images/team.svg'
import Function from './../../../assets/images/functional.svg'
import Arrow from './../../../assets/images/arrow.svg'


const CardTariffPlan = (props) => {
  return (
    <div className='cardTariffPlan'>
      <div className='upperPartCard'>
        <div className='upperInformation'>
          <div className='upperInformationName'>
            <div className='upperInformationNameStatus'>
              <div className={props.tariffList.status ? 'nameOfPlanBlue' : 'nameOfPlanBlack'}>{props.tariffList.nameOfPlan}</div>
              {props.tariffList.status ? <div className='status'>Активный</div> : null}
            </div>
            <div className='description'>{props.tariffList.description}</div>
          </div>
          <div className='price'>
            <div className='priceAmount'>{props.tariffList.price} ₽</div>
            <div className='priceMonth'>/ месяц</div>
          </div>
        </div>
        <div className='lowerInformation'>
          <div className='lowerInformationMore'>
          <img src={Team} alt="Команда" />
            <div className='team'>
              Команда
            </div>
            <div className='labelTeam'>
              Неограниченно пользователей
            </div>
            <img src={Function} alt="Функционал" />
            <div className='functional'>
              Функционал
            </div>
            <div className='labelFunctional'>
              Ограниченный доступ
            </div>
          </div>
        </div>
      </div>
      <div className='lowerPartCard'>
        <button className='btnAboutPlan'>Больше о плане <img src={Arrow} alt='Arrow'/></button>
        <button className='btnAddUser'>Добавить пользователей</button>
      </div>
    </div>
  )
}

export default CardTariffPlan