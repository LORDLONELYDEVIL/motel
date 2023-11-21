import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-scroll';

import '../App.css';

const Navb = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-danger">
      <Container fluid>
        <Navbar.Brand href="#home"> <span style={{fontWeight:'bold'}} className='fs-3  text-dark'>MOTEL</span> <span style={{fontWeight:'bold'}} className='fs-3 text-light '>HELL </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end me-5 pe-50'>
          <Nav className="me-end ">
            
            <Nav.Link href="#" className='fw-bold lead ps-4 pe-4'><Link to="Cont">SERVICE</Link></Nav.Link>
            <Nav.Link href="#link" className='fw-bold lead ps-4 pe-3'><Link to="Register">REGISTER</Link></Nav.Link>
            <Nav.Link href="#link" className='fw-bold lead ps-4 pe-3'><Link to="Contact">CONTACT</Link></Nav.Link>
            
            
            <NavDropdown title="PAGES" id="basic-nav-dropdown"  className='fw-bold'>
              
              <NavDropdown.Item href="#action/3.2" className='dpd'>
              <Link to="Cont">ABOUT</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='dpd'><Link to="Cont">OUR TEAM</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='dpd'><Link to="Contact">CONTACT</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='dpd'><Link to="Cards">SERVICE</Link></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navb