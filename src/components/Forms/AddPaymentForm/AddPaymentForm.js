import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtomBlue from './../../UI/Buttons/ButtonBlue'


import './AddPaymentForm.css'

const AddPaymentForm = ({ active, setActive }) => {


  return (
    <div className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}>
      <Form onClick={(e) => e.stopPropagation()} className={active ? "form active" : "form"}>
      <Col style={{borderBottomColor:'red'}}><h3>Новый способ оплаты</h3></Col>
        <Form.Group className='mb3'>
          <Col><Form.Control placeholder='Номер карты' id="iconsPayment"/></Col>
          <Row style={{margin:'0'}}>
            <Col><Form.Control placeholder='Срок действия карты'/></Col>
            <Col><Form.Control placeholder='CVC' id="cvc"/></Col>
          </Row>
          <Col><Form.Control placeholder='Владелец карты'></Form.Control></Col>
          <Col><Form.Control type="Email" placeholder='Email'></Form.Control></Col>
        </Form.Group>
        <Form.Group>
        <Col><ButtomBlue style={{float: 'right'}}>Добавить карту</ButtomBlue></Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddPaymentForm