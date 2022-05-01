import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css'
const Naver = () => {
    return (
        <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home"><img className='img'  src="https://i.ibb.co/8XRpCC8/logo01.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Naver;