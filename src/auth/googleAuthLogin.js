import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/action/user';
import { jwtDecode } from 'jwt-decode'; // Corrected import
import axios from 'axios';

const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com';

function GoogleAuthLogin({ closeModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSuccess = async (response) => {
    try {
      const decodedToken = jwtDecode(response.credential);
      const { name, email, picture, given_name } = decodedToken;

      const userObj = {
        name,
        email,
        picture,
        fname: given_name,
      };

      await axios.post('http://localhost:5005/api/user/addUser', {
        name,
        email,
      });

      dispatch(addUser(userObj));
      localStorage.setItem('user', JSON.stringify(userObj));

      //closeModal();

      // Redirect to the home page
      navigate('/');
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
