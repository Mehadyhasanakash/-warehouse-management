import { Button, Nav } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseHook';
import GoogleSignin from '../GoogleSignin/GoogleSignin';
import Helmat from '../Helmat/Helmat';
import { Link, useNavigate } from 'react-router-dom';

  
const Login = () => {
  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()



  if(user){
    navigate ('inventory/:inventoryId')
  }

  

    const hendalSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(name, password)
        e.target.reset()
        signInWithEmailAndPassword(name, password)
        
    }



    return (
      <div className=' hight'>
        <Helmat title='login'></Helmat>
            <Form onSubmit={hendalSubmit} className='w-50 mx-auto' >
                <h1 className='text-center text-success'>Login form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="name" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> <br /> <br />

        <Nav.Link as={Link} to="/register"><h3 className='text-danger'>please click on  Register page!!!</h3></Nav.Link>

        
      </Form>

      <GoogleSignin></GoogleSignin>

      </div>

      
    

    );
};

export default Login;