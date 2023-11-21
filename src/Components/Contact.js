import React from 'react';
import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';


const Contact = () => {
  return (
    <>
     <Container fluid  className='p-5 bg-dark'>
      <Row>
        <Col> 

        <main className='text-light'>
          <h3>Contact Details  </h3><br></br>
          MotelName : MotelHell<br></br>
          Website : Motelhell.org<br></br>
          Email : Motelhell@gmail.comm<br></br>
          phone No:749740209758

        </main>
        

        </Col>
        <Col>
        <main className='text-light '>
        <h3>Owner Details  </h3><br></br>
          MotelName : MotelHell<br></br>
          Website : Motelhell.org<br></br>
          Email : Motelhell@gmail.comm<br></br>
          phone No:749740209758

        </main> </Col>
      </Row><br></br><br></br>

    </Container>
    <br></br><br></br>

    </>
   
  )
}

export default Contact