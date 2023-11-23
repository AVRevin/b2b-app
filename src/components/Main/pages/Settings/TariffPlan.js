import React from 'react'
import SettingsPages from '../../../UI/SettingsPages'
import CardTariffPlan from '../../../Forms/CardTariffPlan/CardTariffPlan'
import CardPayment from '../../../Forms/CardPayment/CardPayment'


const TariffPlan = (props) => {

  return (
    <SettingsPages>
        <CardTariffPlan tariffList={props.tariffList}/>
        <h3 style={{ marginTop: '3rem', marginBottom:'1.5rem'}}>Платежи и способы оплаты</h3>
        <CardPayment/>
      </SettingsPages>
  )
}

export default TariffPlan