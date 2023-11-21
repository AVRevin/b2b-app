import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ButtonClear from '../../UI/Buttons/ButtonClear'
import AddPaymentForm from '../AddPaymentForm/AddPaymentForm'


import Mir from './../../../assets/images/mir.svg'
import MasterCard from './../../../assets/images/mastercard.svg'
import Visa from './../../../assets/images/visa.svg'
import UnionPay from './../../../assets/images/unionpay.svg'

import './CardPayment.css'


const CardPayment = ({active, setActive}) => {

    return (
        <Card className={active ? "card active" : "card"} onClick={()=>setActive(false)}>
            <Container>
                <Row className="row1">
                    <Col><h4 style={{padding:'0.5rem'}}>Способ оплаты</h4></Col>
                    <Col><ButtonClear onClick={()=>setModalActive(true)}>+ Добавить способ оплаты</ButtonClear></Col>
                </Row>
                <Row className="row2" >
                    <Col><Card.Img src={Mir}/></Col>
                    <Col><Card.Img src={MasterCard}/></Col>
                    <Col><Card.Img src={Visa}/></Col>
                    <Col><Card.Img src={UnionPay}/></Col>
                </Row>
            </Container>
            <AddPaymentForm active={false} setActive={setModalActive}/>
        </Card>
    )
}

export default CardPayment