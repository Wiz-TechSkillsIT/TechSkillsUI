import React from 'react';
 
const FeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Close modal if user clicks outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Call the close function if clicking outside
    }
  };

  return (
    <div style={overlayStyle} onClick={handleOverlayClick}>
      <div style={modalStyle}>
        <h2 style={headerStyle}>Course Fee Information</h2>

        <div style={feeCardStyle}>
          <h3 style={levelStyle}>Level 1 - Console based App with Java Programming</h3>
          <p style={feeStyle}>Free -  Recorded Videos</p>
        </div>

        <div style={feeCardStyle}>
          <h3 style={levelStyle}>Level 2: Spring Boot REST API Development</h3>
          <p style={feeStyle}>Rs. 4500</p>
          <p style={descriptionStyle}>
            This is a completely hands-on online Zoom-based course. The total duration is 25-30 hours of live training, and the course lasts 4 to 6 weeks. Sessions are conducted after 6:30 PM on weekdays and in the morning on weekends.
            <br />
            Please reach out for details regarding the start date and schedule via email, WhatsApp (click on buttons on the site), or through our global chat feature.
            
          </p>
          <button style={enrollButtonStyle}>Enroll in Level 2</button>
        </div>

        <div style={feeCardStyle}>
          <h3 style={levelStyle}>Level 3: Advanced Spring Boot & AWS with Microservices</h3>
          <p style={feeStyle}>Rs. 6500</p>
          <p style={descriptionStyle}>
            This course builds on Level 2 and focuses on advanced backend development and AWS integration. The total duration is 30-35 hours of live Zoom training, conducted over 5 to 7 weeks. Sessions are also held after 6:30 PM on weekdays and on weekends in the morning.
            <br />
            For more details on the start date and schedule, please contact us via email, WhatsApp, or the global chat feature on our site.
            
          </p>
          <button style={enrollButtonStyle}>Enroll in Level 3</button>
        </div>

        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
};

// Styles
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
  padding: '30px',
  borderRadius: '8px',
  width: '80vw', // Increased width to fit the content
  maxWidth: '1200px', // Maximum width
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  textAlign: 'center',
  fontFamily: "'Roboto', sans-serif",
  overflowY: 'auto', // Allow scrolling if content overflows
  maxHeight: '90vh', // Prevent overflow beyond screen height
};

const headerStyle = {
  fontSize: '28px',
  marginBottom: '20px',
  color: '#333',
};

const feeCardStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  marginBottom: '15px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  textAlign: 'left', // Align text to the left for better readability
};

const levelStyle = {
  fontSize: '24px',
  color: '#234440',
};

const feeStyle = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#28A745',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '16px',
  color: '#555',
  textAlign: 'left',
  marginTop: '10px',
  lineHeight: '1.6',
};

const enrollButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#28A745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '15px',
};

const closeButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default FeeModal;
