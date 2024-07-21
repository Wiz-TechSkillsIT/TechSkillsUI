 import { useState } from 'react';
import '../css/auth.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {addUser} from '../store/action/user';

const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com';  
const Auth = () =>{
   const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const handleLoginSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
     const { name, email,picture,given_name } = decodedToken;
    
    let userObj = {
      name: name,
      email : email,
      picture: picture,
      fname: given_name
    }
    dispatch(addUser(userObj))
      navigate('/')
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failure:', error);
    // Handle login failure
  };
    return (
      <GoogleOAuthProvider clientId={clientId}>            
               <div className='card_login'>
                  <GoogleLogin
                      onSuccess={handleLoginSuccess}
                      onError={handleLoginFailure}
                  />
            {/** 
             * <div id="facebook"><i class="pi pi-google" style={{ fontSize: '6.5rem',color: '#00FF00' }}></i>
                        <div id="connect">Login with Google</div>
                    </div>
                     <div id="facebook"><i class="pi pi-linkedin" style={{ fontSize: '6.5rem',color: '#ffffff' }}></i>
                    <div id="connect">Login with LinkedIn</div></div>
               </div>
                </div>
             * 
             */}
                  </div>
             </GoogleOAuthProvider>   
      )
}
export default Auth; 
