import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/FirebaseHook';
import { signOut } from 'firebase/auth';

import './Nav.css'
const Naver = () => {
  const [user] = useAuthState(auth);


    return (
        <Navbar sticky='top' bg="success" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home"><img className='img'  src="https://i.ibb.co/8XRpCC8/logo01.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className='text-light' as={Link} to="/about">About</Nav.Link>
              <Nav.Link className='text-light' as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link>
              {/* <Nav.Link className='text-light' as={Link} to="/inventory">Inventory</Nav.Link> */}
              {
              user? <Nav.Link className='text-light' as={Link} to="/manageInventories">ManageInventories</Nav.Link> : ''
            }
              {
              user? <Nav.Link className='text-light' as={Link} to="/addNewItem">AddNewItem</Nav.Link> : ''
            }
              {
              user? <Nav.Link className='text-light' as={Link} to="/my-item">MY_ITEM</Nav.Link> : ''
            }
              
           
              
            
            </Nav>
          </Navbar.Collapse>
        
          <Nav className="me-auto">
            

                {
                  user ?  
                  
                                    
                  <Nav.Link className='text-light'> {user.displayName}
                  <button onClick={()=> signOut(auth)} type="button" className="btn btn-danger">SignOUt</button>

                  
                  
                   </Nav.Link> : <Nav.Link className='text-light'>user</Nav.Link>
                }
             
              {/* <Nav.Link className='text-light' as={Link} to="/inventory">Inventory</Nav.Link> */}
              
            
            </Nav>
        </Container>
      </Navbar>
    );
};

export default Naver;