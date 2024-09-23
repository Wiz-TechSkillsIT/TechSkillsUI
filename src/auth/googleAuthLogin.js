import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/action/user';

const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com';

function GoogleAuthLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLoginSuccess = (response) => {
    try {
      // Decode the token
      const decodedToken = jwtDecode(response.credential);
      const { name, email, picture, given_name } = decodedToken;

      console.log('Decoded token:', decodedToken);
      console.log('Location state:', location.state);

      // Create the user object
      const userObj = {
        name: name,
        email: email,
        picture: picture,
        fname: given_name,
      };

      // Dispatch the user object to Redux
      dispatch(addUser(userObj));

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(userObj));
      console.log('User added to Redux and localStorage:', userObj);

      // Redirect to the page the user tried to visit or default to '/dashboard'
      const redirectTo = location.state?.from?.pathname || '/'; // Default to dashboard
      const searchParams = location.state?.from?.search || '';
      console.log('Redirecting to:', redirectTo + searchParams);

      navigate(redirectTo + searchParams, { replace: true });
    } catch (error) {
      console.error('Error decoding token:', error);
      // Handle token decoding failure here
      handleLoginFailure(error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failure:', error);
    // Optionally, you can display an error message to the user or handle it accordingly
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default GoogleAuthLogin;
