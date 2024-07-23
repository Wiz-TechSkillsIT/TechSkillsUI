
 import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {addUser} from '../store/action/user';

const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com';  

 function GoogleAuthLogin(){
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

    return(
        <div>
            <GoogleOAuthProvider clientId={clientId}>            
             <GoogleLogin
                      onSuccess={handleLoginSuccess}
                      onError={handleLoginFailure}
                  />
          </GoogleOAuthProvider> 
        </div>
        
    )
}

export default GoogleAuthLogin;