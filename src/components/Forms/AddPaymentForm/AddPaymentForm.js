import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtomBlue from './../../UI/Buttons/ButtonBlue'
import Card from 'react-bootstrap/Card'

 import iconMir from './../../../assets/images/iconMir.svg'
// import iconMastercard from './../../../assets/images/iconMastercard.svg'
// import iconPaypal from './../../../assets/images/iconPaypal.svg'
// import iconVisa from './../../../assets/images/iconVisa.svg'

import './AddPaymentForm.css'

const AddPaymentForm = ({ active, setActive }) => {


  return (
    <div className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}>
      <Form onClick={(e) => e.stopPropagation()} className={active ? "form active" : "form"}>
      <Col><h3>Новый способ оплаты</h3></Col>
        <Form.Group className='mb3'>
          <Col><Form.Control placeholder='Номер карты' src= {iconMir}>
              {/* <img src={iconMir}/> */}
              {/* <img src={iconVisa}/>
              <img src={iconMastercard}/>
              <img src={iconPaypal}/> */}
          </Form.Control></Col>
          <Row style={{margin:'0'}}>
            <Col><Form.Control placeholder='Срок действия карты' /></Col>
            <Col><Form.Control placeholder='CVC' /></Col>
          </Row>
          <Col><Form.Control placeholder='Владелец карты'></Form.Control></Col>
          <Col><Form.Control placeholder='Email'></Form.Control></Col>
        </Form.Group>
        <Form.Group>
        <Col><ButtomBlue>Добавить карту</ButtomBlue></Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddPaymentForm