import { Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Helmat from '../Helmat/Helmat';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseHook';

const Registration = () => {
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    
  const navigate = useNavigate()



  if(user){
    navigate ('inventory/:inventoryId')
  }

  

    const hendalSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password,name)
        e.target.reset()
        createUserWithEmailAndPassword(email, password, name)
        
    }
    return (
        <div className=' hight'>
        <Helmat title='Registration'></Helmat>
            <Form onSubmit={hendalSubmit} className='w-50 mx-auto' >
                <h1 className='text-center text-success'>Registration form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter name" required />
          <Form.Text className="text-muted">
            Please input your name.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> <br /> <br />

        <Nav.Link as={Link} to="/login"><h3 className='text-danger'> Already Register please  on  Register page!!!</h3></Nav.Link>

        
      </Form>



      </div>
    );
};

export default Registration;