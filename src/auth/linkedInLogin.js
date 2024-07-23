import React from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

const LinkedInLogin = () => {
  

  return (
    <div>
       <LinkedIn
      clientId="77yebu8fig795i"
      redirectUri='http://localhost:3000'
      scope='profile'
      onSuccess={(code) => {
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '100%', cursor: 'pointer' }}
        />
      )}
    </LinkedIn>
    </div>
  );
};

export default LinkedInLogin;
