import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from './gu (3).jpg'
import { Container } from 'react-bootstrap';
import emma from './gu (2).jpg';
import zay from './mot4.webp';
import "../App.css";

const Cards = () => {
  return (
    <>
    <h2 className='text-center text-danger fw-bold '> ---    OUR CELEBRITIES     ---</h2><br></br>
    <div className='d-md-flex align-item-center ms-5' >
       
      <Container className='align-item-center'>
      <Card  className='d-block border-light text-center  align-item-center ps-5' style={{width:'350px'}}>
        <Card.Img variant="top" src={emma} className='img rounded-circle ' style={{height:'300px', width:'280px'}}/>
        <Card.Body>
         <Card.Title>EMMA MYER</Card.Title>
         <Card.Text>
          She is our brand ambasaddor, she is  famous celebrity customer
        </Card.Text>
        <Button variant="danger">Check Out</Button>
       </Card.Body>
      </Card>

      </Container> <br></br>
      <Container className='align-item-center'>
      <Card  className='d-block border-light text-center  align-item-center' style={{width:'350px'}}>
        <Card.Img variant="top" src={zay} className='img rounded-circle ' style={{height:'300px', width:'280px'}}/>
        <Card.Body>
         <Card.Title>LORD LONELYDEVIL</Card.Title>
         <Card.Text>
          He is Devil King,he also our Customer
        </Card.Text>
        <Button variant="danger">Check Out</Button>
       </Card.Body>
      </Card>

      </Container>
      <br></br>
      <Container className='align-item-center'>
      <Card  className='d-block border-light text-center  align-item-center' style={{width:'350px'}}>
        <Card.Img variant="top" src={card1} className='img rounded-circle ' style={{height:'300px', width:'280px'}}/>
        <Card.Body>
         <Card.Title>DEADPOOL</Card.Title>
         <Card.Text>
          He is famous holltwood actor,he also our one of the ambassaddor
        </Card.Text>
        <Button variant="danger">Check Out</Button>
       </Card.Body>
      </Card>

      </Container> <br></br>
      
     
       
     
    </div>
    </>
   
  )
}

export default Cards