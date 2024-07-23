 import { useState } from 'react';
import '../css/auth.css'
 import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
 import Motto from '../components/motto';
 import GoogleAuthLogin from '../auth/googleAuthLogin';
 import LinkedInLogin from '../auth/linkedInLogin';
 const Auth = () =>{
   const navigate = useNavigate();

  const dispatch = useDispatch();
  
   
    return (
      <div className='card_login'>
        <div class="column-auth column-left">
             <Motto />
        </div>
        <div class="column-auth column-right"> 
           <GoogleAuthLogin />
           <br /><br />
           <LinkedInLogin />
        </div> 
        
        </div>
      )
}
export default Auth; 
