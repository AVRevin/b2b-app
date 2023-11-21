import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ButtonClear from '../../UI/Buttons/ButtonClear'
import ButtonBlue from '../../UI/Buttons/ButtonBlue'



import Team from './../../../assets/images/team.svg'
import Function from './../../../assets/images/functional.svg'
import Arrow from './../../../assets/images/arrow.svg'


const CardTarifPlan = (props) => {
  console.log(props.tariffList);
  return (
   <Card>
        <Container>
            <Row>

            </Row>
            <Row>
                <Col className='team'><Card.Img src={Team} alt="Team"/>Команда</Col>
                <Col><h5>Неограниченно пользователей</h5></Col>
                <Col className='functional'><Card.Img src={Function}/>Функционал</Col>
                <Col><h5>Ограниченный доступ</h5></Col>
            </Row>
        </Container>
        <Container>

        </Container>
   </Card>
  )
}

export default CardTarifPlan