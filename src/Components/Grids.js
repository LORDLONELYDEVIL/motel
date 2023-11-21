import React from 'react';
import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';

const Grids = () => {
  return (
    <Container>
         <Row>
        <Col xs={6}></Col>
        <Col xs={6}></Col>
        </Row>
    </Container>
  )
}

export default Grids