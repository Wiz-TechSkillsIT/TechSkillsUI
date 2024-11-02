import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
 import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/action/user';
import { jwtDecode } from 'jwt-decode';

const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com';

function GoogleAuthLogin({ locationState, closeModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSuccess = (response) => {
    try {
      const decodedToken = jwtDecode(response.credential);
      const { name, email, picture, given_name } = decodedToken;

      const userObj = {
        name,
        email,
        picture,
        fname: given_name,
      };

      dispatch(addUser(userObj));
      localStorage.setItem('user', JSON.stringify(userObj));

      // Close the modal after login
      closeModal();

      // Redirect to the page the user tried to visit or default to the home page
      const redirectTo = locationState?.pathname || '/';
      const searchParams = locationState?.search || '';

      navigate(redirectTo + searchParams, { replace: true });
    } catch (error) {
      console.error('Error decoding token:', error);
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
