import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/FirebaseHook';
import googlelogo from '../../image/googlelogo.png'


const GoogleSignin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if(user){
        
        navigate('/inventory')
    }

    return (
        
        <div className='row d-flex justify-content-center'>
            <div className='col col-md-4 border-top w-25'>
                
            </div>
            <div className='col col-md-4 d-grid justify-content-center'>
                <h3 className='text-danger text-center '>or</h3>
                <br /> 
                <img onClick={() => signInWithGoogle()} src={googlelogo} width="250px" alt="" />
                        
            </div>
            <div className='col col-md-4 border-top w-25'>
                </div>
           
            </div>
    );
};

export default GoogleSignin;