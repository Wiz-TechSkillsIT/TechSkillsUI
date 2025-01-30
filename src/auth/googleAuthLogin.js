import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/action/user';
import axios from 'axios';

const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com';

function GoogleAuthLogin({ closeModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSuccess = async (response) => {
    try {
      // Send the Google ID token to the backend
      const { credential: idToken } = response;

      const backendResponse = await axios.post('http://localhost:5005/api/auth/login', {
        idToken,
      });

      const { token, user } = backendResponse.data;
      
      // Save the user and token to localStorage
      dispatch(addUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
       
       
      navigate('/user-dashboard');
    } catch (error) {
      console.error('Error during login or API call:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failure:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
    </GoogleOAuthProvider>
  );
}

export default GoogleAuthLogin;
