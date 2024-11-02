import React from 'react';
import GoogleAuthLogin from '../auth/googleAuthLogin';
import LinkedInLogin from '../auth/linkedInLogin';
import '../css/auth.css';

const SimpleLogin = ({ locationState, closeModal }) => (
  <div className="modal-body">
    <GoogleAuthLogin locationState={locationState} closeModal={closeModal} />
    <br />
    <LinkedInLogin />
  </div>
);

export default SimpleLogin;
