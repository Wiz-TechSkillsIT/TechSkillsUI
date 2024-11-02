import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

const EnquireModal = ({ isOpen, onClose, subject }) => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert('reCAPTCHA is not ready');
      return;
    }

    try {
      const token = await executeRecaptcha('submit_form');
      console.log('reCAPTCHA token:', token);

      if (token) {
        setCaptchaVerified(true);

        // Call the email-sending API
        try {
          const response = await axios.post('http://localhost:5000/api/email/send-course-enquiry-email', {
            fromAddress: email,              // sender's email
            fromName: "TechSkillsIT User",    // generic name for user
            toAddress: "imtiyaz@techskillsit.com", // receiving address
            toName: "TechSkillsIT Support",   // name for receiver
            subject: subject,
            htmlContent: `<div><p>${query}</p></div>`, // user query in email body
          });

          if (response.status === 200) {
            setEmailSent(true); // Show success message
          }
        } catch (error) {
          console.error('Failed to send email:', error);
          alert('Failed to send email. Please try again.');
        }
      }
    } catch (error) {
      console.error('reCAPTCHA verification failed:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {emailSent ? (
          <div>
            <h2>Email Sent!</h2>
            <p>Expect a response within 1 working day.</p>
            <button onClick={onClose} style={submitButtonStyle}>Close</button>
          </div>
        ) : (
          <div>
            <h2>Send us your query</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '10px' }}>
                <label><strong>Subject:</strong></label>
                <input
                  type="text"
                  value={subject}
                  readOnly
                  style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label><strong>Your Email:</strong></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
              </div>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your query here..."
                rows="5"
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                required
              />

              <button type="submit" style={submitButtonStyle}>
                Send Email
              </button>
              <button type="button" onClick={onClose} style={cancelButtonStyle}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// Basic styles  
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
};

const submitButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#28A745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const cancelButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#DC3545',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default EnquireModal;
