import React from 'react'
import SettingsPages from '../../../UI/SettingsPages'
import CardTariffPlan from '../../../Forms/CardTariffPlan/CardTariffPlan'
import CardPayment from '../../../Forms/CardPayment/CardPayment'


const TariffPlan = (props) => {

  return (
    <SettingsPages>
      <div style={{display:"flex"}}>
      <CardTariffPlan ytariffList={props.tariffList[0]}/>
        <CardTariffPlan tariffList={props.tariffList[1]}/>
      </div>
        
        <h3 style={{ marginTop: '3rem', marginBottom:'1.5rem'}}>Платежи и способы оплаты</h3>
        <CardPayment/>
      </SettingsPages>
  )
}

export default TariffPlan