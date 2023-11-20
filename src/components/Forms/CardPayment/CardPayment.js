import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



import Mir from './../../../assets/images/mir.svg'
import MasterCard from './../../../assets/images/mastercard.svg'
import Visa from './../../../assets/images/visa.svg'
import UnionPay from './../../../assets/images/unionpay.svg'

import './CardPayment.css'


const CardPayment = () => {
    return (
        <Card>
            <Container>
                <Row className="row1">
                    <Col>Способ оплаты</Col>
                    <Col><Button>+ Добавить способ оплаты</Button></Col>
                </Row>
                <Row className="row2">
                    <Col><Card.Img src={Mir}/></Col>
                    <Col><Card.Img src={MasterCard}/></Col>
                    <Col><Card.Img src={Visa}/></Col>
                    <Col><Card.Img src={UnionPay}/></Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CardPayment