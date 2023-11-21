import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtomBlue from './../../UI/Buttons/ButtonBlue'

const AddPaymentForm = () => {

  return (
    <Form>
        <h3>Новый способ оплаты</h3>
        <Form.Group>
            <Form.Control placeholder='Номер карты'></Form.Control>
            <Row>
                <Col><Form.Control placeholder='Срок действия карты'/></Col>
                <Col><Form.Control placeholder='CVC'/></Col>
            </Row>
            <Form.Control placeholder='Владелец карты'></Form.Control>
            <Form.Control placeholder='Email'></Form.Control>
        </Form.Group>
        <Form.Group>
            <ButtomBlue>Добавить карту</ButtomBlue>
        </Form.Group>
    </Form>
  )
}

export default AddPaymentForm