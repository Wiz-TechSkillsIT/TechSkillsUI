import GoogleLogin from "react-google-login";


function Login(){
    const clientId = '308953406479-okjkf1a9506ndq8b4qlk761osghksjm6.apps.googleusercontent.com'; // Replace with your Google Client ID

    const handleSuccess = (response) => {
      console.log('Google Login Success:', response);
     };
  
    const handleFailure = (error) => {
      console.error('Google Login Error:', error);
      
    };
    return (
        <div className='login-container'>
            <div class="login-card">
            <h3 class="text-center mb-4">Login</h3>
            <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
    />

            <button class="btn btn-danger btn-google" onclick="googleLogin()">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" /> 
            </button>
            <button class="btn btn-primary btn-linkedin" onclick="linkedinLogin()">
            <img src="https://img.icons8.com/color/16/000000/linkedin.png" alt="LinkedIn icon" /> Login with LinkedIn
            </button>
      </div>
        </div>
        
    )
}

export default Login;